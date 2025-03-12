/* eslint-disable @next/next/no-img-element */
import {
  BuildingStorefrontIcon,
  Cog8ToothIcon,
  DocumentArrowDownIcon,
  HomeIcon,
  PlayIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="absolute inset-0 w-full h-full px-6 py-10 overflow-hidden scrollbar-hide ">
      <div className="pb-3 border-b-2 border-zinc-300">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <img
            className="object-cover w-auto h-16"
            src="/images/logo_3.svg"
            alt="Logo"
          />
          <span className="text-2xl font-bold leading-5 text-slate-800">
            ChangeMaker
            <br /> Network
          </span>
        </Link>
      </div>

      <div className="mt-6">
        <Link
          href="/dashboard/profile"
          className="flex items-center w-full px-3 py-2 space-x-2 rounded-lg hover:bg-zinc-300"
        >
          <UserIcon className="w-8 h-8 text-slate-900" />
          <span className="text-lg font-medium text-slate-700">Profile</span>
        </Link>
        <Link
          href="/dashboard/organisation"
          className="flex items-center w-full px-3 py-2 mt-2 space-x-2 rounded-lg hover:bg-zinc-300"
        >
          <BuildingStorefrontIcon className="w-8 h-8 text-slate-900" />
          <span className="text-lg font-medium text-slate-700">
            Organisations
          </span>
        </Link>
        <Link
          href="/dashboard/documents"
          className="flex items-center w-full px-3 py-2 mt-2 space-x-2 rounded-lg hover:bg-zinc-300"
        >
          <DocumentArrowDownIcon className="w-8 h-8 text-slate-900" />
          <span className="text-lg font-medium text-slate-700">Documents</span>
        </Link>
        <Link
          href="/dashboard/schools"
          className="flex items-center w-full px-3 py-2 mt-2 space-x-2 rounded-lg hover:bg-zinc-300"
        >
          <HomeIcon className="w-8 h-8 text-slate-900" />
          <span className="text-lg font-medium text-slate-700">Schools</span>
        </Link>
        <Link
          href="/dashboard/media"
          className="flex items-center w-full px-3 py-2 mt-2 space-x-2 rounded-lg hover:bg-zinc-300"
        >
          <PlayIcon className="w-8 h-8 text-slate-900" />
          <span className="text-lg font-medium text-slate-700">Media</span>
        </Link>
        <Link
          href="/dashboard/users"
          className="flex items-center w-full px-3 py-2 mt-2 space-x-2 rounded-lg hover:bg-zinc-300"
        >
          <UsersIcon className="w-8 h-8 text-slate-900" />
          <span className="text-lg font-medium text-slate-700">Users</span>
        </Link>
        {/* <Link
          href="/dashboard/workshops"
          className="flex items-center w-full px-3 py-2 mt-2 space-x-2 rounded-lg hover:bg-zinc-300"
        >
          <Cog8ToothIcon className="w-8 h-8 text-slate-900" />
          <span className="text-lg font-medium text-slate-700">Workshops</span>
        </Link> */}
      </div>
    </div>
  );
};
export default SideBar;
