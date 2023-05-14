import { Fragment } from "react";
import Hero from "./Hero";
import Carousel from "./Carousel";
import Benefits from "./Benefits";

const page = () => {
  return <main className="bg-white">
    {/* <Hero /> */}
    <Benefits />
    <Carousel />

  </main>;
};
export default page;
