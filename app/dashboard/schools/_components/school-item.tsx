"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { Database } from "@/schema";
import { deleteSchool } from "@/actions/school";

interface SchoolItemProps {
  school: Database["public"]["Tables"]["schools"]["Row"];
}

export const SchoolItem = ({ school }: SchoolItemProps) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  return (
    <>
      <Card className="w-full my-2 hover:shadow-lg hover:bg-slate-50">
        <CardHeader className="flex flex-row items-center justify-between p-2">
          <CardTitle className="text-lg">{school.name}</CardTitle>
          <Button
            onClick={() => setShowDeleteDialog(true)}
            size="sm"
            variant="destructive"
            disabled={isPending}
          >
            <Trash className="w-4 h-4" />
          </Button>
        </CardHeader>
      </Card>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete{" "}
              <span className="font-bold">{school.name}</span> and all
              associated data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                startTransition(() => {
                  deleteSchool(school.id)
                    .then(() => {
                      toast.success("School deleted successfully");
                      router.refresh();
                    })
                    .catch((error) => {
                      toast.error(error.message);
                    });
                });
              }}
              disabled={isPending}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {isPending ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
