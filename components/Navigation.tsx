import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/about", label: "ABOUT" },
  { href: "/works", label: "WORKS" },
  { href: "/resume", label: "RESUME" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navigation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="flex flex-grow items-center justify-center md:justify-center lg:justify-end xl:justify-end font-black overflow-visible" // Ensure overflow is visible
    >
      <style jsx>{`
        .nav-item {
          transition: transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1),
            color 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        .parent-hover .nav-item:not(.hovered) {
          color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: var(--stroke-color);
        }
      `}</style>

      <ul
        className={`md:mr-0 text-4xl items-center md:text-6xl lg:text-6xl lg:mr-14 xl:text-7xl xl:mr-28 2xl:text-8xl flex flex-col md:items-center lg:items-end xl:items-end list-none ${
          hoveredIndex !== null ? "parent-hover" : ""
        }`}
      >
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-center h-full nav-item ${
              hoveredIndex === index ? "hovered" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link
              href={item.href}
              className="p-1 lg:p-2 visited:text-foreground"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
