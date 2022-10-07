import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen max-w-3xl px-10 mx-auto text-center">
      <div className="grid items-center justify-center w-full grid-cols-1 gap-4">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
          About
        </h3>
        <div className="grid grid-flow-row gap-4 md:grid-flow-col md:gap-0 md:grid-cols-3">
          <div className="grid items-center justify-center md:grid-cols-1 md:justify-end">
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
              viewport={{ once: true }}
              src={urlFor(pageInfo?.profilePic).url()}
              // className="object-cover w-32 h-32 rounded-full -mb-28 md:mb-0 md:rounded-lg md:w-56 md:h-72"
              className="object-cover w-40 h-40 rounded-full md:rounded-lg md:w-52 md:h-64"
            />
          </div>
          <div className="grid md:justify-start md:col-span-2 md:ml-3">
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
              viewport={{ once: true }}
              className="px-0 space-y-2 md:text-left"
            >
              <h4 className="text-2xl font-semibold md:text-3xl">
                Here is a{" "}
                <span className="underline decoration-[#FFD600]">little</span>{" "}
                background
              </h4>
              <p className="text-md">{pageInfo?.backgroundInformation}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
