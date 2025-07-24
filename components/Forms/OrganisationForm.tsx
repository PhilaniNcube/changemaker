"use client";

import type { Database } from "@/schema";
import slugify from "slugify";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EnvelopeIcon,
  GlobeAltIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { createClient } from "@/utils/supabase/client";

const organisationSchema = z.object({
  id: z.string().uuid(),
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  facebook: z.string(),
  website: z.string(),
  twitter: z.string(),
  other: z.string(),
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

const OrganisationForm = ({ organisation, districts }: Props) => {
  const supabase = createClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Organisation>({
    resolver: zodResolver(organisationSchema),
    defaultValues: {
      id: organisation.id,
      name: organisation.name,
      description: organisation.description || "",
      email: organisation.email || "",
      tel: organisation.tel || "",
      facebook: organisation.facebook || "",
      website: organisation.website || "",
      district_id: organisation.district_id || "",
      twitter: organisation.twitter || "",
      other: organisation.other || "",
    },
  });

  const onSubmit: SubmitHandler<Organisation> = async (data) => {
    toast("Please wait...", {
      type: "warning",
    });

    const slug = slugify(data.name, {
      lower: true,
      replacement: "_",
      trim: true,
    });

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
        other: data.other,
        description: data.description,
        district_id: data.district_id,
      })
      .eq("id", data.id)
      .select("*");

    if (error) {
      toast(`There was an error: ${error.message}`, {
        type: "error",
      });

      return;
      // biome-ignore lint/style/noUselessElse: <explanation>
    } else if (org) {
      toast("Organisation succesfully updated", {
        type: "success",
      });

      return;
    }

    return;
  };

  return (
    <form className="w-full px-6 mt-6" onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer position="top-right" autoClose={2500} />
      <div className="grid max-w-2xl grid-cols-3 gap-6 lg:grid-cols-4">
        <div className="sr-only">
          <label
            htmlFor="id"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Organisation ID
          </label>
          <div className="flex mt-2 rounded-md shadow-sm">
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
            Organisation Name
          </label>
          <div className="flex mt-2 rounded-md shadow-sm">
            <input
              type="text"
              id="name"
              {...register("name")}
              className="block w-full flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-masifunde sm:text-sm sm:leading-6"
            />
          </div>
          {errors.name && (
            <p className="mt-2 text-xs italic text-red-500">
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
          <div className="flex mt-2 rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md sm:text-sm">
              <EnvelopeIcon className="w-4 h-4 text-gray-500" />
            </span>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-masifunde sm:text-sm sm:leading-6"
            />
          </div>
          {errors.email && (
            <p className="mt-2 text-xs italic text-red-500">
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
          <div className="flex mt-2 rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md sm:text-sm">
              <PhoneIcon className="w-4 h-4 text-gray-500" />
            </span>
            <input
              type="tel"
              id="tel"
              {...register("tel")}
              className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-masifunde sm:text-sm sm:leading-6"
            />
          </div>
          {errors.tel && (
            <p className="mt-2 text-xs italic text-red-500">
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
          <div className="flex mt-2 rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md sm:text-sm">
              <GlobeAltIcon className="w-4 h-4 text-gray-500" />
            </span>
            <input
              type="text"
              id="website"
              {...register("website")}
              className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-masifunde sm:text-sm sm:leading-6"
            />
          </div>
          {errors.website && (
            <p className="mt-2 text-xs italic text-red-500">
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
          <div className="flex mt-2 rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md sm:text-sm">
              <FaFacebook className="w-4 h-4 text-gray-500" />
            </span>
            <input
              type="text"
              {...register("facebook")}
              id="facebook"
              className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-masifunde sm:text-sm sm:leading-6"
            />
          </div>{" "}
          {errors.facebook && (
            <p className="mt-2 text-xs italic text-red-500">
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
          <div className="flex mt-2 rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md sm:text-sm">
              <FaTwitter className="w-4 h-4 text-gray-500" />
            </span>
            <input
              type="text"
              {...register("twitter")}
              id="twitter"
              className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-masifunde sm:text-sm sm:leading-6"
            />
          </div>{" "}
          {errors.twitter && (
            <p className="mt-2 text-xs italic text-red-500">
              {errors.twitter?.message}
            </p>
          )}
        </div>
        <div className="col-span-3 sm:col-span-2">
          <label
            htmlFor="other"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Other Social Media
          </label>
          <div className="flex mt-2 rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md sm:text-sm">
              <GlobeAltIcon className="w-4 h-4 text-gray-500" />
            </span>
            <input
              type="text"
              {...register("other")}
              id="other"
              className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-masifunde sm:text-sm sm:leading-6"
            />
          </div>{" "}
          {errors.other && (
            <p className="mt-2 text-xs italic text-red-500">
              {errors.other?.message}
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
            className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-masifunde sm:py-1.5 sm:text-sm sm:leading-6"
          />
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Brief description for the organisation.
        </p>
        {errors.description && (
          <p className="mt-2 text-xs italic text-red-500">
            {errors.description?.message}
          </p>
        )}
      </div>
      <fieldset className="mt-6">
        <legend className="font-medium leading-6 text-gray-700 contents text-md">
          Select district/municipality
        </legend>

        <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-3">
          {districts.map((district) => (
            <div key={district.id} className="flex items-center">
              <input
                id="district_id"
                {...register("district_id")}
                value={district.id}
                type="radio"
                className="w-4 h-4 border-gray-300 text-masifunde focus:ring-masifunde"
              />
              <label
                htmlFor="district_id"
                className="block ml-3 text-sm font-medium leading-6 text-gray-900"
              >
                {district.name}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      <div className="px-4 py-3 mt-6 text-right bg-gray-100 sm:px-6">
        <button
          type="submit"
          className="inline-flex justify-center px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-masifunde hover:bg-masifunde focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-masifunde"
        >
          Save
        </button>
      </div>
    </form>
  );
};
export default OrganisationForm;
