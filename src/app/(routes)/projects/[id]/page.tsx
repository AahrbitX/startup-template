import React from "react";
import ProjectDesc from "./project_desc";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { unstable_ViewTransition as ViewTransition } from "react";
import InfiniteMovingCardsDemo from "./moving-cards";

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

export default async function ProjectPage(props: ProjectPageProps) {
  const { id } = await props.params;

  const project = projects.find((project) => project.link === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-[114px] max-w-7xl mx-auto px-4">
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
      <div className="w-full my-10">
        <table className="table-auto w-full text-left text-neutral-200 border border-primary border-collapse">
          <thead className="bg-primary/20">
            <tr>
              <th className="text-xl font-semibold text-gray-300 px-4 py-3 border-b border-primary">
                Problem
              </th>
              <th className="text-xl font-semibold text-gray-300 px-4 py-3 border-b border-primary">
                Solution
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-primary/10">
              <td className="px-4 py-3 border-b border-primary">
                File upload fails with incorrect content-type
              </td>
              <td className="px-4 py-3 border-b border-primary">
                Ensure the request uses <code>multipart/form-data</code> and
                wrap the file in <code>FormData</code>
              </td>
            </tr>
            <tr className="hover:bg-primary/10">
              <td className="px-4 py-3 border-b border-primary">
                Test times out while reading file
              </td>
              <td className="px-4 py-3 border-b border-primary">
                Convert buffer to <code>Uint8Array</code> before using it in the{" "}
                <code>File</code> constructor
              </td>
            </tr>
            <tr className="hover:bg-primary/10">
              <td className="px-4 py-3 border-b border-primary">
                Gantt chart files not found
              </td>
              <td className="px-4 py-3 border-b border-primary">
                Catch <code>ENOENT</code> errors and return 404 with a helpful
                message
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <InfiniteMovingCardsDemo />
    </div>
  );
}
