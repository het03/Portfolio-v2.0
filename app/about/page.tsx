"use client";
import Backbutton from "@/components/UI/back";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Backbutton />
      <div className="flex-grow flex flex-col justify-center items-center px-6 md:px-16 lg:px-32 xl:px-64 2xl:px-72">
        <h1 className="w-full text-center text-2xl md:text-4xl py-6 md:py-8 2xl:text-5xl 2xl:py-10">
          I&apos;m{" "}
          <span className="font-black 2xl:m-2">
            <i>Het</i>
          </span>
        </h1>
        <p className="text-justify align-middle break-words hyphens-auto leading-relaxed text-sm md:text-xl md:leading-loose 2xl:text-2xl 2xl:m-4 2xl:leading-loose font-normal">
          A{" "}
          <span className="font-black">
            <i>Software Engineer</i>
          </span>{" "}
          with a passion for front-end web development. I bring a wealth of
          enthusiasm and expertise to every project I undertake. With a keen eye
          for detail and a knack for problem-solving, I specialize in leveraging
          front-end technologies to create intuitive and visually stunning user
          interfaces.
        </p>
        <div className="flex flex-col items-center py-6 gap-3 justify-center md:py-8 md:text-lg 2xl:py-10 2xl:text-2xl 2xl:gap-6">
          <div>Feel free to connect!</div>
          <Link href="/contact" className="relative group">
            <span className="relative z-10">Contact</span>
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 group-hover:origin-right"></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
