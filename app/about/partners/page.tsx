"use client"
import { getPartners } from "@/sanity/lib/client";
import Partners from "./Partners";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "@/components/ui/scroll-area";

const page = async () => {

  const partners = await getPartners();

  return (
    <main>
        <Partners partners={partners} />
    </main>
  );
};
export default page;
