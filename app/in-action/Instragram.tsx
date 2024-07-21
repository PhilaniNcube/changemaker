
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { InstagramMedia } from "./page";

type ComponentProps = {
  feed: InstagramMedia[];
};

const InstagramFeed =  async () => {

    const instagramFeed = await fetch(
					`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${process.env.INSTAGRAM_TOKEN}&limit=9`,
				);

				const data = await instagramFeed.json();

				console.log(data);

				return (
					<div className="max-w-6xl px-6 py-10 mx-auto lg:px-0">
						<h1 className="text-2xl font-bold text-center md:text-5xl text-slate-800 ">
							News
						</h1>
						<div className="grid grid-cols-1 gap-4 mx-auto mt-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
							{data.data.map((media: InstagramMedia) => (
								<div
									key={media.id}
									className="relative items-center justify-center w-full transition duration-300 ease-in-out rounded-lg shadow group aspect-square"
								>
									{media.media_type === "VIDEO" ? (
										<Image
											width={200}
											height={200}
											src={media.thumbnail_url || media.media_url}
											alt="Instagram post"
											className="object-cover w-full h-full"
										/>
									) : (
										<Image
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
				);
};
export default InstagramFeed;
