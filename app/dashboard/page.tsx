import supabaseServer from "@/lib/supabase-server";
import cloudinary from "@/utils/cloudinary";
import { Folder } from "lucide-react";
import Link from "next/link";
import FolderTable from "./_components/folder-table";
import CreateFolder from "./profile/CreateFolder";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { getRootFolders } from "@/fetchers/folders";

export type Folder = {
  name: string;
  path: string;
};

const page = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: admin, error } = await supabase.rpc("is_admin");

  const foldersData = await getRootFolders();
  console.log("Fetched folders:", foldersData.folders);

  // if the user is not an admin, redirect them to the the account page
  if (!admin) {
    redirect(`/account/${user?.id}`);
  }

  return (
    <main className="w-full">
      <div className="flex flex-col w-full gap-8 md:flex-row">
        <CreateFolder />
        <div className="">
          <FolderTable folders={foldersData.folders} />
        </div>
      </div>
    </main>
  );
};
export default page;
