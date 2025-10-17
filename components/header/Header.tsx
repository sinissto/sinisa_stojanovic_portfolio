import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "@/components/header/Nav";

const Header = () => {
  return (
    <header className={"py-8 xl:py-12 text-white"}>
      <div className={"container mx-auto flex items-center justify-between "}>
        {/* Logo */}
        {/*  todo: onHover radiate around link*/}
        <Link href={"/"} className={"active:scale-95 transition duration-200"}>
          <div
            className={
              "w-16 h-16 flex items-center justify-center rounded-full border-3 border-accent cursor-pointer"
            }
          >
            <span className={"text-4xl text-accent font-bold block"}>S</span>
          </div>
        </Link>

        {/* Navigation and "Contact me" button */}
        <div className={"hidden lg:flex items-center gap-8"}>
          {/* NAV */}
          {/*  todo: Main nav */}
          <Nav />
          <Link href={"/contact"}>
            <Button>Contact me!</Button>
          </Link>
        </div>

        {/* Mobile navigation */}
        {/* todo: mobile nav */}
        <div className={"lg:hidden"}>MOBILE NAV</div>
      </div>
    </header>
  );
};

export default Header;
