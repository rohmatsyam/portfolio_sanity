import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const { text } = useTypewriter({
    words: [
      `Hi, My Name's ${pageInfo?.name}`,
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
        <Image
          src={urlFor(pageInfo?.heroImage).url()}
          alt="photo"
          layout="fill"
        />
      </div>
      <div className="z-20">
        <h2 className="pb-2 text-sm tracking-[10px] text-gray-500 uppercase">
          {pageInfo?.role}
        </h2>
        <h1 className="px-10 text-2xl font-semibold md:text-3xl">
          <span className="mr-1">{text}</span>
          <Cursor />
        </h1>
        <div className="pt-5 space-x-2">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
