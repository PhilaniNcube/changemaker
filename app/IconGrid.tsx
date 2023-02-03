"use client"

import Image from "next/image";
import { isTemplateSpan } from "typescript";

const items = [
  {
    id: 1,
    icon: "/images/on_off.svg",
    title: "Activation Workshops",
    text: "A 45 minutes Activation Workshop is facilitated to Grade 9 learners in 45 high schools in the Nelson Mandela Bay to encourage them to see themselves as potential changemakers who can promote equality and raise awareness about issues of public concern. In the workshop the learners elect two of their peers to represent their school as changemaker and attend the one-week training.",
  },
  {
    id: 2,
    icon: "/images/gears.svg",
    title: "Changemaker Training",
    text: "Selected learners from 45 high schools then attend a one-week training to become capacitated in the core topics (see above) and receive tools and methods necessary to act as changemakers in their schools. The objective is to create a common understanding of the importance of youth participation and resilience even during the difficult times of a global pandemic. Youthful methods are used and a safe environment is created which encourages dialogues, positive thinking and action.",
  },
  {
    id: 3,
    icon: "/images/speaker.svg",
    title: "Campaigning/Outreach",
    text: "The changemakers then address their peers at the school’s assembly/ classrooms on the core topics they have been trained on. They share the knowledge they have learned through workshops, presentations and art. They hand out the youth magazine SPARK to all learners in the school, as one of their primary acts as catalysts of positive change. The SPARK magazine is published for each of the topic each with the content that the learners have been trained in and contributed towards.",
  },
];

const IconGrid = () => {

  return <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-10 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.map((item) => (
      <div key={item.id} className="w-full  aspect-square p-8 bg-accent group relative isolate">
        <div className="group-hover:hidden w-full h-full flex flex-col text-white transition-all duration-300 items-center justify-center gap-4">
          <Image src={item.icon} width={50} height={50} className="w-20 h-20 object-contain" alt={item.title} />
          <p className="font-bold text-lg md:text-2xl mt-2 text-center">
            {item.title}
          </p>
        </div>
        <div className="absolute inset-0 px-2 lg:p-8 group-hover:opacity-100 opacity-0 flex justify-center items-center">
          <p className="text-white text-xs md:text-sm font-medium text-justify">{item.text}</p>
        </div>
      </div>
    ))}
  </div>;
};
export default IconGrid;
