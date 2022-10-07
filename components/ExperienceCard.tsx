import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
import moment from "moment";
import Image from "next/image";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <motion.article
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
      viewport={{ once: true }}
      className="flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[300px] snap-center p-5 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden min-h-[350px]"
    >
      <div className="w-16 h-16 rounded-full">
        <Image
          src={urlFor(experience?.companyImage).url()}
          alt="companyImg"
          layout="responsive"
          width="4rem"
          height="4rem"
        />
      </div>
      <div className="px-0">
        <h3 className="text-lg font-light">{experience?.company}</h3>
        <p className="mt-1 text-xl font-bold">{experience?.jobTitle}</p>
        <div className="flex my-1 space-x-1">
          {experience?.technologies.map((tech) => (
            <div className="w-8 h-8 rounded-full" key={tech._id}>
              <Image
                src={urlFor(tech.image).url()}
                layout="responsive"
                width="2rem"
                height="2rem"
                alt="Tech"
              />
            </div>
          ))}
        </div>
        <p className="py-1 text-sm text-gray-100 uppercase">
          {moment(experience?.dateStarted).format("Do MMM")} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : moment(experience?.dateEnded).format("Do MMM YYYY")}
        </p>
        <ul className="ml-5 space-y-1 text-sm list-disc">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

export default ExperienceCard;
