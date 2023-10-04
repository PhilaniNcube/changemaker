"use client"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Link from "next/link";

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
];

const MagazineSlider = () => {

  const swiper = useSwiper();

  return (
    <section className="max-w-4xl mx-auto overflow-clip">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {sparkMags.map((mag, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <Link
                href={mag.doc}
                target="_blank"
                className="w-1/5 rounded-lg cursor-pointer overflow-hidden"
              >
                <Image
                  src={mag.thumbnail}
                  width={1748}
                  height={2480}
                  alt={mag.title}
                />
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default MagazineSlider;

