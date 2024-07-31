
import { Fragment } from "react";
import Hero from "./Hero";
import Mission from "./Mission";
import Link from "next/link";
import Story from "./Story";
import { getHomepageContent } from "@/sanity/lib/client";
import Timeline from "@/components/Timeline/Timeline";

const Home = async () => {

  const homepageContent = await getHomepageContent()




  return (
    <Fragment>
      <div className="flex items-center justify-center py-4 space-x-6 text-black bg-masifunde">
        <p className="text-sm font-medium lg:text-lg">
          See Changemakers In Action
        </p>
        <Link
          href="/in-action"
          className="px-2 py-2 text-base font-bold border-2 border-black rounded-full lg:px-12 lg:py-2"
        >
          Learn More
        </Link>
      </div>

      <Hero />
      <Mission content={homepageContent} />
      <Story content={homepageContent}>

        <Timeline />
      </Story>
    </Fragment>
  );
};

export default Home;
