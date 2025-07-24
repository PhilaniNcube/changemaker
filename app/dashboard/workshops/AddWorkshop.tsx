"use client";

import { createClient } from "@/utils/supabase/client";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useState } from "react";
import slugify from "slugify";

const AddWorkshop = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  async function createWorkshop() {
    setLoading(true);

    const slug = slugify(`${Math.floor(Math.random() * 10)}_draft`);

    const { data: workshop, error } = await supabase
      .from("workshops")
      .insert([{ name: "Draft", slug: slug }])
      .select("*")
      .single();

    if (error) {
      setLoading(false);
      throw new Error(error.message);
      // biome-ignore lint/style/noUselessElse: <explanation>
    } else {
      alert("Organisation created successfully");

      setLoading(false);
      router.push(`/dashboard/workshops/${workshop.id}`);
    }
  }

  return (
    <div className="flex items-center justify-between w-full mb-4">
      <h1 className="text-2xl font-medium text-slate-800">Workshops</h1>
      <button
        type="button"
        onClick={createWorkshop}
        className="flex items-center px-4 py-2 space-x-3 text-white rounded-md bg-masifunde hover:bg-orange-500"
      >
        <PlusIcon className="w-8 h-8" /> <span>Add</span>
      </button>
    </div>
  );
};
export default AddWorkshop;
