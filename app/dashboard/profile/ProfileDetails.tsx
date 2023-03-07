"use client"

import { useSupabase } from "@/components/Auth/SupabaseProvider";
import { Database } from "@/schema";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  profile: Database['public']['Tables']['profiles']['Row']
}


const ProfileDetails = ({profile}: Props) => {

    const router = useRouter();
    const { supabase } = useSupabase();

  const [first_name, setFirstName] = useState(profile.first_name|| '')
  const [last_name, setLastName] = useState(profile.last_name|| '')

const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
e.preventDefault();

if(typeof first_name !== 'string' || typeof last_name !== 'string') {
  throw new Error(`Invalid form data`)
}

const { data, error } = await supabase
  .from("profiles")
  .update({ first_name, last_name })
  .eq("id", profile.id).select('*')


  if(error) {
    alert(error.message);
    return
  } else {
    toast('Profile updated', {type: "info"})
    router.refresh()
  }
}

  return (
    <div className="w-full">
      <ToastContainer position="top-right" autoClose={2500} />
      <h1 className="text-3xl font-bold text-slate-700">Profile Details</h1>
      <form onSubmit={handleSubmit} className="mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
          {" "}
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-slate-700"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-slate-700"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-accent px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
export default ProfileDetails;
