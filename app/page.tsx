import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/home/Socials";
import Section from "@/components/Section";
import Link from "next/link";
import Photo from "@/components/home/Photo";

export default function HomePage() {
  return (
    <Section>
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
              <Link
                href={"/resume/Sinisa_Stojanovic_CV.pdf"}
                target={"_blank"}
                rel="noopener noreferrer"
                download={false}
              >
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className={
                    "uppercase flex items-center gap-8 active:scale-95 transition-all duration-200"
                  }
                >
                  <span>Download CV</span>
                  <FiDownload className={"text-xl"} />
                </Button>
              </Link>

              <div className={"mb-8 lg:mb-0"}>
                <Socials />
              </div>
            </div>
          </div>
          {/* Right side */}
          {/* todo: add homepage photo*/}
          <div className={"order-1 lg:order-none mb-8 lg:mb-0"}>
            <Photo />
          </div>
        </div>
      </div>

      {/* Technologies */}
    </Section>
  );
}
