import { Fragment } from "react";
import Hero from "./Hero";
import Carousel from "./Carousel";
import Benefits from "./Benefits";
import Script from "next/script";

const page = () => {
  return (
    <main className="bg-white">
      {/* <Hero /> */}
      <Benefits />
      <Carousel />
      <Fragment>
        <Script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v16.0"
          nonce="i0LiW14P"
        />
        <div id="fb-root"></div>
      </Fragment>
    </main>
  );
};
export default page;
