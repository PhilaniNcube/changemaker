import HowItWorks from "@/app/national/HowItWorks";
import AcademyFocus from "./_components/academy-focus";
import AcademyHero from "./_components/academy-hero";
import { getNationalPageRolePlayers } from "@/sanity/lib/client";
import AcademyFunders from "./_components/academy-funders";

const page = async () => {

  const roleplayers = await getNationalPageRolePlayers();

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
