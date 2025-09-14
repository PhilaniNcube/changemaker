import React from "react";
import Image from "next/image";
import Link from "next/link";

const EcoChampionHero = () => {
  return (
    <div className="relative flex items-center justify-center overflow-y-visible z-10 max-h-[56vh]">
      {/* Background Image using Next.js Image component */}
      <Image
        src="/images/background.jpg"
        alt="Eco Champion Program Background"
        fill
        className="object-cover w-full h-full"
        priority
      />

      {/* Hero content */}
      <div className="relative px-4 mx-auto w-full max-w-7xl sm:px-6 min-h-[55vh] xl:min-h-[40vh] flex items-center lg:px-8 max-h-[56vh] xl:max-h-[42vh]">
        <div className="absolute inset-0 w-full -bottom-[25vh] z-10">
          <Image
            src="/images/eco-overlay.png"
            alt="Eco Champion Program Hero"
            width={3000}
            height={1500}
            className="hidden md:block object-contain w-[75%]   -translate-y-[15vh] -translate-x-[1vw] mx-auto"
            priority
          />
        </div>
        <div className="flex items-center justify-between w-full h-full">
          <div>
            <Image
              src="/images/eco-title.svg"
              alt="Masifundes Spark Challenge Eco Youth Summit"
              width={200}
              height={100}
              className="object-cover lg:w-[320px] translate-y-2"
            />
            <p className="pl-6 text-lg font-bold leading-5 text-white lg:-translate-y-6 md:text-xl">
              7 - 9 October 2025 <br />
              <Link
                href="https://pinelodge.co.za/"
                className="underline text-masifunde"
              >
                Pine Lodge
              </Link>{" "}
              <span className="font-light text-white"> Gqeberha</span>
            </p>
          </div>
          <Image
            src="/images/tui-logo.svg"
            alt="Eco Champion Program Logo"
            width={150}
            height={150}
            className="object-cover w-24 h-24 lg:w-32 lg:h-32"
          />
        </div>
      </div>
    </div>
  );
};

export default EcoChampionHero;
