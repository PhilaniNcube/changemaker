import Image from 'next/image'

const PartnersHero = () => {
  return (
    <section id="partners" className="relative py-8 bg-masifunde isolate">
      <Image
        src="/images/cso.jpg"
        width={2000}
        height={1600}
        alt="Team"
        className="w-full min-h-[55vh] aspect-video object-cover"
      />
      <div className="absolute inset-0 py-10 bg-slate-600/60 ">
        <div className="flex flex-col items-start justify-center h-full gap-8 px-8 mx-auto text-white max-w-7xl">
          <h2 className="font-extrabold text-3xl lg:text-5xl max-w-[32ch] text-center mx-auto">
            Partner CSO&apos;s Profiles
          </h2>
        </div>
      </div>
    </section>
  );
};
export default PartnersHero;
