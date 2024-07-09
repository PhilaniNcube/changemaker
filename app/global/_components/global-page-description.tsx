"use client";

import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { CardContent } from "@/components/ui/card";
import { ArrowBigRight } from "lucide-react";

const carouselImages = [
	{
		src: "/images/carousel/img-1.jpg",
	},
	{
		src: "/images/carousel/img-2.jpg",
	},
	{
		src: "/images/carousel/img-3.jpg",
	},
	{
		src: "/images/carousel/img-4.jpg",
	},
];

const GlobalPageDescription = () => {
	return (
		<section className="py-6 md:py-12">
			<div className="px-4 mx-auto max-w-7xl md:px-8">
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
					<div>
						<h2 className="text-2xl font-bold capitalize">
							Understanding the global changemaker network
						</h2>
						<div className="mt-3 text-base leading-7 text-justify text-slate-700">
							<p className="">
								The Global Changemaker is a project aimed at fostering
								intercultural exchange and dismantling stereotypes which
								reinforce inequality. The project primarily focuses on{" "}
								<strong>Sustainable Development Goal 17 (SDG17)</strong>, which
								strongly emphasizes on achieving sustainable development goals
								through global partnerships. Moreover, recognizing that the
								challenges we experience locally, also often have global
								implications, affecting people both in the Global South and
								North similarly. This project highlights the importance of
								addressing such prevalent local issues, through the formation of
								global partnerships. Thus, exploring the projects name “Global”,
								which is a combination of the words “Global” and “Local”,
								therefore reflecting our core mission of bridging local efforts
								with global impact.
							</p>
						</div>
					</div>
					<div>
						<Carousel
							opts={{
								align: "start",
								loop: true,
							}}
							plugins={[
								Autoplay({
									delay: 2000,
								}),
							]}
							className="w-full p-0"
						>
							<CarouselContent className="p-0">
								<CarouselItem className="p-0">
									<CardContent className="flex items-center justify-center h-full p-0">
										<Image
											src="/images/carousel/img-1.jpg"
											alt="carousel"
											width={1600}
											height={1200}
											className="object-cover w-full aspect-[5/3] object-top"
										/>
									</CardContent>
								</CarouselItem>
								<CarouselItem className="p-0">
									<CardContent className="flex items-center justify-center h-full p-0">
										<Image
											src="/images/carousel/img-2.jpg"
											alt="carousel"
											width={1600}
											height={1200}
											className="object-cover w-full aspect-[5/3] object-top"
										/>
									</CardContent>
								</CarouselItem>
								<CarouselItem className="p-0">
									<CardContent className="flex items-center justify-center h-full p-0">
										<Image
											src="/images/carousel/img-3.jpg"
											alt="carousel"
											width={1600}
											height={1200}
											className="object-cover w-full aspect-[5/3] object-top"
										/>
									</CardContent>
								</CarouselItem>
								<CarouselItem className="p-0">
									<CardContent className="flex items-center justify-center h-full p-0">
										<Image
											src="/images/carousel/img-4.jpg"
											alt="carousel"
											width={1600}
											height={1200}
											className="object-cover w-full aspect-[5/3] object-top"
										/>
									</CardContent>
								</CarouselItem>
							</CarouselContent>
							<CarouselPrevious className="absolute transform translate-y-1/2 left-4 top-1/2" />
							<CarouselNext className="absolute transform translate-y-1/2 right-4 top-1/2" />
						</Carousel>
					</div>
				</div>

				<div className="flex flex-col items-center justify-center mt-6 text-center text-masifunde">
					<h3 className="text-xl font-semibold">
						The Ongoing Model of the Project
					</h3>{" "}
					<p className="text-balance">
						The project consists of two face-to-face encounters, each with
						distinct focuses, as well as an intermediate phase between these two
						encounters, where work is done locally in both Germany and South
						Africa. Throughout this process, continuous support and networking
						are provided during the preparation, intermediate and follow-up
						phases.
					</p>
				</div>

				<div className="grid gap-6 mt-6 lg:grid-cols-3">
					<div className="px-4 py-5 text-center text-white bg-masifunde">
						<h4 className="mt-3 text-lg font-medium text-center">
							The First Meeting
						</h4>
						<p className="font-thin text-balance">
							In the first meeting, respective representatives from eight NGOs
							(4 from South Africa and 4 from Germany), gathered in Gqeberha.
							During this encounter, they participated in facilitation training,
							workshops on racism and sexism sensitisation, the 2030 SDG Agenda,
							and filmmaking workshops. Additionally, the partners received
							training on implementing the Masifunde Changemaker Network. Before
							concluding this initial meeting, the partners collaboratively
							selected specific SDG’s to address in partnership, with each South
							African NGO pairing with a German NGO. Together, they developed
							“global” project ideas and action plans for their respective
							locations. Which will then be implemented during the intermediate
							phase.
						</p>
					</div>
					<div className="px-4 py-5 text-center text-white bg-masifunde">
						<h4 className="mt-3 text-lg font-medium text-center">
							The Intermediate Phase
						</h4>
						<p className="font-thin text-balance">
							Now the partners have returned to their home projects, in an aim
							of implementing the developed project ideas and action plans
							formulated in the initial meeting. The main aim of each partner is
							to recruit a minimum of 15 young people (Changemakers), in helping
							them formulate action plans, discussing relevant ideas and topics,
							as well as identifying potential economic, governmental and civil
							society partners. Continuous virtual coaching and mentoring will
							be provided for the NGO’s during this phase, along with
							opportunities for feedback and reflection. Additionally, each NGO
							representative will be responsible for filming and documenting
							their local work, using video cameras provided to them by
							Masifunde.
						</p>
					</div>
					<div className="px-4 py-5 text-center text-white bg-masifunde">
						<h4 className="mt-3 text-lg font-medium text-center">
							The Second-Encounter Phase
						</h4>
						<p className="font-thin text-balance">
							For this phase, the NGO representatives of the initial encounter
							meet together, along with one young person from each of the local
							projects, in Berlin. Here, experiences of the project will be
							shared, as well as the best practices identified in the project.
							Additionally, all footage documented from the local projects, will
							be placed in a documentary film, by an experienced filmmaker, and
							shown during this final conference.
						</p>
					</div>
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
							<br /> of the Glocal Changemaker Network
						</h3>
					</div>
					<div className="w-full ">
						<ul className="pl-10 my-3">
							<li className="flex justify-end gap-2 my-2">
								<ArrowBigRight className="w-6 h-6 text-masifunde fill-masifunde" />
								<span className="max-w-xl">
									Provide representatives of local NGOs with knowledge, skills
									and methods to share the 2030 Agenda with young people in
									their local projects, and train them to be Changemakers.
								</span>
							</li>
							<li className="flex justify-end gap-2 my-2">
								<ArrowBigRight className="w-6 h-6 text-masifunde fill-masifunde" />
								<span className="max-w-xl">
									Provide an opportunity for the participants, both NGO
									representatives and young Changemakers, to get to develop new
									southern and northern perspectives. Therefore, incorporating
									these perspectives within their project ideas.
								</span>
							</li>
							<li className="flex justify-end gap-2 my-2">
								<ArrowBigRight className="w-6 h-6 text-masifunde fill-masifunde" />
								<span className="max-w-xl">
									Provide grounds for the international replicability of the
									Changemaker network, which has been successfully tested and
									implemented in South Africa.
								</span>
							</li>
							<li className="flex justify-end gap-2 my-2">
								<ArrowBigRight className="w-6 h-6 text-masifunde fill-masifunde" />
								<span className="max-w-xl">
									Raising the voice of the youth, especially those in
									marginalized groups and sectors of society.
								</span>
							</li>
							<li className="flex justify-end gap-2 my-2">
								<ArrowBigRight className="w-6 h-6 text-masifunde fill-masifunde" />
								<span className="max-w-xl">
									Promoting youth engagement, by involving young people as
									Changemakers and activating them in their own local
									communities.
								</span>
							</li>
							<li className="flex justify-end gap-2 my-2">
								<ArrowBigRight className="w-6 h-6 text-masifunde fill-masifunde" />
								<span className="max-w-xl">
									Sustainability of the project, by documenting the work done,
									and sharing the best practices discovered throughout the
									process. Thus, participants know how to best replicate such
									initiatives, within their own contexts.
								</span>
							</li>
						</ul>
					</div>
				</div>
        <div className="w-[150px] h-4 bg-masifunde mb-3" />
				<p>
					In Conclusion, this project contributes to the strengthening of
					international youth work, by providing young people with an
					opportunity of actively participating in social change, while gaining
					intercultural understanding and creating significant awareness on
					global challenges. This initiative not only significantly impacts the
					individual, but also contributes in the development of the global
					network of committed and excited young people, working towards a
					better world.
				</p>
			</div>
		</section>
	);
};
export default GlobalPageDescription;
