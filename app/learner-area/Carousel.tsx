"use client";

import Image from 'next/image';
import { useState } from 'react';

const images = [
  "/images/one.jpg",
  "/images/two.jpg",
  "/images/three.jpg",
  "/images/four.jpg",
  "/images/five.jpg",
  "/images/six.jpg",
  "/images/seven.jpg",
  "/images/eight.jpg",
];



const Carousel = () => {

  const [activeItem, setActiveItem] = useState(0);


  return (
			<div className="flex items-center justify-center w-full h-full py-10 mb-10 overflow-hidden bg-white rounded-2xl">
				<div className="max-w-7xl min-w-[280px] mx-auto overflow-hidden realtive isolate rounded-2xl">
					<div className="flex h-[200px] md:h-[400px] lg:h-[640px] w-full gap-2">
						{images.map((image, i) => (
							<Image
								onClick={() => setActiveItem(i)}
								aria-current={activeItem === i}
								key={image}
								src={image}
								className={`cursor-pointer w-[8%] transition-[width] hover:w-[12%] duration-300 first:w-[1%] last:w-[1%] [&[aria-current='true']]:w-[48%] grayscale [&[aria-current='true']]:grayscale-0 hover:grayscale-0 object-cover rounded-2xl`}
								alt={image}
								width={1920}
								height={1080}
							/>
						))}
					</div>
				</div>
			</div>
		);
};
export default Carousel;
