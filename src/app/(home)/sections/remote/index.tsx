import SectionHeading from "@/components/molecules/section-heading";
import React from "react";
import { WorldMapBlock } from "./world-map";

function RemoteSection() {
  return (
    <section id="remote" className="max-w-7xl mx-auto my-20">
      <div className="flex flex-col  md:flex-row items-center justify-between w-full">
        <SectionHeading text="Global Reach" />
        <p className="text-gray-500 w-[398px] text-balance text-center px-4">
          Empowering businesses across borders. Our services are accessible from
          anywhere, anytime.
        </p>
      </div>
      <WorldMapBlock />
    </section>
  );
}

export default RemoteSection;
