import { HomepageContent } from "@/sanity/lib/client";

const Mission = ({ content }: { content: HomepageContent }) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto text-gray-800 px-8 lg:px-0 flex flex-col md:flex-row gap-4 md:gap-8 md:justify-center">
        <h2 className="font-extrabold  text-4xl lg:text-6xl">{content.objectiveTitle}</h2>
        <p className="text-md lg:text-md mt-4 text-justify max-w-[73ch]  leading-6">
         {content.objectiveDescription}
        </p>
      </div>
    </section>
  );
};
export default Mission;
