import React from "react";
import { motion } from "framer-motion";
import ThemeSwitcher from "./ui/theme-switcher";

const dynamicData = {
  name: "HET GAJERA",
  title: "Designer & Developer",
};

const head = {
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

export default function Header() {
  return (
    <motion.header
      variants={head}
      custom={-200}
      initial="initial"
      animate="final"
      className="flex flex-row justify-between p-2 md:p-4"
    >
      <div>
        <style jsx>{`
          .stroke:hover {
            color: transparent;
            -webkit-text-stroke: 0.4px var(--stroke-color);
          }
        `}</style>
        <a
          href="/"
          className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl hover:text-transparent transition duration-200 w-fit font-black stroke"
        >
          <div>{dynamicData.name.split(" ")[0]}</div>
          <div>{dynamicData.name.split(" ")[1]}</div>
        </a>
        <div className="pt-1 md:pt-2 font-normal text-xs md:text-xs lg:text-sm text-mixed">
          {dynamicData.title}
        </div>
      </div>
      <div>
        <div className="flex items-center gap-4">
          <div className="text-[0.5rem] md:text-[0.6rem] lg:text-xs text-primary">
            Gujarat, India
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </motion.header>
  );
}
