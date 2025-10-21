"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className={"w-full h-full relative"}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        // className={"mix-blend-lighten"}
      >
        <div
          className={
            "w-[298px] h-[298px] lg:w-[498px] lg:h-[498px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
          }
          style={{
            maskImage:
              "radial-gradient(circle closest-side at center, #1c1c22 0%, #1c1c22 70%, transparent 95%)",
            maskMode: "match-source",
          }}
        >
          <Image
            src={"/images/sinisa_stojanovic_photo.png"}
            priority={true}
            quality={100}
            fill={true}
            alt={"Sinisa Stojanovic Portrait Photo"}
            className={"object-cover"}
          />
          <div className={"h-full w-full absolute z-10"}></div>
        </div>

        <motion.svg
          className={"w-[300px] h-[300px] lg:w-[506px] lg:h-[506px]"}
          fill={"transparent"}
          viewBox={"0 0 506 506"}
          xmlns={"http://www.w3.org/2000/svg"}
        >
          <motion.circle
            cx={"253"}
            cy={"253"}
            r={"250"}
            stroke={"#00ff99"}
            strokeWidth={"4"}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
