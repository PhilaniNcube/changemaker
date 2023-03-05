import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import  createClient  from "../lib/supabase-server";
import {  Roboto} from "next/font/google";
import Footer from '@/components/Footer/Footer';
import SupabaseListener from '@/components/Auth/SupabaseListener';
import SupabaseProvider from '@/components/Auth/SupabaseProvider';



const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700", "900"], display: "swap" });

export const revalidate = 0;



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



  return (
    <html lang="en" className={`${roboto.className} bg-black`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SupabaseProvider>
          <SupabaseListener serverAccessToken={session?.access_token} />
              <Navbar user={user} />
              {children}
          <Footer />{" "}
        </SupabaseProvider>
      </body>
    </html>
  );
}
