import cloudinary from '@/utils/cloudinary';
import MediaForm from './MediaForm'
import { getOrganisations } from '@/fetchers/organisations';
import CreateFolder from '../profile/CreateFolder';
import FolderTable from '../_components/folder-table';

const page = async () => {

  const organisationsData =  getOrganisations();

    const foldersData =  cloudinary.v2.api
      .root_folders(() => console.log("root folders"))
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      .then((result: any) => {
        return result;
      })
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      .catch((err: any) => console.log(err));

      const [{ folders }, organisations] = await Promise.all([foldersData, organisationsData]);

  return (
    <div className="flex flex-col w-full gap-8 md:flex-row">
      <div >
        <CreateFolder />
      </div>
      <div className="flex-1">
      <FolderTable folders={folders} />
      </div>
    </div>
  );
};
export default page;
