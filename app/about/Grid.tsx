"use client";

import Image from "next/image";

const items = [
  {
    id: 1,
    icon: "/images/links.svg",
    title: "NISSP",
    text: "The trained MCN Partners are supported and mentored to facilitate Learner Activation workshops, where Changemakers will be selected by their peers to represent their clas select their Changemakers, Once they have selected their changemakers, they will guide their learners and educators to receive various online and offline training provided by Masifunde on various topics such as .....after the trained MCN partners have successfully completed the trainings with their Changemakers they will continue to support their learners to plan and implement their school campaigns",
  },

  {
    id: 2,
    icon: "/images/blocks.svg",
    title: "NISSP Toolbox",
    text: "The NISSP Toolbox is a digital platform that links the whole-of-school community to available and effective interventions available within a particular geographical network of  NISSP civil society partners.",
  },
  {
    id: 3,
    icon: "/images/money.svg",
    title: "NISSP Fund",
    text: "The NISSP Fund is a resource mobilization and distribution model that supports the role of civil society organizations to access opportunities for capacity building and implementation resources available through NISSP.",
  },
  {
    id: 4,
    icon: "/images/lightbulb.svg",
    title: "NISSP Training",
    text: "NISSP Districts Training facilitates the strengthening of the partnerships and capacities   of District Coordinators’  and their local Civil Society Organizations to jointly implement available and effective interventions in schools.",
  },
  {
    id: 5,
    icon: "/images/team.svg",
    title: "NISSP MCN",
    text: "NISSP Masifunde Changemaker Network Is a learning and exchange platform for the joint implementation of the intervention in various school communities.",
  },
  {
    id: 6,
    icon: "/images/speaker.svg",
    title: "The NISSP M & E Framework",
    text: "The NISSP M & E Framework is an evidence tool to track the  impact of NISSP interventions by systematically capturing results, measuring  impact and promoting the use of  evidence methods in implementation.",
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
              {/* <Image
                src={item.icon}
                width={50}
                height={50}
                className="w-16 object-cover"
                alt={item.title}
              /> */}
              <p className="font-bold text-lg md:text-2xl mt-2 text-center">
              {item.title}
            </p>
            </div>
            <div className="absolute inset-0 px-2 lg:p-8 group-hover:opacity-100 opacity-0 flex justify-center items-center">
              <p className="text-white text-xs md:text-sm text-center font-medium">
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
