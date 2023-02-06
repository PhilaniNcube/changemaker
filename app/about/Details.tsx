import Image from "next/image";
import Grid from "./Grid";

const Details = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full">
          <h2 className="font-extrabold text-slate-800 text-4xl lg:text-6xl">
            NISSP
          </h2>{" "}
          <h4 className="font-bold text-slate-800 text-2xl lg:text-3xl">
            National Inclusive and Safer Schools Partnership
          </h4>
          {/* <Image
            src="/images/books.jpg"
            width={640}
            height={960}
            alt="Books"
            className="w-full object-cover aspect-video rounded-lg mt-5"
          /> */}
        </div>

        <div className="w-full">
          {" "}
          <p className="text-md lg:text-lg text-slate-800 mb-4 text-justify ">
            The National Inclusive and Safer Schools Partnership (NISSP) of the
            Department of Basic Education is a joint national partnership to
            promote the collective action of the whole-of-school community to
            prevent violence and gender-based violence (GBV) occurring in South
            African schools.
          </p>
          <p className="text-md lg:text-lg text-slate-800 mb-4 text-justify">
            The NISSP aims to do this by coordinating, co-resourcing and jointly
            implementing school-based gender-based violence prevention
            programmes that will empower the role of District Officials, Civil
            Society Organizations, educators and learner-leaders across four
            provinces. The intervention is led by the Department of Basic
            Education (DBE) supported by the German Development Cooperation and
            Global Affairs Canada through the GIZ Inclusive Violence and Crime
            Prevention (VCP) Programme, Masifunde Learner Development, Agape
            Youth Movement (AYM), various stakeholders from academia, civil
            society, and government departments.
          </p>
        </div>
      </div>
      <Grid />
    </section>
  );
};
export default Details;
