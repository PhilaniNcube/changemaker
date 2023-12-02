import supabaseService from "@/lib/service-role";
import supabaseServer from "@/lib/supabase-server";
import cloudinary from "@/utils/cloudinary";
import Link from "next/link";
import { File } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { CloudinarySearchResponse } from "@/types/cloudinary-types";

const page = async ({params: {name}}:{params:{name:string}}) => {


    // decode url parameter
    const folderName = decodeURIComponent(name)



    const images: CloudinarySearchResponse = await cloudinary.v2.search
      .expression(`folder=${folderName}`)
      .max_results(100)
      .execute();




    const mediaResources = images.resources
     console.log(images);





  return (
    <main className="w-full">
      <h1 className="text-2xl font-semibold">Media</h1>
      <div className="columns-3 gap-6">
        {mediaResources.length > 0 && mediaResources.map((item) => {
          if(item.resource_type === "image") {
            return <Image key={item.asset_id} src={item.url} width={item.width} height={item.height} alt={item.filename} className="py-3" />
          } else {
            return <div key={item.asset_id} className="flex flex-col items-center justify-center w-full h-40 bg-gray-100 rounded-lg"><File size={48} /><p className="text-sm font-semibold">{item.filename}</p></div>
          }
        })}
      </div>
    </main>
  );
};
export default page;
