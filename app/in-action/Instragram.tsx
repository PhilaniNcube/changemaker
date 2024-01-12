/* eslint-disable @next/next/no-img-element */
"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { InstagramMedia } from "./page";

type ComponentProps = {
  feed: InstagramMedia[];
};

const Instragram =  () => {





  return (
    <section className="py-10 bg-white">
      <div className="flex flex-col items-center px-8 mx-auto max-w-7xl">
        <h1 className="text-2xl font-bold md:text-5xl text-slate-800 ">News</h1>

        <p className="text-base text-slate-700">
          Stay updated through our Social Media Feeds!
        </p>
        <div className="flex justify-center w-full gap-8">
          <div className="flex justify-center w-full">
            {/* <h1 className="text-2xl font-bold md:text-4xl text-slate-800">
              MCN In Action
            </h1> */}
            <div className="mt-4 text-slate-700">
              <div
                className="fb-page"
                data-href="https://www.facebook.com/profile.php?id=100083194785525"
                data-tabs="timeline"
                data-width="600"
                data-height=""
                data-small-header="false"
                data-adapt-container-width="false"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/profile.php?id=100083194785525"
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/profile.php?id=100083194785525">
                    Changemaker Network
                  </a>
                </blockquote>
              </div>
            </div>
          </div>
          {/* <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {feed.map((item) => (
              <article
                onClick={() => router.push(`${item.permalink}`)}
                key={item.id}
                className="relative w-full rounded-md cursor-pointer aspect-square group isolate"
              >
                <img
                  src={item.thumbnail_url || item.media_url}
                  width={500}
                  height={500}
                  alt={item.caption}
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex items-center justify-center p-2 overflow-hidden group-hover:bg-slate-700/90">
                  <p className="hidden text-xs text-white group-hover:flex">
                    {item.caption}
                  </p>
                </div>
              </article>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Instragram;
