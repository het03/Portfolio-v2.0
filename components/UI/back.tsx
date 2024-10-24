import { ChevronLeft, Download } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ThemeSwitcher from "./theme-switcher";

export default function Backbutton() {
  const [isResumePage, setIsResumePage] = useState(false);

  useEffect(() => {
    const handlePathChange = () => {
      setIsResumePage(window.location.pathname === "/resume");
    };
    handlePathChange();
    window.addEventListener("popstate", handlePathChange);
    return () => {
      window.removeEventListener("popstate", handlePathChange);
    };
  }, []);
  return (
    <header className="p-4 flex-shrink-0 flex justify-between bg-transparent backdrop-blur-md">
      <Link href="/">
        <ChevronLeft className="w-8 h-8 hover:text-mixed" />
      </Link>
      <div className="flex items-center justify-center gap-8">
        {isResumePage && (
          <a href="/pdfs/Myres.pdf" download>
            <Download />
          </a>
        )}
        <ThemeSwitcher />
      </div>
    </header>
  );
}
