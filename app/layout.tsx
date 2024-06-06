import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import  createClient  from "../lib/supabase-server";
import {  Roboto} from "next/font/google";
import Footer from '@/components/Footer/Footer';
import SupabaseProvider from '@/components/Auth/SupabaseProvider';
import type { Metadata } from "next";



const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700", "900"], display: "swap" });

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Masifunde Changemaker Network",
  description:
    "Masifunde's Changemaker Network aims to capacitate high school learners with practical knowledge on relevant social topics such as school safety, violence, bullying and environmental awareness and protection. Through activation workshops for all Grade 9 learners and intensive changemaker trainings for selected learners they can spark positive change in their schools and communities.",
  keywords:
    "Masifunde, Changemaker, Network, NMB, National, South Africa, Youth, Education, Social, Change, Activism, Activist, Activists, Youth Activism, Youth Activist, Youth Activists, Youth Activists South Africa, Youth Activism South Africa, Youth Activist South Africa, Youth Activists South Africa",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.changemaker-network.org/",
    images: ["https://www.changemaker-network.org/images/logo.svg"],
  },
  twitter: {
    site: "https://www.changemaker-network.org/",
    images: ["https://www.changemaker-network.org/images/logo.svg"],
    card: "summary_large_image",
    description:
      "Masifunde's Changemaker Network aims to capacitate high school learners with practical knowledge on relevant social topics such as school safety, violence, bullying and environmental awareness and protection. Through activation workshops for all Grade 9 learners and intensive changemaker trainings for selected learners they can spark positive change in their schools and communities.",
  },
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const supabase = createClient();

    const {
      data: { session },
    } = await supabase.auth.getSession();

    const {data: {user}} = await supabase.auth.getUser()

    const { data:admin, error } = await supabase.rpc("is_admin");




  return (
    <html lang="en" className={`${roboto.className} bg-black`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SupabaseProvider>
          {/* <SupabaseListener serverAccessToken={session?.access_token} /> */}
          <Navbar user={user} admin={admin || undefined} />
          <main>{children}</main>
          <Footer />{" "}
        </SupabaseProvider>
      </body>
    </html>
  );
}
