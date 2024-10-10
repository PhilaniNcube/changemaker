"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { CardContent } from "@/components/ui/card";
import type { SliderType } from "./global-page-description";
import { urlForImage } from "@/sanity/lib/image";

const GlobalCarousel = ({images}:{images:SliderType['images']}) => {
	return (
		<div>
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
					{images.map((image, index) => (
						<CarouselItem key={image._key} className="p-0">
							<CardContent className="flex items-center justify-center h-full p-0">
								<Image
									src={urlForImage(image.asset).url()}
									alt="carousel"
									width={1600}
									height={1200}
									className="object-contain w-1/2 mx-auto aspect-[3/5] object-top"
								/>
							</CardContent>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="absolute transform translate-y-1/2 left-4 top-1/2" />
				<CarouselNext className="absolute transform translate-y-1/2 right-4 top-1/2" />
			</Carousel>
		</div>
	);
};
export default GlobalCarousel;
