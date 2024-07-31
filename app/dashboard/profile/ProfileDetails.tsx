"use client"

import { createClient } from "@/utils/supabase/client";
import type { Database } from "@/schema";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  profile: Database['public']['Tables']['profiles']['Row']
  organisations: Database['public']['Tables']['organisations']['Row'][]
}

const profileSchema = z.object({
  id: z.string().uuid(),
  first_name: z
    .string()
    .min(2, { message: "First Name must be at least 2 characters long" }),
  last_name: z
    .string()
    .min(2, { message: "Slug must be at least 3 characters long" }),
  email: z.string().email(),
  organisation_id: z.string().uuid()
});

type Profile = z.infer<typeof profileSchema>;

const ProfileDetails = ({profile, organisations}: Props) => {

    const router = useRouter();
    const supabase = createClient()

     const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm<Profile>({
       resolver: zodResolver(profileSchema),
       defaultValues: {
         id: profile.id,
         first_name: profile.first_name,
         last_name: profile.last_name,
         email: profile.email,
         organisation_id: profile.organisation_id.id,
       },
     });

const onSubmit: SubmitHandler<Profile> = async (data) => {
  toast("Please wait...", {
    type: "warning",
  });

  const { data: profileData, error } = await supabase
    .from("profiles")
    .update({
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      organisation_id: data.organisation_id,
    })
    .eq("id", profile.id)
    .select("*");

  if (error) {
    alert(error.message);
    return;
  // biome-ignore lint/style/noUselessElse: <explanation>
  } else {
    toast("Profile updated", { type: "info" });
    router.refresh();
  }
};

  return (
    <div className="w-full">
      <ToastContainer position="top-right" autoClose={2500} />
      <h1 className="text-3xl font-bold text-slate-700">Profile Details</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mt-16 sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
          <div className="sr-only">
            <label
              htmlFor="id"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
             Profile ID
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
          <div>
            <label
              htmlFor="first_name"
              className="block text-sm font-semibold leading-6 text-slate-700"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                id="first_name"
                {...register("first_name")}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-masifunde sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-semibold leading-6 text-slate-700"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                id="last_name"
                {...register("last_name")}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-masifunde sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-slate-700"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                id="email"
                {...register("email")}
                autoComplete="email"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-masifunde sm:text-sm sm:leading-6"
              />
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
                  className="w-4 h-4 border-gray-300 text-masifunde focus:ring-masifunde"
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

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-masifunde px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-masifunde focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-masifunde"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
export default ProfileDetails;
