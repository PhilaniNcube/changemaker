import IconGrid from "@/app/IconGrid";
import Image from "next/image";
import Link from "next/link";

const sparkMags = [
  {
    title: "Spark 1st Edition",
    thumbnail: "/images/nmb/nmb_spark_1.jpg",
    doc: "/images/nmb/nmb_spark_1.pdf",
  },
  {
    title: "Spark 2nd Edition",
    thumbnail: "/images/nmb/nmb_spark_2.jpg",
    doc: "/images/nmb/nmb_spark_2.pdf",
  },
  {
    title: "Spark 3rd Edition",
    thumbnail: "/images/nmb/nmb_spark_3.jpg",
    doc: "/images/nmb/nmb_spark_3.pdf",
  },
  {
    title: "Spark 4th Edition",
    thumbnail: "/images/nmb/nmb_spark_4.jpg",
    doc: "/images/nmb/nmb_spark_4.pdf",
  },
];


const NMBFocus = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            {/* <p className="text-slate-700 text-justify text-base leading-7 max-w-[60ch]">
              Through activation workshops for all Grade 9 learners and
              intensive changemaker trainings for selected learners they can
              spark positive change in their schools and communities.
            </p> */}
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
                The Changemaker Network focuses on the following topics:
              </p>
              <ul className="list-disc pl-6 text-sm md:text-base leading-7">
                <li className="text-slate-700 leading-7">
                  School Safety: Understanding violence
                </li>
                <li className="text-slate-700 leading-7">
                  Prevention of Gender Based Violence (GBV)
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
                <li className="text-slate-700 leading-7">
                  Wellness and Mental Health
                </li>
                <li className="text-slate-700 leading-7">LGBT awareness</li>
              </ul>{" "}
              <p className="text-slate-700 text-justify text-base leading-7 max-w-[60ch] mt-3">
                Spark magazines are a youth friendly, interactive magazine that
                changemakers use as a catalyst to bring change. Spark magazines
                contain more information on these focus topics, compiled by
                researchers and learners. Content allows readers to learn more
                about the topics as well as engage in practical tools and
                activities that one can put into practice and do with peers.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mt-10">
          <p className="text-slate-800 text-center text-2xl font-bold leading-7">
            Spark Magazine Editions
          </p>
          <div className="w-full flex justify-between items-center mt-4">
            {sparkMags.map((mag, i) => (
              <Link href={mag.doc} key={i} className="w-1/5 rounded-lg cursor-pointer overflow-hidden">
                <Image src={mag.thumbnail} width={1748} height={2480} alt={mag.title} />
              </Link>
            ))}
          </div>
        </div>
        <IconGrid />
      </div>
    </section>
  );
};
export default NMBFocus;
