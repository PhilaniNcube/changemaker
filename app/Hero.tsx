import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative flex justify-end bg-dark">
      {" "}
      <Image
        src="/images/sparkle.jpg"
        width={1469}
        height={980}
        priority
        quality={100}
        alt="Background"
        className="object-cover h-screen lg:max-h-[65vh] w-full md:w-1/2"
      />
      <div className="absolute inset-0 flex justify-start items-center py-12 bg-slate-600/60 lg:bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col items-start w-full px-8 lg:px-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white">
            Why Not <span className="font-extrabold italic">You?</span>
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white">
            Why Not <span className="font-extrabold italic">Now?</span>
          </h1>
          <p className="text-white text-sm md:text-md lg:text-base text-left leading-7 mt-6 max-w-[65ch]">
            Masifunde&apos;s Changemaker Network aims to capacitate high school
            learners&apos; with practical knowledge on relevant social topics
            such as school safety, violence and bullying. Through activation
            workshops for all Grade 9 learners and intensive changemaker
            trainings for selected learners they can spark positive change in
            their schools and communities.
          </p>

          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-3 mt-6 text-black">
            <Link
              href="/nmb"
              className="bg-accent text-lg flex flex-col font-medium px-6 py-2.5 w-[220px]"
            >
              <span className="uppercase font-bold text-xl flex items-center">
                NMB &rarr;
              </span>
              <span className="uppercase text-xs">Changemakers </span>
            </Link>
            <Link
              href="/national"
              className="bg-accent text-lg flex flex-col font-medium px-6 py-2.5 w-[220px]"
            >
              <span className="uppercase font-bold text-xl flex items-center">
                MCN National &rarr;
              </span>
              <span className="uppercase text-xs">Changemakers </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
