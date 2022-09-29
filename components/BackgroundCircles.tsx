import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute border border-[#f75534] rounded-full h-[288px] w-[288px] mt-52 animate-ping" />
      <div className="rounded-full border border-[#f75534] h-[288px] w-[288px] absolute mt-52 opacity-20" />
      <div className="rounded-full border border-[#f75534] h-[434px] w-[434px] absolute mt-52 opacity-20" />
      <div className="rounded-full border border-[#f75534] h-[580px] w-[580px] absolute mt-52 animate-pulse opacity-50" />
      {/* <div className="rounded-full border border-[#F7AB0A] h-[580px] w-[580px] absolute mt-52 animate-pulse opacity-10" /> */}
      <div className="rounded-full border border-[#f75534] h-[726px] w-[726px] absolute mt-52 opacity-20" />
    </motion.div>
  );
};

export default BackgroundCircles;
