import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="p-5 sticky top-0 flex items-start justify-between max-w-3xl mx-auto z-20 xl:items-center">
      <div className="flex flex-row items-center">
        {/* social icon */}
        <SocialIcon
          url="https://www.linkedin.com/in/rohmat-syamsul-huda-70935619b"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/rohmat-syamsul-huda-70935619b"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/rohmat-syamsul-huda-70935619b"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>

      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </div>
    </header>
  );
};

export default Header;
