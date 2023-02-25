import Navbar from '@/components/Navbar/Navbar'
import './globals.css'

import {  Roboto} from "next/font/google";
import Link from 'next/link';
import Footer from '@/components/Footer/Footer';



const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700", "900"], display: "swap" });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.className} bg-black`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
