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
     title: "Partner Area",
     href: "/partner-area",
   },
 ];

const Footer = () => {
  return (
    <footer className="bg-accent py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Image
            src="/images/logo_2.svg"
            width={297}
            height={167}
            alt="Logo"
            className="w-44 object-cover"
          />

          <div>
            <p className="text-white text-md">Masifunde Changemaker Network &copy;</p>
            <div className="flex flex-col items-start">
              {links.map((link) => (
                <Link key={link.title} href={link.href} className="text-sm text-white space-y-2 font-medium">{link.title}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
