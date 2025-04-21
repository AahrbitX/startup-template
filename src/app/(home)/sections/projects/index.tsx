import React from "react";
import SectionHeading from "@/components/molecules/section-heading";
import { Badge } from "@/components/atoms/badge";
import { IconWorld } from "@tabler/icons-react";
import ProjectsGallery from "./gallery";

function ProjectsSection() {
  return (
    <section id="projects" className="min-h-svh flex flex-col">
      <div className="p-10">
        <div className="flex flex-col  md:flex-row items-center justify-between w-full max-w-6xl mx-auto">
          <SectionHeading text="Our Projects" />
          <p className="text-gray-500 w-[378px] text-balance text-center px-4">
            Creative fuels design, Design fuels creativity, be here for more,
            and you are in love with the creative
          </p>
        </div>
        <div className="max-w-6xl mx-auto flex items-center flex-wrap justify-center  md:justify-start gap-4 mt-8">
          <Badge active Icon={IconWorld} text="Design" />
          <Badge Icon={IconWorld} text="Development" />
          <Badge Icon={IconWorld} text="Marketing" />
          <Badge Icon={IconWorld} text="SEO" />
        </div>
      </div>
      <ProjectsGallery />
    </section>
  );
}

export default ProjectsSection;
