import { NmbPageHero } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';

type PageProps = {
  title: string;
  description: string;
  imageObject: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
};


const NMBDetails = ({ title, imageObject, description }: PageProps) => {

  const image = urlForImage(imageObject.asset).url();

  return (
    <section id="nmb" className="relative bg-masifunde isolate">
      <Image
        src={image}
        width={2976}
        height={1984}
        alt="Team"
        className="w-full min-h-[65vh] max-h-[70vh] lg:max-h-[68vh] lg:aspect-video object-cover"
      />
      <div className="absolute inset-0 py-10 bg-slate-600/60 ">
        <div className="flex flex-col items-start justify-center gap-8 px-8 mx-auto text-white lg:h-full min-h-fit max-w-7xl">
          <h2 className="font-extrabold text-3xl lg:text-5xl max-w-[32ch]">
            {title}
          </h2>
          <div>
            <p className="font-medium text-xs md:text-base leading-6 md:leading-7 text-left max-w-[55ch]">
              {description}
            </p>
          </div>

          {/* <p className="font-medium text-xs md:text-base leading-6 md:leading-7 text-justify max-w-[55ch]">
            The programmes can help guide learners that may be exposed to or
            experiencing violence to find coping skills, positive behavioural
            support, or peer-to-peer education. Such programmes can represent
            safe spaces for children to disclose experiences of violence,
            develop leadership skills, change at-risk behaviours and overall
            improve their resilience. Furthermore, this programme makes use of a
            peer-to-peer intervention strategy as it has been proven to work and
            encourage positive influence within schools and communities in
            general.
          </p> */}
        </div>
      </div>
    </section>
  );
};
export default NMBDetails;
