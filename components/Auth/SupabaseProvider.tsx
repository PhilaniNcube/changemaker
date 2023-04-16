"use client";

import { Fragment, createContext, useContext, useEffect, useState } from "react";


import { SupabaseClient, createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/schema";
import { createClient } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";



type SupabaseContext = {
  supabase: SupabaseClient<Database>;

};

const Context = createContext<SupabaseContext | undefined>(undefined);

export default function SupabaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
 const [supabase] = useState(() => createBrowserSupabaseClient());
 const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      router.refresh();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);


  return (
    <Context.Provider value={{ supabase }}>
      <div>{children}</div>
    </Context.Provider>
  );
}

export const useSupabase = () => {
  let context = useContext(Context);
  if (context === undefined) {
    console.log({context})
    throw new Error("useSupabase must be used inside SupabaseProvider");
  } else {
    return context;
  }
};
