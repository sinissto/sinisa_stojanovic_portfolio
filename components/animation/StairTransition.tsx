"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: "0%" },
};

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode={"wait"}>
      <div key={pathname}>
        <div
          className={
            "h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex"
          }
        >
          {/* Stairs animation */}
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              variants={stairAnimation}
              initial={"initial"}
              animate={"animate"}
              exit={"exit"}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
                delay: reverseIndex(index) * 0.1,
              }}
              className={"h-full w-full bg-white relative"}
            />
          ))}
        </div>

        <motion.div
          className={
            "h-screen w-screen bg-primary top-0 left-0 right-0 pointer-events-none"
          }
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
        />
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
