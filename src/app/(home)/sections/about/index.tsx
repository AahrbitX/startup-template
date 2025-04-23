"use client";

import React from "react";
import { BrowserComponent } from "./mockBrowser";
import BentoGridBlock from "./BentroGridBlock";
import SectionHeading from "@/components/molecules/section-heading";
import { TextAnimate } from "@/components/organisms/text-effect";

function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-16 min-h-screen max-w-7xl mx-auto py-20 px-6 md:px-10"
    >
      <div className="flex flex-col  md:flex-row items-center justify-between w-full max-w-6xl mx-auto mb-12">
        <SectionHeading text="About Us" />
        <TextAnimate
          as={"p"}
          animation="blurIn"
          className="text-gray-500 font-mono  w-[378px] text-balance text-center px-4"
          delay={0.4}
        >
          Creative fuels design, Design fuels creativity, be here for more, and
          you are in love with the creative
        </TextAnimate>
      </div>
      <BrowserComponent></BrowserComponent>
      <BentoGridBlock />
    </section>
  );
}

export default AboutSection;
