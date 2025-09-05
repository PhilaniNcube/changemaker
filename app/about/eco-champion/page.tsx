import { getPageContent } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import EcoChampionSlider from "./EcoChampionSlider";

const EcoChampionPage = async () => {
  const pageContent = await getPageContent(
    "mcn-eco-champion-changemaker-network"
  );

  // pageSlider may be a reference or populated object, handle both cases
  const sliderImages =
    Array.isArray(pageContent.pageSlider) &&
    pageContent.pageSlider.length > 0 &&
    pageContent.pageSlider[0].images
      ? pageContent.pageSlider[0].images
      : [];

  return (
    <main className="pb-10 bg-white">
      {/* Hero Section with Slider and Title Overlay */}
      <section className="relative w-full">
        {sliderImages.length > 0 && <EcoChampionSlider images={sliderImages} />}
      </section>
      <section className="px-4 mx-auto mt-10 max-w-7xl">
        {pageContent.content && (
          <div className="prose max-w-none" id="content">
            <PortableText value={pageContent.content} />
          </div>
        )}
      </section>
    </main>
  );
};

export default EcoChampionPage;
