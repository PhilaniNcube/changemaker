import { YouTubeEmbed } from "@next/third-parties/google";

const SummitVideo = () => {
  return (
    <div className="mb-8">
      <YouTubeEmbed videoid="P20Fb_74y7w" style="aspect-ratio: 16 / 9" />
    </div>
  );
};

export default SummitVideo;
