import { YouTubeEmbed } from "@next/third-parties/google";

const LuncheonVideos = () => {
  return (
			<section className="py-10 bg-slate-200">
				<div className="px-8 mx-auto max-w-7xl lg:px-0">
					<h2 className="mb-3 text-2xl font-bold text-center text-black">
						Watch the SPARK Change Luncheon videos
					</h2>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						<YouTubeEmbed videoid="vz53WhxFsZ4" style="aspect-ratio: 16 / 9" />
						<YouTubeEmbed videoid="mpZsO7JCKpM" style="aspect-ratio: 16 / 9" />
						<YouTubeEmbed videoid="f9arGRWh9LE" style="aspect-ratio: 16 / 9" />
					</div>
				</div>
			</section>
		);
};
export default LuncheonVideos;
