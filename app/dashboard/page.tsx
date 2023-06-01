import cloudinary from "@/utils/cloudinary";
import { Folder } from "lucide-react";
import Link from "next/link";

export type Folder ={
  name: string;
  path: string;
}

const page = async () => {

  const {folders, total_count} = await cloudinary.v2.api
    .root_folders(() => console.log("root folders"), {
      max_results: 500,

    })
    .then((result:any) => {
      return result;
    })
    .catch((err:any) => console.log(err));




  console.log(folders)

  return <main className="w-full">
    <div className="">
      <h1 className="text-3xl font-semibold">Folders</h1>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6">
        {folders.map((folder:Folder, i:number) => (
          <Link href={`/dashboard/media/${folder.name}`} key={i} className="w-full flex flex-col items-center justify-center group">
            <Folder size={28} />
            <p className="text-center capitalize">{folder.name}</p>
          </Link>
        ) )}
      </div>
    </div>
  </main>;
};
export default page;
