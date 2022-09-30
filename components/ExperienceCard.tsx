import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
import moment from "moment";

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
      className="flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[300px] snap-center p-5 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden min-h-[400px]"
    >
      <img
        className="object-cover object-center w-16 h-16 rounded-full"
        src={urlFor(experience?.companyImage).url()}
        alt="companyImg"
      />
      <div className="px-0">
        <h3 className="text-lg font-light">{experience?.company}</h3>
        <p className="mt-1 text-xl font-bold">{experience?.jobTitle}</p>
        <div className="flex my-1 space-x-1">
          {experience?.technologies.map((tech) => (
            <img
              key={tech._id}
              className="w-8 h-8 rounded-full"
              src={urlFor(tech.image).url()}
              alt=""
            />
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
