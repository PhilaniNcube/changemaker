"use client";

import React from "react";
import { urlFor } from "@/sanity/lib/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface EcoChampionSliderProps {
  images: Array<{ asset: any; alt?: string }>;
}

const EcoChampionSlider: React.FC<EcoChampionSliderProps> = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-screen h-[80vh] overflow-hidden max-w-full">
      {/* Carousel - full viewport width/height */}
      <Carousel
        className="w-full h-full"
        plugins={[
          Autoplay({
            delay: 1800,
          }),
        ]}
        opts={{ loop: true, skipSnaps: false }}
        onPlay={() => {
          console.log("Playing...");
        }}
      >
        <CarouselContent>
          {images.map((img, idx) => (
            <CarouselItem key={idx} className="py-2 overflow-hidden ">
              <img
                src={urlFor(img.asset).url()}
                alt={img.alt || `Slide ${idx + 1}`}
                className="object-cover object-top w-full h-full pointer-events-none select-none"
                draggable={true}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default EcoChampionSlider;
