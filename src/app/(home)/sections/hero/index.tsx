import React from "react";
import Navbar from "@/components/organisms/navigation";
import {
  IconArrowRight,
  IconAward,
  IconPlayerPlay,
  IconTrophy,
} from "@tabler/icons-react";
import HeroBadge from "@/components/atoms/hero-badge";
import { HeroVideoDialog } from "@/components/organisms/video-dialog";
import Section2 from "./section2";

function Hero() {
  return (
    <section
      className="bg-primary w-full min-h-svh flex flex-col text-neutral-900 px-2"
      id="hero-section"
    >
      <div className="flex-1 grid grid-rows-[0.85fr_1fr] w-full h-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 justify-center">
          <div className="flex items-start flex-col md:flex-row md:justify-between lg:px-6 gap-2 md:mt-8 md:items-center lg:items-start">
            <h1 className="text-[40px] my-6 md:text-6xl lg:text-7xl font-bold text-black leading-tight font-heading tracking-wide flex-1 w-full *:w-full *:text-center *:md:text-start *:block">
              <span className="">Launch Bold</span>
              <span className="">Scale Smart</span>
            </h1>
            <div className="md:pl-6 lg:pl-0 w-full md:w-fit">
              <div>
                <HeroVideoDialog
                  videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  animationStyle="from-center"
                >
                  <div className="h-20  lg:h-24 w-full rounded-full bg-rose-300 border-4 border-rose-600 p-1 max-w-[440px] mx-auto">
                    <div className="h-full w-fit px-6 rounded-full bg-primary flex items-center justify-center">
                      <IconPlayerPlay className="-translate-x-0.5 size-8" />
                    </div>
                  </div>
                </HeroVideoDialog>
              </div>
              <p className="mt-7 lg:mt-12 text-lg font-normal leading-6 text-center md:text-start text-balance max-w-100">
                Modern infrastructure to launch your startup. Optimized for
                speed, scale, and success. Crafted with performance and elegance
                in mind.
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
