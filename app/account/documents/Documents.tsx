"use client";

import { Database } from "@/schema";
import { DocumentIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
  documents: Database["public"]["Tables"]["documents"]["Row"][];
};

const Documents = ({ documents }: Props) => {
  const handleDownload = (url: string, title: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = title;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="px-8 py-10 mx-auto max-w-7xl">
      <h1 className="text-3xl font-bold text-slate-700">Documents</h1>
      <div className="grid w-full grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-4">
        {" "}
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="flex flex-col w-full overflow-hidden border rounded-md shadow border-masifunde"
          >
            <Link
              href={doc.src!}
              className="flex flex-col items-center justify-center flex-1 p-4"
            >
              <DocumentIcon className="w-20 h-20 md:h-24 md:w-24 text-masifunde" />
              <p className="mt-2 font-medium text-center capitalize text-md md:text-xl text-slate-700">
                {doc.title}
              </p>
            </Link>
            <button
              onClick={() => handleDownload(doc.src!, doc.title!)}
              className="flex items-center justify-center w-full p-3 text-white transition-colors duration-200 bg-masifunde hover:bg-orange-600"
              title="Download document"
            >
              <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
              Download
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Documents;
