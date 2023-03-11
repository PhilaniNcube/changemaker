"use client"
import { UserIcon } from "@heroicons/react/24/outline";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import {AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
type Props = {
  user: User;
}


const AccountMenu = ({user}:Props) => {

const [open, setOpen] = useState(false)

  return (
    <div className="text-white mr-2 text-lg flex items-center justify-center">
      <div className="py-1 px-2 rounded-md">
        <DropdownMenu.Root open={open} onOpenChange={setOpen}>
          <DropdownMenu.Trigger className=" rounded-full bg-dark cursor-pointer text-xs flex items-center justify-center p-2">
            <UserIcon className="h-5 w-5 " />
          </DropdownMenu.Trigger>
          <AnimatePresence>
            {open && (
              <DropdownMenu.Portal forceMount>
                <DropdownMenu.Content
                  asChild
                  align="start"
                  className="overflow-hidden rounded bg-slate-200 p-2 text-left text-md text-slate-600"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <DropdownMenu.Item className="hover:bg-slate-800 hover:text-white border-none rounded-md">
                      <Link href="/account" className="flex flex-col p-3">
                        <span>My Account</span>
                        <span className="text-xs">{user.email}</span>
                      </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="hover:bg-slate-800 hover:text-white border-none rounded-md">
                      <Link href="/gallery" className="flex flex-col p-3">
                        <span>Gallery</span>
                      </Link>
                    </DropdownMenu.Item>
                  </motion.div>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            )}
          </AnimatePresence>
        </DropdownMenu.Root>
      </div>
    </div>
  );
};
export default AccountMenu;
