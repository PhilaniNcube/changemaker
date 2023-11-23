import supabaseServer from "@/lib/supabase-server";
import cloudinary from "@/utils/cloudinary";
import { Folder } from "lucide-react";
import Link from "next/link";


export type Folder ={
  name: string;
  path: string;
}

const page = async () => {

  const {folders, total_count} = await cloudinary.v2.api
    .root_folders(() => console.log("root folders"))
    .then((result:any) => {
      return result;
    })
    .catch((err:any) => console.log(err));




  console.log(folders)

  return (
    <main className="w-full">
      <div className="">
        <h1 className="text-3xl font-semibold">Folders</h1>
        <div className="grid grid-cols-3 gap-6 mt-4 md:grid-cols-5 lg:grid-cols-7">
          {folders.map((folder: Folder, i: number) => (
            <Link
              href={`/dashboard/media/${folder.name}`}
              key={i}
              className="flex flex-col items-center justify-center w-full group"
            >
              <Folder size={28} />
              <p className="text-center capitalize">{folder.name}</p>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
};
export default page;
