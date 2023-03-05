"use client"

import { Database } from "@/schema";
import slugify from 'slugify'
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "Zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useSupabase } from "../Auth/SupabaseProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const organisationSchema = z.object({
  id: z.string().uuid(),
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  facebook: z.string().url(),
  website: z.string().url(),
  twitter: z.string().url(),
  description: z
    .string()
    .max(200, { message: "Description must be less than 200 characters long" })
    .min(10, { message: "Description must be at least 10 characters long" }),
  district_id: z.string().uuid(),
  email: z.string().email(),
  tel: z.string(),
});

type Organisation = z.infer<typeof organisationSchema>;

type Props = {
  organisation: Database["public"]["Tables"]["organisations"]["Row"];
  districts: Database["public"]["Tables"]["districts"]["Row"][];
};

const OrganisationForm = ({organisation, districts}:Props) => {

  const {supabase} = useSupabase()

   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm<Organisation>({
     resolver: zodResolver(organisationSchema),
     defaultValues: {
      id: organisation.id,
      name: organisation.name!,
      description: organisation.description!,
      email: organisation.email!,
      tel: organisation.tel!,
      facebook: organisation.facebook!,
      website: organisation.website!,
      district_id: organisation.district_id!,
      twitter: organisation.twitter!
     }
   });
  const [organisationData, setOrganisationData] = useState(organisation)

  const onSubmit:SubmitHandler<Organisation> = async (data) => {

    toast("Please wait...", {
      type: 'warning'
    });

    const slug = slugify(data.name, {
      lower: true,
      replacement: '_',
      trim: true
    })


const { data: org, error } = await supabase
  .from("organisations")
  .update({
    name: data.name,
    slug: slug,
    email: data.email,
    website: data.website,
    facebook: data.facebook,
    twitter: data.twitter,
    tel: data.tel,
    description: data.description,
    district_id: data.district_id,
  })
  .eq("id", data.id)


  if(error) {
    toast(`There was an error: ${error.message}`, {
      type: 'error'
    });
    console.log({error})
    return
  } else if(data) {
    toast("Organisation succesfully updated", {
      type: 'success'
    });
    console.log({org})
    return
   }

   return

  }

  return (
    <form className="w-full px-6 mt-6" onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer position="top-right" autoClose={2500} />
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 max-w-2xl">
        <div className="sr-only">
          <label
            htmlFor="id"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Organisation ID
          </label>
          <div className="mt-2 flex rounded-md shadow-sm">
            <input
              type="text"
              id="id"
              {...register("id")}
              className="block w-full flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
            />
          </div>

        </div>
        <div className="col-span-3 ">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Organisation Name
          </label>
          <div className="mt-2 flex rounded-md shadow-sm">
            <input
              type="text"
              id="name"
              {...register("name")}
              className="block w-full flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
            />
          </div>
          {errors.name && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="col-span-3 sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="mt-2 flex rounded-md shadow-sm">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
              <EnvelopeIcon className="h-4 w-4 text-gray-500" />
            </span>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
            />
          </div>
          {errors.email && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="col-span-3 sm:col-span-2">
          <label
            htmlFor="tel"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Telephone Number
          </label>
          <div className="mt-2 flex rounded-md shadow-sm">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
              <PhoneIcon className="h-4 w-4 text-gray-500" />
            </span>
            <input
              type="tel"
              id="tel"
              {...register("tel")}
              className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
            />
          </div>
          {errors.tel && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.tel?.message}
            </p>
          )}
        </div>
        <div className="col-span-3 sm:col-span-2">
          <label
            htmlFor="website"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Website
          </label>
          <div className="mt-2 flex rounded-md shadow-sm">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
              http://
            </span>
            <input
              type="text"
              id="website"
              {...register("website")}
              className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
            />
          </div>
          {errors.website && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.website?.message}
            </p>
          )}
        </div>
        <div className="col-span-3 sm:col-span-2">
          <label
            htmlFor="facebook"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Facebook
          </label>
          <div className="mt-2 flex rounded-md shadow-sm">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
              http://
            </span>
            <input
              type="text"
              {...register("facebook")}
              id="facebook"
              className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
            />
          </div>{" "}
          {errors.facebook && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.facebook?.message}
            </p>
          )}
        </div>
        <div className="col-span-3 sm:col-span-2">
          <label
            htmlFor="twitter"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Twitter
          </label>
          <div className="mt-2 flex rounded-md shadow-sm">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
              http://
            </span>
            <input
              type="text"
              {...register("twitter")}
              id="twitter"
              className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
            />
          </div>{" "}
          {errors.twitter && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.twitter?.message}
            </p>
          )}
        </div>
      </div>
      <div className="max-w-2xl mt-3">
        <label
          htmlFor="description"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Description
        </label>
        <div className="mt-2">
          <textarea
            id="description"
            {...register("description")}
            rows={3}
            className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:py-1.5 sm:text-sm sm:leading-6"
          />
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Brief description for the organisation.
        </p>
      </div>
      <fieldset className="mt-6">
        <legend className="contents text-md font-medium leading-6 text-gray-700">
          Select district/municipality
        </legend>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
          {districts.map((district) => (
            <div key={district.id} className="flex items-center">
              <input
                id="district_id"
                {...register("district_id")}
                value={district.id}
                type="radio"
                className="h-4 w-4 border-gray-300 text-accent focus:ring-accent"
              />
              <label
                htmlFor="district_id"
                className="ml-3 block text-sm font-medium leading-6 text-gray-900"
              >
                {district.name}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      <div className="bg-gray-100 px-4 py-3 text-right sm:px-6 mt-6">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md bg-accent py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Save
        </button>
      </div>
    </form>
  );
};
export default OrganisationForm;
