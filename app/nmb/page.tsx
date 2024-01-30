import { getNMBHero, getNMBPageFunders, getNmbPageDescription, nmbPageFocus } from "@/sanity/lib/client";
import NationalGrid from "../national/NationalGrid";
import NMBDetails from "./NMBDetails";
import NMBFocus from "./NMBFocus";
import NMBFunders from "./NMBFunders";
import NMBSchools from "./NMBSchools";
import NMBVideo from "./NMBVideo";
import { getSchools } from "@/fetchers/schools";

const page = async () => {

  const {nmbheading, nmbSubtitle , nmbHeroImage} = await getNMBHero()

  const {descriptionText} = await getNmbPageDescription()
  const nmbFocus = await nmbPageFocus();

  const schools = await getSchools()

  const funders = await getNMBPageFunders()

  return (
    <main className="pb-10 bg-white" id="video">
      <NMBDetails
        title={nmbheading}
        imageObject={nmbHeroImage}
        description={nmbSubtitle}
      />
      <NMBVideo />
      <NMBFocus text={descriptionText} focus={nmbFocus} />
      <NMBSchools schools={schools} />
      <NMBFunders funders={funders} />
    </main>
  );
};
export default page;
