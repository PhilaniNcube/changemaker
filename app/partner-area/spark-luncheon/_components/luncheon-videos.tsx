import { YouTubeEmbed } from "@next/third-parties/google";
import Link from "next/link";

const LuncheonVideos = () => {
	return (
    <section className="py-10 bg-slate-200">
      <div className="max-w-6xl px-6 mx-auto lg:px-0">
        <h2 className="mb-3 text-2xl font-bold text-center text-black">
          Watch the SPARK Change Luncheon videos
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <YouTubeEmbed videoid="PbM32Cm7qzA" style="aspect-ratio: 16 / 9" />
            <Link
              href="https://www.youtube.com/watch?v=PbM32Cm7qzA"
              className="font-medium text-md"
            >
              Environmental Awareness Campaigns with TUICF
            </Link>
          </div>
          <div>
            <YouTubeEmbed videoid="4NyjQFh0CgU" style="aspect-ratio: 16 / 9" />
            <Link
              href="https://www.youtube.com/watch?v=sSFpJUh0jyM&list=PL0FxYca_J3-fM7qPN7861DKU-PCzy29Hw&index=24"
              className="font-medium text-md"
            >
              Luncheon on Prevention of GBVF
            </Link>
          </div>
          <div>
            <YouTubeEmbed videoid="mpZsO7JCKpM" style="aspect-ratio: 16 / 9" />
            <Link
              href="https://www.youtube.com/watch?v=mpZsO7JCKpM&list=PL0FxYca_J3-fM7qPN7861DKU-PCzy29Hw&index=3"
              className="font-medium text-md"
            >
              Luncheon on Youth Unemployment
            </Link>
          </div>
          <div>
            <YouTubeEmbed videoid="131NFp8gojM" style="aspect-ratio: 16 / 9" />
            <Link
              href="https://www.youtube.com/watch?v=2QtL_0otHhk&list=PL0FxYca_J3-fM7qPN7861DKU-PCzy29Hw&index=16"
              className="font-medium text-md"
            >
              Luncheon on School Safety
            </Link>
          </div>
          <div>
            <YouTubeEmbed videoid="E_zwzqXe_GQ" style="aspect-ratio: 16 / 9" />

            <Link
              href="https://www.youtube.com/watch?v=f9arGRWh9LE&list=PL0FxYca_J3-fM7qPN7861DKU-PCzy29Hw&index=15"
              className="font-medium text-md"
            >
              Luncheon on Active Citizenship
            </Link>
          </div>
          <div>
            <YouTubeEmbed videoid="H30pI16QptU" style="aspect-ratio: 16 / 9" />
            <Link
              href="https://www.youtube.com/watch?v=kITWc26Ajso&list=PL0FxYca_J3-fM7qPN7861DKU-PCzy29Hw&index=17"
              className="font-medium text-md"
            >
              Luncheon on Mental Health
            </Link>
          </div>
          <div>
            <YouTubeEmbed videoid="8YPrPsYMnSE" style="aspect-ratio: 16 / 9" />
            <Link
              href="https://www.youtube.com/watch?v=eoTzL_DfBlA"
              className="font-medium text-md"
            >
              Luncheon on Environmental Awareness
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LuncheonVideos;
