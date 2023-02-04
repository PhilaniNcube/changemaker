import IconGrid from "../../IconGrid";

const Focus = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-slate-700 text-sm md:text-md leading-7">
              The network&apos;s objective is to encourage young people to take
              responsible positive actions, to find constructive solutions and
              to understand that they have the power to impact and influence
              their peers and consequently their communities – and advocate for
              vulnerable groups. By doing that, they create an environment that
              enthuses them to be resilient and reimagine possibilities above
              and over socio-economic disadvantages.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <h3 className="font-extrabold text-4xl uppercase text-slate-800">Focus</h3>
            <div>
              <p className="text-slate-800 underline text-lg font-bold leading-7">
                The Changemaker Network will, among others, focus on the
                following topics:
              </p>
              <ul className="list-disc pl-6 text-sm md:text-md">
                <li className="text-slate-700">
                  School Safety: Understanding violence
                </li>
                <li className="text-slate-700">
                  Prevention of Gender based violence
                </li>
                <li className="text-slate-700">Leadership</li>
                <li className="text-slate-700">
                  Inclusion of persons with disabilities
                </li>
                <li className="text-slate-700">
                  Environment and climate change
                </li>
                <li className="text-slate-700">
                  Healthy relationships & Bullying
                </li>
                <li className="text-slate-700">
                  Wellness and Mental Health
                </li>
                <li className="text-slate-700">LGBT awareness</li>
              </ul>
            </div>
          </div>
        </div>
        <IconGrid />
      </div>
    </section>
  );
};
export default Focus;
