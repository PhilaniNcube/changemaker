import { getPageContent } from "@/sanity/lib/client";
import LuncheonHero from "./_components/luncheon-hero";
import { urlFor } from "@/sanity/lib/image";
import LuncheonContent from "./_components/luncheon-content";
import LuncheonBlocks from "./_components/luncheon-blocks";
import LuncheonVideos from "./_components/luncheon-videos";
import LuncheonLogos from "./_components/luncheon-logos";


const LuncheonPage = async () => {

  const pageContent = await getPageContent("spark-luncheon");


  const rightImage = urlFor(pageContent.hero_image).url();
  const leftImage = urlFor(pageContent.illustration).url();

  console.log({leftImage, rightImage})



  return <main>
    <LuncheonHero leftImage={leftImage} rightImage={rightImage} />
    <LuncheonContent content={pageContent.content} title={pageContent?.subtitle} />
    <LuncheonBlocks />
    <LuncheonVideos />
    <LuncheonLogos />
  </main>;
};
export default LuncheonPage;
