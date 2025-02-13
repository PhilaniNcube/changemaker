
import Image from "next/image";


const items = [
	{
		id: 0,
		icon: "/images/on_off.svg",
		title: "Capacity building",
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
		icon: "/images/speaker.svg",
		title: "Community Action Projects",
		text: "Nature-based community action projects are to be established and implemented at each school after campaigning. The activities are focusing on nature conservation and climate protection",
	},
];

const AcademyGrid = () => {
  return (
    <div className="container grid grid-cols-1 gap-6 px-8 py-10 mx-auto bg-white md:grid-cols-2 lg:grid-cols-5 md:gap-16 lg:gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="w-full mx-auto aspect-[4/5] px-3 py-2 bg-[#2a2d2e] group relative isolate"
        >
          <div className="flex flex-col items-center justify-center w-full h-full gap-4 text-white transition-all duration-300 group-hover:hidden">
            <Image
              src={item.icon}
              width={50}
              height={50}
              className="object-contain w-12 h-12"
              alt={item.title}
            />
            <p className="mt-2 text-lg font-bold text-center">
              {item.title}
            </p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center px-6 opacity-0 lg:px-2 group-hover:opacity-100">
            <p className="text-xs font-medium text-white">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AcademyGrid;
