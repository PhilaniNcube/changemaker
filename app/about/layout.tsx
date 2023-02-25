import { Fragment, ReactNode } from "react";
import Hero from "./Hero";

const layout = ({children}:{children:ReactNode}) => {
  return (
    <Fragment>
      <Hero />
      {children}
    </Fragment>
  );
};
export default layout;
