import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { PortableTextBlock } from "sanity";

type PageProps = {
  description: PortableTextBlock[];
};


const Details = ({ description }: PageProps) => {
  return (
    <section id="content" className="bg-white pt-10">
      <div className="max-w-7xl mx-auto px-8 gap-10">
        <div className="text-slate-700 text-justify text-base leading-7 mt-8">
          <PortableText value={description} />

        </div>
      </div>
    </section>
  );
};
export default Details;
