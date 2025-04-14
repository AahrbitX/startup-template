import React from "react";
import SectionHeading from "@/components/molecules/section-heading";
import { Badge } from "@/components/atoms/badgen";
import { IconWorld } from "@tabler/icons-react";

function ProjectsSection() {
  return (
    <section id="projects" className="h-svh flex flex-col">
      <div className="p-10">
        <div className="flex flex-col  md:flex-row items-center justify-between w-full max-w-6xl mx-auto">
          <SectionHeading text="Our Projects" />
          <p className="text-gray-500 w-[378px] text-balance text-center px-4">
            Creative fuels design, Design fuels creativity, be here for more,
            and you are in love with the creative
          </p>
        </div>
        <div className="max-w-6xl mx-auto flex items-center flex-wrap justify-center  md:justify-start gap-4 mt-8">
          <Badge Icon={IconWorld} text="Design" />
          <Badge Icon={IconWorld} text="Development" />
          <Badge Icon={IconWorld} text="Marketing" />
          <Badge Icon={IconWorld} text="SEO" />
        </div>
      </div>
      <div className="flex-1 w-full h-full max-w-7xl mx-auto mb-8 px-1">
        <div className="grid w-full h-full grid-cols-2 md:grid-cols-3 grid-rows-3  md:grid-rows-2 gap-2">
          <div className="bg-amber-700 order-1"></div>
          <div className="col-span-2 bg-rose-700 order-3 md:order-2"></div>
          <div className="bg-purple-700 order-2 md:order-3"></div>
          <div className="bg-emerald-700 order-4"></div>
          <div className="bg-gray-700 rounded-br-[80px] order-5"></div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
