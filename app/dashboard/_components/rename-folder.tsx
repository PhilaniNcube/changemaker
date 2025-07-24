"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "@/components/Forms/submit-button";
import renameFolderAction from "@/actions/rename-folder";
import { validateFolderName } from "@/utils/folder-utils";
import { toast } from "sonner";
import { Edit } from "lucide-react";

type RenameFolderProps = {
  folderName: string;
};

export default function RenameFolder({ folderName }: RenameFolderProps) {
  const [open, setOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState(folderName);
  const [validationError, setValidationError] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewFolderName(value);

    // Validate on change
    const validation = validateFolderName(value);
    setValidationError(validation.isValid ? "" : validation.error || "");
  };

  const handleSubmit = async (formData: FormData) => {
    // Validate before submitting
    const validation = validateFolderName(newFolderName);
    if (!validation.isValid) {
      setValidationError(validation.error || "Invalid folder name");
      return;
    }

    try {
      await renameFolderAction(formData);
      toast.success("Folder renamed successfully!");
      setOpen(false);
      setNewFolderName(folderName); // Reset to original name
      setValidationError("");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to rename folder"
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          <Edit className="h-4 w-4 mr-1" />
          Rename
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Rename Folder</DialogTitle>
          <DialogDescription>
            Enter a new name for the folder &quot;{folderName}&quot;. This will
            move all assets to the new folder.
          </DialogDescription>
        </DialogHeader>
        <form action={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="newFolderName" className="text-right">
                New Name
              </Label>
              <div className="col-span-3">
                <Input
                  id="newFolderName"
                  name="newFolderName"
                  value={newFolderName}
                  onChange={handleInputChange}
                  placeholder="Enter new folder name"
                  required
                  className={validationError ? "border-red-500" : ""}
                />
                {validationError && (
                  <p className="text-sm text-red-500 mt-1">{validationError}</p>
                )}
                <input
                  type="hidden"
                  name="currentFolderName"
                  value={folderName}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!!validationError || !newFolderName.trim()}
            >
              Rename Folder
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
