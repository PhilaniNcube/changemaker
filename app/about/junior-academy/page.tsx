import HowItWorks from "@/app/national/HowItWorks";
import AcademyFocus from "./_components/academy-focus";
import AcademyHero from "./_components/academy-hero";
import { getNationalPageRolePlayers, getPageContent, getPageLists } from "@/sanity/lib/client";
import AcademyFunders from "./_components/academy-funders";

const page = async () => {

const pageContent = await getPageContent('junior-academy');




  return (
			<main>
				<AcademyHero title={pageContent.title} subtitle={pageContent.subtitle} />
				<AcademyFocus pageContent={pageContent} />
				{/* <HowItWorks roleplayers={roleplayers} /> */}
        <AcademyFunders />
			</main>
		);
};
export default page;
