import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const links = [
  {
    title: "Home",
    href: "/",
  },

  {
    title: "MCN In Action",
    href: "/in-action",
  },
  {
    title: "Learner Area",
    href: "/learner-area",
  },
  {
    title: "Partner Area",
    href: "/partner-area",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
  {
    title: "Terms of Service",
    href: "/terms-of-service",
  },
];

const Footer = () => {
  return (
    <footer className="py-20 bg-black">
      <div className="px-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-3">
          <Image
            src="/images/logo_2.svg"
            width={297}
            height={167}
            alt="Logo"
            className="object-cover w-36 md:w-44"
          />

          <div>
            <p className="font-bold text-white text-md lg:text-lg">
              masifunde Changemaker Network &copy;
            </p>
            <div className="flex flex-col items-start">
              {links.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="space-y-2 text-xs font-medium text-white lg:text-sm hover:text-masifunde"
                >
                  {link.title}
                </Link>
              ))}
              <Link
                href="https://www.facebook.com/profile.php?id=100083194785525"
                prefetch={false}
                className="pb-1 space-y-2 text-xs font-medium text-white lg:text-sm hover:text-masifunde"
              >
                <Facebook size={20} className="inline-block mr-2" /> Facebook
              </Link>
              <Link
                href="https://www.instagram.com/changemaker_network/"
                prefetch={false}
                className="space-y-2 text-xs font-medium text-white lg:text-sm hover:text-masifunde"
              >
                <Instagram size={20} className="inline-block mr-2" /> Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
