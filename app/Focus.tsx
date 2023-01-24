import IconGrid from "./IconGrid";

const Focus = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-black text-lg font-medium leading-7">
              The network&apos;s objective is to encourage young people to take
              responsible positive actions, to find constructive solutions and
              to understand that they have the power to impact and influence
              their peers and consequently their communities – and advocate for
              vulnerable groups. By doing that, they create an environment that
              enthuses them to be resilient and reimagine possibilities above
              and over socio-economic disadvantages.
            </p>
          </div>
          <div className="flex gap-6">
            <h3 className="font-extrabold text-4xl uppercase">Focus</h3>
            <div>
              <p className="text-black text-lg font-bold leading-7">
                The Changemaker Network will, among others, focus on the
                following topics:
              </p>
              <ul className="list-disc pl-6">
                <li className="font-medium text-black">
                  School Safety: Understanding violence
                </li>
                <li className="font-medium text-black">
                  Prevention of Gender based violence
                </li>
                <li className="font-medium text-black">Leadership</li>
                <li className="font-medium text-black">
                  Inclusion of persons with disabilities
                </li>
                <li className="font-medium text-black">
                  Environment and climate change
                </li>
                <li className="font-medium text-black">
                  Healthy relationships & Bullying
                </li>
                <li className="font-medium text-black">
                  Wellness and Mental Health
                </li>
                <li className="font-medium text-black">LGBT awareness</li>
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
