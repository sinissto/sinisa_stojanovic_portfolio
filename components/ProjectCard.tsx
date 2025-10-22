"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiRefreshCw } from "react-icons/fi";
import { HiCursorArrowRipple } from "react-icons/hi2";
import Link from "next/link";
import Socials from "@/components/home/Socials";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

type Project = {
  slug: string;
  title: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  short?: string;
  description?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();
  const [hover, setHover] = useState(false);

  const containerStyle: React.CSSProperties = {
    perspective: "1000px",
  };

  const innerStyle: React.CSSProperties = {
    transformStyle: "preserve-3d",
    transition: "transform 0.6s",
    transform: hover ? "rotateY(180deg)" : "rotateY(0deg)",
    // height: "100%",
  };

  const faceStyle: React.CSSProperties = {
    position: "relative",
    inset: 0,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    borderRadius: 8,
    overflow: "hidden",
  };

  const backStyle: React.CSSProperties = {
    ...faceStyle,
    position: "absolute",
    inset: 0,
    transform: "rotateY(180deg)",
  };

  return (
    <div
      className="relative w-full"
      style={containerStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      // onClick={() => router.push(`/work/${project.slug}`)}
    >
      {/* hint overlay */}
      {/*{!hover && (*/}
      {/*  <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">*/}
      {/*    <div className="bg-black/50 text-white text-sm px-3 py-1 rounded">*/}
      {/*      Hover to flip*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*)}*/}

      {/*{!hover && (*/}
      {/*  <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">*/}
      {/*    <div className="w-full h-full bg-black/10 text-white text-sm p-10 rounded flex items-start justify-center">*/}
      {/*      <HiCursorArrowRipple*/}
      {/*        style={{ animationDuration: "1.2s" }}*/}
      {/*        className="w-[64px] h-[64px] text-accent animate-pulse"*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*)}*/}

      <div style={innerStyle} className="relative w-full h-full">
        {/* front */}
        <div style={faceStyle} className="bg-[#232329] shadow-md">
          {/* screenshot of project*/}
          <div className="w-full h-56 relative">
            {!hover && (
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <div className="w-full h-full bg-black/10 text-white text-sm p-10 rounded flex items-center justify-center">
                  <HiCursorArrowRipple
                    style={{ animationDuration: "1.2s" }}
                    className="w-[64px] h-[64px] text-primary/80 animate-pulse"
                  />
                </div>
              </div>
            )}
            {/* todo: Replace <img/> tag with Next.js <Image/> */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-3 px-5">
            <h3 className="font-semibold text-lg text-accent mb-5">
              {project.title}
            </h3>
            <p className="text-sm text-white mb-5">{project.short}</p>

            <h3 className={"font-semibold mb-2"}>Technologies</h3>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs inline-block px-3 py-1 ring ring-accent rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            {/*<div className="mb-4 flex gap-3">*/}
            {/*  {project.github && (*/}
            {/*    <Link*/}
            {/*      href={project.github}*/}
            {/*      target="_blank"*/}
            {/*      rel="noreferrer"*/}
            {/*      onClick={(e) => e.stopPropagation()}*/}
            {/*      className="text-sm text-blue-600 underline"*/}
            {/*    >*/}
            {/*      GitHub*/}
            {/*    </Link>*/}
            {/*  )}*/}
            {/*  {project.live && (*/}
            {/*    <Link*/}
            {/*      href={project.live}*/}
            {/*      target="_blank"*/}
            {/*      rel="noreferrer"*/}
            {/*      onClick={(e) => e.stopPropagation()}*/}
            {/*      className="text-sm text-green-600 underline"*/}
            {/*    >*/}
            {/*      Live*/}
            {/*    </Link>*/}
            {/*  )}*/}
            {/*</div>*/}
          </div>
        </div>

        {/* back */}
        <div style={backStyle} className="bg-[#232329] shadow-md p-5">
          <h3 className="font-semibold text-xl text-accent mb-5">
            {project.title}
          </h3>
          <p className="text-[16px] line text-white leading-[1.3rem] mb-8">
            {project.description || project.short}
          </p>
          <div className="flex flex-col items-center">
            <div className="mb-4 flex gap-8">
              {project.github && (
                <Link
                  href={project.github}
                  className={`text-2xl w-11 h-11 border-2 hover:border-accent rounded-full flex items-center justify-center text-accent  hover:bg-accent hover:text-primary active:scale-90 transition hover:transition-all duration-200`}
                  target={"_blank"}
                >
                  <FaGithub />
                </Link>
              )}
              {project.live && (
                <Link
                  href={project.live}
                  className={`text-2xl w-11 h-11 border-2 hover:border-accent rounded-full flex items-center justify-center text-accent  hover:bg-accent hover:text-primary active:scale-90 transition hover:transition-all duration-200`}
                  target={"_blank"}
                >
                  <BsArrowUpRight />
                </Link>
              )}
            </div>
            <Button
              variant={"outline"}
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/work/${project.slug}`);
              }}
              className="px-3 py-1 text-white rounded text-sm cursor-pointer mt-5"
            >
              View details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
