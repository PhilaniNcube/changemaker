"use client";

import Image from "next/image";

const items = [
  {
    id: 1,
    icon: "/images/links.svg",
    title: "NISSP",
    text: "The trained MCN Partners are supported and mentored to facilitate Learner Activation workshops, where Changemakers will be selected by their peers to represent their clas select their Changemakers, Once they have selected their changemakers, they will guide their learners and educators to receive various online and offline training provided by masifunde on various topics such as .....after the trained MCN partners have successfully completed the trainings with their Changemakers they will continue to support their learners to plan and implement their school campaigns",
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
    text: "NISSP masifunde Changemaker Network Is a learning and exchange platform for the joint implementation of the intervention in various school communities.",
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
    <div className="px-8 mx-auto max-w-7xl">
      <p className="mt-10 mb-6 text-2xl font-bold text-center md:text-3xl text-slate-800">
        The NISSP strategy consists of six areas
      </p>
      <div className="grid grid-cols-1 gap-6 mt-4 bg-white  md:grid-cols-2 lg:grid-cols-3 md:gap-16 lg:gap-28">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative w-full p-8 aspect-square bg-masifunde group isolate"
          >
            <div className="flex flex-col items-center justify-center w-full h-full gap-4 text-white transition-all duration-300 group-hover:hidden">
              {/* <Image
                src={item.icon}
                width={50}
                height={50}
                className="object-cover w-16"
                alt={item.title}
              /> */}
              <p className="mt-2 text-lg font-bold text-center md:text-2xl">
              {item.title}
            </p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center px-2 opacity-0 lg:p-8 group-hover:opacity-100">
              <p className="text-xs font-medium text-center text-white md:text-sm">
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
