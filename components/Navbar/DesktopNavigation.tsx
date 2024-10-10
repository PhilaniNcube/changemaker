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
					<NavigationMenuItem className="bg-black text-masifunde hover:text-neutral-800">
						<Link
							href="/"
							legacyBehavior
							passHref
							className="bg-black text-masifunde"
						>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Home
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem className="bg-black text-masifunde hover:text-neutral-800">
						<NavigationMenuTrigger>About</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-1">
								<ListItem href="/nmb" title="Mandela Bay Changemakers">
									Home of the Changemaker Network
								</ListItem>
								<ListItem href="/national" title="National Changemakers">
									Replication of the Changemaker Network
								</ListItem>
								<ListItem href="/global" title="Global Changemakers">
									International Exchange and Partnerships
								</ListItem>{" "}
								<ListItem href="/about/partners" title="CSO Partners">
									Take a look at our partners across the country
								</ListItem>
								<ListItem href="/about/nissp" title="NISSP">
									Changemakers for School Safety
								</ListItem>
								<ListItem
									href="/partner-area/spark-luncheon"
									title="Spark Change Luncheon"
								>
									Be inspired by the knowledge shared by a panel
								</ListItem>
								<ListItem
									href="/about/junior-academy"
									title="TUI Junior Academy SA"
								>
									Changemakers for Environmental Awareness
								</ListItem>
								<div className="grid grid-cols-2 gap-2 px-4 py-6 font-bold transition duration-100 rounded-md hover:bg-masifunde text-slate-800 bg-slate-200">
									<Link
										href="https://www.youtube.com/watch?v=wMGmWxNctek&t=3s"
										className="flex gap-2"
										target="_blank"
										prefetch={false}
									>
										<>
											<PlayCircleIcon className="text-2xl " />{" "}
											<span>Watch Video</span>
										</>
									</Link>
									<Link href="/contact" className="flex gap-2">
										{" "}
										<PhoneIcon className="text-2xl " /> <span>Contact Us</span>
									</Link>
								</div>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem className="bg-black text-masifunde hover:text-neutral-800">
						<Link
							href="/in-action"
							legacyBehavior
							passHref
							className="bg-black text-masifunde"
						>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								MCN In Action
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem className="bg-black text-masifunde hover:text-neutral-800">
						<Link
							href="/learner-area"
							legacyBehavior
							passHref
							className="bg-black text-masifunde"
						>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Learner Area
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>{" "}
					<NavigationMenuItem className="bg-black text-masifunde hover:text-neutral-800">
						<NavigationMenuTrigger>Partner Area</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-1">
								<ListItem
									href="/partner-area/implementation-partner"
									title="Become an Implementation Partner"
								>
									Become an Implementation Partner
								</ListItem>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem className="bg-black text-masifunde hover:text-neutral-800">
						<Link
							href="/contact"
							legacyBehavior
							passHref
							className="bg-black text-masifunde"
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-masifunde  focus:bg-masifunde focus:text-masifunde-foreground",
            className
          )}
          {...props}
        >
          <h3 className="text-sm font-bold leading-none tracking-wide">{title}</h3>
          <p className="text-sm font-medium leading-6 line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
