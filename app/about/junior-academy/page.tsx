import HowItWorks from "@/app/national/HowItWorks";
import AcademyFocus from "./_components/academy-focus";
import AcademyHero from "./_components/academy-hero";
import { getNationalPageRolePlayers, getPageContent, getPageLists } from "@/sanity/lib/client";
import AcademyFunders from "./_components/academy-funders";

const page = async () => {

  const content = await getPageContent("junior-academy");
  console.log(JSON.stringify(content, null, 2));



  return (
			<main>
				<AcademyHero />
				<AcademyFocus />
				{/* <HowItWorks roleplayers={roleplayers} /> */}
        <AcademyFunders />
			</main>
		);
};
export default page;
