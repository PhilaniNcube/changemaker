"use client";

import { createClient } from "@/utils/supabase/client";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteButton = ({ id }: { id: string }) => {
  const supabase = createClient();

  const router = useRouter();
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("documents")
      .delete()
      .eq("id", id)
      .select("*")
      .single();

    if (error) {
      toast("Delete operation failed", {
        type: "error",
      });
    } else {
      toast("Document was deleted", {
        type: "success",
      });
    }

    router.refresh();
  };

  return (
    <button
      onClick={handleDelete}
      className="px-2 ml-4 bg-red-700 rounded-md aspect-square"
      type="button"
    >
      <ToastContainer position="top-right" autoClose={4000} />
      <TrashIcon className="w-6 h-6 text-white" />
    </button>
  );
};
export default DeleteButton;
