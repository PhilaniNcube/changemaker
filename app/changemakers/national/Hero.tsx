import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-accent relative flex justify-end">
      <Image
        src="/images/changemakers.png"
        width={1500}
        height={1014}
        alt="Changemakers"
        className="object-cover max-w-[60%] min-h-[55vh] max-h-[65vh]"
      />
      <div className="absolute inset-0">
        <div className="max-w-7xl mx-auto py-20 flex justify-start">
          <div className="px-4">
            <h1 className="text-white text-5xl lg:text-6xl font-extrabold">
              MCN <br />
              Nationwide
            </h1>
            <p className="max-w-[65ch] align-baseline mt-8 text-white text-sm md:text-md font-medium ">
              Masifunde’s Changemaker Network aims to capacitate learners from
              45 high schools in the NMBM with practical knowledge on relevant
              social topics. Through activation workshops for all Grade 9
              learners and intensive changemaker trainings for selected
              learnaers they can spark positive change in their schools and
              communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
