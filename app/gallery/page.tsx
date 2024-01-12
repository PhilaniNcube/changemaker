import { getMedia } from "@/fetchers/media";
import { getOrganisations } from "@/fetchers/organisations";
import MediaGrid from "./MediaGrid";
import cloudinary from "@/utils/cloudinary";
import { ResourcesType } from "@/types/cloudinary-types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Back from "@/components/back";

const page = async ({searchParams}:{searchParams: {next: string | undefined}}) => {

    console.log(searchParams)

    const data = await cloudinary.v2.api
      .resources({next_cursor: searchParams.next, max_results: 9})
      .then((result: ResourcesType) => {
        return result;
      });

      console.log({data})



  const mediaData = getMedia()
  const organisationData = getOrganisations()

  const [media, organisations] = await Promise.all([mediaData, organisationData])

  return (
    <main className="bg-white">
      <div className="min-h-screen px-8 py-10 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <h1 className="mb-4 text-2xl font-bold md:text-4xl text-slate-700">
            Our Gallery
          </h1>
          <div className="items-center space-x-3 flx">
            <Back />
            <Link href={`/gallery?next=${data.next_cursor}`}>
              <Button type="button">Next</Button>
            </Link>
          </div>
        </div>
        <MediaGrid media={data.resources} />
      </div>
    </main>
  );
};
export default page;
