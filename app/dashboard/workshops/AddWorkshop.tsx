"use client";

import { useSupabase } from "@/components/Auth/SupabaseProvider";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useState } from "react";
import slugify from "slugify";

const AddWorkshop = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { supabase } = useSupabase();

  async function createWorkshop() {
    setLoading(true);

    const slug = slugify(`${Math.floor(Math.random() * 10)}_draft`)


    const { data: workshop, error } = await supabase
      .from("workshops")
      .insert([{ name: "Draft", slug: slug }])
      .select("*")
      .single();

    if (error) {
      setLoading(false);
      throw new Error(error.message);
    } else {
      alert("Organisation created successfully");

      setLoading(false);
      router.push(`/dashboard/workshops/${workshop.id}`);
    }
  }

  return (
    <div className="w-full flex justify-between items-center mb-4">
      <h1 className="text-2xl font-medium text-slate-800">Workshops</h1>
      <button
        type="button"
        onClick={createWorkshop}
        className="bg-masifunde hover:bg-orange-500 px-4 py-2 rounded-md text-white flex items-center space-x-3"
      >
        <PlusIcon className="h-8 w-8" /> <span>Add</span>
      </button>
    </div>
  );
};
export default AddWorkshop;
