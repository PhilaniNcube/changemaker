"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase-browser";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function DeleteOrganisation({id}:{id:string}) {

  const router = useRouter()


  const deleteOrganisation = async () => {

    console.log("delete")

    const supabase = createClient();

  const { data, error } = await supabase.from("organisations").delete().eq("id", id);

  // if there was an error show an error toast
  if (error) {
    console.log(error);
    toast.error("There was an error deleting this organisation");
  }

  // if there was no error show a success toast
  toast.success("Organisation deleted successfully");
  router.refresh();
  // revalidatePath("/dashboard/organisation");

  }


  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <AlertDialogAction onClick={deleteOrganisation}>
              Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

