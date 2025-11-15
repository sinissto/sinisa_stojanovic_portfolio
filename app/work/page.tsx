"use client";

import ProjectCard from "../../components/ProjectCard";
import { projects } from "@/data/projects";
import Section from "@/components/Section";
import { motion } from "framer-motion";

const WorkPage = () => {
  return (
    <Section>
      <div className={"container mx-auto flex-1 "}>
        {/*<div className={"px-4 py-8"}>*/}
        <h1 className={"text-2xl text-accent font-semibold mb-6"}>Work</h1>

        {/* todo: Add some intro text for work section */}
        <p className={"mb-12"}>This are my project I have done so far</p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
          }}
          // className={"w-full flex gap-10"}
          className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 items-stretch auto-rows-fr"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </div>
      {/*</div>*/}
    </Section>
  );
};

export default WorkPage;
