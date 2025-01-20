

import { Suspense } from "react";
import Partners from "./Partners";
import PartnersHero from "./PartnersHero";
import { getCSOSlider } from "@/sanity/lib/client";
import { urlForImage } from "@/app/sanity.image";


const page = async () => {

  const csoSlider = await getCSOSlider();


  const images = csoSlider.images.map((image) => {
    return {
      src: urlForImage(image.asset).url(),
      alt: "CSO Slider",
    }
  });


  return (
    <main>
      <PartnersHero images={images} />
      <Suspense fallback={<div>Loading...</div>}>
        <Partners />
      </Suspense>
    </main>
  );
};
export default page;
