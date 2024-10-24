import React from "react";
import { motion } from "framer-motion";

const dynamicData = {
  email: "het36100@gmail.com",
  socials: [
    { id: 1, name: "LinkedIn", link: "https://www.linkedin.com/in/het-gajera" },
    { id: 2, name: "GitHub", link: "https://github.com/het03" },
    { id: 3, name: "Twitter", link: "https://twitter.com/__Het___" },
  ],
  footer: `© ${new Date().getFullYear()} Het Gajera`,
};

const foot = {
  initial: (y: number) => {
    return {
      y: y,
    };
  },
  final: {
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function Footer() {
  return (
    <motion.footer
      variants={foot}
      custom={200}
      initial="initial"
      animate="final"
      className="grid grid-cols-2 p-2 md:p-4"
    >
      <div className="grid grid-rows-3 gap-3 md:gap-4">
        {dynamicData.socials.map((social) => (
          <motion.div
            key={social.id}
            whileHover={{ scale: 0.9 }}
            className="w-fit grid grid-cols-1"
          >
            <span className="text-[0.5rem] md:text-[0.6rem] lg:text-[0.65rem] leading-none font-normal text-mixed">
              0{social.id}
            </span>
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.5rem] md:text-[0.6rem] lg:text-[0.7rem] leading-normal font-bold"
            >
              {social.name}
            </a>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-rows-3 h-full text-[0.45rem] md:text-[0.6rem] lg:text-[0.7rem] leading-none text-mixed">
        <div className="flex items-end justify-end h-full"></div>
        <a href={`mailto:${dynamicData.email}`}>
          <div className="flex items-end justify-end h-full">
            {dynamicData.email}
          </div>
        </a>
        <div className="flex items-end justify-end h-full">
          {dynamicData.footer}
        </div>
      </div>
    </motion.footer>
  );
}
