"use client";
import Backbutton from "@/components/ui/back";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const projects = [
  {
    year: "2024",
    title: "PDF-CHAT",
    link: "https://github.com/het03/File.ai",
  },
  {
    year: "2024",
    title: "ECOM-ADMIN",
    link: "https://github.com/het03/E-Commerce-Admin",
  },
  {
    year: "2024",
    title: "PORTFOLIO",
    link: "https://github.com/het03/Portfolio-v2.0",
  },
  {
    year: "2024",
    title: "ECOM-STORE",
    link: "https://github.com/het03/E-Commerce-Store",
  },
  {
    year: "2023",
    title: "PLANTDEX",
    link: "https://github.com/het03/plantDEX",
  },
];

export default function Page() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 850);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Backbutton />
      <AnimatePresence>
        {showContent && (
          <div className="min-h-screen flex items-center justify-center">
            {projects.map((project, index) => (
              <div
                key={index}
                className="px-5 md:px-6 xl:px-10 min-h-screen flex flex-col items-center justify-center gap-5 md:gap-10"
              >
                <motion.div
                  animate={{
                    y: [5, -5, 5, -5, 5],
                    transition: {
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{
                    y: 0,
                    scale: 1.1,
                  }}
                >
                  <Link href={project.link} target="_blank">
                    <div className="text-center flex flex-col">
                      <div className="text-xs lg:text-base font-normal mb-2 lg:mb-3 xl:mb-4">
                        <span>{project.year}</span>
                      </div>
                      <div className="flex flex-col items-center justify-center font-black text-2xl md:text-4xl xl:text-5xl gap-0.5 md:gap-2">
                        {Array.from(project.title).map((char, charIndex) => (
                          <motion.div
                            key={char + "-" + charIndex}
                            variants={letterVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: charIndex * 0.1 }}
                          >
                            {char}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
                <div className="w-14 lg:w-20 h-1 rounded-full bg-foreground blur-md" />
              </div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
