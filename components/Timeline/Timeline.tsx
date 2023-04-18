"use client"

import { Fragment } from "react";

const timeline = [
  {
    text: "Masifunde registers as NPC",
    date: "2009",
  },
  {
    text: "Masifunde implements “Youth for Safer Communities” city wide",
    date: "2013",
  },
  {
    text: "Opening of the Changemaker Academy in Walmer Township",
    date: "2017",
  },
  {
    text: "Masifunde Changemaker Network launched",
    date: "2021",
  },
  {
    text: "MCN reaches 39 schools in Mandela Bay",
    date: "2022",
  },
  {
    text: "MCN starts replication in four provinces with 20 partner CSOs",
    date: "2023",
  },
  {
    text: "MCN aims to train 680 changemakers to reach 100 000 learners in Eastern Cape, North-West, Limpopo, KZN 45 000 learners in the Nelson Mandela Bay",
    date: "2024",
  },
];


const Timeline = () => {
  return (
    <Fragment>
      <div className="flex flex-col space-y-4 w-full relative">
        <div
          id="timeline"
          className="absolute w-[6px] bg-accent top-0 bottom-0 left-[50%] rounded-md ml-[-3px]"
        ></div>
        {timeline.map((item, index) => (
          <article
            key={index}
            className={`relative ${
              index % 2 === 0 ? "float-left" : "float-right"
            }`}
          >
            <div
              className={`${
                index % 2 === 0 ? "float-left text-right" : "float-right text-left"
              } bg-slate-50 rounded-xl p-4 shadow-lg w-[200px] md:w-[250px] odd:self-start even:self-end odd:place-items-start even:place-items-end`}
            >
              <h2 className="text-2xl mb-2">{item.date}</h2>
              <p className="text-xs md:text-sm">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Fragment>
  );
};
export default Timeline;
