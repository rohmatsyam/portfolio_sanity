import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import profilePic from "../public/img/rohmat.png";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const { text } = useTypewriter({
    words: [
      "Hi, The Name's Rohmat",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen pt-20 space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <div className="relative object-cover mx-auto rounded-full w-36 h-36">
        <Image src={profilePic} alt="photo" layout="fill" />
      </div>
      <div className="z-20">
        <h2 className="pb-2 text-sm tracking-[10px] text-gray-500 uppercase">
          Web Developer
        </h2>
        <h1 className="px-10 text-2xl font-semibold md:text-3xl">
          <span className="mr-1">{text}</span>
          <Cursor />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#project">
            <button className="heroButton">Project</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
