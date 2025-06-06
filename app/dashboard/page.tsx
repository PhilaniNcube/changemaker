import supabaseServer from "@/lib/supabase-server";
import cloudinary from "@/utils/cloudinary";
import { Folder } from "lucide-react";
import Link from "next/link";
import FolderTable from "./_components/folder-table";
import CreateFolder from "./profile/CreateFolder";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


export type Folder ={
  name: string;
  path: string;
}

const page = async () => {

    const supabase = createClient();
  
      const {
        data: { session },
      } = await supabase.auth.getSession();
  
      const {data: {user}} = await supabase.auth.getUser()
  
      const { data:admin, error } = await supabase.rpc("is_admin");

      // if the user is not an admin, redirect them to the the account page
      if (!admin) {
        redirect(`/account/${user?.id}`);
      }



  const data = await cloudinary.v2.api
    .root_folders(() => console.log("root folders"))
    .then((result:any) => {
      return result;
    })
    .catch((err:any) => console.error(err));

   const folders = data.folders as Folder[]



  const images = await cloudinary.v2.search.max_results(20).execute()


  if(!folders || folders.length === 0) {
    return <div className="w-full">
      <h1 className="text-2xl text-slate-700 font-bold">Upload Image</h1>
      <div className="grid grid-cols-3 gap-2">
       <div className="col-span-2">

       </div>
       <div className="col-span-1 py-6">
         <CreateFolder />
         </div>
      </div>
     </div>;
  }

  return (
    <main className="w-full">
      <div className="">
        <h1 className="text-3xl font-semibold">Folders</h1>
        <FolderTable folders={folders} />
        {/* <div className="grid grid-cols-3 gap-6 mt-4 md:grid-cols-5 lg:grid-cols-7">
          {data.folders.map((folder: Folder, i: number) => (
            <Link
              href={`/dashboard/media/${folder.name}`}
              key={i}
              className="flex flex-col items-center justify-center w-full group"
            >
              <Folder size={28} />
              <p className="text-center capitalize">{folder.name}</p>
            </Link>
          ))}
        </div> */}

      </div>
    </main>
  );
};
export default page;
