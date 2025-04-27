"use client";

import SectionHeading from "@/components/molecules/section-heading";
import { TextAnimate } from "@/components/organisms/text-effect";
import dynamic from "next/dynamic";

const MeteorsCard = dynamic(() => import("./card"), {
  ssr: false,
});

function RemoteSection() {
  return (
    <section id="remote" className="scroll-mt-16 max-w-7xl mx-auto my-20 z-10">
      <div className="flex flex-col  md:flex-row items-center justify-between w-full max-w-6xl mx-auto text-center md:text-start px-4 md:px-0">
        <SectionHeading text="Borderless Collaboration" />
        <TextAnimate
          as={"p"}
          delay={0.4}
          once
          animation="blurIn"
          className="text-gray-500 font-mono min-w-[390px] text-balance text-center px-4"
        >
          Seamless workflows across timezones. Build with the best talent, no
          matter where they are.
        </TextAnimate>
      </div>
      <div className="min-h-[400px] w-full px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
        <MeteorsCard
          title="Async Work, Synchronized Results"
          description="Our tools make midnight brainstorming in San Francisco and morning standups in Tokyo feel like one continuous workday."
          buttonLabel="See How It Works 🌐"
        />
        <MeteorsCard
          title="The Global Talent Advantage"
          description="Tap into specialized skills from 50+ countries without visa paperwork or timezone math."
          buttonLabel="Meet Your Team 👋"
        />
      </div>
    </section>
  );
}

export default RemoteSection;
