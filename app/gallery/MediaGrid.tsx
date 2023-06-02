"use client"
import { Database } from "@/schema";
import Image from "next/image";
import Link from "next/link";


type Props = {
  media: Database['public']['Tables']['media']['Row'][]
}


const MediaGrid = ({media}:Props) => {



  return (
    <section>
      {" "}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {media.map((image) => (
          <Link href={image.src}
            key={image.id}
            className="w-full relative aspect-video rounded-md overflow-hidden shadow-md"
          >
            {" "}
            <section>
              <article>
                <div>

                    <Image
                      src={image.src}
                      width={image.width!}
                      height={image.height!}
                      alt={image.filename!}
                      className="w-full aspect-video rounded-md object-cover"
                    />

                  <div className="bg-gradient-to-t from-slate-600/50 to-transparent absolute inset-0 flex items-end justify-start p-5">
                    <div>
                      <p className="text-md text-white">{image.filename}</p>
                      <p className="text-xs text-white">
                        {image.organisation_id.name}
                      </p>
                      <p className="text-xs text-white capitalize">
                        {image.folder ? image.folder : "No Folder"}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          </Link>
        ))}
      </div>{" "}
    </section>
  );
};
export default MediaGrid;
