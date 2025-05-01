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
      className="scroll-mt-16 bg-primary h-svh text-neutral-900 px-2 pt-16 md:pt-8 lg:pt-0 flex-1"
      id="hero-section"
    >
      <div className="max-w-7xl mx-auto  grid grid-rows-[0.85fr_1fr] h-full w-full">
        <div className=" pt-6 md:pt-13 lg:pt-22">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.5fr] gap-8 items-center justify-items-center lg:justify-items-start lg:gap-16 max-w-7xl mx-auto">
            <HeroText />
            <div className=" lg:mt-8">
              <HeroVideoDialogComp />
              <HeroSubText />
            </div>
          </div>
          <HeroBadges />
        </div>
        <Section2 />
      </div>
    </section>
  );
}

const HeroText = () => {
  return (
    <h1 className="text-[42px] my-6 md:text-7xl font-bold text-black leading-tight font-heading tracking-wide flex-1 w-full text-center lg:text-start ">
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
  );
};

const HeroVideoDialogComp = () => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <HeroVideoDialog
        videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
        animationStyle="from-center"
      >
        <div className="h-24 w-full rounded-full bg-[url('/abstract-fluid.jpg')]  bg-cover bg-no-repeat bg-center  border-4 border-neutral-800 p-1 max-w-[440px] mx-auto">
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
    </motion.div>
  );
};

const HeroSubText = () => {
  return (
    <p className="mt-7 lg:mt-8 md:text-lg font-normal leading-6 text-center md:text-start text-balance max-w-100">
      <TextAnimate by="line" once={true} as={"span"} duration={1.2}>
        {`Modern infrastructure to launch your startup.\nOptimized for speed, scale, and success.\nCrafted with performance and elegance in mind.\n`}
      </TextAnimate>
    </p>
  );
};

const HeroBadges = () => {
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.2 }}
      id="hero-badges"
      className="flex gap-2 items-center justify-center lg:justify-start lg:px-6 mb-5 mt-3 md:mt-10"
    >
      <HeroBadge Icon={IconTrophy} text="Best Brand of the Year" />
      <HeroBadge Icon={IconAward} text="Best Selling Product" />
      <div className="bg-neutral-500/20 h-0.5 w-full flex-1 ml-5 hidden lg:block" />
    </motion.div>
  );
};

export default Hero;
