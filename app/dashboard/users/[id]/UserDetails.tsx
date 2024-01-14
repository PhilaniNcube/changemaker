"use client"

import { deleteUser } from "@/actions/delete-user";
import { useSupabase } from "@/components/Auth/SupabaseProvider";
import { Database } from "@/schema";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";


type Props = {
  profile: Database['public']['Tables']['profiles']['Row']
}

const UserDetails = ({profile}:Props) => {

    const { supabase } = useSupabase();



  const [confirm, setConfirm] = useState(false)

    function closeModal() {
      setConfirm(false);
    }

    function openModal() {
      setConfirm(true);
    }


  const router = useRouter()




  return (
    <div className="w-full mt-4">
      <div className="text-lg font-medium mt-3 text-slate-700">
        <h3 className="">First Name: {profile.first_name}</h3>
        <h3 className="">Last Name: {profile.last_name}</h3>
        <form action={deleteUser}>
          <input type="hidden" name="id" value={profile.id} />
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded-md mt-3"
          >
            Delete User
          </button>
        </form>
      </div>

    </div>
  );
};
export default UserDetails;
