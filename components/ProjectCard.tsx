"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

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
    height: "100%",
  };

  const faceStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    borderRadius: 8,
    overflow: "hidden",
  };

  const backStyle: React.CSSProperties = {
    ...faceStyle,
    transform: "rotateY(180deg)",
  };

  return (
    <div
      className="relative w-full h-64 cursor-pointer"
      style={containerStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => router.push(`/work/${project.slug}`)}
    >
      {/* hint overlay */}
      {!hover && (
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="bg-black/50 text-white text-sm px-3 py-1 rounded">
            Hover to flip
          </div>
        </div>
      )}

      <div style={innerStyle} className="relative w-full h-full">
        {/* front */}
        <div style={faceStyle} className="bg-[#232329] shadow-md">
          <div className="w-full h-32 bg-gray-200">
            {/* todo: Replace <img/> tag with Next.js <Image/> */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-3">
            <h3 className="font-semibold text-lg">{project.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{project.short}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((t) => (
                <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-3 flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-sm text-blue-600 underline"
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-sm text-green-600 underline"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        </div>

        {/* back */}
        <div style={backStyle} className="bg-white shadow-md p-4">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <p className="text-sm text-gray-600 mt-2 line-clamp-5">
            {project.description || project.short}
          </p>
          <div className="mt-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/work/${project.slug}`);
              }}
              className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
            >
              View details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
