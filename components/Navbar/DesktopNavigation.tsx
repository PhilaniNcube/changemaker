"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    sublinks: [
      {
        name: "Mandela Bay Changemakers",
        href: "/nmb",
        subs: [
          {
            name: "Funders",
            href: "/nmb#funders",
          },
          {
            name: "Partners",
            href: "/nmb#partners",
          },
          {
            name: "Schools",
            href: "/nmb#schools",
          }
        ]
      },
      {
        name: "National Changemakers",
        href: "/national",
        subs: [
          {
            name: "Funders",
            href: "/national#funders",
          },
          {
            name: "Partners",
            href: "/national#partners",
          },
          {
            name: "CSOS",
            href: "/national#csos",
          }
        ]
      },
      {
        name: "NISSP",
        href: "/about/nissp",
      },
      {
        name: "Team",
        href: "/about/team",
      }
    ]
  }
]

export function DesktopNavigation() {

  const [position, setPosition] = React.useState("bottom");

  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList className="space-x-2">
        <NavigationMenuItem className="bg-black text-white hover:text-neutral-800 focus:ring-0 focus:bg-transparent">
          <Link
            href="/"
            legacyBehavior
            passHref
            className="bg-black text-white"
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-black text-white hover:text-neutral-800">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">About</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>

                <DropdownMenuItem>
                  <Link href="/nmb" passHref>
                    Neson Mandela Bay Changemakers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/national" passHref>
                    National Changemakers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about/nissp" passHref>
                    NISSP
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about/team" passHref>
                    Team
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-black text-white hover:text-neutral-800">
          <Link
            href="/in-action"
            legacyBehavior
            passHref
            className="bg-black text-white"
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              MCN In Action
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-black text-white hover:text-neutral-800">
          <Link
            href="/learner-area"
            legacyBehavior
            passHref
            className="bg-black text-white"
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Learner Area
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-black text-white hover:text-neutral-800">
          <Link
            href="/partner-area"
            legacyBehavior
            passHref
            className="bg-black text-white"
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Partner Area
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-black text-white hover:text-neutral-800">
          <Link
            href="/contact"
            legacyBehavior
            passHref
            className="bg-black text-white"
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
