"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface MobileNavProps {
  links: { name: string; path: string }[];
}
function MobileNav({ links }: MobileNavProps) {
  const pathname = usePathname();
  const [openMobNav, setOpenMobNav] = useState(false);

  return (
    <Sheet open={openMobNav} onOpenChange={setOpenMobNav}>
      <SheetTrigger
        className={"flex items-center justify-center"}
        onClick={() => setOpenMobNav(true)}
      >
        <CiMenuFries
          className={`${openMobNav && "hidden"} w-[32px] h-[32px] text-accent`}
        />
      </SheetTrigger>
      <SheetContent>
        <VisuallyHidden>
          <SheetTitle>Mobile Nav</SheetTitle>
          <SheetDescription />
        </VisuallyHidden>

        <div className={"mt-32 mb-32 text-center flex justify-center"}>
          {/* Logo */}
          <Link
            href={"/"}
            className={"active:scale-95 transition duration-200"}
            onClick={() => setOpenMobNav(false)}
          >
            <div
              className={
                "w-16 h-16 flex items-center justify-center rounded-full border-3 border-accent cursor-pointer"
              }
            >
              <span className={"text-4xl text-accent font-bold block"}>S</span>
            </div>
          </Link>
        </div>
        <nav className={"flex flex-col items-center gap-8 justify-center"}>
          {links.map(({ name, path }, index) => (
            <Link
              key={index}
              href={path}
              className={`${
                path === pathname &&
                "text-accent border-b-2 border-accent cursor-pointer"
              } text-xl capitalize hover:text-accent transition-all duration-200`}
              onClick={() => setOpenMobNav(false)}
            >
              {name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
