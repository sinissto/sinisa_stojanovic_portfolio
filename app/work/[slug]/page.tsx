import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import Section from "@/components/Section";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Params = { params: { slug: string } };

export default async function ProjectDetailPage({ params }: Params) {
  // Await params to comply with Next.js dynamic route requirements
  const { slug } = await params;

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

          <div className="flex flex-col lg:flex-row mt-4 mb-8 gap-6">
            <div className="max-w-3xl mt-4 order-2 lg-order-1">
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
            </div>

            <div className="w-full order-1 lg:order-2">
              {/* todo: Replace <img/> tag with Next.js <Image/> */}
              <img
                src={project.image}
                alt={project.title}
                className={
                  "border-2 border-accent rounded overflow-hidden object-cover shadow-lg"
                }
              />

              <div className="mt-10 mb-4 flex gap-8">
                {project.github && (
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger>
                        <Link
                          href={project.github}
                          className={`text-2xl w-11 h-11 border-2 hover:border-accent rounded-full flex items-center justify-center text-accent  hover:bg-accent hover:text-primary active:scale-90 transition hover:transition-all duration-200`}
                          target={"_blank"}
                        >
                          <FaGithub />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent className={"bg-accent text-primary"}>
                        GitHab Repo
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
                {project.live && (
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger>
                        <Link
                          href={project.live}
                          className={`text-2xl w-11 h-11 border-2 hover:border-accent rounded-full flex items-center justify-center text-accent  hover:bg-accent hover:text-primary active:scale-90 transition hover:transition-all duration-200`}
                          target={"_blank"}
                        >
                          <BsArrowUpRight />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent className={"bg-accent text-primary"}>
                        Deployed
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            </div>
          </div>

          <Tabs
            defaultValue="purposeAndGoal"
            className="min-w-[400px] bg-[#27272c] p-6 rounded-lg "
          >
            <TabsList className={"flex flex-col md:flex-row"}>
              <TabsTrigger value="purposeAndGoal" className={"bg-primary"}>
                Purpose & Goal
              </TabsTrigger>
              {project.spotLight.length > 0 && (
                <TabsTrigger value="spotLight" className={"bg-primary"}>
                  Features I&apos;m proud of
                </TabsTrigger>
              )}
              <TabsTrigger value="lesonsLearned" className={"bg-primary"}>
                Lessons Learned
              </TabsTrigger>
            </TabsList>
            <TabsContent value="purposeAndGoal">
              {project.purposeAndGoal.map((paragraph, index) => (
                <p key={index} className="mb-4 text-white">
                  {paragraph}
                </p>
              ))}
            </TabsContent>
            {project.spotLight.length > 0 && (
              <TabsContent value="spotLight">
                {project.spotLight.map((paragraph, index) => (
                  <p key={index} className="mb-4 text-white">
                    {paragraph}
                  </p>
                ))}
              </TabsContent>
            )}
            <TabsContent value="lesonsLearned">
              {project.lessonsLearned.map((paragraph, index) => (
                <p key={index} className="mb-4 text-white">
                  {paragraph}
                </p>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Section>
  );
}
