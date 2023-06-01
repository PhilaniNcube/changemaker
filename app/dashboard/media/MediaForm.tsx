"use client";
import { useState } from "react";
import { Database } from "@/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CalendarDaysIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSupabase } from "@/components/Auth/SupabaseProvider";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { Folder } from "../page";

const mediaSchema = z.object({
  organisation_id: z.string().uuid(),
  filename: z.string().min(3, {message: "Please enter a name for your image"}),
  folder: z.string()
});

type Media = z.infer<typeof mediaSchema>;

type Info = {
  access_mode: string;
  asset_id: string;
  batchId: string;
  bytes: number;
  created_at: string;
  etag: string;
  folder: string;
  format: string;
  height: number;
  id: string;
  original_filename: string;
  path: string;
  placeholder: false;
  public_id: string;
  resource_type: string;
  secure_url: string;
  signature: string;
  tags: any[];
  thumbnail_url: string;
  type: string;
  url: string;
  version: number;
  version_id: string;
  width: number;
};

type Result = {
  event: string
  info: Info
}

type Props = {
  organisations: Database["public"]["Tables"]["organisations"]["Row"][];
  folders: Folder[]
};

const MediaForm = ({  organisations, folders }: Props) => {
  const router = useRouter();
  const [image, setImage] = useState<Info | null>(null);
  const [folder, setFolder] = useState("");

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<Media>({
    resolver: zodResolver(mediaSchema),
  });

  const { supabase } = useSupabase();


  const onSubmit: SubmitHandler<Media> = async (data) => {
    console.log("submitting", data);

    if(image === null) {
      alert('Please upload a new image');
      return
    } else if (data.organisation_id === null) {
      alert('Please select organisation');
      return
    } else if(!data.filename ) {
      alert('Please give your image a name');
      return
    } else if(!data.folder) {
      alert('Please select a folder');
      return
    }
      toast("Please wait...", {
        type: "warning",
      });

const { data: mediaData, error } = await supabase
  .from("media")
  .insert([
    {
      src: image?.url,
      height: image?.height!,
      width: image?.width!,
      organisation_id: data.organisation_id,
      filename: data.filename,
      type: image?.format,
      public_id: image?.public_id,
      thumbnail_url: image?.thumbnail_url,
      folder: data.folder.toLowerCase(),
    },
  ]).select('*').single();

  if(error) {
    toast(`Could not save media: ${error.message}`,{
      type: "error"
    } )
    return
  } else if (mediaData) {
        toast(`Media was saved to database`, {
          type: "success",

        });
        console.log({image})
        router.push('/gallery')
  }


  };

  async function handleOnUpload(result: Result, widget: any) {
    console.log({ result, widget });
    if (result.event === "success") {
      setImage(result.info);
      widget.close();
      return;
    } else if (result.event !== "success") {
      toast("Image upload failed", {
        type: "error",
      });
      widget.close();
    }
  }

  return (
    <div className="px-6 pt-10 mt-6 max-w-2xl rounded-md bg-slate-100 shadow-md">
      {" "}
      <ToastContainer position="top-right" autoClose={2500} />
      <form className="w-full " onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4 ">
          <div className="col-span-3 ">
            <label
              htmlFor="filename"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Image Name
            </label>
            <div className="mt-2 flex rounded-md shadow-sm">
              <input
                type="text"
                id="filename"
                {...register("filename")}
                className="block w-full flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-masifunde sm:text-sm sm:leading-6"
              />
            </div>
            {errors.filename && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.filename?.message}
              </p>
            )}
          </div>

          <fieldset className="mt-6 col-span-3 ">
            <legend className="contents text-md font-medium leading-6 text-gray-700">
              Seect Folder
            </legend>

            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
              {folders.map((folder, i) => (
                <div key={i} className="flex items-center">
                  <input
                    id="folder"
                    {...register("folder")}
                    value={folder.name}
                    onChange={(e) => setFolder(e.target.value)}
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-masifunde focus:ring-masifunde"
                  />
                  <label
                    htmlFor="folder"
                    className="ml-3 block text-sm font-medium leading-6 text-gray-900 capitalize"
                  >
                    {folder.name}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>

          <div className="col-span-3 sm:col-span-2">
            <label className="sr-only block text-sm font-medium leading-6 text-gray-900">
              Select Image
            </label>
            <div className="mt-2 flex rounded-md shadow-sm">
              <div className="bg-blue-400 text-white text-sm font-medium w-fit px-4 py-2 rounded-md">
                <CldUploadButton
                  onUpload={handleOnUpload}
                  uploadPreset="kfo3j4ot"
                  options={{
                    folder: folder,
                  }}
                >
                  Select Image
                </CldUploadButton>
              </div>
            </div>
          </div>
        </div>
        <fieldset className="mt-6">
          <legend className="contents text-md font-medium leading-6 text-gray-700">
            Select Organisation
          </legend>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            {organisations.map((organisation) => (
              <div key={organisation.id} className="flex items-center">
                <input
                  id="organisation_id"
                  {...register("organisation_id")}
                  value={organisation.id}
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-masifunde focus:ring-masifunde"
                />
                <label
                  htmlFor="organisation_id"
                  className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                >
                  {organisation.name}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
        <div className="bg-gray-100 px-4 py-3 text-right sm:px-6 mt-6">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md bg-masifunde py-2 px-10 text-xl font-semibold text-white shadow-sm hover:bg-masifunde focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-masifunde"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
export default MediaForm;
