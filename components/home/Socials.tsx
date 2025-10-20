import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/sinissto" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/stojanovic-sinisa/",
  },
];

const Socials = () => {
  return (
    <div className={"flex gap-6"}>
      {socials.map(({ icon, path }, index) => (
        <Link
          key={index}
          href={path}
          className={`text-2xl w-11 h-11 border-2 hover:border-accent rounded-full flex items-center justify-center text-accent  hover:bg-accent hover:text-primary active:scale-90 transition hover:transition-all duration-200`}
          target={"_blank"}
        >
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
