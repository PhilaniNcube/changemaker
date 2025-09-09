import { getPageContent, getPageListGroupBySlug } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import EcoChampionSlider from "./EcoChampionSlider";
import page from "../page";
import EcoChampionPhases from "./EcoChampionPhases";

const EcoChampionPage = async () => {
  const pageContent = await getPageContent(
    "mcn-eco-champion-changemaker-network"
  );

  const pageListGroup = await getPageListGroupBySlug(
    "mcn-eco-champion-changemaker-network"
  );

  console.log("Eco Champion Page Content:", pageContent);

  // pageSlider may be a reference or populated object, handle both cases
  const sliderImages =
    Array.isArray(pageContent.pageSlider) &&
    pageContent.pageSlider.length > 0 &&
    pageContent.pageSlider[0].images
      ? pageContent.pageSlider[0].images
      : [];

  return (
    <main className="bg-white ">
      {/* Hero Section with 2-column layout */}
      <section className="py-12 text-white bg-masifunde md:py-16">
        <div className="container flex flex-col items-start justify-center px-4 mx-auto md:px-8 max-w-7xl">
          <h2 className="text-white text-3xl lg:text-5xl max-w-[25ch] font-extrabold">
            {pageContent.title || "Eco Champion"}
          </h2>
          <p className="max-w-[65ch] mt-3 leading-6 text-white text-lg md:text-2xl font-medium ">
            {pageContent.subtitle || "Changemaker Network"}
          </p>
        </div>
      </section>
      <div className="container px-4 py-6 mx-auto max-w-7xl md:px-8">
        <EcoChampionPhases pageListGroup={pageListGroup} />
        <EcoChampionSlider images={sliderImages} />
      </div>
    </main>
  );
};

export default EcoChampionPage;
