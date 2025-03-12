import React, { Suspense, lazy } from "react";

import { getInstagramPosts } from "@/lib/utils/instagram";
import SocialFeed from "./SocialFeed";

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
      <SocialFeed />
    </Suspense>
  );
};
export default page;
