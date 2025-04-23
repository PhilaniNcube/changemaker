"use client"

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import type { PartnersProps } from "./Partners";
import { Facebook, Globe2Icon, Instagram, Mail, MapPinIcon, Phone, Twitter, User, Youtube } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image"
import { PortableText } from "@portabletext/react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

const PartnerAccordions = ({ partners }: PartnersProps) => {

	console.log(partners)
	return (
		<Accordion type="single" collapsible className="w-full my-8">
			{partners.map((item) => (
				<AccordionItem key={item.slug.current} value={item.slug.current}>
					<AccordionTrigger>{item.organisationName}</AccordionTrigger>
					<AccordionContent>
						<div className="w-full px-4 py-8 bg-slate-50">
							<div className="flex items-center justify-between">
								<div className="flex flex-col">
									<h3 className="text-3xl font-bold text-masifunde">
										{item.organisationName}
									</h3>
									<div className="flex flex-row items-start space-x-4">
										<MapPinIcon className="w-10 h-10 text-masifunde" />
										<div className="flex flex-col space-y-2">
											{item.town ? (
												<p className="text-lg font-medium">
													Town: {item.town}
												</p>
											) : (
												""
											)}
											{item.district ? (
												<p className="text-lg font-medium">
													District: {item.district}
												</p>
											) : (
												""
											)}
											{item.province ? (
												<p className="text-lg font-medium">
													Province: {item.province}
												</p>
											) : (
												""
											)}
											{item.website ? (
												<div className="flex flex-row items-center space-x-2">
													<Globe2Icon />
													<Link
														prefetch={false}
														href={item.website}
														target="_blank"
														rel="noopener noreferrer"
													>
														{item.website}
													</Link>
												</div>
											) : (
												""
											)}
											{item.facebook ? (
												<div className="flex flex-row items-center space-x-2">
													<Facebook />
													<Link
														prefetch={false}
														href={item.facebook}
														target="_blank"
														rel="noopener noreferrer"
													>
														{item.facebook}
													</Link>
												</div>
											) : (
												""
											)}
											{item.twitter ? (
												<div className="flex flex-row items-center space-x-2">
													<Twitter />
													<Link
														prefetch={false}
														href={item.twitter}
														target="_blank"
														rel="noopener noreferrer"
													>
														{item.twitter}
													</Link>
												</div>
											) : (
												""
											)}
											{item.instagram ? (
												<div className="flex flex-row items-center space-x-2">
													<Instagram />
													<Link
														prefetch={false}
														href={item.instagram}
														target="_blank"
														rel="noopener noreferrer"
													>
														{item.instagram}
													</Link>
												</div>
											) : (
												""
											)}
											{item.youtube ? (
												<div className="flex flex-row items-center space-x-2">
													<Youtube />
													<Link
														prefetch={false}
														href={item.youtube}
														target="_blank"
														rel="noopener noreferrer"
													>
														{item.youtube}
													</Link>
												</div>
											) : (
												""
											)}
											{item.contactPerson ? (
												<div className="flex flex-row items-center space-x-2">
													<User />
													<Link
														prefetch={false}
														href={item.contactPerson}
														target="_blank"
														rel="noopener noreferrer"
													>
														{item.contactPerson}
													</Link>
												</div>
											) : (
												""
											)}
											{item.contactNumber ? (
												<div className="flex flex-row items-center space-x-2">
													<Phone />
													<p>{item.contactNumber}</p>
												</div>
											) : (
												""
											)}
											{item.email ? (
												<div className="flex flex-row items-center space-x-2">
													<Mail />
													<p>{item.email}</p>
												</div>
											) : (
												""
											)}
										</div>
									</div>
								</div>
								{item.logo?.asset && (
									<Image
										width={400}
										height={400}
										className="object-cover w-44"
										src={urlForImage(item.logo?.asset).url()}
										alt={item.organisationName}
									/>
								)}
							</div>
							<div className="flex flex-col my-3 text-base text-slate-800">
								<PortableText value={item.description} />
							</div>

							<div className="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2 lg:grid-cols-3">
								{item.images && item.images?.map((image) => {

									if (!image.asset) return null;

									return (
										<div key={image.asset._ref} className="relative w-full h-80">
											<Image
												layout="fill"
												objectFit="cover"
												src={urlForImage(image.asset).url()}
												alt="Partner Image"
												priority={false}
												quality={70}
											/>
										</div>
									);
								})}

							</div>
						</div>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
};
export default PartnerAccordions;
