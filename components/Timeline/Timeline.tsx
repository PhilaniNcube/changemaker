
import { getHomepageTimeline } from "@/sanity/lib/client";
import { Fragment } from "react";


const Timeline = async () => {

  const timelineData = await getHomepageTimeline();


  return (
    <Fragment>
      <div className="flex flex-col space-y-4 w-full relative">
        <div
          id="timeline"
          className="absolute w-[6px] bg-masifunde top-0 bottom-0 left-[50%] rounded-md ml-[-3px]"
        ></div>
        {timelineData?.map((item, index) => (
          <article
            key={index}
            className={`relative ${
              index % 2 === 0 ? "float-left" : "float-right"
            }`}
          >
            <div
              className={`${
                index % 2 === 0 ? "float-left text-right" : "float-right text-left"
              } bg-slate-50 rounded-xl p-4 shadow-lg w-[200px] md:w-[270px] odd:self-start even:self-end odd:place-items-start even:place-items-end`}
            >
              <h2 className="text-md md:text-2xl font-extrabold text-masifunde">{item.Year}</h2>
              <p className="text-xs ">{item.timelineDescription}</p>
            </div>
          </article>
        ))}
      </div>
    </Fragment>
  );
};
export default Timeline;
