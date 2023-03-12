import MediaForm from './MediaForm'
import { getOrganisations } from '@/fetchers/organisations';

const page = async () => {

  const organisations = await getOrganisations();

  return <div>
   <h1 className="text-2xl text-slate-700 font-bold">Upload Image</h1>
    <MediaForm organisations={organisations} />
  </div>;
};
export default page;
