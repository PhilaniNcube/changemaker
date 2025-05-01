"use client"


import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import type { PartnersProps } from "./Partners"
import { useEffect, useState } from "react"
import PartnerAccordions from "./PartnerAccordions"

export default function Filter({ partners }: PartnersProps) {
  const searchParams = useSearchParams();

  const router = useRouter()

  const [filteredPartners, setFilteredPartners] = useState(partners);

  const town = searchParams ? searchParams.get("town") || "" : "";
  const district = searchParams ? searchParams.get("district") || "" : "";
  const province = searchParams ? searchParams.get("province") || "" : "";

  const townFilter = partners.map((partner) => {
    return partner.town;
  });

  const districtFilter = partners.map((partner) => {
    return partner.district;
  });


  // convert the set to an array and remove duplicates
  // by using the Array.from() method and the Set constructor
  // and sort them alphabetically 

  const provinceFilter = Array.from(new Set(partners.map((partner) => {
    //  trim the province name to remove any leading or trailing spaces
    return partner.province?.trim() || null;
  })));

  console.log({ provinceFilter });



  const towns = Array.from(new Set(townFilter));
  // sort towns array alpahebtically
  towns.sort();

  const districts = Array.from(new Set(districtFilter));
  // sort districts array alpahebtically
  districts.sort();
  const provinces = Array.from(new Set(provinceFilter));
  // sort provinces array alpahebtically
  provinces.sort();

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
  }, [town, district, province, partners]);

  return (
    <section className="w-full py-8">
      <div className="container grid gap-4 mx-auto md:gap-6 lg:grid-cols-4">
        {" "}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-full" variant="outline">
              Province
              <ChevronDownIcon className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Select a Province</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {provinces.map((province) => {
              if (province === null) return;
              return (
                <DropdownMenuItem asChild className="w-full" key={province}>
                  <Link
                    href={`/about/partners?province=${province.toLowerCase()}`}
                    prefetch={false}
                  >
                    {province}
                  </Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-full" variant="outline">
              District
              <ChevronDownIcon className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Select a District</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {districts.map((district) => {
              if (district === null) return null;

              return (
                <DropdownMenuItem asChild className="w-full" key={district}>
                  <Link
                    prefetch={false}
                    href={`/about/partners?district=${district.toLowerCase()}`}
                  >
                    {district}
                  </Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>{" "}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-full" variant="outline">
              Town
              <ChevronDownIcon className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Select a Town</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {towns.map((town) => {
              if (town === null) return;
              return (
                <DropdownMenuItem asChild className="w-full" key={town}>
                  <Link
                    prefetch={false}
                    href={`/about/partners?town=${town.toLowerCase()}`}
                  >
                    {town}
                  </Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button onClick={() => router.push("/about/partners")} variant="outline" type="button">
           Clear Filter
        </Button>
      </div>
      <PartnerAccordions partners={filteredPartners} />
    </section>
  );
}


