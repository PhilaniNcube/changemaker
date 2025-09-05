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
      {/* Hero Section with 2-column layout */}
      <section className="relative w-full px-4 mx-auto mt-10 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left: Title & Subtitle */}
          <div className="flex flex-col justify-center h-full">
            <h1 className="mb-4 text-4xl font-bold text-masifunde md:text-5xl">
              {pageContent.title || "Eco Champion"}
            </h1>
            {pageContent.subtitle && (
              <p className="mb-6 text-lg text-masifunde">
                {pageContent.subtitle}
              </p>
            )}
          </div>
          {/* Right: Slider/Carousel */}
          <div className="w-full">
            {sliderImages.length > 0 && (
              <EcoChampionSlider images={sliderImages} />
            )}
          </div>
        </div>
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
