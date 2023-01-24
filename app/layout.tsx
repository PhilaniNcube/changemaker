import Navbar from '@/components/Navbar/Navbar'
import './globals.css'

import { Inter, Prompt } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const prompt = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], display: "swap" });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${prompt.className} bg-black`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
