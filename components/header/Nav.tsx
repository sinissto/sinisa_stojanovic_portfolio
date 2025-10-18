"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavProps {
  links: { name: string; path: string }[];
}

function Nav({ links }: NavProps) {
  const pathname = usePathname();

  return (
    <nav className={"flex items-center gap-8"}>
      {links.map(({ name, path }, index) => (
        <Link
          key={index}
          href={path}
          className={`${
            path === pathname && "text-accent border-b-2 border-accent"
          }' capitalize font-medium hover:text-accent transition-all duration-200 lg:last:hidden`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
