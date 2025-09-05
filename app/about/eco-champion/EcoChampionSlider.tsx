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

interface EcoChampionSliderProps {
  images: Array<{ asset: any; alt?: string }>;
}

const EcoChampionSlider: React.FC<EcoChampionSliderProps> = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-screen h-[80vh] overflow-hidden max-w-full">
      {/* Carousel - full viewport width/height */}
      <Carousel className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent>
          {images.map((img, idx) => (
            <CarouselItem key={idx} className="overflow-hidden rounded-lg">
              <img
                src={urlFor(img.asset).url()}
                alt={img.alt || `Slide ${idx + 1}`}
                className="object-cover object-center w-full h-full pointer-events-none select-none"
                draggable={false}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
      {/* Overlayed Title & Subtitle */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white bg-black/40">
        <h2 className="mb-4 text-5xl font-bold text-masifunde md:text-6xl drop-shadow-lg">
          Eco Champion
        </h2>
        <p className="text-xl md:text-2xl drop-shadow text-masifunde">
          Celebrating environmental leaders and innovators.
        </p>
      </div>
    </div>
  );
};

export default EcoChampionSlider;
