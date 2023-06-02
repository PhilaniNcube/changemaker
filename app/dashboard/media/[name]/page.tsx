import supabaseService from "@/lib/service-role";
import supabaseServer from "@/lib/supabase-server";
import cloudinary from "@/utils/cloudinary";
import Link from "next/link";
import { File } from "lucide-react";

const page = async ({params: {name}}:{params:{name:string}}) => {
    const supabase = supabaseServer();




  const mediaData =  supabase
    .from("media")
    .select("*", { count: "exact" })
    .eq("folder", name.toLowerCase())
    .limit(100);

  const docsData =  supabase
    .from("documents")
    .select("*", { count: "exact" })
    .eq("folder", name.toLowerCase())
    .limit(100);

    const [{data:media}, {data:docs}] = await Promise.all([mediaData, docsData])



  return (
    <main className="w-full">
      <h1 className="font-semibold text-2xl">Documents and Media</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full mt-4">
          <h2 className="font-semibold text-xl text-slate-600">Media</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {media?.length === 0
              ? "No media found"
              : media?.map((item) => (
                  <Link
                    href={item.thumbnail_url!}
                    key={item.id}
                    className="flex flex-col items-center"
                  >
                    <File size={28} />
                    <p className="text-xs text-center">{item.filename}</p>
                  </Link>
                ))}
          </div>
        </div>
        <div className="w-full mt-4">
          <h2 className="font-semibold text-xl text-slate-600">Documents</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
