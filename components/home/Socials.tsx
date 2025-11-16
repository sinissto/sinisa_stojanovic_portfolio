import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/sinissto",
    name: "My GitHub",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/stojanovic-sinisa/",
    name: "My LinkedIn",
  },
];

const Socials = () => {
  return (
    <div className={"flex gap-6"}>
      {socials.map(({ icon, path, name }, index) => (
        <TooltipProvider delayDuration={100} key={index}>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={path}
                className={`text-2xl w-11 h-11 border-2 hover:border-accent rounded-full flex items-center justify-center text-accent  hover:bg-accent hover:text-primary active:scale-90 transition hover:transition-all duration-200`}
                target={"_blank"}
              >
                {icon}{" "}
              </Link>
            </TooltipTrigger>
            <TooltipContent className={"bg-accent text-primary"}>
              {name}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default Socials;
