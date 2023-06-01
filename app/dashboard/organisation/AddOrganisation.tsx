"use client"

import { useSupabase } from "@/components/Auth/SupabaseProvider";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddOrganisation = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const {supabase} = useSupabase()

  async function createOrg(){
setLoading(true)
const { data:organisation, error } = await supabase.from("organisations")
  .insert([{ name: "Draft", }]).select('*').single();

  if(error) {
    setLoading(false);
    throw new Error(error.message);
  } else {
    toast("Please wait while you are being redirected", { type: "info" });
    setLoading(false)
    router.push(`/dashboard/organisation/${organisation.id}`)
  }


  }

  return (
    <div className="w-full flex justify-between items-center mb-4">
      <ToastContainer position="top-right" autoClose={3500} />
      <h1 className="text-2xl font-medium text-slate-800">Organisations</h1>
      <button
        type="button"
        onClick={createOrg}
        className="bg-masifunde hover:bg-orange-500 px-4 py-2 rounded-md text-white flex items-center space-x-3"
      >
        <PlusIcon className="h-8 w-8" /> <span>Add</span>
      </button>
    </div>
  );
};
export default AddOrganisation;
