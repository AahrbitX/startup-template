import { TextHoverEffect } from "@/components/atoms/text-hover-effect";
import React from "react";

function NotFoundPage() {
  return (
    <section className="w-full h-screen flex items-center flex-col justify-center gap-5">
      <div className="z-10 space-y-4">
        <h1 className=" text-3xl  md:text-4xl lg:text-6xl font-bold text-primary font-heading text-center ">
          Page Not found
        </h1>
        <p className="text-lg text-center px-4">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="hover:bg-primary hover:text-black  text-white px-4 py-2 rounded-md hover:bg-primary-dark transition duration-300 border-1 border-primary ">
            <a href="/">Go to Home</a>
          </button>
        </div>
      </div>
      <TextHoverEffect text="MODERNO" />
    </section>
  );
}

export default NotFoundPage;
