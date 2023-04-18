import NationalGrid from "../national/NationalGrid";
import NMBDetails from "./NMBDetails";
import NMBFocus from "./NMBFocus";
import NMBFunders from "./NMBFunders";
import NMBSchools from "./NMBSchools";
import NMBVideo from "./NMBVideo";

const page = () => {
  return (
    <main className="bg-white pb-10" id="video">
      <NMBDetails />
      <NMBFocus />
      <NMBFunders />
      <NMBSchools />
      <NMBVideo />
    </main>
  );
};
export default page;
