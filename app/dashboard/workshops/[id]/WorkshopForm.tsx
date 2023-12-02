"use client"

import { Database } from "@/schema";
import slugify from "slugify";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDaysIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSupabase } from "@/components/Auth/SupabaseProvider";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";

const workshopSchema = z.object({
  id: z.string().uuid(),
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  slug: z.string().min(3, {message: "Slug must be at least 3 characters long"}),
  description: z
    .string()
    .max(200, { message: "Description must be less than 200 characters long" })
    .min(10, { message: "Description must be at least 10 characters long" }),
  organisation_id: z.string().uuid(),
  date: z.string(),
  time: z.string(),

});

type Workshop = z.infer<typeof workshopSchema>;

type Props = {
  workshop: Database["public"]["Tables"]["workshops"]["Row"];
  organisations: Database["public"]["Tables"]["organisations"]["Row"][];
};

const WorkshopForm = ({workshop, organisations}:Props) => {

  const router = useRouter()

     const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm<Workshop>({
       resolver: zodResolver(workshopSchema),
       defaultValues: {
         id: workshop.id,
         name: workshop.name!,
         description: workshop.description!,
         slug: workshop.slug!,
         date: workshop.date!,
         time: workshop.time!,
         organisation_id: workshop.organisation_id.id!,
       },
     });

  const { supabase } = useSupabase();

  const [imageUrl, setImageUrl] = useState('')



   const onSubmit: SubmitHandler<Workshop> = async (data) => {



        toast("Please wait...", {
          type: "warning",
        });

        const slug = slugify(data.name, {
          lower: true,
          replacement: "_",
          trim: true,
        });


const { data: workshop, error } = await supabase
  .from("workshops")
  .update({
    name: data.name,
    slug: slug,
    image: imageUrl,
    date: data.date,
    time: data.time,
    description: data.description,
    organisation_id: data.organisation_id,
  })
  .eq("id", data.id).select('*');


  if(error) {
    toast.error(error.message);
    return
  } else if(workshop) {
    toast.success('Workshop details updated successfully')
    router.refresh();
  }

   };


     async function handleOnUpload(result: any, widget: any) {

       if (result.event === "success") {
         setImageUrl(result.info.url);
         toast("Image uploaded successfully", {
           type: "success",
         });
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
          <div className="sr-only">
            <label
              htmlFor="id"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Workshop ID
            </label>
            <div className="mt-2 flex rounded-md shadow-sm">
              <input
                type="text"
                id="id"
                {...register("id")}
                className="block w-full flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-masifunde sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-3 ">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Workshop Name
            </label>
            <div className="mt-2 flex rounded-md shadow-sm">
              <input
                type="text"
                id="name"
                {...register("name")}
                className="block w-full flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-masifunde sm:text-sm sm:leading-6"
              />
            </div>
            {errors.name && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.name?.message}
              </p>
            )}
          </div>

          <div className="col-span-3 ">
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Workshop Description
            </label>
            <div className="mt-2 flex rounded-md shadow-sm">
              <textarea
                id="description"
                rows={4}
                {...register("description")}
                className="block w-full flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-masifunde sm:text-sm sm:leading-6"
              />
            </div>
            {errors.description && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.description?.message}
              </p>
            )}
          </div>

          <div className="col-span-3 sm:col-span-2">
            <label
              htmlFor="date"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Date
            </label>
            <div className="mt-2 flex rounded-md shadow-sm">
              <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                <CalendarDaysIcon className="h-4 w-4 text-gray-500" />
              </span>
              <input
                type="date"
                id="date"
                {...register("date")}
                className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-masifunde sm:text-sm sm:leading-6"
              />
            </div>
            {errors.date && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.date?.message}
              </p>
            )}
          </div>

          <div className="col-span-3 sm:col-span-2">
            <label
              htmlFor="time"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Time
            </label>
            <div className="mt-2 flex rounded-md shadow-sm">
              <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                <CalendarDaysIcon className="h-4 w-4 text-gray-500" />
              </span>
              <input
                type="time"
                id="time"
                {...register("time")}
                className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-masifunde sm:text-sm sm:leading-6"
              />
            </div>
            {errors.time && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.time?.message}
              </p>
            )}
          </div>

          <div className="col-span-3 sm:col-span-2">
            <p className="block text-sm font-medium leading-6 text-gray-900">
              Upload Image
            </p>
            <div className="mt-2 flex rounded-md shadow-sm">
              <div
                className="bg-masifunde text-white text-lg font-medium w-fit px-6 py-2 rounded-md"
              >
                <CldUploadButton
                  onUpload={handleOnUpload}
                  uploadPreset="kfo3j4ot"
                />
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
            className="inline-flex justify-center rounded-md bg-masifunde py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-masifunde focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-masifunde"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
export default WorkshopForm;
