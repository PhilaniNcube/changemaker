import { getMedia } from "@/fetchers/media";
import { getOrganisations } from "@/fetchers/organisations";
import MediaGrid from "./MediaGrid";

const page = async () => {

  const mediaData = getMedia()
  const organisationData = getOrganisations()

  const [media, organisations] = await Promise.all([mediaData, organisationData])

  return <main className="bg-white">
    <div className="max-w-7xl mx-auto px-8 py-10 min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-slate-700">Our Gallery</h1>
      <MediaGrid media={media} />
    </div>
  </main>;
};
export default page;
