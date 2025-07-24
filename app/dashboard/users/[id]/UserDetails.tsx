"use client";

import { deleteUser } from "@/actions/delete-user";
import { createClient } from "@/utils/supabase/client";
import type { Database } from "@/schema";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";

type Props = {
  profile: Database["public"]["Tables"]["profiles"]["Row"];
};

const UserDetails = ({ profile }: Props) => {
  const supabase = createClient();

  const [confirm, setConfirm] = useState(false);

  function closeModal() {
    setConfirm(false);
  }

  function openModal() {
    setConfirm(true);
  }

  const router = useRouter();

  return (
    <div className="w-full mt-4">
      <div className="mt-3 text-lg font-medium text-slate-700">
        <h3 className="">First Name: {profile.first_name}</h3>
        <h3 className="">Last Name: {profile.last_name}</h3>
        <form action={deleteUser}>
          <input type="hidden" name="id" value={profile.id} />
          <button
            type="submit"
            className="px-4 py-2 mt-3 text-white bg-red-500 rounded-md"
          >
            Delete User
          </button>
        </form>
      </div>
    </div>
  );
};
export default UserDetails;
