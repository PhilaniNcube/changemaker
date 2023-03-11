import { getMyProfile } from "@/fetchers/profiles";
import UserDetails from "./UserDetails";

type Props = {
  params: {
    id: string
  }
}


const page = async ({params: {id}}:Props) => {

  const profile = await getMyProfile(id)

  return <div>
    <h1 className="text-2xl font-bold text-slate-700">Profile:</h1>
    <UserDetails profile={profile} />
  </div>;
};
export default page;
