import Image from "next/image";

  const funders = [
			{
				name: "Dept of Basic Education",
				image: "/images/basic_education.jpg",
				width: 3273,
				height: 1281,
			},
      {
        name: "ADC",
        image: "/images/adc_funding.jpg",
        width: 951,
        height: 599,
      },
			{
				name: "TUI Academy",
				image: "/images/jew.svg",
				width: 558,
				height: 82,
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
				name: "VCP",
				image: "/images/vcp.png",
				width: 2362,
				height: 2362,
			},
		];


const LuncheonLogos = () => {
  return (
			<section className="py-10">
				<div className="max-w-6xl px-6 mx-auto lg:px-0">
					<div className="grid grid-cols-2 gap-6 md:grid-cols-3">
						{funders.map((funder, i) => (
							<div
								key={funder.name}
								className="flex items-center justify-center w-full"
							>
								<Image
									src={funder.image}
									width={funder.width}
									height={funder.height}
									alt={funder.name}
									className="w-[60%] mx-auto object-cover"
								/>
							</div>
						))}
					</div>
				</div>
			</section>
		);
};
export default LuncheonLogos;
