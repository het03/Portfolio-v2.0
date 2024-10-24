"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import ThemeSwitcher from "@/components/UI/theme-switcher";
import { motion } from "framer-motion";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <Navigation />
      <Footer />
    </div>
  );
}
