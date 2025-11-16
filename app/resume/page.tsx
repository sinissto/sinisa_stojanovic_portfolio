"use client";

import Section from "@/components/Section";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { aboutMe, education, experience, skills } from "@/data/aboutMeData";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ResumePage = () => {
  return (
    <Section>
      <div className={"flex-1 flex"}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="flex-1 flex justify-center py-3 lg:py-0"
        >
          <div className={"container mx-auto"}>
            <Tabs
              defaultValue={"aboutMe"}
              className={"flex flex-col lg:flex-row gap-[60px]"}
            >
              <TabsList
                className={
                  "flex-1 flex flex-col w-full max-w-[200px] mx-auto lg:mx-0 gap-6"
                }
              >
                <TabsTrigger value={"aboutMe"}>About Me</TabsTrigger>
                <TabsTrigger value={"experience"}>Experience</TabsTrigger>
                <TabsTrigger value={"education"}>Education</TabsTrigger>
                <TabsTrigger value={"skills"}>Skills</TabsTrigger>
              </TabsList>
              {/* Tab Contents will go here */}
              <div className={"flex-1"}>
                <TabsContent
                  className={"w-full text-center lg:text-left"}
                  value={"aboutMe"}
                >
                  {/* About me */}
                  <div
                    className={
                      "flex flex-col gap-[30px] text-center lg:text-left"
                    }
                  >
                    <h3 className={"text-4xl font-bold text-accent"}>
                      {aboutMe.title}
                    </h3>

                    <ScrollArea className={"h-[70vh]"}>
                      <ul
                        className={"max-w-[700px] text-white mx-auto lg:mx-0"}
                      >
                        {aboutMe.description.map((desc, index) => (
                          <li key={index} className={"mb-5"}>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>

                <TabsContent className={"w-full h-[70vh]"} value={"experience"}>
                  {/* Experience */}
                  <div
                    className={
                      "flex flex-col gap-[30px] text-center lg:text-left"
                    }
                  >
                    <h3 className={"text-4xl font-bold"}>{experience.title}</h3>
                    <p
                      className={"max-w-[700px] text-white/60 mx-auto lg:mx-0"}
                    >
                      {experience.description}
                    </p>
                    <ScrollArea className={"h-[300px]"}>
                      <ul
                        className={"grid grid-cols-1 max-w-[700px] gap-[30px]"}
                      >
                        {experience.timeline.map((item, index) => (
                          <li
                            key={index}
                            className={
                              "bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                            }
                          >
                            <span className={"text-accent"}>
                              {item.duration}
                            </span>
                            <h3 className={"text-xl text-center lg:text-left"}>
                              {item.position}
                            </h3>
                            <div className={"flex items-center gap-3 mb-8"}>
                              <span
                                className={
                                  "w-[6px] h-[6px] rounded-full bg-accent"
                                }
                              ></span>
                              <p className={"text-white/60"}>{item.company}</p>
                            </div>
                            <ul className={"list-disc list-outside ml-8"}>
                              {item.description.map((desc, index) => (
                                <li key={index} className={""}>
                                  {desc}
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>
                <TabsContent className={"w-full"} value={"education"}>
                  {/* education */}
                  <div
                    className={
                      "flex flex-col gap-[30px] text-center lg:text-left"
                    }
                  >
                    <h3 className={"text-4xl font-bold"}>{education.title}</h3>
                    <p
                      className={"max-w-[700px] text-white/60 mx-auto lg:mx-0"}
                    >
                      {education.description}
                    </p>
                    <ScrollArea className={"h-[400px]"}>
                      <ul
                        className={"grid grid-cols-1 max-w-[700px] gap-[30px]"}
                      >
                        {education.timeline.map((item, index) => (
                          <li
                            key={index}
                            className={
                              "bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                            }
                          >
                            {/*<span className={"text-accent"}>*/}
                            {/*  {item.duration}*/}
                            {/*</span>*/}
                            <h3 className={"text-xl text-center lg:text-left"}>
                              {item.degree}
                            </h3>
                            <div className={"flex items-center gap-3"}>
                              <span
                                className={
                                  "w-[6px] h-[6px] rounded-full bg-accent"
                                }
                              ></span>
                              <p className={"text-white/60"}>
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>
                <TabsContent className={"w-full h-full"} value={"skills"}>
                  {/* Skills */}
                  <div className={"flex flex-col gap-[30px]"}>
                    <div
                      className={
                        "flex flex-col items-center gap-[30px] text-center lg:text-left lg:items-start"
                      }
                    >
                      <h3 className={"text-4xl font-bold mb-6"}>
                        {skills.title}
                      </h3>
                      <p className={"max-w-[700px] "}>{skills.description}</p>
                    </div>
                    <ScrollArea className={"h-[300px]"}>
                      <ul
                        className={
                          "grid grid-cols-2 sm:grid-cols-3 max-w-[700px] lg:gap-[30px] gap-4"
                        }
                      >
                        {skills.skillList.map((skill, index) => (
                          <li key={index} className={""}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger
                                  className={
                                    "w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group"
                                  }
                                >
                                  <div
                                    className={
                                      "text-6xl group-hover:text-accent transition-all duration-300"
                                    }
                                  >
                                    <skill.icon
                                      className={"hover:text-accent"}
                                    />
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent
                                  className={"bg-accent text-primary"}
                                >
                                  <p className={"capitalize font-semibold"}>
                                    {skill.name}
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ResumePage;
