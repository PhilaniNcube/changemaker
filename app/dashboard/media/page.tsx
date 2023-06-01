import cloudinary from '@/utils/cloudinary';
import MediaForm from './MediaForm'
import { getOrganisations } from '@/fetchers/organisations';
import CreateFolder from '../profile/CreateFolder';

const page = async () => {

  const organisations = await getOrganisations();

    const { folders, total_count } = await cloudinary.v2.api
      .root_folders(() => console.log("root folders"), {
        max_results: 500,
      })
      .then((result: any) => {
        return result;
      })
      .catch((err: any) => console.log(err));

  return <div className="w-full">
   <h1 className="text-2xl text-slate-700 font-bold">Upload Image</h1>
   <div className="grid grid-cols-3 gap-2">
    <div className="col-span-2">

    <MediaForm organisations={organisations} folders={folders} />
    </div>
    <div className="col-span-1 py-6">
      <CreateFolder />
      </div>
   </div>
  </div>;
};
export default page;
