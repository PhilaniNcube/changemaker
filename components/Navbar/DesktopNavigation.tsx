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
import { PlayIcon } from "lucide-react";


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

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
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-accent/40 to-accent p-6 no-underline outline-none focus:shadow-md"
                    href="https://www.youtube.com/watch?v=wMGmWxNctek&t=3s"
                    target="_blank"
                  >
                    <PlayIcon className="h-6 w-6 text-white" />
                    <div className="mb-2 mt-4 text-lg text-white font-medium">
                      Watch Video
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/nmb" title="NMB">
                Nelson Mandela Bay Changemakers
              </ListItem>
              <ListItem href="/national" title="National">
                National Changemakers
              </ListItem>
              <ListItem href="/about/nissp" title="NISSP">
                A joint national partnership to strengthen collective action
              </ListItem>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";