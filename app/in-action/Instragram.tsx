/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import type { InstagramMedia } from "./page";
import Script from "next/script";

type ComponentProps = {
  feed: InstagramMedia[];
};

const InstagramFeed = ({ feed }: ComponentProps) => {
	return (
		<div className="max-w-6xl px-6 py-10 mx-auto lg:px-0">
			<h1 className="text-2xl font-bold text-center md:text-5xl text-slate-800 ">
				News
			</h1>
			<div className="grid gap-6 md:grid-cols-2">
				<div>
					<div id="fb-root" />
					<Script
						async={true}
						defer={true}
						crossOrigin="anonymous"
						src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v20.0&appId=614048922874767"
						nonce="NFp6cIEK"
					/>
					<div
						className="fb-post"
						data-href="https://www.facebook.com/permalink.php?story_fbid=pfbid0D5DfGDJBHHAETBe4V6BUaVWbMYx2aswknGEYo5PUgyvD3ETGyseTxoibsRePkLj4l"
						data-width="750"
						data-show-text="false"
					/>
				</div>
				<div className="grid grid-cols-1 gap-4 mx-auto mt-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
					{feed.map((media: InstagramMedia) => (
						<div
							key={media.id}
							className="relative items-center justify-center w-full transition duration-300 ease-in-out rounded-lg shadow group aspect-square"
						>
							{media.media_type === "VIDEO" ? (
								<img
									width={200}
									height={200}
									src={media.thumbnail_url || media.media_url}
									alt="Instagram post"
									className="object-cover w-full h-full"
								/>
							) : (
								<img
									width={200}
									height={200}
									src={media.media_url}
									alt="Instagram post"
									className="object-cover w-full h-full"
								/>
							)}

							<p className="inset-0 items-center justify-center hidden px-4 text-slate-800 text-balance bg-slate-300/60 line-clamp-1 group-hover:absolute group-hover:flex">
								{media.caption}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default InstagramFeed;
