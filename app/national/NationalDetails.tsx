import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "sanity";

type PageProps = {
  description: PortableTextBlock[];
};


const Details = ({ description }: PageProps) => {
  return (
    <section id="content" className="pt-10 bg-white">
      <div className="gap-10 px-8 mx-auto max-w-7xl">
        <div className="mt-8 text-base leading-7 text-justify text-slate-700">
          <PortableText value={description} />

        </div>
      </div>
    </section>
  );
};
export default Details;
