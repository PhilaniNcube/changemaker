import { Database } from "@/schema";
import { DocumentIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
  documents: Database['public']['Tables']['documents']['Row'][]
}

const Documents = ({documents}:Props) => {
  return <section className="max-w-7xl mx-auto px-8 py-10">
    <h1 className="text-3xl text-slate-700 font-bold">Documents</h1>
    <div className="mt-4 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {documents.map((doc) => (
        <Link href={doc.src!} key={doc.id} className="w-full overflow-hidden border border-masifunde rounded-md shadow aspect-square flex flex-col items-center justify-center">
          <DocumentIcon className="h-20 w-20 md:h-24 md:w-24 text-masifunde" />
          <p className="text-center text-md md:text-xl font-medium text-slate-700 capitalize">{doc.title}</p>
        </Link>
      ))}
    </div>
  </section>;
};
export default Documents;
