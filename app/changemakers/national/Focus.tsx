import Grid from "./Grid";


const Focus = () => {
  return (
    <section className="bg-white py-10 text-slate-800">
      <div className="max-w-7xl mx-auto border-t-2 border-slate-700 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-lg font-medium leading-7">
              The Changemaker Network model is a whole-of-school community
              intervention that activates, provides capacity and supports the
              role of local Department of Education and school communities at
              large: learners, educators, community, volunteers, stake-holders.
              This project has been implemented within the Nelson Mandela Bay
              and aims to work within 45 high schools within this region. It
              further aims to be replicated within 4 provinces in South Africa.
              Specifically; Eastern Cape, KwaZulu-Natal, North West and Limpopo.
            </p>
            <p className="text-lg font-medium mt-6 leading-7">
              Within these 4 provinces, Civil Society Organisations (CSO) have
              applied and 5 will be selected from each province to become
              implementation partners of the MCN. Each CSO will work within 5
              schools within their district. Thus, resulting in 20 districts and
              25 schools per province and ultimately 100 schools nationwide.
            </p>
          </div>
          <div className="flex gap-6">
            <h3 className="font-extrabold text-4xl uppercase">Focus</h3>
            <div>
              <p className="text-lg font-bold leading-7">
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
      </div>
      <Grid />
    </section>
  );
};
export default Focus;
