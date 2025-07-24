"use client";
import { useState } from "react";
import type { Database } from "@/schema";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
import type { Folder } from "../page";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";

const mediaSchema = z.object({
  organisation_id: z.string().uuid(),
  filename: z
    .string()
    .min(3, { message: "Please enter a name for your image" }),
  folder: z.string(),
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
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  tags: any[];
  thumbnail_url: string;
  type: string;
  url: string;
  version: number;
  version_id: string;
  width: number;
};

type Result = {
  event: string | undefined;
  info: Info;
};

type Props = {
  organisations: Database["public"]["Tables"]["organisations"]["Row"][];
  folders: Folder[];
};

const MediaForm = ({ organisations, folders }: Props) => {
  const router = useRouter();
  const [image, setImage] = useState<Info | null>(null);
  const [folder, setFolder] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Media>({
    resolver: zodResolver(mediaSchema),
  });

  const supabase = createClient();

  const onSubmit: SubmitHandler<Media> = async (data) => {
    if (image === null) {
      alert("Please upload a new image");
      return;
    }

    if (data.organisation_id === null) {
      alert("Please select organisation");
      return;
    }

    if (!data.filename) {
      alert("Please give your image a name.");
      return;
    }

    if (!data.folder) {
      alert("Please select a folder.");
      return;
    }

    toast("Please wait...", {
      type: "warning",
    });

    const { data: mediaData, error } = await supabase
      .from("media")
      .insert([
        {
          src: image?.url,
          height: image?.height || 100,
          width: image?.width || 100,
          organisation_id: data.organisation_id,
          filename: data.filename,
          type: image?.format,
          public_id: image?.public_id,
          thumbnail_url: image?.thumbnail_url,
          folder: data.folder.toLowerCase(),
        },
      ])
      .select("*")
      .single();

    if (error) {
      toast(`Could not save media: ${error.message}`, {
        type: "error",
      });
      return;
    }

    if (mediaData) {
      toast("Media was saved to database", {
        type: "success",
      });

      router.push("/gallery");
    }
  };

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  async function handleOnUpload(result: any, widget: any) {
    if (result.event === "success") {
      if (result.info && typeof result.info === "object") {
        setImage(result.info as Info);
      } else {
        setImage(null);
      }
      widget.close();
      return;
    }

    if (result.event !== "success") {
      toast("Image upload failed", {
        type: "error",
      });
    }
  }

  return (
    <div className="max-w-2xl px-6 pt-10 mt-6 rounded-md shadow-md bg-slate-100">
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
            <div className="flex mt-2 rounded-md shadow-sm">
              <input
                type="text"
                id="filename"
                {...register("filename")}
                className="block w-full flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-masifunde sm:text-sm sm:leading-6"
              />
            </div>
            {errors.filename && (
              <p className="mt-2 text-xs italic text-red-500">
                {errors.filename?.message}
              </p>
            )}
          </div>

          <fieldset className="col-span-3 mt-6 ">
            <legend className="font-medium leading-6 text-gray-700 contents text-md">
              Select Folder
            </legend>

            <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-3">
              {folders.map((folder, i) => (
                <div key={folder.name} className="flex items-center">
                  <input
                    id="folder"
                    {...register("folder")}
                    value={folder.name}
                    onChange={(e) => setFolder(e.target.value)}
                    type="radio"
                    className="w-4 h-4 border-gray-300 text-masifunde focus:ring-masifunde"
                  />
                  <label
                    htmlFor="folder"
                    className="block ml-3 text-sm font-medium leading-6 text-gray-900 capitalize"
                  >
                    {folder.name}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>

          <div className="col-span-3 sm:col-span-2">
            <label className="block text-sm font-medium leading-6 text-gray-900 sr-only">
              Select Image
            </label>
            <div className="flex mt-2 rounded-md shadow-sm">
              <div className="px-4 py-3 text-sm font-medium text-white bg-blue-400 rounded-md w-fit">
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
          <legend className="font-medium leading-6 text-gray-700 contents text-md">
            Select Organisation
          </legend>

          <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-3">
            {organisations.map((organisation) => (
              <div key={organisation.id} className="flex items-center">
                <input
                  id="organisation_id"
                  {...register("organisation_id")}
                  value={organisation.id}
                  type="radio"
                  className="w-4 h-4 border-gray-400 text-masifunde focus:ring-masifunde"
                />
                <label
                  htmlFor="organisation_id"
                  className="block ml-3 text-sm font-medium leading-6 text-gray-900"
                >
                  {organisation.name}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
        <div className="px-4 py-3 mt-6 text-right bg-gray-100 sm:px-6">
          <Button
            type="submit"
            className="inline-flex justify-center px-10 py-2 text-xl font-semibold text-white rounded-md shadow-sm bg-masifunde hover:bg-masifunde focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-masifunde"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};
export default MediaForm;
