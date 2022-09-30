import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <div className="relative flex flex-col items-center h-screen max-w-3xl px-10 mx-auto text-center justify-evenly md:text-left md:flex-row">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="flex-shrink-0 object-cover w-32 h-32 rounded-full -mb-28 md:mb-0 md:rounded-lg md:w-56 md:h-72"
      />

      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        className="px-0 space-y-2 md:px-10"
      >
        <h4 className="text-2xl font-semibold md:text-3xl">
          Here is a{" "}
          <span className="underline decoration-[#FFD600]">little</span>{" "}
          background
        </h4>
        <p className="text-sm">{pageInfo?.backgroundInformation}</p>
      </motion.div>
    </div>
  );
};

export default About;
