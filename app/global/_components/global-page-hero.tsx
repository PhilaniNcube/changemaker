import Image from "next/image";

const GlobalPageHero = () => {
  return (
			<section className="overflow-hidden bg-masifunde">
				<div className="relative px-4 py-12 mx-auto lg:px-8 max-w-7xl lg:py-20">
					<h1 className="text-white text-3xl lg:text-5xl max-w-[25ch] font-extrabold">
						Global Changemaker Network
					</h1>
					<div className="top-0 bottom-0 items-end hidden lg:absolute lg:flex right-5">
						<Image
							className="object-cover w-[390px]"
							src="/images/globe.webp"
							alt="Global Changemaker Network"
							width={319}
							height={146}
						/>
					</div>
				</div>
			</section>
		);
};
export default GlobalPageHero;
