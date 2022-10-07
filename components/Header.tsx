import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  return (
    <header className="sticky top-[3%] md:top-[2%] z-50 flex items-start justify-between max-w-3xl p-6 mx-auto md:p-4 xl:items-center">
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
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
            rel="noopener noreferrer"
            style={{ height: 60, width: 60 }}
          />
        ))}
      </motion.div>

      <Link href="#contact">
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
            style={{ height: 60, width: 60 }}
          />
          <p className="hidden text-sm text-gray-400 uppercase md:inline-flex">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
