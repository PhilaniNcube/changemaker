import HowItWorks from "@/app/national/HowItWorks";
import AcademyFocus from "./_components/academy-focus";
import AcademyHero from "./_components/academy-hero";
import { getAcademyListContent, getAcademySlider, getNationalPageRolePlayers, getPageContent, getPageLists } from "@/sanity/lib/client";
import AcademyFunders from "./_components/academy-funders";

type SliderText = {
  _id: string;
  sliderText: string[];
};

const page = async () => {

const pageContentData = getPageContent('junior-academy');
const academyListContentData = getAcademyListContent();

const sliderTextData: Promise<SliderText> =  getAcademySlider();

const [pageContent, sliderText, academyListContent] = await Promise.all([
  pageContentData,
  sliderTextData,
  academyListContentData,
]);

console.log(academyListContent);


  return (
    <main>
      <AcademyHero title={pageContent.title} subtitle={pageContent.subtitle} />
      <AcademyFocus
        pageContent={pageContent}
        text={sliderText.sliderText}
        academyListContent={academyListContent}
      />
      {/* <HowItWorks roleplayers={roleplayers} /> */}
      <AcademyFunders />
    </main>
  );
};
export default page;
