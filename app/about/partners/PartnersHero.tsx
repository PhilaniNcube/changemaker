"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const carouselImages = [
	{
		src: "/images/carousel/img-1.jpg",
	},
	{
		src: "/images/carousel/img-2.jpg",
	},
	{
		src: "/images/carousel/img-3.jpg",
	},
	{
		src: "/images/carousel/img-4.jpg",
	},
];

const PartnersHero = () => {
	return (
		<section id="partners" className="relative bg-masifunde isolate">
			<div className="grid grid-cols-2 lg:grid-cols-5">
				<div className="flex flex-col items-center justify-center w-full lg:col-span-2">
					<div className="px-12 md:px-20 lg:px-24">
						<h1 className="text-4xl font-bold text-white">
							Partner CSO Profiles
						</h1>
						<p className="font-medium text-white text-md lg:text-lg">
							Learn more below about our partner Civil Society Organisations
						</p>
					</div>
				</div>
				<div className="col-span-1 lg:col-span-3 bg-masifunde">
					<Carousel
						opts={{
							align: "start",
							loop: true,
						}}
						plugins={[
							Autoplay({
								delay: 2000,
							}),
						]}
						className="w-full p-0"
					>
						<CarouselContent className="p-0">
							<CarouselItem className="p-0">
								<CardContent className="flex items-center justify-center h-full p-0">
									<Image
										src="/images/carousel/img-1.jpg"
										alt="carousel"
										width={1600}
										height={1200}
										className="object-cover w-full aspect-[5/3] object-top"
									/>
								</CardContent>
							</CarouselItem>
							<CarouselItem className="p-0">
								<CardContent className="flex items-center justify-center h-full p-0">
									<Image
										src="/images/carousel/img-2.jpg"
										alt="carousel"
										width={1600}
										height={1200}
										className="object-cover w-full aspect-[5/3] object-top"
									/>
								</CardContent>
							</CarouselItem>
							<CarouselItem className="p-0">
								<CardContent className="flex items-center justify-center h-full p-0">
									<Image
										src="/images/carousel/img-3.jpg"
										alt="carousel"
										width={1600}
										height={1200}
										className="object-cover w-full aspect-[5/3] object-top"
									/>
								</CardContent>
							</CarouselItem>
							<CarouselItem className="p-0">
								<CardContent className="flex items-center justify-center h-full p-0">
									<Image
										src="/images/carousel/img-4.jpg"
										alt="carousel"
										width={1600}
										height={1200}
										className="object-cover w-full aspect-[5/3] object-top"
									/>
								</CardContent>
							</CarouselItem>
						</CarouselContent>
						<CarouselPrevious className="absolute transform translate-y-1/2 left-4 top-1/2" />
						<CarouselNext className="absolute transform translate-y-1/2 right-4 top-1/2" />
					</Carousel>
				</div>
			</div>
		</section>
	);
};
export default PartnersHero;
