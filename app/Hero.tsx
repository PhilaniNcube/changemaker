import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative flex justify-end bg-black">
      <Image
        src="/images/sparkle.jpg"
        width={1469}
        height={980}
        priority
        quality={100}
        alt="Background"
        className="object-contain w-full md:w-1/2"
      />
      <div className="absolute inset-0 bg-slate-900/50 flex justify-start py-12">
        <div className="max-w-7xl mx-auto flex flex-col items-start w-full">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white">
            Why Not <span className="font-extrabold italic">You?</span>
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white">
            Why Not <span className="font-extrabold italic">Now?</span>
          </h1>
          <p className="text-white text-sm md:text-md lg:text-lg align-baseline leading-7 mt-6 max-w-[85ch]">
            Changemaker Network aims to capacitate learners&apos; high schools
            in with practical knowledge on relevant social topics. Through
            activation workshops for all Grade 9 learners and intensive
            changemaker trainings for selected learners they can spark positive
            change in their schools and communities.
          </p>

          <div className="flex flex-col md:flex-row w-fit gap-3 mt-10 text-black">
            <Link
              href="/changemakers/nmb"
              className="bg-accent text-lg flex flex-col font-medium px-6 py-2.5"
            >
              <span className="uppercase font-bold text-xl flex items-center">
                NMB <ChevronDoubleRightIcon className="h-4 w-4 text-bold" />{" "}

              </span>
              <span className="uppercase text-xs">Changemakers </span>
            </Link>
            <Link
              href="/changemakers/national"
              className="bg-accent text-lg flex flex-col font-medium px-6 py-2.5"
            >
              <span className="uppercase font-bold text-xl flex items-center">
                National
                <ChevronDoubleRightIcon className="h-4 w-4 text-bold" />
              </span>
              <span className="uppercase text-xs">Changemakers </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
