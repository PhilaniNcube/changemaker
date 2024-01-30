"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { PartnersProps } from "./Partners";
import {  Facebook, Globe2Icon, Instagram, Mail, MapPinIcon, Phone, Twitter, User, Youtube } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image"
import { PortableText } from "@portabletext/react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

const PartnerAccordions = ({ partners }: PartnersProps) => {
  return (
    <Accordion type="single" collapsible className="w-full my-8">
      {partners.map((item) => (
        <AccordionItem key={item.slug.current} value={item.slug.current}>
          <AccordionTrigger>{item.organisationName}</AccordionTrigger>
          <AccordionContent>
            <div className="w-full px-4 py-8 bg-slate-50">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="text-3xl font-bold text-masifunde">
                    {item.organisationName}
                  </h3>
                  <div className="flex flex-row items-start space-x-4">
                    <MapPinIcon className="w-10 h-10 text-masifunde" />
                    <div className="flex flex-col space-y-2">
                      {item.town ? (
                        <p className="text-lg font-medium">Town: {item.town}</p>
                      ) : (
                        ""
                      )}
                      {item.district ? (
                        <p className="text-lg font-medium">
                          District: {item.district}
                        </p>
                      ) : (
                        ""
                      )}
                      {item.province ? (
                        <p className="text-lg font-medium">
                          Province: {item.province}
                        </p>
                      ) : (
                        ""
                      )}
                      {item.website ? (
                        <div className="flex flex-row items-center space-x-2">
                          <Globe2Icon />
                          <Link href={item.website}>{item.website}</Link>
                        </div>
                      ) : (
                        ""
                      )}
                      {item.facebook ? (
                        <div className="flex flex-row items-center space-x-2">
                          <Facebook />
                          <Link href={item.facebook}>{item.facebook}</Link>
                        </div>
                      ) : (
                        ""
                      )}
                      {item.twitter ? (
                        <div className="flex flex-row items-center space-x-2">
                          <Twitter />
                          <Link href={item.twitter}>{item.twitter}</Link>
                        </div>
                      ) : (
                        ""
                      )}
                      {item.instagram ? (
                        <div className="flex flex-row items-center space-x-2">
                          <Instagram />
                          <Link href={item.instagram}>{item.instagram}</Link>
                        </div>
                      ) : (
                        ""
                      )}
                      {item.youtube ? (
                        <div className="flex flex-row items-center space-x-2">
                          <Youtube />
                          <Link href={item.youtube}>{item.youtube}</Link>
                        </div>
                      ) : (
                        ""
                      )}
                      {item.contactPerson ? (
                        <div className="flex flex-row items-center space-x-2">
                          <User />
                          <Link href={item.contactPerson}>
                            {item.contactPerson}
                          </Link>
                        </div>
                      ) : (
                        ""
                      )}
                      {item.contactNumber ? (
                        <div className="flex flex-row items-center space-x-2">
                          <Phone />
                          <Link href={item.contactNumber}>
                            {item.contactNumber}
                          </Link>
                        </div>
                      ) : (
                        ""
                      )}
                      {item.email ? (
                        <div className="flex flex-row items-center space-x-2">
                          <Mail />
                          <Link href={item.email}>{item.email}</Link>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>

                <Image
                  width={400}
                  height={400}
                  className="object-cover w-44"
                  src={urlForImage(item.logo.asset).url()}
                  alt={item.organisationName}
                />
              </div>
              <div className="flex flex-col my-3">
                <PortableText value={item.description} />
              </div>

              <div className="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2 lg:grid-cols-3">
                {item.images?.map((image) => (
                  <Image
                    key={image._key}
                    width={400}
                    height={400}
                    className="object-cover w-full aspect-video"
                    src={urlForImage(image.asset).url()}
                    alt={item.organisationName}
                  />
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
export default PartnerAccordions;
