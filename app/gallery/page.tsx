import { getMedia } from "@/fetchers/media";
import { getOrganisations } from "@/fetchers/organisations";
import MediaGrid from "./MediaGrid";
import cloudinary from "@/utils/cloudinary";
import { ResourcesType } from "@/types/cloudinary-types";

const page = async () => {

    const data = await cloudinary.v2.api
      .resources()
      .then((result: ResourcesType) => {
        return result;
      });

  console.log("Folders", data)

  const mediaData = getMedia()
  const organisationData = getOrganisations()

  const [media, organisations] = await Promise.all([mediaData, organisationData])

  return <main className="bg-white">
    <div className="min-h-screen px-8 py-10 mx-auto max-w-7xl">
      <h1 className="mb-4 text-2xl font-bold md:text-4xl text-slate-700">Our Gallery</h1>
      <MediaGrid media={data.resources} />
    </div>
  </main>;
};
export default page;
