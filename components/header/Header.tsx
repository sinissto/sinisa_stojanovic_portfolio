//Modules
import Link from "next/link";
import { Button } from "@/components/ui/button";

//Components
import Nav from "@/components/header/Nav";
import MobileNav from "@/components/header/MobileNav";

const links = [
  { name: "home", path: "/" },
  { name: "work", path: "/work" },
  { name: "resume", path: "/resume" },
  { name: "about me", path: "/aboutMe" },
  { name: "contact", path: "/contact" },
];

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
          <Nav links={links} />
          <Link href={"/contact"}>
            <Button>Contact me!</Button>
          </Link>
        </div>

        {/* Mobile navigation */}
        <div className={"lg:hidden"}>
          <MobileNav links={links} />
        </div>
      </div>
    </header>
  );
};

export default Header;
