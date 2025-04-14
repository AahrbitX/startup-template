import { Badge } from "@/components/atoms/badgen";
import SectionHeading from "@/components/molecules/section-heading";
import {
  IconAbacus,
  IconApps,
  IconBrandMedium,
  IconHeartHandshake,
  IconTelescope,
  IconWorld,
} from "@tabler/icons-react";
import React from "react";
import VelocityText from "./velocity-text";
import ServiceCards from "./service-cards";

function Service() {
  return (
    <section className="min-h-vh flex flex-col ">
      <VelocityText />
      <div className="flex-1 p-2 md:p-5 lg:p-10 flex flex-col mx-auto max-w-7xl">
        <div
          id="services"
          className="*:p-5 grid lg:grid-cols-[1fr_0.8fr] lg:grid-rows-1"
        >
          <div className="">
            <SectionHeading text="Our Services" />
            <p className="text-zinc-600 leading-5 lg:text-lg text-justify mt-6 max-w-130">
              Every One of us loves something different, so explore the world
              through the lens of our visual capabilities and find what you love
            </p>
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
        <ServiceCards />
      </div>
    </section>
  );
}

export default Service;
