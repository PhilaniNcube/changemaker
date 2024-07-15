import Image from "next/image";

const AcademyHero = () => {
  return (
			<section id="national" className="relative flex justify-end bg-masifunde">
				{/* <Image
					src=""
					width={1500}
					height={1014}
					alt="Changemakers"
					className="object-cover max-w-[88%] min-h-[55vh] max-h-[65vh]"
				/> */}
				<div className="w-full ">
					<div className="flex justify-start px-8 py-20 mx-auto max-w-7xl">
						<div className="px-4">
							<h1 className="text-white text-3xl lg:text-5xl max-w-[25ch] font-extrabold">
								TUI JUNIOR ACADEMY SA
							</h1>

							<h3 className="mt-3 text-lg md:text-xl font-medium text-white max-w-[50ch]">
								The TUI Junior Academy South Africa is an initiative of the TUI
								Care Foundation in partnership with Masifunde
							</h3>

						</div>
					</div>
				</div>
			</section>
		);
};
export default AcademyHero;
