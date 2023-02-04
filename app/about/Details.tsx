import Grid from "./Grid";

const Details = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full">
          <h2 className="font-extrabold text-slate-800 text-4xl lg:text-6xl">
            NISSP
          </h2>
          <h4 className="font-bold text-slate-800 text-2xl lg:text-3xl">
            National Inclusive and Safer <br />
            Schools Partnership
          </h4>
        </div>

        <div className="w-full">
          <p className="text-md lg:text-lg text-slate-800 mb-4 text-justify">
            Local cooperation on the National Inclusive and Safer Schools
            Partnership (NISSP) The National Inclusive and Safer Schools
            Partnership (NISSP) of the Department of Basic Education is a joint
            national partnership to promote the collective action of the
            whole-of-school community to prevent violence and gender-based
            violence (GBV) occurring in South African schools. The NISSP aims to
            do this by coordinating, co-resourcing and jointly implementing
            school-based gender-based violence prevention programmes that will
            empower the role of District Officials, Civil Society Organizations,
            educators and learner-leaders across four provinces. The
            intervention is led by the Department of Basic Education (DBE)
            supported by the German Development Cooperation and Global Affairs
            Canada through the GIZ Inclusive Violence and Crime Prevention (VCP)
            Programme, Masifunde Learner Development, Agape Youth Movement
            (AYM), various stakeholders from academia, civil society, and
            government departments.
          </p>
          <p className="text-md lg:text-lg text-slate-800 mb-4 text-justify">
            The World Health Organization&apos;s handbook for the prevention of
            violence against children identified the whole-school approach to
            the prevention of violence and discriminations affecting children in
            schools as a necessary approach to best support schools to not only
            cope but tangibly promote safe and inclusive schools in which all
            who participate are protected, safe and can develop holistically.
          </p>
          <p className="text-md lg:text-lg text-slate-800 mb-4 text-justify">
            Pillar one of the policies outlines the &apos;Creating a safe and
            responsive learning environment&apos; for the prevention of violence
            and promotion of experiences of safety and inclusion by the
            whole-school community. The pillar aims to guide the establishment
            of a learning environment that is conducive to the effective
            development and implementation of programmes to reduce and eliminate
            bullying and violence in schools. Pillar two encourages that school
            management should be supported with capacities that enable to play
            an active role in &apos;Early identification and early
            intervention&apos; on threats of violence within schools.
          </p>
        </div>
      </div>
      <Grid />
    </section>
  );
};
export default Details;
