import { getMyProfile } from "@/fetchers/profiles";
import AccountPage from "./AccountPage";

type Props = {
  params: {
    id: string
  }
}



const page = async ({params: {id}}:Props) => {

  const profile = await getMyProfile(id)

  return <main className="h-screen bg-white">

    <AccountPage profile={profile} />
  </main>;
};
export default page;
