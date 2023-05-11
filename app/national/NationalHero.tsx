import Image from "next/image";
import Link from "next/link";

const NationalHero = () => {
  return (
    <section id="national" className="bg-accent relative flex justify-end">
      <Image
        src="/images/team.png"
        width={1500}
        height={1014}
        alt="Changemakers"
        className="object-cover max-w-[88%] min-h-[55vh] max-h-[65vh]"
      />
      <div className="absolute inset-0 bg-slate-600/60 lg:bg-transparent">
        <div className="max-w-7xl mx-auto py-20 flex justify-start">
          <div className="px-4">
            <h1 className="text-white text-3xl lg:text-5xl max-w-[25ch] font-extrabold">
              Masifundes Changemaker Network National
            </h1>
            <p className="max-w-[65ch] mt-3 lg:mt-8 leading-6 md:leading-7 text-white text-xs md:text-base font-medium ">
              The Changemaker Network Project aims to capacitate learners with
              practical knowledge on relevant social topics, such as school
              safety, violence and bullying. This is achieved through activation
              workshops for all Grade 9 learners and intensive changemaker
              trainings for selected learners. The training equips learners with
              practical tools to act as agents of change in their schools. They
              learn campaigning, public speaking and in general about the role
              they and their peers can play in initiating change in their direct
              social environment, particularly regarding addressing
              interpersonal/gender-based violence.
            </p>
            {/* <p className="max-w-[65ch] mt-3 lg:mt-8 leading-6 md:leading-7 text-white text-xs md:text-base font-medium ">
              The Changemaker Network model is a whole-of-school community
              intervention supporting the&nbsp;
              <span>
                <Link
                  href="/about/nissp"
                  className="font-bold cursor-pointer underline"
                >
                  National Inclusive and Safer Schools Partnership&nbsp;(NISSP)
                </Link>
              </span>
              &nbsp; of the National Department of Basic Education. The
              intervention activates, provides capacity and supports the role of
              local Department of Education and school communities at large:
              learners, educators, community, volunteers, stakeholders. This
              project has been implemented within the Eastern Cape,
              KwaZulu-Natal, North West and Limpopo.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default NationalHero;
