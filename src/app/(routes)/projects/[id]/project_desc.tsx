"use client";

import Button from "@/components/atoms/Button";
import { Project } from "@/data/projects";
import {
  IconBrandGithub,
  IconChevronLeft,
  IconExternalLink,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React from "react";

function ProjectDesc({ project }: { project: Project }) {
  const router = useRouter();
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              router.back();
            }}
            className="px-1 py-1 bg-neutral-800 border border-neutral-600 rounded-md text-primary hover:bg-neutral-600 transition-colors duration-200 group"
          >
            <IconChevronLeft className="transition-all duration-300 group-hover:-translate-x-0.5" />
          </button>
          <h1 className="text-3xl text-primary font-heading">
            {project.title}
          </h1>
        </div>
        <p className="text-neutral-500">{project.small_description}</p>
      </div>
      <div className="mt-6 md:mt-8 flex-1">
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
      <div className="mt-4 flex gap-4 items-center justify-center">
        <button
          onClick={() => {}}
          className="w-full bg-primary py-2 rounded-md text-foreground hover:bg-primary/80 transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <IconBrandGithub className="size-4" /> View Code
        </button>
        <button
          onClick={() => {}}
          className="w-full bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200 py-2 rounded-md text-primary flex items-center justify-center gap-2"
        >
          <IconExternalLink className="size-4" /> Demo
        </button>
      </div>
    </div>
  );
}

export default ProjectDesc;
