import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

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
    <div>
      <h1>
        <span>{text}</span>
        <Cursor />
      </h1>
    </div>
  );
};

export default Hero;
