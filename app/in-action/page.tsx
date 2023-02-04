import { Fragment } from "react";
import Hero from "./Hero";
import Instragram from "./Instragram";

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

const instagramFeedService = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_TOKEN}`;

  const data = await fetch(url);

  const feed = await data.json();

  return feed as Feed;
};


const page = async () => {

   const instgramFeed = await instagramFeedService();


  return (
    <Fragment>
      {/* <Hero /> */}
      <Instragram feed={instgramFeed} />
    </Fragment>
  );
};
export default page;
