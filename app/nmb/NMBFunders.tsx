
import type { NMBPageFunders } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

type PageProps = {
  funders: NMBPageFunders[];
};


const NMBFunders = ({ funders }: PageProps) => {


  // const funders = [
  //   {
  //     name: "Austrian Development Cooperation",
  //     image: "/images/adc_funding.jpg",
  //     width: 951,
  //     height: 599,
  //   },
  //   {
  //     name: "Jugend Eine Welt",
  //     image: "/images/jew.svg",
  //     width: 369,
  //     height: 74,
  //   },
  //   {
  //     name: "Province of Eastern Cape Education",
  //     image: "/images/ec_education.png",
  //     width: 756,
  //     height: 426,
  //   },
  // ];

  return (
    <section id="funders" className="px-8 mx-auto my-10 bg-white max-w-7xl">
      <h2 className="text-3xl font-bold leading-7 text-center text-gray-800 lg:text-4xl lg:leading-9">
        Funders/Partners
      </h2>
      <div className="grid w-full grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
        {funders.map((funder, i) => (
          <div key={funder.funderName} className="flex items-center justify-center w-full">
            <Image
              src={urlForImage(funder.nmbfunderLogo.asset).url()}
              width={951}
              height={599}
              alt={funder.funderName}
              className="w-[80%] mx-auto object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default NMBFunders;
