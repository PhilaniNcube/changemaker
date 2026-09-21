"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const resources = [
  {
    title: "Changemaker Club Booklet",
    thumbnail: "/images/books.jpg",
    doc: null,
  },
  {
    title: "Teacher Info Sheet",
    thumbnail: "/docs/teacher-info-sheet.png",
    doc: "/docs/teacher-info-sheet.pdf",
  },
];

const AdditionalResources = () => {
  return (
    <div className="w-full mt-10">
      <p className="text-2xl font-bold leading-7 text-center text-slate-800">
        Additional Resources
      </p>
      <div className="flex items-center justify-between w-full mt-4">
        <section className="max-w-6xl px-12 mx-auto lg:px-20 overflow-clip">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {resources.map((resource) => (
                <CarouselItem
                  key={resource.title}
                  className="md:basis-1/2"
                >
                  {resource.doc ? (
                    <Link
                      href={resource.doc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Image
                        src={resource.thumbnail}
                        alt={resource.title}
                        className="object-cover w-full rounded-lg aspect-[5/7]"
                        width={492}
                        height={702}
                      />
                    </Link>
                  ) : (
                    <div className="relative w-full">
                      <Image
                        src={resource.thumbnail}
                        alt={resource.title}
                        className="object-cover w-full rounded-lg aspect-[5/7]"
                        width={492}
                        height={702}
                      />
                      <span className="absolute inset-x-0 bottom-0 py-2 text-sm font-semibold text-center text-white bg-black/60 rounded-b-lg">
                        Still to be shared
                      </span>
                    </div>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-black" />
            <CarouselNext className="text-black" />
          </Carousel>
        </section>
      </div>
    </div>
  );
};
export default AdditionalResources;
