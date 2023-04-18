"use client"

import Image from "next/image";


const items = [
  {
    id: 0,
    icon: "/images/on_off.svg",
    title: "Capacity building",
    text: "Capacity building refers to the process of enhancing an individual, group, organization, or community's ability to identify, plan, and achieve their goals effectively and efficiently. This involves strengthening their knowledge, skills, resources, and competencies to adapt and respond to challenges, solve problems, and sustain growth and development. Capacity building can occur at various levels, including personal, organizational, and societal, and may encompass various activities such as training, mentoring, networking, strategic planning, and resource mobilization. ",
  },
  {
    id: 1,
    icon: "/images/on_off.svg",
    title: "Activation Workshops",
    text: "A 45-minute Activation Workshop is facilitated to Grade 9 learners in selected high schools in the across the country to encourage them to see themselves as potential changemakers who can promote equality and raise awareness about issues of public concern. In the workshop, the learners elect two of their peers to represent their school as changemaker and attend the one-week training.",
  },
  {
    id: 2,
    icon: "/images/gears.svg",
    title: "Changemaker Training",
    text: "Selected learners then attend a one-week training to become capacitated in the core topics and receive tools and methods necessary to act as changemakers in their schools. The objective is to create a common understanding of the importance of youth participation and resilience even during the difficult times of a global pandemic. Youthful methods are used and a safe environment is created which encourages dialogues, positive thinking and action.",
  },
  {
    id: 3,
    icon: "/images/speaker.svg",
    title: "Campaigning/Outreach",
    text: "The changemakers then address their peers at the school’s assembly/ classrooms on the core topics they have been trained on. They share the knowledge they have learned through workshops, presentations, and art. They hand out the youth magazine SPARK to all learners in the school, as one of their primary acts as catalysts of positive change.  The SPARK magazine is published for each of the topic, each with the content that the learners have been trained in and contributed towards.",
  },
];

const IconGrid = () => {

  return <div className="max-w-7xl mx-auto px-8 lg:px-0 mt-10 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-20">
    {items.map((item) => (
      <div key={item.id} className="w-full mx-auto  aspect-[6/7] px-3 py-2 bg-accent group relative isolate">
        <div className="group-hover:hidden w-full h-full flex flex-col text-white transition-all duration-300 items-center justify-center gap-4">
          <Image src={item.icon} width={50} height={50} className="w-12 h-12 object-contain" alt={item.title} />
          <p className="font-bold text-lg md:text-xl mt-2 text-center">
            {item.title}
          </p>
        </div>
        <div className="absolute inset-0 px-2 group-hover:opacity-100 opacity-0 flex justify-center items-center">
          <p className="text-white text-xs font-medium ">{item.text}</p>
        </div>
      </div>
    ))}
  </div>;
};
export default IconGrid;
