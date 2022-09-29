import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 z-20 flex items-start justify-between max-w-3xl p-4 mx-auto xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* social icon */}
        <SocialIcon
          url="https://www.linkedin.com/in/rohmat-syamsul-huda-70935619b"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          rel="noopener noreferrer"
        />
        <SocialIcon
          url="https://github.com/rohmatsyam"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          rel="noopener noreferrer"
        />
        <SocialIcon
          url="https://www.instagram.com/rohmat_syam"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          rel="noopener noreferrer"
        />
        <SocialIcon
          url="https://twitter.com/rohmat_syam"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          rel="noopener noreferrer"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          onClick={() => window.open("mailto:rohmatsyam@yahoo.com")}
        />
        <p className="hidden text-sm text-gray-400 uppercase md:inline-flex">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
