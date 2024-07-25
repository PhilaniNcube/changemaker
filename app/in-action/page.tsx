
import Script from "next/script";
import Instragram from "./Instragram";
import Image from "next/image";
import React, { Suspense, lazy } from "react";
import InstagramFeed from "./Instragram";

// @ts-ignore
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
  }[],
  paging: {
    cursors: {
      before: string,
      after: string
    }
  }
};


export interface InstagramMedia {
  id: string;
  caption: string;
  media_type: "VIDEO" | "IMAGE" | "CAROUSEL_ALBUM"  | "IGTV";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}






const page = async () => {


    const instagramFeed = await fetch(
					`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${process.env.INSTAGRAM_TOKEN}&limit=9`,
				);

				const data = await instagramFeed.json();



				return (
					<Suspense fallback={<div className="min-h-[50vh] flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-center md:text-5xl text-slate-800 ">
              Loading...</h1>
          </div>}>
						<Instagram feed={data.data} />
					</Suspense>
				);
};
export default page;
