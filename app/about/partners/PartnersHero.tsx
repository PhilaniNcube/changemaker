import Image from 'next/image'

const PartnersHero = () => {
  return (
    <section id="nmb" className="relative bg-masifunde isolate">
      <Image
        src="/images/four.jpg"
        width={2976}
        height={1984}
        alt="Team"
        className="w-full min-h-[55vh] max-h-[70vh] lg:max-h-[56vh] lg:aspect-video object-cover"
      />
      <div className="absolute inset-0 py-10 bg-slate-600/60 ">
        <div className="flex flex-col items-start justify-center gap-8 px-8 mx-auto text-white lg:h-full min-h-fit max-w-7xl">
          <h2 className="font-extrabold text-3xl lg:text-5xl max-w-[32ch] text-center mx-auto">
            Partner CSO&apos;s Profiles
          </h2>
        </div>
      </div>
    </section>
  );
};
export default PartnersHero;
