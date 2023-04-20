/* eslint-disable @next/next/no-img-element */
"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { InstagramMedia } from "./page";

type ComponentProps = {
  feed: InstagramMedia;
};

const Instragram =  ({feed}:ComponentProps) => {

  const router = useRouter()

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-0">
        <h1 className="text-2xl md:text-5xl font-bold text-slate-800 ">
          News
        </h1>

        <p className="text-slate-700 text-base">
          Stay updated through our Social Media Feeds!
        </p>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-full">
            {/* <h1 className="text-2xl md:text-4xl font-bold text-slate-800">
              MCN In Action
            </h1> */}
            <div className="max-w-[500px] mt-4 text-slate-700">
              <div
                className="fb-page "
                data-href="https://www.facebook.com/profile.php?id=100083194785525"
                data-tabs="timeline"
                data-width="500"
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/profile.php?id=100083194785525"
                  className="fb-xfbml-parse-ignore"
                >
                  <Link className="text-slate-700" href="https://www.facebook.com/profile.php?id=100083194785525">
                   Loading Facebook Feed...
                  </Link>
                </blockquote>
              </div>
            </div>
          </div>
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
