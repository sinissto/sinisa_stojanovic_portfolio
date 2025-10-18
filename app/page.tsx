import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/home/Socials";

export default function HomePage() {
  return (
    <section
      className={"bg-gray-600 flex flex-col justify-center py-12 lg:py-0"}
    >
      <div className={"container mx-auto h-full"}>
        <div
          className={
            "flex-1 flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24"
          }
        >
          {/*  Left side */}
          <div className={"text-center lg:text-left order-2 lg:order-none"}>
            <span className={"text-xl"}>Software Developer</span>
            <h1 className={"h1 mb-6"}>
              Hello, I&apos;m
              <br />
              <span className={"text-accent"}>Sinisa Stojanovic</span>
            </h1>
            <p className={"max-w-[500px] mb-9 text-white/80"}>
              I excel at crafting elegant digital experiences and I and
              proficient in various programing languages and technologies
            </p>

            {/* CV download button and social icons */}
            <div className={"flex flex-col lg:flex-row items-center gap-8"}>
              <Button
                variant={"outline"}
                size={"lg"}
                className={"uppercase flex items-center gap-8"}
              >
                <span>Download CV</span>
                <FiDownload className={""} />
              </Button>

              <div className={""}>
                <Socials />
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className={""}>Portrait image</div>
        </div>
      </div>

      {/* Technologies */}
    </section>
  );
}
