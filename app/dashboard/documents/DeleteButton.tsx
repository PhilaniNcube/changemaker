"use client"

import { useSupabase } from "@/components/Auth/SupabaseProvider";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteButton = ({id}:{id:string}) => {

   const { supabase } = useSupabase();

   const router = useRouter()
const handleDelete = async () => {

  const {data, error} = await supabase.from('documents').delete().eq("id", id).select('*').single()


  if(error) {
      toast("Delete operation failed", {
        type: "error",
      });

  } else {
        toast("Document was deleted", {
          type: "success",
        });
  }

  router.refresh()
}

  return (
    <button
      onClick={handleDelete}
      className="bg-red-700 px-2 rounded-md ml-4 aspect-square"
      type="button"
    >
      <ToastContainer position="top-right" autoClose={4000} />
      <TrashIcon className="text-white h-6 w-6" />
    </button>
  );
};
export default DeleteButton;
