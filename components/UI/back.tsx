import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import ThemeSwitcher from "./theme-switcher";

export default function Backbutton() {
  return (
    <header className="p-4 flex-shrink-0 flex justify-between bg-transparent backdrop-blur-md">
      <Link href="/">
        <ChevronLeft className="w-8 h-8 hover:text-mixed" />
      </Link>
      <ThemeSwitcher />
    </header>
  );
}
