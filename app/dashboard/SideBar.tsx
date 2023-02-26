import { BuildingStorefrontIcon, Cog8ToothIcon, DocumentArrowDownIcon, PlayIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const SideBar = () => {
  return (
    <aside className="h-full w-[20%] scrollbar-hide overflow-hidden overflow-y-scroll py-10 px-6 shadow-2xl bg-zinc-200 border-r-4 border-zinc-200">
      <div className="border-b-2 border-zinc-400 pb-3">
        <Link href="/" className="flex items-center space-x-2">
          <img className="h-16 w-auto" src="/images/logo_3.svg" alt="Logo" />
          <span className="text-slate-800 font-bold text-2xl leading-5">ChangeMaker<br /> Network</span>
        </Link>
      </div>

      <div className="mt-6">
        <Link href="/dashboard/profile" className="flex items-center space-x-2 w-full hover:bg-zinc-300 rounded-lg py-2 px-3">
          <UserIcon className="text-slate-900 h-8 w-8" />
          <span className="text-lg font-medium text-slate-700">Profile</span>
        </Link>
        <Link href="/dashboard/organisation" className="flex items-center mt-2 space-x-2 w-full hover:bg-zinc-300 rounded-lg py-2 px-3">
          <BuildingStorefrontIcon className="text-slate-900 h-8 w-8" />
          <span className="text-lg font-medium text-slate-700">Organisation</span>
        </Link>
        <Link href="/dashboard/documents" className="flex items-center mt-2 space-x-2 w-full hover:bg-zinc-300 rounded-lg py-2 px-3">
          <DocumentArrowDownIcon className="text-slate-900 h-8 w-8" />
          <span className="text-lg font-medium text-slate-700">Documents</span>
        </Link>
        <Link href="/dashboard/media" className="flex items-center mt-2 space-x-2 w-full hover:bg-zinc-300 rounded-lg py-2 px-3">
          <PlayIcon className="text-slate-900 h-8 w-8" />
          <span className="text-lg font-medium text-slate-700">Media</span>
        </Link>
        <Link href="/dashboard/workshops" className="flex items-center mt-2 space-x-2 w-full hover:bg-zinc-300 rounded-lg py-2 px-3">
          <Cog8ToothIcon className="text-slate-900 h-8 w-8" />
          <span className="text-lg font-medium text-slate-700">Workshops</span>
        </Link>
      </div>
    </aside>
  );
};
export default SideBar;
