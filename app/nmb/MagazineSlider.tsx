"use client"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image"
import Link from "next/link"

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const sparkMags = [
  {
    title: "Spark 1st Edition",
    thumbnail: "/images/nmb/nmb_spark_1.jpg",
    doc: "/images/nmb/nmb_spark_1.pdf",
  },
  {
    title: "Spark 2nd Edition",
    thumbnail: "/images/nmb/nmb_spark_2.jpg",
    doc: "/images/nmb/nmb_spark_2.pdf",
  },
  {
    title: "Spark 3rd Edition",
    thumbnail: "/images/nmb/nmb_spark_3.jpg",
    doc: "/images/nmb/nmb_spark_3.pdf",
  },
  {
    title: "Spark 4th Edition",
    thumbnail: "/images/nmb/nmb_spark_4.jpg",
    doc: "/images/nmb/nmb_spark_4.pdf",
  },
  {
    title: "Spark 5th Edition",
    thumbnail: "/images/nmb/nmb_spark_5.jpg",
    doc: "/images/nmb/nmb_spark_5.pdf",
  },
  {
    title: "Spark 6th Edition",
    thumbnail: "/images/nmb/nmb_spark_6.png",
    doc: "/images/nmb/nmb_spark_6.pdf",
  },
  {
    title: "Spark 7th Edition",
    thumbnail: "/images/nmb/nmb_spark_7.png",
    doc: "/images/nmb/nmb_spark_7.pdf",
  },
  {
    title: "Spark 8th Edition",
    thumbnail: "/images/nmb/nmb_spark_8.png",
    doc: "/images/nmb/nmb_spark_8.pdf",
  },
];

const MagazineSlider = () => {

  const swiper = useSwiper();

  return (
			<section className="max-w-5xl px-12 mx-auto lg:px-20 overflow-clip">
				<Carousel
					opts={{
						align: "start",
					}}
					className="w-full"
				>
					<CarouselContent>
						{sparkMags.map((mag) => (
							<CarouselItem
								key={mag.title}
								className="md:basis-1/2 lg:basis-1/3"
							>
								<Link href={mag.doc} target="_blank" className="w-full">
									<Image
										src={mag.thumbnail}
										alt={mag.title}
										className="object-cover w-full aspect-[5/7]"
										width={492}
										height={702}
									/>
								</Link>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="text-black" />
					<CarouselNext className="text-black" />
				</Carousel>
			</section>
		);
};
export default MagazineSlider;

