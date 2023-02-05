/* eslint-disable @next/next/no-img-element */
"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Feed } from "./page";

type ComponentProps = {
  feed: Feed
}

const Instragram =  ({feed}:ComponentProps) => {

  const router = useRouter()

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-0">


        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {feed.data.map((item) => (
              <article
                onClick={() => router.push(`${item.permalink}`)}
                key={item.id}
                className="w-full cursor-pointer aspect-square rounded-md group relative isolate"
              >
                <img
                  src={item.media_url}
                  width={500}
                  height={500}
                  alt={item.caption}
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 overflow-hidden group-hover:bg-slate-700/90 flex justify-center items-center p-2">
                  <p className="group-hover:flex hidden text-white text-xs">
                    {item.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Instragram;
