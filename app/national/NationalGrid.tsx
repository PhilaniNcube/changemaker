"use client";

import Image from "next/image";


const items = [
  {
    id: 0,
    icon: "/images/capacity_building.svg",
    title: "Capacity Building",
    text: "Selected Civil Society Organizations are trained in a one-week capacity building workshop. District officials join the training and work together with representatives to develop school safety interventions. ",
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
    title: "Virtual Changemaker Training",
    text: "With support from masifunde CSO’s coordinate a hybrid training for the selected changemakers. This allows learners to learn more about being a changemaker and be trained on topics including school safety and bullying prevention, as well as meet other changemakers from other parts of south africa",
  },
  {
    id: 3,
    icon: "/images/speaker.svg",
    title: "Campaigning/Outreach",
    text: "The changemakers then address their peers at the school’s assembly/ classrooms on the core topics they have been trained on. They share the knowledge they have learned through workshops, presentations, and art. They hand out the youth magazine SPARK to all learners in the school, as one of their primary acts as catalysts of positive change.  The SPARK magazine is published for each of the topic, each with the content that the learners have been trained in and contributed towards.",
  },
  {
    id: 4,
    icon: "/images/school_clubs.svg",
    title: "School Changemaker Clubs",
    text: "Changemaker Clubs are a learner-led school clubs that promotes social awareness, leadership and active citizenship in the school community. They help learners identify challenges in their school or community, plan solutions, work as a team, and implement meaningful projects. ",
  },
  {
    id: 5,
    icon: "/images/teacher_training.svg",
    title: "Teacher & DBE Official Trainings",
    text: "Educators and DBE District Officials are capacitated on key topics to support Changemaker work and help create a safe, supportive environment. Teachers are equipped to guide learners, while District Officials are empowered to support interventions and influence policy. ",
  },
];

const NationalGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-6 px-8 py-10 mx-auto bg-white max-w-7xl md:grid-cols-2 lg:grid-cols-3 md:gap-16 lg:gap-12">
      {items.map((item) => (
        <div
          key={item.id}
          className="w-full mx-auto aspect-square px-3 py-2 bg-[#2a2d2e] group relative isolate"
        >
          <div className="flex flex-col items-center justify-center w-full h-full gap-4 text-white transition-all duration-300 group-hover:hidden">
            <Image
              src={item.icon}
              width={50}
              height={50}
              className="object-contain w-12 h-12"
              alt={item.title}
            />
            <p className="mt-2 text-lg font-bold text-center md:text-xl">
              {item.title}
            </p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center px-6 opacity-0 group-hover:opacity-100">
            <p className="text-xs font-medium text-white">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default NationalGrid;
