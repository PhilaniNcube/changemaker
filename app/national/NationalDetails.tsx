import NationalFunders from "./NationalFunders";

const Details = () => {
  return (
    <section className="bg-white pt-10">
      <NationalFunders />
      <div className="max-w-7xl mx-auto px-8 lg:px-0 gap-10">
        <p className="text-slate-700 text-justify text-base leading-7 mt-8">
          The Changemaker Network Project aims to capacitate learners with
          practical knowledge on relevant social topics, such as school safety,
          violence and bullying. This is achieved through activation workshops
          for all Grade 9 learners and intensive changemaker trainings for
          selected learners. The training equips learners with practical tools
          to act as agents of change in their schools. They learn campaigning,
          public speaking and in general about the role they and their peers can
          play in initiating change in their direct social environment,
          particularly regarding addressing interpersonal/gender-based violence.
        </p>
        <p className="text-slate-700 text-justify text-base leading-7 mt-8">
          The programmes can help guide learners that may be exposed to or
          experiencing violence to find coping skills, positive behavioural
          support, or peer-to-peer education.
        </p>
      </div>
    </section>
  );
};
export default Details;
