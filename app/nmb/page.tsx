import NationalGrid from "../national/NationalGrid";
import NMBDetails from "./NMBDetails";
import NMBFocus from "./NMBFocus";
import NMBSchools from "./NMBSchools";

const page = () => {
  return (
    <main>
      <NMBDetails />
      <NMBFocus />
      <NMBSchools />

    </main>
  );
};
export default page;
