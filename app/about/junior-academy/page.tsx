import HowItWorks from "@/app/national/HowItWorks";
import AcademyFocus from "./_components/academy-focus";
import AcademyHero from "./_components/academy-hero";
import { getAcademySlider, getNationalPageRolePlayers, getPageContent, getPageLists } from "@/sanity/lib/client";
import AcademyFunders from "./_components/academy-funders";

type SliderText = {
  _id: string;
  sliderText: string[];
};

const page = async () => {

const pageContent = await getPageContent('junior-academy');

const sliderText: SliderText = await getAcademySlider();
console.log(sliderText)


  return (
    <main>
      <AcademyHero title={pageContent.title} subtitle={pageContent.subtitle} />
      <AcademyFocus pageContent={pageContent} text={sliderText.sliderText} />
      {/* <HowItWorks roleplayers={roleplayers} /> */}
      <AcademyFunders />
    </main>
  );
};
export default page;
