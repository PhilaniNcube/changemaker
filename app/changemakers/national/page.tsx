import { Fragment } from "react";
import Details from "./Details";
import Focus from "./Focus";
import Hero from "./Hero";

const page = () => {
  return <Fragment>
    <Hero />
    <Details />
    <Focus />
  </Fragment>;
};
export default page;
