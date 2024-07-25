import type { Page } from "@/app/studio/sanity.types";
import Image from "next/image";

const AcademyHero = ({title, subtitle}:{title:Page['title'], subtitle:Page['subtitle']}) => {
  return (
			<section id="national" className="relative flex justify-end bg-masifunde">
				{/* <Image
					src=""
					width={1500}
					height={1014}
					alt="Changemakers"
					className="object-cover max-w-[88%] min-h-[55vh] max-h-[65vh]"
				/> */}
				<div className="relative w-full isolate">
					<div className="flex justify-start px-8 py-20 mx-auto max-w-7xl">
          <Image src="/images/tui.svg" width={174} height={171} alt="TUI Logo" className="hidden lg:block absolute top-[17%] right-[10%]" />
						<div className="px-4">
							<h1 className="text-white text-3xl lg:text-5xl max-w-[25ch] font-extrabold">
								{title}
							</h1>

							<h3 className="mt-3 text-lg md:text-xl font-medium text-white max-w-[50ch]">
								{subtitle}
							</h3>

						</div>
					</div>
				</div>
			</section>
		);
};
export default AcademyHero;
