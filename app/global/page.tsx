import { getGlobalPageContent, getGlobalPageList, getGlobalSlider, getPageLists } from "@/sanity/lib/client";
import GlobalPageDescription from "./_components/global-page-description";
import GlobalPageHero from "./_components/global-page-hero";

const Page = async () => {

  const content = await getGlobalPageContent()




  const heroTitle = content.title || "Glocal Changemaker Network";
  const subtitle = content.subtitle || ''



	return (
		<main>
			<GlobalPageHero title={heroTitle} subtitle={subtitle} />
      <GlobalPageDescription  />
		</main>
	);
};
export default Page;
