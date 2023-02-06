import NationalGrid from "./NationalGrid";


const Focus = () => {
  return (
    <section className="bg-white py-10 text-slate-800">
      <div className="max-w-7xl mx-auto  py-10 px-8 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <p className="text-slate-700 text-justify text-base leading-7 max-w-[60ch]">
              The Changemaker Network model is a whole-of-school community
              intervention that activates, provides capacity and supports the
              role of local Department of Education and school communities at
              large: learners, educators, community, volunteers, stake-holders.
              This project has been implemented within the Nelson Mandela Bay
              and aims to work within 45 high schools within this region. It
              further aims to be replicated within 4 provinces in South Africa.
              Specifically; Eastern Cape, KwaZulu-Natal, North West and Limpopo.
            </p>
            <p className="text-slate-700 text-justify text-base leading-7 max-w-[60ch]">
              Within these 4 provinces, Civil Society Organisations (CSO) have
              applied and 5 will be selected from each province to become
              implementation partners of the MCN. Each CSO will work within 5
              schools within their district. Thus, resulting in 20 districts and
              25 schools per province and ultimately 100 schools nationwide.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <h3 className="font-extrabold text-4xl uppercase">Focus</h3>
            <div>
              <p className="text-lg font-bold  text-slate-800 leading-7">
                The Changemaker Network will, among others, focus on the
                following topics:
              </p>
              <ul className="list-disc pl-6 text-sm md:text-base leading-7">
                <li className="text-slate-700 leading-7">
                  School Safety: Understanding violence
                </li>
                <li className="text-slate-700 leading-7">
                  Prevention of Gender based violence
                </li>
                <li className="text-slate-700 leading-7">Leadership</li>
                <li className="text-slate-700 leading-7">
                  Inclusion of persons with disabilities
                </li>
                <li className="text-slate-700 leading-7">
                  Environment and climate change
                </li>
                <li className="text-slate-700 leading-7">
                  Healthy relationships & Bullying
                </li>
                <li className="text-slate-700 leading-7">Wellness and Mental Health</li>
                <li className="text-slate-700 leading-7">LGBT awareness</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <NationalGrid />
    </section>
  );
};
export default Focus;
