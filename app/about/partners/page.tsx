

import { Suspense } from "react";
import Partners from "./Partners";
import PartnersHero from "./PartnersHero";


const page = () => {



  return (
    <main>
      <PartnersHero />
      <Suspense fallback={<div>Loading...</div>}>
      {/* @ts-expect-error Server Component */}
        <Partners />
      </Suspense>
    </main>
  );
};
export default page;