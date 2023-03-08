import NationalGrid from "../national/NationalGrid";
import NMBDetails from "./NMBDetails";
import NMBFocus from "./NMBFocus";
import NMBSchools from "./NMBSchools";
import NMBVideo from "./NMBVideo";

const page = () => {
  return (
    <main className="bg-white pb-10" id="video">
      <NMBDetails />
      <NMBFocus />
      <NMBSchools />
      <NMBVideo />
    </main>
  );
};
export default page;
