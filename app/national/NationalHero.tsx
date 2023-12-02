import Image from "next/image";
import Link from "next/link";

type PageProps = {
  title: string;
  image: string;
  subheading: string;
};

const NationalHero = ({title, image, subheading}:PageProps) => {



  return (
    <section id="national" className="bg-masifunde relative flex justify-end">
      <Image
        src={image}
        width={1500}
        height={1014}
        alt="Changemakers"
        className="object-cover max-w-[88%] min-h-[55vh] max-h-[65vh]"
      />
      <div className="absolute inset-0 bg-slate-600/60 lg:bg-transparent">
        <div className="max-w-7xl mx-auto px-8 py-20 flex justify-start">
          <div className="px-4">
            <h1 className="text-white text-3xl lg:text-5xl max-w-[25ch] font-extrabold">
              {title}
            </h1>
            <p className="max-w-[65ch] mt-3 lg:mt-8 leading-6 md:leading-7 text-white text-xs md:text-base font-medium ">
           {subheading}
            </p>
            {/* <p className="max-w-[65ch] mt-3 lg:mt-8 leading-6 md:leading-7 text-white text-xs md:text-base font-medium ">
              The Changemaker Network model is a whole-of-school community
              intervention supporting the&nbsp;
              <span>
                <Link
                  href="/about/nissp"
                  className="font-bold cursor-pointer underline"
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
