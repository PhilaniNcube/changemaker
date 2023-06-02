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
import { PhoneIcon, PlayCircleIcon, PlayIcon } from "lucide-react";


export function DesktopNavigation() {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem className="bg-black text-white hover:text-neutral-800">
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
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-1">
              <ListItem href="/nmb" title="NMB">
                Nelson Mandela Bay Changemakers
              </ListItem>
              <ListItem href="/national" title="National">
                National Changemakers
              </ListItem>
              <ListItem href="/about/nissp" title="NISSP">
                A joint national partnership to strengthen collective action
              </ListItem>
              <div className="px-4 py-6 rounded-md hover:bg-masifunde text-slate-800 hover:text-white font-bold transition duration-100 grid grid-cols-2 gap-2 bg-slate-200">
                <a
                  href="https://www.youtube.com/watch?v=wMGmWxNctek&t=3s"
                  className="flex gap-2"
                  target="_blank"
                >
                <>
                  <PlayCircleIcon className="text-2xl " />{" "}
                  <span>Watch Video</span>
                 </>
                </a>
                <Link href="/contact" className="flex gap-2">
                  {" "}
                  <PhoneIcon className="text-2xl " /> <span>Contact Us</span>
                </Link>
              </div>
            </ul>
          </NavigationMenuContent>
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
        </NavigationMenuItem>{" "}
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
>(({ className, title, href, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={`${href}`}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-masifunde hover:text-white focus:bg-masifunde focus:text-masifunde-foreground",
            className
          )}
          {...props}
        >
          <h3 className="text-sm font-bold tracking-wide leading-none">{title}</h3>
          <p className="line-clamp-2 text-sm leading-6 font-medium text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
