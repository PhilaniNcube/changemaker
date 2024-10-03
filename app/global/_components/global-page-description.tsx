
import Image from "next/image";
import { ArrowBigRight } from "lucide-react";
import type { Page } from "@/app/studio/sanity.types";
import GlobalCarousel from "./global-carousel";
import { getGlobalPageContent, getGlobalPageList, getGlobalSlider } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

export type SliderType = {
  description: string;
  images: {
    _type: string;
    _key: string;
    asset: {
      _ref: string;
      _type: string;
    };
  }[];
}

type ListBoxContent = {
  order: number;
  _key: string;
  _type: string;
  title: string;
  description: string;
}

type GlobalList = {
  _id: string;
  list_title: string;
  list_subtitle: string;
  list_items: string[];
}

const GlobalPageDescription = async () => {

  const slider: SliderType = await getGlobalSlider();
   const content = await getGlobalPageContent();

     const list: GlobalList = await getGlobalPageList();

     console.log(slider)



// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const transformedListBox = content?.listBox?.map((item: any) => ({
	_key: item._key,
	order: item.order ?? 0, // Provide default values if necessary
	title: item.title ?? "",
	description: item.description ?? "",
	// Map other properties as needed
})) as ListBoxContent[];

		return (
			<section className="py-6 md:py-12">
				<div className="px-4 mx-auto max-w-7xl md:px-8">
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
						<div>
							<h2 className="text-2xl font-bold capitalize">
								{slider.description}
							</h2>
							<div className="mt-3 text-base leading-7 text-justify text-slate-700" id="description">
								{content.content && <PortableText value={content?.content} />}
							</div>
						</div>
						<div>
							<GlobalCarousel images={slider.images} />
						</div>
					</div>

					<div className="flex flex-col items-center justify-center mt-6 text-center text-masifunde">
						<h3 className="text-xl font-semibold">
							The Ongoing Model of the Project
						</h3>{" "}
						<p className="text-balance">
							The project consists of two face-to-face encounters, each with
							distinct focuses, as well as an intermediate phase between these
							two encounters, where work is done locally in both Germany and
							South Africa. Throughout this process, continuous support and
							networking are provided during the preparation, intermediate and
							follow-up phases.
						</p>
					</div>

					<div className="grid gap-6 mt-6 lg:grid-cols-3">
						{transformedListBox?.map((item: ListBoxContent) => (
							<div
								key={item._key}
								className="px-4 py-5 text-center text-white bg-masifunde"
							>
								<h4 className="mt-3 text-lg font-medium text-center">
									{item.title}
								</h4>
								<p className="font-thin text-balance">{item.description}</p>
							</div>
						))}
					</div>

					<div className="flex flex-col gap-6 mt-10 text-base text-slate-700 lg:flex-row">
						<div className="max-w-md">
							<Image
								src="/images/target.webp"
								alt="Goal"
								width={760}
								height={760}
								className="object-cover w-32"
							/>
							<h3 className="mt-4 text-xl font-bold text-slate-950">
								<span className="text-4xl font-extrabold">Goals</span>
								<br /> of the Global Changemaker Network

							</h3>
						</div>
						<div className="w-full ">
							<ul className="pl-10 my-3">
								{list.list_items.map((item) => (
									<li key={item} className="flex justify-end gap-2 my-2">
										<ArrowBigRight className="w-6 h-6 text-masifunde fill-masifunde" />
										<span className="max-w-xl">
											{item}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="w-[150px] h-4 bg-masifunde mb-3" />
					<p>
					{list.list_subtitle}
					</p>
				</div>
			</section>
		);
};
export default GlobalPageDescription;
