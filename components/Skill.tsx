import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
  directionLeft: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
  return (
    <div className="relative flex cursor-pointer group">
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(skill?.image).url()}
        className="object-cover w-20 h-20 transition duration-300 ease-in-out border border-gray-500 rounded-full md:w-24 md:h-24 filter group-hover:grayscale"
      />
      <div className="absolute z-20 w-20 h-20 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white md:w-24 md:h-24">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">
            {skill?.progress}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
