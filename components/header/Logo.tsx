"use client";

import Link from "next/link";

{
  /*  todo: onHover radiate around link */
}

const Logo = () => {
  return (
    <Link href={"/"} className={"active:scale-95 transition duration-200"}>
      <div
        className={
          "w-16 h-16 flex items-center justify-center rounded-full border-3 border-accent cursor-pointer"
        }
      >
        <span className={"text-4xl text-accent font-bold block"}>S</span>
      </div>
    </Link>
  );
};

export default Logo;
