import NationalHero from "./NationalHero";
import NationalFocus from "./NationalFocus";
import NationalDetails from "./NationalDetails";
import HowItWorks from "./HowItWorks";
import NationalFunders from "./NationalFunders";
import NationalVideo from "./NationalVideo";
import { getNationalPageDescription, getNationalPageFocus, getNationalPageHero, getNationalPageRolePlayers, getProvinceDescription } from "@/sanity/lib/client";
import { imageBuilder, urlForImage } from "../sanity.image";





const page = async () => {

  const {heading, subtitle, image, subtitleContent} = await getNationalPageHero();



  const heroImage = urlForImage(image.asset).url();

  const pageDescription = await getNationalPageDescription()

  const { descriptionText } = await getProvinceDescription();

  const pageFocus = await getNationalPageFocus()

  const roleplayers = await getNationalPageRolePlayers()

  return (
    <main>
      <NationalHero
        title={heading}
        image={heroImage}
        subheading={subtitle}
        subtitleContent={subtitleContent}
      />
      <NationalVideo />
      <NationalDetails description={pageDescription.descriptionText} />
      <NationalFocus province={descriptionText} pageFocus={pageFocus} />
      <HowItWorks roleplayers={roleplayers} />
      <NationalFunders />
    </main>
  );
};
export default page;
