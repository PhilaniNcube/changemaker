/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import type { InstagramMedia } from "./page";
import Script from "next/script";
import { getInstagramPosts } from "@/lib/utils/instagram";

type ComponentProps = {
  feed: InstagramMedia[];
};

const SocialFeed = async () => {
  const instagramPosts = await getInstagramPosts(15);

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto lg:px-0">
      <h1 className="text-2xl font-bold text-center md:text-5xl text-slate-800 ">
        News
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100083194785525&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=614048922874767"
            width="500"
            height="700"
            style={{ border: "none", overflow: "hidden" }}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className=" max-w-7xl">
          <div className="grid grid-cols-3 gap-3">
            {instagramPosts && instagramPosts.length > 0 ? (
              instagramPosts.map((media: InstagramMedia) => (
                <div
                  key={media.id}
                  className="relative items-center justify-center w-full col-span-3 transition duration-300 ease-in-out rounded-lg shadow md:col-span-1 group aspect-square"
                >
                  {media.media_type === "VIDEO" ? (
                    <img
                      width={200}
                      height={200}
                      src={media.thumbnail_url || media.media_url}
                      alt="Instagram post"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <img
                      width={200}
                      height={200}
                      src={media.media_url}
                      alt="Instagram post"
                      className="object-cover w-full h-full"
                    />
                  )}

                  <p className="inset-0 items-center justify-center hidden px-4 text-slate-800 text-balance bg-slate-300/60 line-clamp-1 group-hover:absolute group-hover:flex">
                    {media.caption}
                  </p>
                </div>
              ))
            ) : (
              <div className="w-full h-full col-span-3">
                <h2 className="text-2xl font-bold text-center text-slate-800">
                  Could not fetch Instagram posts
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SocialFeed;
