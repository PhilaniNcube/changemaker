"use client";

import Image from "next/image";

const items = [
  {
    id: 1,
    icon: "/images/links.svg",
    title: "Activation Workshops",
    text: "Multi-stakeholder coordination and co-resourcing structure.",
  },

  {
    id: 2,
    icon: "/images/blocks.svg",
    title: "Activation Workshops",
    text: "An evidence-informed framework, consolidating of all available tools (manuals, programmes, services etc.)",
  },
  {
    id: 3,
    icon: "/images/money.svg",
    title: "Activation Workshops",
    text: "A fund to sustainably resource school-based programmes.",
  },
  {
    id: 4,
    icon: "/images/lightbulb.svg",
    title: "Activation Workshops",
    text: "Orientation & capacity building of District Officials to champion school-based activities",
  },
  {
    id: 5,
    icon: "/images/team.svg",
    title: "Activation Workshops",
    text: "Whole-of-school Network of actors (educators, learners, Community Organizations) that take action to prevent gbv through schools",
  },
  {
    id: 6,
    icon: "/images/team.svg",
    title: "Activation Workshops",
    text: "A digitized tool to monitor and evaluate the coordinated and co-resourced work across South Africa.",
  },

];

const Grid = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 lg:px-0">
      <p className="text-2xl md:text-3xl font-bold text-center text-slate-800 mt-10 mb-6">
        The six gaps identified in the research conducted to formulate NISSP
      </p>
      <div className=" mt-4 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-full aspect-square p-8 bg-accent group relative isolate"
          >
            <div className="group-hover:hidden w-full h-full flex flex-col text-white transition-all duration-300 items-center justify-center gap-4">
              <Image
                src={item.icon}
                width={50}
                height={50}
                className="w-16 object-cover"
                alt={item.title}
              />
              {/* <p className="font-bold text-lg md:text-2xl mt-2 text-center">
              {item.title}
            </p> */}
            </div>
            <div className="absolute inset-0 px-2 lg:p-8 group-hover:opacity-100 opacity-0 flex justify-center items-center">
              <p className="text-white text-xs md:text-sm lg:text-lg text-center font-medium">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Grid;
