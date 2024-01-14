import supabaseService from "@/lib/service-role";
import supabaseServer from "@/lib/supabase-server";
import cloudinary from "@/utils/cloudinary";
import Link from "next/link";
import { File, Trash2Icon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { CloudinarySearchResponse } from "@/types/cloudinary-types";
import ImageUpload from "../_components/image-upload";
import { deleteAsset } from "@/actions/delete-asset";

const page = async ({params: {name}}:{params:{name:string}}) => {


    // decode url parameter
    const folderName = decodeURIComponent(name)

      const root_folders = await cloudinary.v2.api
        .root_folders(() => console.log("root folders"))
        .then((result: any) => {
          return result;
        })
        .catch((err: any) => console.error(err));



    const images: CloudinarySearchResponse = await cloudinary.v2.search
      .expression(`folder="${folderName}"`)
      .execute();




    const mediaResources = images.resources


     if (!images || images.total_count === 0 ) {
          return (
            <main className="w-full">
              <h1 className="text-2xl font-semibold">Media</h1>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 min-w-fit">
                  <h3 className="text-lg">Upload Image/Document</h3>
                  <ImageUpload folderName={folderName!} />
                </div>
                <div className="flex-1">
                  <p className="text-lg">
                    There are no images in this folder yet. Upload some images
                    now.
                  </p>
                </div>
              </div>
            </main>
          );
     }

       return (
         <main className="w-full">
           <h1 className="text-2xl font-semibold">Media</h1>
           <div className="flex flex-col lg:flex-row gap-4">
             <div className="flex-1 min-w-fit">
               <h3 className="text-lg">Upload Image/Document</h3>
               <ImageUpload folderName={folderName!} />
             </div>
             <div className="grid grid-cols-1 lg:grid-cols-4  gap-6">
               {mediaResources.length > 0 &&
                 mediaResources.map((item) => {
                   if (item.resource_type === "image") {
                     return (
                       <div key={item.asset_id} className="relative group">
                         <form
                           action={deleteAsset}
                           className="absolute group-hover:opacity-100 opacity-0 top-5 right-2 z-10"
                         >
                           <input
                             type="hidden"
                             name="id"
                             value={item.public_id}
                           />
                           <input
                             type="hidden"
                             name="folder"
                             value={folderName}
                           />
                           <Button
                             variant="destructive"
                             className=""
                             type="submit"
                             size="sm"
                           >
                             <Trash2Icon size={16} />
                           </Button>
                         </form>
                         <Link href={item.url} prefetch={false} target="_blank">
                           <Image
                             src={item.url}
                             width={item.width}
                             height={item.height}
                             alt={item.filename}
                             className="py-3 rounded-lg object-cover aspect-square"
                           />
                         </Link>
                       </div>
                     );
                   } else {
                     return (
                       <div
                         key={item.asset_id}
                         className="flex flex-col relative group items-center justify-center w-full h-40 bg-gray-100 rounded-lg"
                       >
                         <form
                           action={deleteAsset}
                           className="absolute group-hover:opacity-100 opacity-0 top-5 right-2 z-10"
                         >
                           <input
                             type="hidden"
                             name="id"
                             value={item.public_id}
                           />
                           <input
                             type="hidden"
                             name="folder"
                             value={folderName}
                           />
                           <Button
                             variant="destructive"
                             className=""
                             type="submit"
                             size="sm"
                           >
                             <Trash2Icon size={16} />
                           </Button>
                         </form>
                         <File size={48} />
                         <p className="text-sm font-semibold">
                           {item.filename}
                         </p>
                       </div>
                     );
                   }
                 })}
             </div>
           </div>
         </main>
       );
};
export default page;
