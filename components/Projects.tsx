import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div className="relative h-screen max-w-screen">
      <div className="absolute grid items-center justify-center w-full grid-cols-1 gap-4 top-20">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center">
          Projects
        </h3>
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          className="z-20 flex min-h-[495px] overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#FFD600] scrollbar-thin"
        >
          {projects.map((project, index) => (
            <div
              key={project._id}
              className="flex flex-col items-center justify-start flex-shrink-0 w-screen space-y-5 snap-center"
            >
              <img
                src={urlFor(project.image).url()}
                alt="Project"
                className="w-96 md:w-[40%]"
              />
              <div className="max-w-3xl px-0 space-y-2 md:px-10">
                <h4 className="text-xl font-semibold text-center">
                  Case Study {index + 1} of {projects.length} :{" "}
                  <Link href={project.linkToBuild} target="_blank">
                    <span className="underline decoration-[#F7AB0A]/50 cursor-pointer hover:text-[#F7AB0A]/50">
                      {project.title}
                    </span>
                  </Link>
                </h4>
                <div className="flex items-center justify-center my-1 space-x-1">
                  {project.technologies.map((tech) => (
                    <img
                      key={tech._id}
                      className="w-8 h-8 rounded-full"
                      src={urlFor(tech.image).url()}
                      alt="tech"
                    />
                  ))}
                </div>
                <p className="mx-10 text-sm text-center md:mx-20 md:text-left">
                  {project.summary}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="w-full absolute top-[30%] bg-[#FFD600]/10 left-0 h-[350px] -skew-y-12"></div>
    </div>
  );
};

export default Projects;
