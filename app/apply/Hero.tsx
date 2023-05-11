const Hero = () => {
  return (
    <section className="bg-accent py-10">
      <div className="max-w-7xl mx-auto px-8 lg:px-0">
        <div className="h-full w-full flex flex-col items-start justify-center">
          <h1 className="text-white text-4xl lg:text-5xl">
            <span className="font-bold italic">Apply</span> <br />
            <span className="lg:text-6xl uppercase font-extrabold">
              Changemaker
            </span>{" "}
            <br />
            <span className="lg:text-7xl uppercase font-extrabold">
              Network
            </span>{" "}
            <br />
          </h1>
          <p className="max-w-lg text-white text-md font-medium">
            Thank you for completing the Partner Self Check. You qualify to
            apply to become an implementation partner for Masifunde’s
            Changemaker Network. Please apply on the link below.
          </p>
          <span className="bg-slate-700 mt-3 px-10 py-2 text-white">
            <a
              href="https://docs.google.com/forms/d/1BjJxaWkouxo426KASvzFUMRw6qOB7whqizBiZkSfw3o/viewform?ts=62d6a16e&edit_requested=true"
              className="text-2xl font-bold"
            >
              Apply Now
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};
export default Hero;
