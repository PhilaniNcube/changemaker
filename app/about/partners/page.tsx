import { getPartners } from "@/sanity/lib/client";

const page = async () => {

  const partners = await getPartners();

  console.log(partners)

  return <div>
    <pre>{JSON.stringify(partners, null, 2)}</pre>
  </div>;
};
export default page;
