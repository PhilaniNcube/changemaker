import NationalHero from "./NationalHero";
import NationalFocus from "./NationalFocus";
import NationalDetails from "./NationalDetails";
import HowItWorks from "./HowItWorks";
import NationalFunders from "./NationalFunders";
import NationalVideo from "./NationalVideo";





const page = () => {
  return (
    <main>
     <NationalHero />
     <NationalVideo />
     <NationalDetails />
     <NationalFocus />
     <HowItWorks />
     <NationalFunders />
    </main>
  );
};
export default page;
