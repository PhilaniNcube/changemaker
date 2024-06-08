/* eslint-disable @next/next/no-img-element */
"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { InstagramMedia } from "./page";

type ComponentProps = {
  feed: InstagramMedia[];
};

const Instragram =  () => {


  return (
			<section className="py-10 bg-white">
				<div className="flex flex-col items-center px-8 mx-auto max-w-7xl">
					<h1 className="text-2xl font-bold md:text-5xl text-slate-800 ">
						News
					</h1>

					<p className="text-base text-slate-700">
						Stay updated through our Social Media Feeds!
					</p>
					<div className="flex justify-center w-full gap-8">
						<div className="flex justify-center w-full">
							<div className="flex justify-center w-full px-3 mt-4 text-slate-700">
								<div
									className="fb-page"
									data-href="https://www.facebook.com/profile.php?id=100083194785525"
									data-tabs="timeline"
									data-width="500"
									data-height=""
									data-small-header="false"
									data-adapt-container-width="true"
									data-hide-cover="false"
									data-show-facepile="false"
								>
									<blockquote
										cite="https://www.facebook.com/profile.php?id=100083194785525"
										className="fb-xfbml-parse-ignore"
									>
										<a href="https://www.facebook.com/profile.php?id=100083194785525">
											Changemaker Network
										</a>
									</blockquote>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
};
export default Instragram;
