import cloudinary from "@/utils/cloudinary";
import MediaForm from "./MediaForm";
import { getOrganisations } from "@/fetchers/organisations";
import { getFolders } from "@/fetchers/folders-direct";
import CreateFolder from "../profile/CreateFolder";
import FolderTable from "../_components/folder-table";
import { getRootFolders } from "@/fetchers/folders";

const page = async () => {
  const foldersData = await getRootFolders();
  console.log("Fetched folders:", foldersData.folders);

  return (
    <div className="flex flex-col w-full gap-8 md:flex-row">
      <CreateFolder />
      <div className="">
        <FolderTable folders={foldersData.folders} />
      </div>
    </div>
  );
};
export default page;
