"use client"

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Link from "next/link";
import { useState } from "react";


const Team = () => {

  const [slide, setSlide] = useState<null|number>(null)



  const partners = [
    {
      id: 1,
      title: "Department of Basic Education",
      image: "/images/dbe.jpg",
      link: "https://www.education.gov.za/",
      width: 3273,
      height: 1281,
    },
    {
      id: 2,
      title: "GIZ",
      image: "/images/giz.jpg",
      link: "https://www.giz.de/en/aboutgiz/profile.html",
      width: 3543,
      height: 1299,
    },
    {
      id: 3,
      title: "Canada",
      image: "/images/canada.png",
      link: "https://www.international.gc.ca/global-affairs-affaires-mondiales/home-accueil.aspx?lang=eng",
      width: 806,
      height: 490,
    },
    {
      id: 4,
      title: "Austrian Development Cooperation",
      image: "/images/ada.png",
      link: "https://www.international.gc.ca/global-affairs-affaires-mondiales/home-accueil.aspx?lang=eng",
      width: 806,
      height: 490,
    },
    {
      id: 5,
      title: "masifunde Learner Development",
      image: "/images/masifunde.png",
      link: "https://www.masifunde.org/",
      width: 2546,
      height: 712,
    },
    {
      id: 6,
      title: "Agape",
      image: "/images/agape.png",
      link: "https://www.aym.org.za/",
      width: 2546,
      height: 712,
    },
  ];

    const nextSlide = () => {
    if(slide === partners.length - 1) {
      setSlide(0)
    }
  }

    const prevSlide = () => {
    if(slide === 0) {
      setSlide(partners.length -1)
    }
  }

  const labels = {
    leftArrow: 'Prev',
    rightArrow: 'Next',
    item: ''
  }

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-slate-800 font-extrabold text-4xl lg:text-5xl text-center mb-5">
          The Team
        </h2>
        <p className="text-slate-700 text-md mb-6 lg:text-lg mt-6 font-medium text-center">
          Partners involved in making the Changemaker Network a reality
        </p>
        <div className="flex items-center relative isolate">
          <div className="bg-trasparent absolute inset-0 flex items-center justify-between">
            <button
              onClick={prevSlide}
              className="text-4xl text-slate-600 -translate-y-5"
            >
              &larr;
            </button>
            <button
              onClick={nextSlide}
              className="text-4xl text-slate-600 -translate-y-5"
            >
              &rarr;
            </button>
          </div>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={true}
            labels={labels}
            className="text-slate-700"
            stopOnHover={true}
            showThumbs={true}
          >
            {partners.map((partner) => (
              <Link
                href={partner.link}
                className="flex w-full items-center justify-center"
                key={partner.id}
              >
                <Image
                  key={partner.id}
                  src={partner.image}
                  width={partner.width}
                  height={partner.height}
                  alt={partner.title}
                  className="h-[180px] flex items-center justify-center object-contain cursor-pointer"
                />
              </Link>
            ))}
          </Carousel>
        </div>

        <h2 className="text-slate-800 font-extrabold text-4xl lg:text-5xl text-center mt-12 mb-5">
          Civil Society Organisations
        </h2>
        <p className="text-slate-700 text-md lg:text-lg font-medium text-center">
          Let us introduce you to our implementation partners
        </p>
      </div>
    </section>
  );
};
export default Team;
