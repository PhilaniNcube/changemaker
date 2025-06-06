import { PortableTextBlock } from "sanity";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

type PageProps = {
  title: string;
  image: string;
  subheading: string;
  subtitleContent: PortableTextBlock[];
};

const NationalHero = ({
  title,
  image,
  subheading,
  subtitleContent,
}: PageProps) => {
  return (
    <section id="national" className="relative flex justify-end bg-masifunde">
      <Image
        src={image}
        width={1500}
        height={1014}
        alt="Changemakers"
        className="object-cover max-w-[88%] min-h-[55vh] max-h-[65vh]"
      />
      <div className="absolute inset-0 bg-slate-600/60 lg:bg-transparent">
        <div className="flex justify-start px-8 py-20 mx-auto max-w-7xl">
          <div className="px-4">
            <h1 className="text-white text-3xl lg:text-5xl max-w-[25ch] font-extrabold">
              {title}
            </h1>
            <p className="max-w-[65ch] mt-3 lg:mt-8 leading-6 text-white text-xs md:text-sm font-medium ">
              <PortableText value={subtitleContent} />
            </p>
            {/* <p className="max-w-[65ch] mt-3 lg:mt-8 leading-6 md:leading-7 text-white text-xs md:text-base font-medium ">
              The Changemaker Network model is a whole-of-school community
              intervention supporting the&nbsp;
              <span>
                <Link
                  href="/about/nissp"
                  className="font-bold underline cursor-pointer"
                >
                  National Inclusive and Safer Schools Partnership&nbsp;(NISSP)
                </Link>
              </span>
              &nbsp; of the National Department of Basic Education. The
              intervention activates, provides capacity and supports the role of
              local Department of Education and school communities at large:
              learners, educators, community, volunteers, stakeholders. This
              project has been implemented within the Eastern Cape,
              KwaZulu-Natal, North West and Limpopo.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default NationalHero;
