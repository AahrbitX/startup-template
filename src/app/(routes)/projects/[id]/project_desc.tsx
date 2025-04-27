"use client";

import { Project } from "@/data/projects";
import { IconChevronLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React from "react";

function ProjectDesc({ project }: { project: Project }) {
  const router = useRouter();
  return (
    <div className="">
      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            router.back();
          }}
          className="px-1 py-1 bg-neutral-800 border border-neutral-600 rounded-md text-primary  hover:bg-neutral-600 transition-colors duration-200 group"
        >
          <IconChevronLeft className="transition-all duration-300 group-hover:-translate-x-0.5" />
        </button>
        <h1 className="text-3xl text-primary font-heading">{project.title}</h1>
      </div>
      <p className="mt-3 text-neutral-500 text-sm">
        {project.small_description}
      </p>
      <div className="mt-8">
        <ul>
          {project.descriptions.map((desc, index) => (
            <li
              key={index}
              className="list-disc list-inside  text-neutral-400 text-lg font-mono my-2"
            >
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectDesc;
