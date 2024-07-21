import { Button } from "@/components/ui/button";
import { FacebookIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const benefits = [
	{
		title: "Learn or develop a new skill",
		img: "/images/learner-area/gear.svg",
		width: 85,
		height: 85,
	},
	{
		title: "Become part of a community",
		img: "/images/learner-area/people.svg",
		width: 85,
		height: 85,
	},
	{
		title: "Become part of a network of changemakers",
		img: "/images/learner-area/hex.svg",
		width: 85,
		height: 85,
	},
	{
		title: "Have a sense of achievement",
		img: "/images/learner-area/ribbon.svg",
		width: 85,
		height: 85,
	},
	{
		title: "Boost your career options",
		img: "/images/learner-area/steps.svg",
		width: 85,
		height: 85,
	},
	{
		title: "Find what you are passionate about",
		img: "/images/learner-area/heart.svg",
		width: 85,
		height: 85,
	},
	{
		title:
			"Advocate for causes and issues that directly or indirectly affect you",
		img: "/images/learner-area/speaker.svg",
		width: 85,
		height: 85,
	},
	{
		title: "Make a difference to a cause that has an impact globally",
		img: "/images/learner-area/globe.svg",
		width: 85,
		height: 85,
	},
	{
		title: "Do something your future self will thank you for",
		img: "/images/learner-area/handshake.svg",
		width: 85,
		height: 85,
	},
	{
		title: "Increase self-confidence",
		img: "/images/learner-area/stars.svg",
		width: 85,
		height: 85,
	},
];

const Benefits = () => {
  return (
			<section>
				<div className="bg-masifunde">
					<div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
						<Image
							src="/images/learner-area-banner.webp"
							width={1000}
							height={665}
							alt="Benefits of being a changemaker"
							className="object-cover w-full aspect-video rounded-2xl"
						/>
						<div className="flex flex-col justify-center">
							<div className="flex items-center w-full">
								{" "}
								<h2 className="text-3xl lg:text-5xl font-bold leading-7 text-white max-w-[20ch] lg:leading-12 ">
									Changemakers are changing the world, one act at a time.
								</h2>
							</div>
							<div className="my-4">
								<Link
									href="https://www.facebook.com/groups/960613284612519"
									target="_blank"
								>
									<Button
										type="button"
										className="font-medium text-white bg-blue-600"
									>
										<FacebookIcon className="w-6 h-6 mr-2" />
										Follow Us
									</Button>
								</Link>
							</div>
						</div>{" "}
					</div>
				</div>

				<div className="px-6 py-10 lg:px-0">
					<div className="grid grid-cols-2 gap-4 mx-auto mt-8 md:grid-cols-3 lg:grid-cols-5 max-w-7xl">
						{benefits.map((benefit, i) => (
							<div
								key={benefit.title}
								className="flex flex-col items-center justify-center w-full p-6 transition duration-300 ease-in-out rounded-lg shadow bg-masifunde hover:bg-masifunde aspect-square"
							>
                <Image src={benefit.img} alt="Icon" width={85} height={85} />
								<p className="font-medium text-center text-white text-md">
									{benefit.title}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		);
};
export default Benefits;
