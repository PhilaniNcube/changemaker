import { getWorkshops } from "@/fetchers/workshops";
import { Suspense } from "react";
import AddWorkshop from "./AddWorkshop";
import WorkshopsTable from "./WorkshopsTable";

export const revalidate = 0;

const page = async () => {
  const workshops = await getWorkshops();

  return (
    <div className="w-full">
      <AddWorkshop />
      <Suspense fallback="Loading...">
        <WorkshopsTable workshops={workshops} />
      </Suspense>
    </div>
  );
};
export default page;
