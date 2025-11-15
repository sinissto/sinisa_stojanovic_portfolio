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

// <TooltipProvider delayDuration={100}>
//                             <Tooltip>
//                               <TooltipTrigger
//                                 className={
//                                   "w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group"
//                                 }
//                               >
//                                 <div
//                                   className={
//                                     "text-6xl group-hover:text-accent transition-all duration-300"
//                                   }
//                                 >
//                                   <skill.icon className={"hover:text-accent"} />
//                                 </div>
//                               </TooltipTrigger>
//                               <TooltipContent
//                                 className={"bg-accent text-primary"}
//                               >
//                                 <p className={"capitalize font-semibold"}>
//                                   {skill.name}
//                                 </p>
//                               </TooltipContent>
//                             </Tooltip>
//                           </TooltipProvider>

export default Socials;
