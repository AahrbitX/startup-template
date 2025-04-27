import { projects } from "@/data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { unstable_ViewTransition as ViewTransition } from "react";
import ProjectDesc from "./project_desc";

type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => {
    return {
      id: project.link,
    };
  });
}

async function ProjectPage(props: ProjectPageProps) {
  const { id } = await props.params;

  const project = projects.find((project) => project.link === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-[124px] max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <ViewTransition name="project-image">
          <img
            src={`/projects/${id}.jpg`}
            alt="projects page"
            className="w-full h-[300px] lg:h-[500px] object-cover rounded-2xl"
          />
        </ViewTransition>

        <ProjectDesc project={project} />
      </div>
    </div>
  );
}

export default ProjectPage;
