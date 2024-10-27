"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between overflow-hidden">
      <Header />
      <Navigation />
      <Footer />
    </div>
  );
}
