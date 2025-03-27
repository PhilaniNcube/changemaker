"use client";
import { deleteOrganisation } from "@/actions/delete-organisation";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";

import { useRouter } from "next/navigation";
import { useActionState } from "react";

export function DeleteOrganisation({id}:{id:string}) {

  const router = useRouter()


 


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" size="icon" className="w-8 h-8 p-0 rounded-full">
          <Trash2 className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>Are you sure you want to delete this organisation?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete the organisation and remove it from the list.
        </DialogDescription>
        <div className="mt-4 flex justify-end space-x-2">
          <Button variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <form action={deleteOrganisation} className="flex items-center gap-x-2">
            <input type="hidden" name="id" value={id} />
            <Button type="submit" variant="destructive" size="sm" className="w-24">
              Delete
            </Button>
          </form>
        </div>
      </DialogContent>

    </Dialog>
  );
}

