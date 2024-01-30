"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { PartnersProps } from "./Partners";

const PartnerAccordions = ({ partners }: PartnersProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {partners.map((item) => (
        <AccordionItem key={item.slug.current} value={item.slug.current}>
          <AccordionTrigger>{item.organisationName}</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
export default PartnerAccordions;
