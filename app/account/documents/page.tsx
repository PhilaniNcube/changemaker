import { getDocuments } from "@/fetchers/documents";
import Documents from "./Documents";

const page = async () => {

  const documents = await getDocuments()

  return <div className="bg-white">
    <Documents documents={documents} />
  </div>;
};
export default page;
