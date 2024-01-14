/**
 * v0 by Vercel.
 * @see https://v0.dev/t/d6Flgd6dGRD
 */
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
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
import { Folder } from "../page";
import Link from "next/link";
import { SubmitButton } from "@/components/Forms/submit-button";
import deleteFolderAction from "@/actions/delete-folder";

type TableProps = {
  folders: { name: string; path: string }[];
};

export default function FolderTable({ folders }: TableProps) {
  return (
    <div className="border shadow-sm rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Folder Name</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {folders.map((folder, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium capitalize">
                {folder.name}
              </TableCell>
              <TableCell className="flex space-x-2">
                  <Button size="sm" variant="outline">
                <Link href={`/dashboard/media/${folder.path}`}>
                    Open
                </Link>
                  </Button>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <Button size="sm" type="button" variant="destructive">
                      Delete Folder
                      </Button>
                      </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete the folder.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>
                        <form action={deleteFolderAction}>
                          <input type="hidden" name="folderName" value={folder.name} />
                          <SubmitButton>Delete Folder</SubmitButton>
                        </form>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
