
import Image from "next/image";

const NMBFunders = () => {

  const funders = [
    {
      name: "Austrian Development Cooperation",
      image: "/images/adc_funding.jpg",
      width: 951,
      height: 599,
    },
    {
      name: "Jugend Eine Welt",
      image: "/images/jew.svg",
      width: 369,
      height: 74,
    },
    {
      name: "Province of Eastern Cape Education",
      image: "/images/ec_education.png",
      width: 756,
      height: 426,
    },
  ];

  return (
    <section id="funders" className="max-w-7xl mx-auto px-8 lg:px-0 my-10 bg-white">
      <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 text-center">Funders</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-8">
        {funders.map((funder, i) => (
          <div key={i} className="w-full flex items-center justify-center">
            <Image src={funder.image} width={funder.width} height={funder.height} alt={funder.name} className="w-[80%] mx-auto object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};
export default NMBFunders;