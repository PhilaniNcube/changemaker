import IconGrid from "@/app/IconGrid";
import MagazineSlider from "./MagazineSlider";
import type { NmbPageFocus } from "@/sanity/lib/client";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";




type PageProps = {
  text: string;
  focus: NmbPageFocus;
  content: PortableTextBlock[];
};


const NMBFocus = ({ text, focus ,content}: PageProps) => {



  return (
    <section className="py-20 bg-white">
      <div className="px-8 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            {/* <p className="text-slate-700 text-justify text-base leading-7 max-w-[60ch]">
              Through activation workshops for all Grade 9 learners and
              intensive changemaker trainings for selected learners they can
              spark positive change in their schools and communities.
            </p> */}            <p className="text-slate-800 text-justify text-base lg:text-lg leading-7 max-w-[60ch] grid gap-x-5">
              <PortableText value={content} />
            </p>
          </div>
          <div className="flex flex-col gap-6 md:flex-row">
            <h3 className="text-4xl font-extrabold uppercase text-slate-800">
              {focus.nmbfocuHeading}
            </h3>
            <div>
              <p className="text-lg font-bold leading-7 text-slate-800">
                {focus.nmbfocusSubheading}
              </p>
              <ul className="pl-6 text-sm leading-7 list-disc md:text-base">
                {focus.nmbFocusList.map((item, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <li key={index} className="leading-7 text-slate-700">
                  {item}
                </li>
                ))}

                {/* <li className="leading-7 text-slate-700">
                  Prevention of Gender Based Violence (GBV)
                </li>
                <li className="leading-7 text-slate-700">Leadership</li>
                <li className="leading-7 text-slate-700">
                  Inclusion of persons with disabilities
                </li>
                <li className="leading-7 text-slate-700">
                  Environment and climate change
                </li>
                <li className="leading-7 text-slate-700">
                  Healthy relationships & Bullying
                </li>
                <li className="leading-7 text-slate-700">
                  Wellness and Mental Health
                </li>
                <li className="leading-7 text-slate-700">LGBT awareness</li> */}
              </ul>{" "}
              <p className="text-slate-700 text-justify text-base leading-7 max-w-[60ch] mt-3">
               {focus.nmbfocusDescription}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mt-10">
          <p className="text-2xl font-bold leading-7 text-center text-slate-800">
            Spark Magazine Editions
          </p>
          <div className="flex items-center justify-between w-full mt-4">

            <MagazineSlider />
          </div>
        </div>
        <IconGrid />
      </div>
    </section>
  );
};
export default NMBFocus;
