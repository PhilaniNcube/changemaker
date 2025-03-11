import React, { Suspense, lazy } from "react";

import { getInstagramPosts } from "@/lib/utils/instagram";

const Instagram = lazy(() => import("./Instragram"));

export const revalidate = 0;

export type Feed = {
  data: {
    id: string;
    caption: string;
    timestamp: string;
    media_type: string;
    media_url: string;
    permalink: string;
  }[];
  paging: {
    cursors: {
      before: string;
      after: string;
    };
  };
};

export interface InstagramMedia {
  id: string;
  caption: string;
  media_type: "VIDEO" | "IMAGE" | "CAROUSEL_ALBUM" | "IGTV";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

const page = async () => {
  try {
    const instagramPosts = await getInstagramPosts(15);

    return (
      <Suspense
        fallback={
          <div className="min-h-[50vh] flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-center md:text-5xl text-slate-800">
              Loading...
            </h1>
          </div>
        }
      >
        <Instagram feed={instagramPosts} />
      </Suspense>
    );
  } catch (error) {
    console.error("Error fetching Instagram feed:", error);
    return (
      <div className="min-h-[70vh] px-8 py-6 mx-auto max-w-7xl">
        Error loading Instagram feed
      </div>
    );
  }
};
export default page;
