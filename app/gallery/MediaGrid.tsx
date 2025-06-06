"use client"
import { Database } from "@/schema";
import { ResourceType } from "@/types/cloudinary-types";
import Image from "next/image";
import Link from "next/link";
// Import an icon for PDF files
import { FileText } from "lucide-react";


type Props = {
  media: ResourceType[]
}


const MediaGrid = ({ media }: Props) => {
  // Function to check if a file is a PDF
  const isPdf = (image: ResourceType) => {
    return image.url.toLowerCase().endsWith(".pdf");
  };

  return (
    <section>
      {" "}
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {media.map((image) => {

          if (isPdf(image)) return null;

          return (
            <Link href={image.url}
              key={image.public_id}
              className="relative w-full overflow-hidden rounded-md shadow-md aspect-video"
            >
              {" "}
              <section>
                <article>
                  <div>
                    {isPdf(image) ? null : (
                      <Image
                        src={image.url}
                        width={image.width!}
                        height={image.height!}
                        alt={image.folder!}
                        className="object-cover w-full rounded-md aspect-video"
                        quality={50}
                      />
                    )}

                    <div className="absolute inset-0 flex items-end justify-start p-5 bg-gradient-to-t from-slate-600/50 to-transparent">
                      <div>
                        {/* <p className="text-white text-md">{image.filename}</p> */}
                        <p className="text-xs text-white">
                          {/* {image.organisation_id.name} */}
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
          )

        })}
      </div>{" "}
    </section>
  );
};
export default MediaGrid;
