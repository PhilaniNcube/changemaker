import NationalHero from "./NationalHero";
import NationalFocus from "./NationalFocus";
import NationalDetails from "./NationalDetails";
import HowItWorks from "./HowItWorks";
import NationalFunders from "./NationalFunders";





const page = () => {
  return (
    <main>
     <NationalHero />
     <NationalDetails />
     <NationalFocus />
     <NationalFunders />
     <HowItWorks />
    </main>
  );
};
export default page;
