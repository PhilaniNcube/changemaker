"use client"

import { contactAction } from "@/actions/contact-action";
import SubmitButton from "@/components/submit-button";


function Contact() {
  return (
			<section className="py-20 bg-white">
				<div className="px-8 pt-16 mx-auto max-w-7xl">
					<div className="border-2 rounded-tl rounded-tr lg:flex border-slate-200 xl:rounded-bl xl:rounded-tr-none">
						<div className="py-16 xl:w-2/5 lg:w-2/5 bg-masifunde ">
							<div className="px-8 mx-auto xl:w-5/6 xl:px-0">
								<h1 className="pb-4 text-3xl font-bold text-white xl:text-4xl">
									Contact Us
								</h1>
								<p className="pb-8 text-xl font-normal leading-relaxed text-white lg:pr-4">
									If you have any questions or enquiries, please don’t hesitate
									to call or email
								</p>
								<h2 className="text-lg font-medium text-white">
									masifunde Changemaker Network NMB coordinator
								</h2>
								<p className="pt-4 text-white">Chuma Cuba</p>
								<div className="flex items-center">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="icon icon-tabler icon-tabler-phone-call"
											width={20}
											height={20}
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="#ffffff"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											{" "}
											<title>Address</title>
											<path stroke="none" d="M0 0h24v24H0z" />
											<path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
											<path d="M15 7a2 2 0 0 1 2 2" />
											<path d="M15 3a6 6 0 0 1 6 6" />
										</svg>
									</div>
									<p className="pl-4 text-base text-white">067 181 5976</p>
								</div>{" "}
								<div className="flex items-center">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="icon icon-tabler icon-tabler-mail"
											width={20}
											height={20}
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="#FFFFFF"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											{" "}
											<title>Address</title>
											<path stroke="none" d="M0 0h24v24H0z" />
											<rect x={3} y={5} width={18} height={14} rx={2} />
											<polyline points="3 7 12 13 21 7" />
										</svg>
									</div>
									<p className="pl-4 text-base text-white">
										Andisiwe@masifunde.org
									</p>
								</div>
								<h2 className="mt-8 text-lg font-medium text-white">
									masifunde Changemaker Network National coordinator
								</h2>
								<p className="pt-4 text-white">Debaneigh Jordaan</p>
								<div className="flex items-center">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="icon icon-tabler icon-tabler-phone-call"
											width={20}
											height={20}
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="#ffffff"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											{" "}
											<title>Address</title>
											<path stroke="none" d="M0 0h24v24H0z" />
											<path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
											<path d="M15 7a2 2 0 0 1 2 2" />
											<path d="M15 3a6 6 0 0 1 6 6" />
										</svg>
									</div>
									<p className="pl-4 text-base text-white">066 590 8200</p>
								</div>
								<div className="flex items-center">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="icon icon-tabler icon-tabler-mail"
											width={20}
											height={20}
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="#FFFFFF"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											{" "}
											<title>Address</title>
											<path stroke="none" d="M0 0h24v24H0z" />
											<rect x={3} y={5} width={18} height={14} rx={2} />
											<polyline points="3 7 12 13 21 7" />
										</svg>
									</div>
									<p className="pl-4 text-base text-white">
										Debaneigh@masifunde.org
									</p>
								</div>
								<p className="pt-10 text-lg tracking-wide text-white">
									12 8th Avenue, Walmer 6070 <br />
									Gqeberha <br />
								</p>
								<div className="flex items-center">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="icon icon-tabler icon-tabler-phone-call"
											width={20}
											height={20}
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="#ffffff"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<title>Address</title>
											<path stroke="none" d="M0 0h24v24H0z" />
											<path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
											<path d="M15 7a2 2 0 0 1 2 2" />
											<path d="M15 3a6 6 0 0 1 6 6" />
										</svg>
									</div>
									<p className="pl-4 text-base text-white">041 581 25 43</p>
								</div>
								<div className="flex items-center">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="icon icon-tabler icon-tabler-mail"
											width={20}
											height={20}
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="#FFFFFF"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											{" "}
											<title>Contact</title>
											<path stroke="none" d="M0 0h24v24H0z" />
											<rect x={3} y={5} width={18} height={14} rx={2} />
											<polyline points="3 7 12 13 21 7" />
										</svg>
									</div>
									<p className="pl-4 text-base text-white">
										info@masifunde.org
									</p>
								</div>
							</div>
						</div>
						<div className="h-full rounded-tr rounded-br xl:w-3/5 lg:w-3/5 xl:pr-5 xl:pl-0">
							<form
								id="contact"
                action={contactAction}
								className="px-8 py-4 bg-white rounded-tr rounded-br"
							>
								<h1 className="mb-6 text-4xl font-extrabold text-gray-800">
									Enter Details
								</h1>

								<div className="flex-wrap justify-between block w-full mb-6 xl:flex">
									<div className="w-2/4 max-w-xs mb-6 xl:mb-0">
										<div className="flex flex-col">
											<label
												htmlFor="full_name"
												className="mb-2 text-sm font-semibold leading-tight tracking-normal text-gray-800"
											>
												Full Name
											</label>
											<input
												required
												id="full_name"
												name="full_name"
												type="text"
												className="flex items-center w-64 h-10 pl-3 text-sm font-normal border border-gray-300 rounded focus:outline-none focus:border focus:border-masifunde"
											/>
										</div>
									</div>
									<div className="w-2/4 max-w-xs xl:flex xl:justify-end">
										<div className="flex flex-col">
											<label
												htmlFor="email"
												className="mb-2 text-sm font-semibold leading-tight tracking-normal text-gray-800"
											>
												Email
											</label>
											<input
												required
												id="email"
												name="email"
												type="email"
												className="flex items-center w-64 h-10 pl-3 text-sm font-normal border border-gray-300 rounded focus:outline-none focus:border focus:border-masifunde"
											/>
										</div>
									</div>
								</div>

								<div className="flex-wrap justify-between block w-full mb-6 xl:flex">
									<div className="w-2/4 max-w-xs mb-6 xl:mb-0">
										<div className="flex flex-col">
											<label
												htmlFor="phone_number"
												className="mb-2 text-sm font-semibold leading-tight tracking-normal text-gray-800"
											>
												Phone Number
											</label>
											<input
												required
												id="phone_number"
												name="phone_number"
												type="text"
												className="flex items-center w-64 h-10 pl-3 text-sm font-normal border border-gray-300 rounded focus:outline-none focus:border focus:border-masifunde"
											/>
										</div>
									</div>
									<div className="w-2/4 max-w-xs xl:flex xl:justify-end">
										<div className="flex flex-col">
											<label
												htmlFor="title"
												className="mb-2 text-sm font-semibold leading-tight tracking-normal text-gray-800"
											>
												Relation to MCN
											</label>
											<select
												required
												id="title"
												name="title"
												className="flex items-center w-64 h-10 pl-3 text-sm font-normal border border-gray-300 rounded focus:outline-none focus:border focus:border-masifunde"
											>
												<option className="text-xs">I am a funder</option>
												<option className="text-xs">
													I am an implementation partner from MCN NMB
												</option>
												<option className="text-xs">
													I am an implementation partner in MCN National
												</option>
												<option className="text-xs">
													I am a teacher/principal
												</option>
												<option className="text-xs">I am a learner</option>
												<option className="text-xs">
													I want to be an implementation partner
												</option>
											</select>
										</div>
									</div>
								</div>

								<div className="w-full mt-6">
									<div className="flex flex-col">
										<label
											className="mb-2 text-sm font-semibold text-gray-800"
											htmlFor="message"
										>
											Message
										</label>
										<textarea
											name="message"
											className="px-3 py-2 mb-4 text-sm border border-gray-300 rounded outline-none resize-none focus:border focus:border-masifunde"
											rows={8}
											id="message"
											defaultValue={""}
										/>
									</div>
									<SubmitButton
										className="px-8 py-3 text-sm leading-6 text-white transition duration-150 ease-in-out rounded focus:outline-none bg-masifunde hover:bg-indigo-600"
									>
										Submit
									</SubmitButton>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		);
}

export default Contact;
