import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen max-w-screen"
    >
      <div className="absolute grid items-center justify-center w-full grid-cols-1 gap-4 top-20">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center">
          Projects
        </h3>
        <div className="z-20 flex min-h-[495px] overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#FFD600] scrollbar-thin">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start flex-shrink-0 w-screen space-y-5 snap-center"
            >
              <img
                src="/img/hulu.jpg"
                alt="Project"
                className="w-96 md:w-[40%]"
              />
              <div className="max-w-3xl px-0 space-y-2 md:px-10">
                <h4 className="text-xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case Study {index + 1} of {projects.length} :
                  </span>{" "}
                  HULU
                </h4>
                <p className="px-10 text-sm text-center md:px-0 md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Labore, repellat. Blanditiis eos ipsa voluptates ad dolorem
                  quidem, dolores eaque velit consequatur minima praesentium
                  itaque? Quos voluptas laborum ullam nisi ea.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full absolute top-[30%] bg-[#FFD600]/10 left-0 h-[350px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
