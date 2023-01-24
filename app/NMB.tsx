import Image from "next/image";

const NMB = () => {
  return (
    <section className="bg-accent relative isolate">
      <Image
        src="/images/team.png"
        width={3248}
        height={1365}
        alt="Team"
        className="w-full max-h-[68vh] aspect-video object-cover"
      />
      <div className="absolute inset-0 py-10">
        <div className="flex flex-col gap-8 h-full justify-center items-start max-w-7xl mx-auto text-white">
          <h2 className="font-extrabold text-3xl lg:text-6xl">
            Nelson <br /> Mandela Bay
          </h2>
          <p className="font-medium text-md leading-7 text-justify max-w-[55ch]">
            Masifunde&apos;s Changemaker Network aims to capacitate learners from 45
            high schools in the NMBM with practical knowledge on relevant social
            topics. Through activation workshops for all Grade 9 learners and
            intensive changemaker trainings for selected learnaers they can
            spark positive change in their schools and communities.
          </p>
        </div>
      </div>
    </section>
  );
};
export default NMB;
