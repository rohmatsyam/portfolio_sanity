import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const About = (props: Props) => {
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
        viewport={{ once: true }}
        src="/img/about.jpg"
        className="flex-shrink-0 object-cover w-32 h-32 rounded-full -mb-28 md:mb-0 md:rounded-lg md:w-56 md:h-72"
      />

      <div className="px-0 space-y-2 md:px-10">
        <h4 className="text-2xl font-semibold md:text-3xl">
          Here is a{" "}
          <span className="underline decoration-[#57AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          Four-year informatics engineering. My passion for learn programming
          language brought me to{" "}
          <a
            href="https://goo.gl/maps/RPs9qbgCoRCqsrCh9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="underline decoration-[#57AB0A]/50">
              Universitas Nusantara PGRI Kediri
            </span>
          </a>
          .
          <br />
          <br />
          Currently, I focus on Javascript Web development{" "}
          <span className="underline decoration-[#57AB0A]/50"> (Next.js)</span>.
          I also familiar with Python, Java and Go programming language.
        </p>
      </div>
    </div>
  );
};

export default About;
