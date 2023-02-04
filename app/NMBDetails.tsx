import Image from "next/image";

const NMBDetails = () => {
  return (
    <section id="nmb" className="bg-accent relative isolate">
      <Image
        src="/images/team.png"
        width={3248}
        height={1365}
        alt="Team"
        className="w-full min-h-[65vh] lg:max-h-[68vh] lg:aspect-video object-cover"
      />
      <div className="absolute inset-0 py-10 bg-slate-600/60 lg:bg-transparent">
        <div className="flex flex-col gap-8 lg:h-full min-h-fit justify-center items-start max-w-7xl mx-auto px-8 lg:px-0 text-white">
          <h2 className="font-extrabold text-3xl lg:text-6xl">
            Nelson <br /> Mandela Bay
          </h2>
          <p className="font-medium text-md leading-7 text-justify max-w-[55ch]">
            Masifunde&apos;s Changemaker Network aims to capacitate learners
            from 45 high schools in the NMBM with practical knowledge on
            relevant social topics. Through activation workshops for all Grade 9
            learners and intensive changemaker trainings for selected learnaers
            they can spark positive change in their schools and communities.
          </p>
        </div>
      </div>
    </section>
  );
};
export default NMBDetails;
