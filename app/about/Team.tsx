"use client"

import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


const Team = () => {

  const partners = [
    {
      id: 1,
      title: "Department of Basic Education",
      image: "/images/dbe.jpg",
      width: 3273,
      height: 1281,
    },
    {
      id: 2,
      title: "GIZ",
      image: "/images/giz.jpg",
      width: 3543,
      height: 1299,
    },
    {
      id: 3,
      title: "Canada",
      image: "/images/canada.png",
      width: 806,
      height: 490,
    },
    {
      id: 4,
      title: "Austrian Development Cooperation",
      image: "/images/ada.png",
      width: 806,
      height: 490,
    },
    {
      id: 5,
      title: "Masifunde Learner Development",
      image: "/images/masifunde.png",
      width: 2546,
      height: 712,
    },
    {
      id: 6,
      title: "Agape",
      image: "/images/agape.png",
      width: 2546,
      height: 712,
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-0">
        <h2 className="text-slate-800 font-extrabold text-4xl lg:text-5xl text-center mb-5">
          The Team
        </h2>
        <p className="text-slate-700 text-xl lg:text-3xl font-medium text-center">
          Partners involved in making the Changemaker Network a reality
        </p>
        <div className="">
          <Carousel autoPlay={true} infiniteLoop={true} showArrows stopOnHover={true} showThumbs={true}  >
            {partners.map((partner) => (
              <div
                className="flex w-full items-center justify-center mt-10"
                key={partner.id}
              >
                <Image
                  key={partner.id}
                  src={partner.image}
                  width={partner.width}
                  height={partner.height}
                  alt={partner.title}
                  className="h-[200px] flex items-center justify-center object-contain cursor-pointer"
                />
              </div>
            ))}
          </Carousel>
        </div>

        <h2 className="text-slate-800 font-extrabold text-4xl lg:text-5xl text-center mt-12 mb-5">
          Civil Society Organisations
        </h2>
        <p className="text-slate-700 text-xl lg:text-3xl font-medium text-center">
          Let us introduce you to our implementation partners
        </p>
      </div>
    </section>
  );
};
export default Team;
