

import type { PortableTextBlock } from "sanity";
import Filter from "./Filter";
import { getPartners } from "@/sanity/lib/client";

type SanityImageType = {
  type: "string";
  _key: string;
  asset: {
    _ref: string;
    _type: string;
  };
};

export type PartnersProps = {
  partners: {
    logo: {
      type: "string";
      asset: {
        _ref: string;
        _type: string;
      };
    };
    slug: {
      current: string;
      _type: string;
    };
    district: string;
    town: string;
    province: string;
    images: SanityImageType[] | null;
    organisationName: string;
    description: PortableTextBlock[];
    website: string | null;
    facebook: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    email: string | null;
    contactNumber: string | null;
    contactPerson: string | null;
  }[];
};

const Partners = async () => {
  
  const partners = await getPartners();

  return (
    <div className="container">
      <Filter partners={partners} />
    </div>
  );
};
export default Partners;
