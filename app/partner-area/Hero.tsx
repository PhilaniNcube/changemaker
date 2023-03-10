const Hero = () => {
  return (
    <section className="bg-accent py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-0">
        <div className="h-full w-full flex flex-col items-start justify-center">
          <h1 className="text-white text-4xl lg:text-5xl">
            <span className="font-bold italic">Join the national</span> <br />
            <span className="lg:text-6xl uppercase font-extrabold">
              Changemaker
            </span>{" "}
            <br />
            <span className="lg:text-7xl uppercase font-extrabold">
              Network
            </span>{" "}
            <br />
          </h1>
          <span className="bg-slate-700 mt-3 px-4 py-4 text-white">
            <p className="text-2xl font-bold">become an implementation partner</p>
          </span>
        </div>
      </div>
    </section>
  );
};
export default Hero;
