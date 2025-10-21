"use client";

import ProjectCard from "../../components/ProjectCard";
import { projects } from "@/data/projects";
import Section from "@/components/Section";
import { motion } from "framer-motion";

const WorkPage = () => {
  return (
    <Section>
      <div className={"container mx-auto flex-1"}>
        <div className={"px-4 py-8"}>
          <h1 className={"text-2xl font-semibold mb-6"}>Work</h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2, duration: 0.4, ease: "easeIn" },
            }}
            // className={"w-full flex gap-10"}
            className="grid gap-6 grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default WorkPage;
