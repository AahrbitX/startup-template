"use client";

import { Badge } from "@/components/atoms/badge";
import SectionHeading from "@/components/molecules/section-heading";
import {
  IconApps,
  IconBrandMedium,
  IconHeartHandshake,
  IconTelescope,
  IconWorld,
} from "@tabler/icons-react";
import React from "react";
import ScrollText from "./scroll-text";
import { FeaturesSection } from "./features";
import { TextAnimate } from "@/components/organisms/text-effect";
import { ServicesProvider } from "./context";

function Service() {
  return (
    <ServicesProvider>
      <section className="flex flex-col h-fit">
        <ScrollText />

        <div className="flex-1 p-2 md:p-5 lg:p-10 flex flex-col mx-auto max-w-7xl">
          <div
            id="services"
            className="scroll-mt-22  *:p-5 grid lg:grid-cols-[1fr_0.8fr] lg:grid-rows-1"
          >
            <div className="">
              <SectionHeading text="Our Services" />
              <TextAnimate
                delay={0.4}
                as={"p"}
                animation="blurIn"
                className="text-zinc-600 leading-5 lg:text-lg text-justify mt-6 max-w-130 font-mono"
              >
                Every One of us loves something different, so explore the world
                through the lens of our visual capabilities and find what you
                love
              </TextAnimate>
            </div>
            <div className="w-full flex items-center justify-start gap-2 flex-wrap">
              <Badge Icon={IconWorld} text="Digital" />
              <Badge Icon={IconBrandMedium} text="Branding" />
              <Badge Icon={IconApps} text="Design" />
              <Badge Icon={IconApps} text="Development" />
              <Badge Icon={IconTelescope} text="Marketing" />
              <Badge Icon={IconHeartHandshake} text="Support" />
              <Badge Icon={IconWorld} text="Consulting" />
            </div>
          </div>
          <FeaturesSection />
        </div>
      </section>
    </ServicesProvider>
  );
}

export default Service;
