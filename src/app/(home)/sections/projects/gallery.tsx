"use client";

import { cn } from "@/lib/cn";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { unstable_ViewTransition as ViewTransition } from "react";
import { useRouter } from "next/navigation";
import { projects, type Project } from "@/data/projects";

function ProjectsGallery() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const router = useRouter();

  return (
    <div className="flex-1 w-full h-full max-w-7xl mx-auto mb-8 px-1">
      {!activeProject && (
        <motion.div
          className="grid w-full h-full grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-2 *:h-40 *:md:h-60 *:lg:h-80 grid-flow-row"
          layout
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={cn(
                "relative overflow-hidden cursor-pointer",
                project.className,
                project.rounded,
                project.order
              )}
              layoutId={`project-${project.id}`}
              onClick={() => setActiveProject(project)}
            >
              <motion.img
                src={`/projects/project-${project.id}.jpg`}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-60 transition-opacity">
                <h3 className="text-white text-xl font-semibold">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[999]"
            onClick={() => setActiveProject(null)}
          >
            <ViewTransition name="project-image">
              <motion.div
                layoutId={`project-${activeProject.id}`}
                className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden  cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/projects/${activeProject.link}`);
                }}
              >
                <motion.img
                  src={`/projects/project-${activeProject.id}.jpg`}
                  alt={activeProject.title}
                  className="w-full h-[200px]  md:h-[300px]  lg:h-[450px] object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl text-neutral-900 font-bold mb-2">
                    {activeProject.title}
                  </h2>
                  <p className="text-neutral-700">
                    {activeProject.small_description}
                  </p>
                </div>
              </motion.div>
            </ViewTransition>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProjectsGallery;
