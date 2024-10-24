"use client";
import React from "react";
import { useTheme } from "./theme-provider";
import { Sun, Moon } from "lucide-react"; // Importing icons

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-1">
      {theme === "dark" ? (
        <Moon className="w-6 h-6" />
      ) : (
        <Sun className="w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
