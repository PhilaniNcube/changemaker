import Image from "next/image";

const NationalHero = () => {
  return (
    <section id="national" className="bg-accent relative flex justify-end">
      <Image
        src="/images/changemakers.png"
        width={1500}
        height={1014}
        alt="Changemakers"
        className="object-cover max-w-[60%] min-h-[55vh] max-h-[65vh]"
      />
      <div className="absolute inset-0 bg-slate-600/60 lg:bg-transparent">
        <div className="max-w-7xl mx-auto py-20 flex justify-start">
          <div className="px-4">
            <h1 className="text-white text-3xl lg:text-5xl  font-extrabold">
              MCN <br />
              Nationwide
            </h1>
            <p className="max-w-[65ch] mt-8 leading-6 md:leading-7 text-white text-xs md:text-base font-medium ">
              The Changemaker Network model is a whole-of-school community
              intervention that activates, provides capacity and supports the
              role of local Department of Education and school communities at
              large: learners, educators, community, volunteers, stakeholders.
              This project has been implemented within the Eastern Cape,
              KwaZulu-Natal, North West and Limpopo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NationalHero;
