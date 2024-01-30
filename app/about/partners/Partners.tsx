"use client"

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PortableTextBlock } from "sanity";
import Filter from "./Filter";
import PartnerAccordions from "./PartnerAccordions";

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

const Partners = ({ partners }: PartnersProps) => {
  const searchParams = useSearchParams();

  const [filteredPartners, setFilteredPartners] = useState(partners);

  const town = searchParams ? searchParams.get("town") || "" : "";
  const district = searchParams ? searchParams.get("district") || "" : "";
  const province = searchParams ? searchParams.get("province") || "" : "";

  const townFilter = partners.map((partner) => {
    return partner.town;
  })

  const districtFilter = partners.map((partner) => {
    return partner.district;
  });

  const provinceFilter = partners.map((partner) => {
    return partner.province;
  });

  const towns = Array.from(new Set(townFilter));
  const districts = Array.from(new Set(districtFilter));
  const provinces = Array.from(new Set(provinceFilter));

  useEffect(() => {
    // write a function to filter the partners based on the search parameters
    // and set the filtered partners to the state
    // setFilteredPartners();

    const filter = partners.filter((partner) => {
      if (
        town.toLowerCase() &&
        partner.town?.toLowerCase() !== town.toLowerCase()
      ) {
        return false;
      }

      if (
        district.toLowerCase() &&
        partner.district?.toLowerCase() !== district.toLowerCase()
      ) {
        return false;
      }

      if (
        province.toLowerCase() &&
        partner.province?.toLowerCase() !== province.toLowerCase()
      ) {
        return false;
      }

      return true;
    });

    setFilteredPartners(filter);


  },[
    town,
    district,
    province,
    partners
  ]);

  return (
    <div className="container">
      <Filter towns={towns} districts={districts} provinces={provinces} />

      <PartnerAccordions partners={filteredPartners} />
    </div>
  );
};
export default Partners;
