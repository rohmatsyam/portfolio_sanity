import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="relative flex cursor-pointer group">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="/img/javascript.png"
        className="object-cover w-16 h-16 transition duration-300 ease-in-out border border-gray-500 rounded-full md:w-24 md:h-24 filter group-hover:grayscale"
      />
      <div className="absolute z-0 w-16 h-16 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white md:w-24 md:h-24">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
