import Script from "next/script";
import { Fragment } from "react";
import Hero from "./Hero";
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


interface InstagramMedia {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

const instagramFeedService = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${process.env.INSTAGRAM_TOKEN}&limit=16`;

 try {
   const response = await fetch(url);
   const data = await response.json();

   if (data.error) {
     console.error("Error fetching Instagram feed:", data.error);
     return [];
   }

   return data.data as Feed[];
 } catch (error) {
   console.error("Error fetching Instagram feed:", error);
   return [];
 }

  return feed as Feed;
};


const page = async () => {

   const instgramFeed = await instagramFeedService();

   console.log(instgramFeed)


  return (
    <Fragment>
      {/* <Hero /> */}
      {/* <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v16.0"
        nonce="i0LiW14P"
      />
      <div id="fb-root"></div> */}
      <Instragram feed={instgramFeed} />
    </Fragment>
  );
};
export default page;
