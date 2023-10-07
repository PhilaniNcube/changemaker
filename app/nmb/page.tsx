import { getNMBHero, getNmbPageDescription, nmbPageFocus } from "@/sanity/lib/client";
import NationalGrid from "../national/NationalGrid";
import NMBDetails from "./NMBDetails";
import NMBFocus from "./NMBFocus";
import NMBFunders from "./NMBFunders";
import NMBSchools from "./NMBSchools";
import NMBVideo from "./NMBVideo";

const page = async () => {

  const {nmbheading, nmbSubtitle , nmbHeroImage} = await getNMBHero()

  const {descriptionText} = await getNmbPageDescription()
  const nmbFocus = await nmbPageFocus();

  return (
    <main className="bg-white pb-10" id="video">
      <NMBDetails
        title={nmbheading}
        imageObject={nmbHeroImage}
        description={nmbSubtitle}
      />
      <NMBVideo />
      <NMBFocus text={descriptionText} focus={nmbFocus} />
      <NMBSchools />
      <NMBFunders />
    </main>
  );
};
export default page;
