import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen max-w-screen"
    >
      <div className="absolute grid items-center justify-center w-full grid-cols-1 gap-4 top-24">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center">
          Experience
        </h3>
        <div className="z-20 flex max-w-3xl ml-10 space-x-5 overflow-x-scroll overflow-y-hidden md:mx-auto snap-x snap-mandatory">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </div>
      {/* <div className="absolute flex w-full mt-24 space-x-5 overflow-x-scroll top-12 snap-x snap-mandatory pl-14 md:pl-0">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div> */}
    </motion.div>
  );
};

export default WorkExperience;
