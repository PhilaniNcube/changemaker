import { getOrganisations } from "@/fetchers/organisations";
import NewUserForm from "./NewUserForm";

const page = async () => {

  const organisations = await getOrganisations()

  return <div>
    <NewUserForm organisations={organisations} />
  </div>;
};
export default page;
