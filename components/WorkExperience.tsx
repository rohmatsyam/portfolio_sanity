import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  return (
    <div className="relative flex items-center h-screen max-w-screen">
      <div className="grid items-center justify-center w-full grid-cols-1 gap-4 top-20">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center">
          Experience
        </h3>
        <div className="z-20 flex max-w-3xl p-2 mx-10 space-x-5 overflow-x-scroll overflow-y-hidden md:mx-auto snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#FFD600]">
          {experiences.map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
