import { getGlobalPageContent, getGlobalSlider } from "@/sanity/lib/client";
import GlobalPageDescription from "./_components/global-page-description";
import GlobalPageHero from "./_components/global-page-hero";

const Page = async () => {

  const content = await getGlobalPageContent()


  const heroTitle = content.title || "Global Changemaker Network";



	return (
		<main>
			<GlobalPageHero title={heroTitle} />
      <GlobalPageDescription  />
		</main>
	);
};
export default Page;
