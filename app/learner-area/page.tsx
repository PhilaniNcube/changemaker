import { Fragment } from "react";
import Hero from "./Hero";
import Carousel from "./Carousel";
import Benefits from "./Benefits";
import Script from "next/script";
import Instragram from "../in-action/SocialFeed";
import Resources from "./Resources";

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
  media_type: string;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

const page = async () => {
  return (
    <main className="bg-white">
      <Benefits />
      {/* <Carousel /> */}
      <Resources />
    </main>
  );
};
export default page;
