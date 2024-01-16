"use client";
import { CldImage } from 'next-cloudinary';
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

// const images = [
//   "/learner%20area/learner_area_1_we3iwn",
//   "/learner%20area/learner_area_2_gtil8j",
//   "/learner%20area/learner_area_3_ctfoce",
//   "/learner%20area/learner_area_4_oo0efe",
//   "/learner%20area/learner_area_7_dwps2c",
//   "/learner%20area/learner_area_8_fkxtx2",
//   "/learner%20area/learner_area_5_zlqiwv",
//   "/learner%20area/learner_area_9_m2tker",
//   "/learner%20area/learner_area_11_sumpqv",
//   "/learner%20area/learner_area_13_n0egta",
//   "/learner%20area/learner_area_10_eako06",
//   "/learner%20area/learner_area_6_inktic",
//   "/learner%20area/learner_area_16_cjnzv5",
//   "/learner%20area/learner_area_12_s23wuo",
//   "/learner%20area/learner_area_15_zmxyhl",
//   "/learner%20area/learner_area_17_pdjhod",
//   "/learner%20area/learner_area_18_ayuqcf",
//   "/learner%20area/learner_area_14_qcmdvz",
//   "/learner%20area/learner_area_19_dvhykt",
// ];

//res.cloudinary.com/dkqzhae7c/image/upload/v1684070719/learner%20area/learner_area_19_dvhykt.jpg

const Carousel = () => {

  const [activeItem, setActiveItem] = useState(0);


  return (
    <div className="flex items-center justify-center w-full h-full px-6 py-20 overflow-hidden bg-white">
      <div className="w-[1200px] min-w-[280px] mx-auto max-w-full overflow-hidden realtive isolate">
        <div
          className={`flex h-[200px] md:h-[400px] lg:h-[640px] w-full gap-2 `}
        >
          {images.map((image, i) => (
            <Image
              onClick={() => setActiveItem(i)}
              aria-current={activeItem === i}
              key={i}
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
