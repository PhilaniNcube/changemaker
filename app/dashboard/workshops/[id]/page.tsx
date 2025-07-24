import { getOrganisations } from "@/fetchers/organisations";
import { getWorkshop } from "@/fetchers/workshops";
import WorkshopForm from "./WorkshopForm";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const page = async ({ params }: Props) => {
  const { id } = await params;

  const workshopData = getWorkshop(id);
  const organisationData = getOrganisations();

  const [workshop, organisations] = await Promise.all([
    workshopData,
    organisationData,
  ]);

  return (
    <div className="w-full">
      <h1 className="text-2xl text-slate-700 font-medium">
        Update Workshop Details
      </h1>
      <WorkshopForm workshop={workshop} organisations={organisations} />
    </div>
  );
};
export default page;
