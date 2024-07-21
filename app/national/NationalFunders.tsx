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
      image: "/images/global_affairs.png",
      width: 806,
      height: 490,
    },
    {
      name: "Agape",
      image: "/images/agape.png",
      width: 750,
      height: 207,
    },
    {
      name: "masifunde",
      image: "/images/masifunde.png",
      width: 3543,
      height: 1299,
    },
    {
      name: "VCP",
      image: "/images/vcp.png",
      width: 2362,
      height: 2362,
    },
  ];




  return (
    <section id="funders" className="bg-white">
      <div className="px-8 py-10 mx-auto bg-white max-w-7xl">
        <h2 className="text-3xl font-bold leading-7 text-center text-gray-800 lg:text-4xl lg:leading-9">
          Partners
        </h2>
        <div className="grid w-full grid-cols-1 gap-6 mt-8 md:grid-cols-3 lg:grid-cols-3 md:gap-10">
          {funders.map((funder, i) => (
            <div key={funder.name} className="flex items-center justify-center w-full">
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

      </div>
    </section>
  );
};
export default NationalFunders;
