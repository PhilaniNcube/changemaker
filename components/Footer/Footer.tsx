import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

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
     title: "Learner Area",
     href: "/learner-area",
   },
   {
     title: "Contact Us",
     href: "/contact",
   },
 ];

const Footer = () => {
  return (
    <footer className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-0">
        <div className="flex items-center justify-between gap-3">
          <Image
            src="/images/logo_2.svg"
            width={297}
            height={167}
            alt="Logo"
            className="w-36 md:w-44 object-cover"
          />

          <div>
            <p className="text-white text-md lg:text-lg font-bold">Masifunde Changemaker Network &copy;</p>
            <div className="flex flex-col items-start">
              {links.map((link) => (
                <Link key={link.title} href={link.href} className="text-xs lg:text-sm text-white space-y-2 hover:text-accent font-medium">{link.title}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
