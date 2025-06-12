import ProfileDetails from "./ProfileDetails";
import createClient from "../../../lib/supabase-server";
import { getOrganisations } from "@/fetchers/organisations";
import CreateFolder from "./CreateFolder";
import AccountPage from "@/app/account/[id]/AccountPage";
import { getDocuments } from "@/fetchers/documents";
import { getMyProfile, getProfile } from "@/fetchers/profiles";

const page = async () => {
  const profileData = getMyProfile();
  const organisationsData = getOrganisations();
  const documentsData = getDocuments();

  const [profile, organisations, documents] = await Promise.all([
    profileData,
    organisationsData,
    documentsData,
  ]);

  return (
    <main>
      <div className="flex flex-col gap-8">
        {profile ? (
          <AccountPage
            profile={profile}
            organisations={organisations}
            documents={documents}
          />
        ) : null}
        <div className="w-full mt-3 md:w-2/3 lg:w-1/2">
          <CreateFolder />
        </div>
      </div>
    </main>
  );
};
export default page;
