import { getSchools } from "@/fetchers/schools";

const NMBSchools = async () => {

  const mcnSchools = await getSchools()

  return <section id="schools" className="py-20 bg-slate-100">
    <div className="px-8 mx-auto max-w-7xl">
       <h2 className="mb-8 text-3xl font-bold text-center text-slate-800">Schools currently in the programme are:</h2>
       <div className="columns-1 sm:columns-2 md:columns-3 gap-x-4 gap-y-2" >
        {mcnSchools.map((school, index) => (
          <p className="text-sm font-medium text-slate-700 md:text-md" key={index}>{school.name}</p>
        ))}
       </div>
    </div>
  </section>;
};
export default NMBSchools;
