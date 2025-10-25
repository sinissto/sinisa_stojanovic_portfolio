import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import Section from "@/components/Section";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import React from "react";

type Params = { params: { slug: string } };

export default async function ProjectDetailPage({ params }: Params) {
  // Await params to comply with Next.js dynamic route requirements
  const { slug } = await Promise.resolve(params);

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <Section>
      <div className={"container mx-auto"}>
        <div className="px-4 py-8">
          <Link
            href="/work"
            className="text-sm text-accent font-medium inline-block border-b hover:text-accent/60 active:scale-95 transition duration-200 mb-10 "
          >
            ← Back to Work
          </Link>

          <h1 className=" h1 text-3xl text-accent font-semibold mb-8">
            {project.title}
          </h1>

          <div className="mt-4 max-w-3xl">
            {/*<div className="w-full h-56 bg-gray-100">*/}
            {/*  /!* todo: Replace <img/> tag with Next.js <Image/> *!/*/}
            {/*  <img*/}
            {/*    src={project.image}*/}
            {/*    alt={project.title}*/}
            {/*    className="w-full h-full object-cover rounded"*/}
            {/*  />*/}
            {/*</div>*/}

            <div className="mt-4">
              <p className="text-white">{project.description}</p>

              <h4 className="mt-4 font-medium">Features:</h4>
              <ul className={"ml-12"}>
                {project.features.map((feature, index) => (
                  <li key={index} className="text-white list-disc list-inside">
                    {feature}
                  </li>
                ))}
              </ul>

              <h4 className="mt-4 font-medium">Technologies:</h4>
              <div className="flex flex-wrap gap-3 mt-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm bg-primary hover:bg-accent text-white hover:text-primary ring ring-accent px-3 py-2 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/*<div className="mt-4 flex gap-4">*/}
              {/*  {project.github && (*/}
              {/*    <a*/}
              {/*      href={project.github}*/}
              {/*      target="_blank"*/}
              {/*      rel="noreferrer"*/}
              {/*      className="text-blue-600 underline"*/}
              {/*    >*/}
              {/*      View on GitHub*/}
              {/*    </a>*/}
              {/*  )}*/}
              {/*  {project.live && (*/}
              {/*    <a*/}
              {/*      href={project.live}*/}
              {/*      target="_blank"*/}
              {/*      rel="noreferrer"*/}
              {/*      className="text-green-600 underline"*/}
              {/*    >*/}
              {/*      Open Live App*/}
              {/*    </a>*/}
              {/*  )}*/}
              {/*</div>*/}

              <div className="mt-8 mb-4 flex gap-8">
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
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
