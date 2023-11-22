import supabaseService from "@/lib/service-role";
import supabaseServer from "@/lib/supabase-server";
import cloudinary from "@/utils/cloudinary";
import Link from "next/link";
import { File } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { redirect } from "next/navigation";

const page = async ({params: {name}}:{params:{name:string}}) => {
    const supabase = supabaseServer();

    // decode url parameter
    const folderName = decodeURIComponent(name)

    console.log({folderName})



  const mediaData = supabase
    .from("media")
    .select("*")
    .eq("folder", folderName.toLowerCase())
    .limit(100);

  const docsData = supabase
    .from("documents")
    .select("*", { count: "exact" })
    .eq("folder", folderName.toLowerCase())
    .limit(100);

    const [{data:media}, {data:docs}] = await Promise.all([mediaData, docsData])



  return (
    <main className="w-full">
      <h1 className="text-2xl font-semibold">Documents and Media</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="w-full mt-4">
          <h2 className="text-xl font-semibold text-slate-600">Media</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {media?.length === 0
              ? "No media found"
              : media?.map((item) => (
                  <div key={item.id} className="relative">
                    <Link
                      href={item.src!}
                      className="relative flex flex-col items-center cursor-pointer isolate"
                      target="_blank"
                    >
                      <Image
                        src={item.src!}
                        width={item.width!}
                        height={item.height!}
                        alt={item.filename!}
                        className="object-cover w-full"
                      />
                      <p className="text-xs text-center">{item.filename}</p>
                    </Link>

                  </div>
                ))}
          </div>
        </div>
        <div className="w-full mt-4">
          <h2 className="text-xl font-semibold text-slate-600">Documents</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {docs?.length === 0
              ? "No documents found"
              : docs?.map((item) => (
                  <Link
                    href={item.src!}
                    key={item.id}
                    className="flex flex-col items-center"
                  >
                    <File size={28} />
                    <p className="text-xs text-center">{item.title}</p>
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default page;
