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
				<div className=" bg-slate-600/60 lg:bg-transparent w-full min-h-[55vh] max-h-[65vh]">
					<div className="flex justify-start px-8 py-20 mx-auto max-w-7xl">
						<div className="px-4">
							<h1 className="text-white text-3xl lg:text-5xl max-w-[25ch] font-extrabold">
								TUI JUNIOR ACADEMY SA
							</h1>
							<p className="max-w-[65ch] mt-3 lg:mt-8 leading-6 md:leading-7 text-white text-xs md:text-lg font-medium ">
								The Changemaker Network Project aims to capacitate learners with
								practical knowledge on relevant social topics, such as school
								safety, violence, bullying and environmental awareness and
								protection.
							</p>
						</div>
					</div>
				</div>
			</section>
		);
};
export default AcademyHero;
