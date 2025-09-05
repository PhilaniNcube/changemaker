/* eslint-disable @next/next/no-img-element */
"use client";

import { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AccountMenu from "./AccountMenu";
import { DesktopNavigation } from "./DesktopNavigation";
import Image from "next/image";
import MainMenu from "./MainMenu";
import { createClient } from "@/utils/supabase/client";
import { signOutAction } from "@/actions/sign-out";
import { Button } from "../ui/button";
import { User } from "@supabase/supabase-js";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const about = [
  // {
  // 	name: "NISSP",
  // 	description: "National Inclusive and Safer Schools Partnership",
  // 	href: "/about/nissp",
  // },
  {
    name: "Team",
    description: "Get to know our team",
    href: "/about/team",
  },
  {
    name: "TUI Junior Academy SA",
    description: "Changemakers for Environmental Awareness",
    href: "/about/junior-academy",
  },
  {
    name: "MCN Eco-Champion Changemaker Network",
    description: "Showcase of MCN initiatives",
    href: "/about/eco-champion",
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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  user: User | null;
  admin: boolean | undefined;
};

const Navbar = ({ user, admin }: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [partnerAreaOpen, setPartnerAreaOpen] = useState(false);

  const router = useRouter();

  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <header className="z-[999] bg-black ">
      <nav
        className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">ChangeMaker Network</span>
            <Image
              width={80}
              height={70}
              className="w-auto h-16"
              src="/images/logo_2.svg"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-8 h-8 text-masifunde" aria-hidden="true" />
          </button>
        </div>

        <DesktopNavigation />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {!user ? (
            <div className="flex items-center space-x-3">
              <Link
                href="/login"
                className="font-semibold leading-6 text-md text-masifunde"
              >
                Partner Area Log in <span aria-hidden="true">&rarr;</span>
              </Link>
              {/* <Link
                href="/sign-up"
                className="pl-3 font-semibold leading-6 border-l text-md border-masifunde text-masifunde"
              >
                Sign Up <span aria-hidden="true">&uarr;</span>
              </Link> */}
            </div>
          ) : (
            <form
              action={signOutAction}
              className="flex items-center space-x-3"
            >
              <AccountMenu user={user} admin={admin} />
              <Button
                type="submit"
                className="px-3 py-1 font-semibold leading-6 text-white bg-red-600 rounded-md cursor-pointer text-md"
              >
                Log Out <span aria-hidden="true">&rarr;</span>
              </Button>
            </form>
          )}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <DialogContent className="fixed inset-y-0 right-0 z-50 w-full p-6 overflow-y-auto translate-x-0 translate-y-0 bg-white lg:hidden sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform-none">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="-m-1.5 p-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">ChangeMaker Network</span>
                <img
                  className="w-auto h-8"
                  src="/images/logo_3.svg"
                  alt="Logo"
                />
              </Link>
              <DialogClose asChild>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon
                    className="w-8 h-8 text-masifunde"
                    aria-hidden="true"
                  />
                </button>
              </DialogClose>
            </div>
          </DialogHeader>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg text-masifunde hover:bg-gray-50"
                >
                  Home
                </Link>
                <Collapsible
                  open={aboutOpen}
                  onOpenChange={setAboutOpen}
                  className="-mx-3"
                >
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-masifunde hover:bg-gray-50">
                    About
                    <ChevronDownIcon
                      className={classNames(
                        aboutOpen ? "rotate-180" : "",
                        "h-5 w-5 flex-none"
                      )}
                      aria-hidden="true"
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 space-y-2">
                    {[...about, ...callsToAction].map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 pl-6 pr-3 font-semibold leading-7 rounded-lg text-md text-masifunde hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
                <Link
                  href="/in-action"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg text-masifunde hover:bg-gray-50"
                >
                  MCN In Action
                </Link>
                <Link
                  href="/learner-area"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg text-masifunde hover:bg-gray-50"
                >
                  Learner Area
                </Link>
                <Collapsible
                  open={partnerAreaOpen}
                  onOpenChange={setPartnerAreaOpen}
                  className="-mx-3"
                >
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-masifunde hover:bg-gray-50">
                    Partner Area
                    <ChevronDownIcon
                      className={classNames(
                        partnerAreaOpen ? "rotate-180" : "",
                        "h-5 w-5 flex-none"
                      )}
                      aria-hidden="true"
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 space-y-2">
                    <Link
                      href="/partner-area/implementation-partner"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 pl-6 pr-3 font-semibold leading-7 rounded-lg text-md text-masifunde hover:bg-gray-50"
                    >
                      Become an Implementation Partner
                    </Link>
                    <Link
                      href="/partner-area/spark-luncheon"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 pl-6 pr-3 font-semibold leading-7 rounded-lg text-md text-masifunde hover:bg-gray-50"
                    >
                      Spark Change Luncheon
                    </Link>
                    <Link
                      href="/about/partners"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 pl-6 pr-3 font-semibold leading-7 rounded-lg text-md text-masifunde hover:bg-gray-50"
                    >
                      CSO Partners
                    </Link>
                  </CollapsibleContent>
                </Collapsible>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg text-masifunde hover:bg-gray-50"
                >
                  Contact Us
                </Link>
              </div>
              <div className="py-6">
                {!user ? (
                  <Link
                    href="/login"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-masifunde hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                ) : (
                  <Fragment>
                    <Link
                      href={`/account/${user.id}`}
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-masifunde hover:bg-gray-50"
                    >
                      My Account
                    </Link>
                    <Link
                      href="/account/documents"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-masifunde hover:bg-gray-50"
                    >
                      Documents
                    </Link>
                    <Link
                      href="/gallery"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-masifunde hover:bg-gray-50"
                    >
                      Gallery
                    </Link>
                    <button
                      formAction={signOutAction}
                      type="button"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-red-500 hover:bg-gray-50"
                    >
                      Log Out <span aria-hidden="true">&rarr;</span>
                    </button>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Navbar;
