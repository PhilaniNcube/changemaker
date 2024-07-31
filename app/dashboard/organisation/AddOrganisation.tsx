"use client"

import { createClient } from "@/utils/supabase/client";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddOrganisation = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function createOrg(){
setLoading(true)
const { data:organisation, error } = await supabase.from("organisations")
  .insert([{ name: "Draft", }]).select('*').single();

  if(error) {
    setLoading(false);
    throw new Error(error.message);
  // biome-ignore lint/style/noUselessElse: <explanation>
  } else {
    toast("Please wait while you are being redirected", { type: "info" });
    setLoading(false)
    router.push(`/dashboard/organisation/${organisation.id}`)
  }


  }

  return (
    <div className="flex items-center justify-between w-full mb-4">
      <ToastContainer position="top-right" autoClose={3500} />
      <h1 className="text-2xl font-medium text-slate-800">Organisations</h1>
      <button
        type="button"
        onClick={createOrg}
        className="flex items-center px-4 py-2 space-x-3 text-white rounded-md bg-masifunde hover:bg-orange-500"
      >
        <PlusIcon className="w-8 h-8" /> <span>Add</span>
      </button>
    </div>
  );
};
export default AddOrganisation;
