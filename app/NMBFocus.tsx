import IconGrid from "@/app/IconGrid";


const NMBFocus = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-8 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-slate-700 text-justify text-base leading-7 max-w-[60ch]">
              Through activation workshops for all Grade 9 learners and
              intensive changemaker trainings for selected learners they can
              spark positive change in their schools and communities.
            </p>
            <p className="text-slate-700 text-justify text-base leading-7 max-w-[60ch] mt-3">
              The programmes can help guide learners that may be exposed to or
              experiencing violence to find coping skills, positive behavioural
              support, or peer-to-peer education. Such programmes can represent
              safe spaces for children to disclose experiences of violence,
              develop leadership skills, change at-risk behaviours and overall
              improve their resilience. Furthermore, this programme makes use of
              a peer-to-peer intervention strategy as it has been proven to work
              and encourage positive influence within schools and communities in
              general.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <h3 className="font-extrabold text-4xl uppercase text-slate-800">
              Focus
            </h3>
            <div>
              <p className="text-slate-800  text-lg font-bold leading-7">
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
        <IconGrid />
      </div>
    </section>
  );
};
export default NMBFocus;
