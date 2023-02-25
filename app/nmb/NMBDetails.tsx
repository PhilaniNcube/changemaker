import Image from "next/image";

const NMBDetails = () => {
  return (
    <section id="nmb" className="bg-accent relative isolate">
      <Image
        src="/images/team.png"
        width={3248}
        height={1365}
        alt="Team"
        className="w-full min-h-[65vh] max-h-[70vh] lg:max-h-[68vh] lg:aspect-video object-cover"
      />
      <div className="absolute inset-0 py-10 bg-slate-600/60 lg:bg-transparent">
        <div className="flex flex-col gap-8 lg:h-full min-h-fit justify-center items-start max-w-7xl mx-auto px-8 lg:px-0 text-white">
          <h2 className="font-extrabold text-3xl lg:text-5xl">
            Nelson <br /> Mandela Bay
          </h2>
          <p className="font-medium text-xs md:text-base leading-6 md:leading-7 text-left max-w-[55ch]">
            Masifunde&apos;s Changemaker Network aims to capacitate learners
            from 45 high schools in the NMBM with practical knowledge on
            relevant social topics.
          </p>
          {/* <p className="font-medium text-xs md:text-base leading-6 md:leading-7 text-justify max-w-[55ch]">
            The programmes can help guide learners that may be exposed to or
            experiencing violence to find coping skills, positive behavioural
            support, or peer-to-peer education. Such programmes can represent
            safe spaces for children to disclose experiences of violence,
            develop leadership skills, change at-risk behaviours and overall
            improve their resilience. Furthermore, this programme makes use of a
            peer-to-peer intervention strategy as it has been proven to work and
            encourage positive influence within schools and communities in
            general.
          </p> */}
        </div>
      </div>
    </section>
  );
};
export default NMBDetails;
