"use client";

import Image from "next/image";

const items = [
  {
    id: 1,
    icon: "/images/links.svg",
    title: "Activation Workshops",
    text: "NISSP is a national multistakeholder structure/platform that aims to promote the collective action of the whole-of-school community to prevent violence and gender-based violence (GBV) occurring in South African schools.",
  },

  {
    id: 2,
    icon: "/images/blocks.svg",
    title: "Activation Workshops",
    text: "NISSP Toolbox is an evidence and activities database that support the use and generating of evidence by the various interventions across the board of school-based programming.",
  },
  {
    id: 3,
    icon: "/images/money.svg",
    title: "Activation Workshops",
    text: "NISSP Fund that will be established as a  costed grant that supports the role of civil society organizations to access opportunities for capacity building and implementation resources available through NISSP mobilized resources for the prevention of violence and GBV in schools.",
  },
  {
    id: 4,
    icon: "/images/lightbulb.svg",
    title: "Activation Workshops",
    text: "NISSP Training for Districts & Civil Society Organizations is a sustainable model for the activation of community-based support, namely civil society organizations within close geographical location to schools.",
  },
  {
    id: 5,
    icon: "/images/team.svg",
    title: "Activation Workshops",
    text: "NISSP Masifunde Changemaker Network is a demonstration model for the upscaling of a school-based project, through the establishment of networks of civil society organizations.",
  },
  {
    id: 6,
    icon: "/images/speaker.svg",
    title: "Activation Workshops",
    text: "The NISSP M & E Framework is a tool to track impact is a huge contribution to the sectoral needs for systematically measuring impact and promoting evidence -driven interventions.",
  },
];

const Grid = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 lg:px-0">
      <p className="text-2xl md:text-3xl font-bold text-center text-slate-800 mt-10 mb-6">
        The NISSP strategy consists of six areas
      </p>
      <div className=" mt-4 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16 lg:gap-28">
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
