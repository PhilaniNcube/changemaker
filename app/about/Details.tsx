import Image from "next/image";
import Grid from "./Grid";

const Details = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
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
          <p className="text-md lg:text-base text-slate-800 mb-4 text-justify ">
            A joint national partnership to strengthen collective action for the
            institutionalization and multistakeholder-resourcing of school-based
            violence prevention programmes, by consolidating, co-resourcing, and
            implementing preventative approaches, led by the Department of Basic
            Education (DBE) supported by German Development Cooperation (GIZ)
            and various stakeholders from civil society, academia and other
            government departments. The Changemaker Network model is a
            whole-of-school community intervention supporting the National
            Inclusive and Safer Schools Partnership (NISSP) of the National
            Department of Basic Education
          </p>
        </div>
      </div>
      <Grid />
    </section>
  );
};
export default Details;
