"use client"

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { NavigationMenu } from "../ui/navigation-menu";
import { Users } from "lucide-react";

const solutions = [
  {
    name: "NMB",
    description: "Nelson Mandela Bay Changemakers",
    href: "/nmb",
    icon: ChartPieIcon,
  },
  {
    name: "National",
    description: "National Changemakers",
    href: "/national",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "CSO Partners",
    description: "Take a look at our partners across the country",
    href: "/about/partners",
    icon: Users,
  },
  {
    name: "NISSP",
    description: "A joint national partnership to strengthen collective action",
    href: "/about/nissp",
    icon: FingerPrintIcon,
  },
];
const callsToAction = [
  {
    name: "Watch video",
    href: "https://www.youtube.com/watch?v=wMGmWxNctek&t=3s",
    icon: PlayCircleIcon,
  },
  { name: "Contact us", href: "/contact", icon: PhoneIcon },
];

const MainMenu = () => {
  return (
    <NavigationMenu className="hidden lg:block">
      <Popover className="relative ">
        <Popover.Button className="inline-flex items-center text-sm leading-6 text-white gap-x-1">
          <span>About</span>
          <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute z-10 flex w-screen px-4 mt-5 -translate-x-1/2 left-1/2 max-w-max">
            <div className="flex-auto w-screen max-w-md overflow-hidden text-sm leading-6 bg-white shadow-lg rounded-3xl ring-1 ring-gray-900/5">
              <div className="p-4">
                {solutions.map((item) => (
                  <div
                    key={item.name}
                    className="relative flex p-4 rounded-lg group gap-x-6 hover:bg-gray-50"
                  >
                    <div className="flex items-center justify-center flex-none mt-1 rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white"/>
                    <div>
                      <Link
                        href={item.href}
                        className="font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      className="flex-none w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </NavigationMenu>
  );
}


export default MainMenu;
