"use client";

import React from "react";
import { IconAward, IconPlayerPlay, IconTrophy } from "@tabler/icons-react";
import HeroBadge from "@/components/atoms/hero-badge";
import { HeroVideoDialog } from "@/components/organisms/video-dialog";
import Section2 from "./section2";

import { motion } from "motion/react";
import { TextAnimate } from "@/components/organisms/text-effect";

function Hero() {
  return (
    <section
      className="scroll-mt-16 bg-primary w-full min-h-svh flex flex-col text-neutral-900 px-2 pt-[64px]"
      id="hero-section"
    >
      <div className="flex-1 grid grid-rows-[0.85fr_1fr] w-full h-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 justify-center">
          <div className="flex items-start flex-col md:flex-row md:justify-between lg:px-6 mt-6 lg:mt-0  gap-2  md:items-center lg:items-start">
            <h1 className="text-[40px] my-6 md:text-6xl lg:text-7xl font-bold text-black leading-tight font-heading tracking-wide flex-1 w-full *:w-full *:text-center *:md:text-start *:block">
              <TextAnimate once by="character" animation="slideUp" className="">
                Launch Bold
              </TextAnimate>
              <TextAnimate
                by="character"
                animation="slideUp"
                className=""
                delay={0.4}
                once
              >
                Scale Smart
              </TextAnimate>
            </h1>
            <div className="md:pl-6 lg:pl-0 w-full md:w-fit lg:mt-8">
              <div>
                <HeroVideoDialog
                  videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  animationStyle="from-center"
                >
                  <div className="h-20  lg:h-24 w-full rounded-full bg-[url('/abstract-fluid.jpg')]  bg-cover bg-no-repeat bg-center  border-4 border-neutral-800 p-1 max-w-[440px] mx-auto">
                    <motion.div
                      initial={{ x: "300%", rotate: 720 }}
                      animate={{ x: 0, rotate: 0 }}
                      exit={{ x: "100%", opacity: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                      className="h-full w-fit px-6 rounded-full bg-neutral-800 flex items-center justify-center"
                    >
                      <IconPlayerPlay className=" text-primary -translate-x-0.5 size-8" />
                    </motion.div>
                  </div>
                </HeroVideoDialog>
              </div>
              <p className="mt-7 lg:mt-8 md:text-lg font-normal leading-6 text-center md:text-start text-balance max-w-100">
                <TextAnimate by="line" once={true} as={"span"} duration={1.2}>
                  {`Modern infrastructure to launch your startup.\nOptimized for speed, scale, and success.\nCrafted with performance and elegance in mind.\n`}
                </TextAnimate>
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-center md:justify-start lg:px-6 mb-5 mt-3">
            <HeroBadge Icon={IconTrophy} text="Best Brand of the Year" />
            <HeroBadge Icon={IconAward} text="Best Selling Product" />
            <div className="bg-neutral-500/20 h-0.5 w-full flex-1 ml-5 hidden md:block" />
          </div>
        </div>
        <Section2 />
      </div>
    </section>
  );
}

export default Hero;
