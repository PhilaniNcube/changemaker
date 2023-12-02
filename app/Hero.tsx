import { getHomepageHero } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const Hero = async () => {

  const homepageHero = await getHomepageHero()

  const image = urlForImage(homepageHero.image.asset).url();

  const titleArray = Array.from(homepageHero.heading.split(" "));

  const firstTwo = titleArray.slice(0, 2).join(" ");



  const lastWord = titleArray.slice(titleArray.length - 1).join(" ");



  return (
    <div className="relative flex justify-end bg-dark">
      {" "}
      <Image
        src={image}
        width={1469}
        height={980}
        priority
        quality={100}
        alt="Background"
        className="object-cover h-screen lg:max-h-[65vh] w-full md:w-1/2"
      />
      <div className="absolute inset-0 flex justify-start items-center py-12 bg-slate-600/60 lg:bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col items-start w-full px-8 ">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white">
            {firstTwo} <span className="font-extrabold italic">{lastWord}</span>
          </h1>

          <p className="text-white text-sm md:text-md lg:text-base text-left leading-7 mt-6 max-w-[65ch]">
           {homepageHero.subtitle}
          </p>

          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-3 mt-6 text-black">
            <Link
              href="/nmb"
              className="bg-masifunde text-lg flex flex-col font-medium px-6 py-2.5 w-[220px]"
            >
              <span className="uppercase font-bold  text-[1.1rem] flex items-center">
                NMB &rarr;
              </span>
              <span className="uppercase text-xs">Changemakers </span>
            </Link>
            <Link
              href="/national"
              className="bg-masifunde text-lg flex flex-col font-medium px-6 py-2.5 w-[220px]"
            >
              <span className="uppercase font-bold text-[1.1rem] flex items-center">
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


export default Hero
