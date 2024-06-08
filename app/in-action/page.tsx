
import Script from "next/script";
import {  Suspense } from "react";
import Instragram from "./Instragram";

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
  media_type: string;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}




const page = () => {


  return (
    <div className="mx-auto max-w-7xl">

      {/* <Hero /> */}{" "}
      <div className="flex items-center justify-center w-full">
        <Script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v16.0"
          nonce="i0LiW14P"
        />

        <div id="fb-root"/>
      </div>
      <Suspense
        fallback={
          <p className="mt-4 text-lg font-medium text-gray-600 dark:text-gray-400 animate-pulse">
            Loading...
          </p>
        }
      >
        <Instragram />
      </Suspense>
    </div>
  );
};
export default page;
