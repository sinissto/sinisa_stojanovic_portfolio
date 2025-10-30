//Modules
import Link from "next/link";
import { Button } from "@/components/ui/button";

//Components
import Nav from "@/components/header/Nav";
import MobileNav from "@/components/header/MobileNav";
import Logo from "@/components/header/Logo";

const links = [
  { name: "home", path: "/" },
  { name: "work", path: "/work" },
  { name: "resume", path: "/resume" },
  // { name: "about me", path: "/aboutMe" },
  { name: "contact", path: "/contact" },
];

const Header = () => {
  return (
    <header className={"py-8 xl:py-12 text-white"}>
      <div className={"container mx-auto flex items-center justify-between "}>
        {/* Logo */}

        <Logo />

        {/* Navigation and "Contact me" button */}
        <div className={"hidden lg:flex items-center gap-8"}>
          {/* NAV */}
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
