import Image from "next/image";

const NationalFunders = () => {
  const funders = [
    {
      name: "Dept of Basic Education",
      image: "/images/basic_education.jpg",
      width: 3273,
      height: 1281,
    },
    {
      name: "GIZ",
      image: "/images/giz.jpg",
      width: 3543,
      height: 1299,
    },
    {
      name: "Canada",
      image: "/images/canada.png",
      width: 806,
      height: 490,
    },

  ];

    const partners = [
      {
        name: "Agape",
        image: "/images/agape.png",
        width: 750,
        height: 207,
      },
      {
        name: "Masifunde",
        image: "/images/masifunde.png",
        width: 3543,
        height: 1299,
      },

    ];



  return (
    <section id="funders" className="bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-0 py-10 bg-white">
        <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 text-center">
          Funders
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-8">
          {funders.map((funder, i) => (
            <div key={i} className="w-full flex items-center justify-center">
              <Image
                src={funder.image}
                width={funder.width}
                height={funder.height}
                alt={funder.name}
                className="w-[80%] mx-auto object-cover"
              />
            </div>
          ))}
        </div>
        <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-8 text-center">
          Partners
        </h2>
        <div className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-10 mt-8">
          {partners.map((partner, i) => (
            <div key={i} className="w-full flex items-center justify-center">
              <Image
                src={partner.image}
                width={partner.width}
                height={partner.height}
                alt={partner.name}
                className="w-[80%] mx-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default NationalFunders;
