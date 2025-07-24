import { getMyProfile, getProfile } from "@/fetchers/profiles";
import UserDetails from "./UserDetails";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const page = async ({ params }: Props) => {
  const { id } = await params;

  const profile = await getProfile(id);

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-700">Profile:</h1>
      <UserDetails profile={profile} />
    </div>
  );
};
export default page;
