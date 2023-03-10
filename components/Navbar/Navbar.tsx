/* eslint-disable @next/next/no-img-element */
"use client"

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { User, useUser } from "@supabase/auth-helpers-react";
import { useSupabase } from "../Auth/SupabaseProvider";
import { useRouter } from "next/navigation";


const about = [
  {
    name: "NISSP",
    description: "National Inclusive and Safer Schools Partnership",
    href: "/about/nissp",

  },
  {
    name: "Team",
    description: "Get to know our team",
    href: "/about/team",

  },
];
const callsToAction = [
  {
    name: "Watch our video",
    href: "https://www.youtube.com/embed/wMGmWxNctek",
    icon: PlayCircleIcon,
  },
  { name: "Contact us", href: "/contact", icon: PhoneIcon },
];

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  user: User | null
}

export default function Navbar({user}:Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter()

  const {supabase} = useSupabase()

    const handleLogout = async () => {
      await supabase.auth.signOut();
      router.push('/')
    };


  return (
    <header className="bg-black z-50 ">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">ChangeMaker Network</span>
            <img className="h-16 w-auto" src="/images/logo_2.svg" alt="Logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8 text-accent" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative group">
            <Popover.Button className="flex group-hover:text-accent items-center gap-x-1 text-md font-semibold leading-6 text-white hover:text-accent">
              About
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white group-hover:text-accent hover:text-accent"
                aria-hidden="true"
              />
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
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {about.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-gray-50"
                    >
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-accent"
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
                      className="flex items-center justify-center gap-x-2.5 p-3 text-md font-semibold leading-6 text-accent hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            href="/in-action"
            className="text-md font-semibold leading-6 text-white hover:text-accent"
          >
            MCN In Action
          </Link>
          <Link
            href="/learner-area"
            className="text-md font-semibold leading-6 text-white hover:text-accent"
          >
            Learner Area
          </Link>
          <Link
            href="/partner-area"
            className="text-md font-semibold leading-6 text-white hover:text-accent"
          >
            Partner Area
          </Link>
          <Link
            href="/contact"
            className="text-md font-semibold leading-6 text-white hover:text-accent"
          >
            Contact Us
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {!user ? (
            <Link
              href="/login"
              className="text-md font-semibold leading-6 text-accent"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          ) : (
            <span
              onClick={handleLogout}
              className="text-md font-semibold leading-6 px-3 py-1 rounded-md bg-red-600 text-white cursor-pointer"
            >
              Log Out <span aria-hidden="true">&rarr;</span>
            </span>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">CHangeMaker Network</span>
              <img className="h-8 w-auto" src="/images/logo_3.svg" alt="Logo" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-8 w-8 text-accent" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-accent hover:bg-gray-50">
                        About
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...about, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-accent hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/in-action"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-accent hover:bg-gray-50"
                >
                  MCN In Action
                </Link>
                <Link
                  href="/learner-area"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-accent hover:bg-gray-50"
                >
                  Learner Area
                </Link>
                <Link
                  href="/partner-area"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-accent hover:bg-gray-50"
                >
                  Partner Area
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-accent hover:bg-gray-50"
                >
                  Contact Us
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-accent hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
