"use client"
import { UserIcon } from "@heroicons/react/24/outline";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import {AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
type Props = {
  user: User;
  admin: boolean | undefined
}


const AccountMenu = ({user, admin}:Props) => {

const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center justify-center mr-2 text-lg text-white">
      <div className="px-2 py-1 rounded-md">
        <DropdownMenu.Root open={open} onOpenChange={setOpen}>
          <DropdownMenu.Trigger className="flex items-center justify-center p-2 text-xs rounded-full cursor-pointer  bg-dark">
            <UserIcon className="w-5 h-5 " />
          </DropdownMenu.Trigger>
          <AnimatePresence>
            {open && (
              <DropdownMenu.Portal forceMount>
                <DropdownMenu.Content
                  asChild
                  align="start"
                  className="p-2 overflow-hidden text-left rounded bg-slate-200 text-md text-slate-600"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <DropdownMenu.Item className="border-none rounded-md hover:bg-slate-800 hover:text-white">
                      <Link
                        href={`/account/${user.id}`}
                        className="flex flex-col p-3"
                      >
                        <span>My Account</span>
                        <span className="text-xs">{user.email}</span>
                      </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="border-none rounded-md hover:bg-slate-800 hover:text-white">
                      <Link href="/account/documents" className="flex flex-col p-3">
                        <span>Documents</span>
                      </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="border-none rounded-md hover:bg-slate-800 hover:text-white">
                      <Link href="/gallery" className="flex flex-col p-3">
                        <span>Gallery</span>
                      </Link>
                    </DropdownMenu.Item>
                    {admin && (
                      <DropdownMenu.Item className="border-none rounded-md hover:bg-slate-800 hover:text-white">
                        <Link href="/dashboard/profile" className="flex flex-col p-3">
                          <span>Dashboard</span>
                        </Link>
                      </DropdownMenu.Item>
                    )}
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
