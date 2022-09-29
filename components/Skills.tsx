import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen max-w-screen"
    >
      <div className="absolute grid items-center justify-center w-full grid-cols-1 gap-4 top-20">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center">
          Skills
        </h3>
        <h3 className="uppercase tracking-[3px] text-gray-500 text-sm text-center">
          Hover over a skill for currency proficiency
        </h3>
        <div className="grid max-w-3xl grid-cols-4 gap-4 mx-auto mt-2">
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill directionLeft={false} />
          <Skill directionLeft={false} />
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill directionLeft={false} />
          <Skill directionLeft={false} />
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill directionLeft={false} />
          <Skill directionLeft={false} />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
