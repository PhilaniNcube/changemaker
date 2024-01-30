

import { Suspense } from "react";
import Partners from "./Partners";


const page = () => {



  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
      {/* @ts-expect-error Server Component */}
        <Partners />
      </Suspense>
    </main>
  );
};
export default page;
