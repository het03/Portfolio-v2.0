"use client";
import Backbutton from "@/components/UI/back";
import React from "react";

export default function page() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      ?.value;

    const data = {
      name,
      email,
      message,
    };

    const response = await fetch("/api/route", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Message sent!");
      form.reset();
    } else {
      alert("Message failed to send!");
    }
  }

  return (
    <div>
      <Backbutton />
      <div className="flex flex-col items-center justify-center min-h-screen w-full">
        <div className="grid w-full border-y-2 border-primary">
          {/* Upper Section with Fixed Height */}
          <div className="grid grid-cols-3 w-full h-28 md:h-64 border-b-2 border-primary">
            {" "}
            {/* Adjust the height here */}
            <div className="col-span-1 antialiased border-r-2 border-primary bg-[length:4.9rem_4.9rem] md:bg-[length:8.9rem_8.9rem] dark:bg-[linear-gradient(-45deg,_white_25%,_transparent_25%,_transparent_50%,_white_50%,_white_75%,_transparent_75%,_transparent)] bg-[linear-gradient(-45deg,_black_25%,_transparent_25%,_transparent_50%,_black_50%,_black_75%,_transparent_75%,_transparent)] h-full"></div>
            <div className="col-span-2 flex items-center justify-center h-full font-black md:text-3xl xl:text-6xl">
              CONTACT
            </div>
          </div>

          {/* Lower Section with Flex Grow */}
          <div className="flex-grow">
            <div className="grid md:h-64">
              <form
                onSubmit={handleSubmit}
                className="grid col-span-4 grid-cols-1 md:grid-cols-4"
              >
                <div className="grid md:col-span-3 md:grid-cols-3 px-6 py-12 md:px-0 md:py-0">
                  <div className="col-span-1 place-content-center pb-8 md:mx-8">
                    <input
                      placeholder="NAME"
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="off"
                      minLength={3}
                      maxLength={150}
                      required
                      className="w-full bg-transparent border-b-2 border-primary focus:outline-none focus:border-transparent h-auto text-xs md:text-base"
                    />
                  </div>
                  <div className="col-span-1 place-content-center pb-8 md:mx-8">
                    <input
                      placeholder="EMAIL"
                      type="text"
                      id="email"
                      name="email"
                      autoComplete="on"
                      minLength={5}
                      maxLength={150}
                      required
                      className="w-full bg-transparent border-b-2 border-primary focus:outline-none focus:border-transparent h-auto text-xs md:text-base"
                    />
                  </div>
                  <div className="col-span-1 place-content-center pb-8 md:mx-8">
                    <textarea
                      placeholder="MESSAGE"
                      name="message"
                      id="message"
                      autoComplete="off"
                      minLength={10}
                      maxLength={1000}
                      required
                      rows={1}
                      onInput={(e) => {
                        e.currentTarget.style.height = "auto";
                        e.currentTarget.style.height = `${Math.min(
                          e.currentTarget.scrollHeight,
                          74
                        )}px`;
                      }}
                      className="w-full bg-transparent border-b-2 border-primary focus:outline-none focus:border-transparent resize-none overflow-hidden h-auto pt-2 lg:pt-1.5 text-xs md:text-base"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <button
                    type="submit"
                    className="w-full bg-foreground hover:bg-mixed active:bg-background active:text-foreground text-background font-bold transition-colors duration-300 ease-in-out border-l-2 border-primary text-2xl xl:text-6xl md:text-3xl h-28 md:h-full"
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
