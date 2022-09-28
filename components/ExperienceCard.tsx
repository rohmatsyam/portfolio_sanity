import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[300px] snap-center p-5 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="object-cover object-center w-16 h-16 rounded-full"
        src="/img/km.png"
      />
      <div className="px-0">
        <h3 className="text-lg font-light">Kampus Merdeka</h3>
        <p className="mt-1 text-xl font-bold">Sekolah Ekspor</p>
        <div className="flex my-1 space-x-1">
          <img
            className="w-8 h-8 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt=""
          />
          <img
            className="w-8 h-8 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt=""
          />
          <img
            className="w-8 h-8 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt=""
          />
        </div>
        <p className="py-1 text-sm text-gray-100 uppercase">
          20 Agustus - 14 Agustus 2022
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
          consequatur sint minima explicabo quos nulla, cupiditate, a velit
          deleniti, rem odit atque nihil possimus nostrum! Minima nisi assumenda
          totam. Laudantium.
        </p>
        {/* <ul className="ml-5 space-y-1 text-sm list-disc">
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
        </ul> */}
      </div>
    </article>
  );
};

export default ExperienceCard;
