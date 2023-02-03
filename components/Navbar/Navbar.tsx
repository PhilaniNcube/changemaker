'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline"
import Image from "next/image";

 const links = [
  {
    title: "Home",
    href: "/",

  },
  {
    title: "About Us",
    href: "/about",

  },
  {
    title: "MCN In Action",
    href: "/in-action",

  },
  {
    title: "Partner Area",
    href: "/partner-area",

  },

]

const Navbar = () => {
  const path = usePathname()
  const [open, setOpen] = useState(false)

  const openMenu = () => {
    setOpen(true)
  }

  const closeMenu = () => {
    setOpen(false)
  }


  return (
    <Fragment>
      <header className="py-3 px-4 lg:px-0 sticky top-0 left-0 right-0 z-50 bg-black">
        {/* Desktop Nav */}
        <div className="max-w-7xl mx-auto hidden lg:flex items-center justify-between">
          <Image
            src="/images/logo_2.svg"
            width={297}
            height={167}
            alt="Logo"
            className="w-44 object-cover"
          />

          <nav className="flex space-x-3 items-center">
            {links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className={`${
                  path === link.href
                    ? " border-accent text-accent"
                    : "border-black text-white"
                } border-b-4  text-md`}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
        {/* Desktop Nav Ends*/}

        {/* Mobile Nav Starts*/}
        <div className="max-w-[95%] mx-auto flex lg:hidden justify-between items-center">
          <Image
            src="/images/logo_2.svg"
            width={297}
            height={167}
            alt="Logo"
            className="w-44 object-cover"
          />

          <div className="">
            {open ? (
              <XMarkIcon className="h-8 w-8 text-white " onClick={closeMenu} />
            ) : (
              <Bars3Icon className="h-8 w-8 text-white " onClick={openMenu} />
            )}

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-0 left-0 w-screen bg-white h-screen flex z-50"
                >
                  <XMarkIcon
                    className="h-8 w-8 text-black absolute top-4 right-6"
                    onClick={closeMenu}
                  />

                  <nav className="flex flex-col px-6 space-y-4 justify-between max-w-[95%] mx-auto items-center py-8 w-full">
                    {links.map((link, i) => (
                      <Link
                        className="text-black font-medium text-xl"
                        key={i}
                        href={link.href}
                        onClick={closeMenu}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        {/* Mobile Nav Ends*/}
      </header>

    </Fragment>
  );
};
export default Navbar;
