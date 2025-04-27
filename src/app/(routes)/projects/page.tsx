import React from "react";
import { projects } from "@/data/projects";
import { LayoutGrid } from "@/components/molecules/layout-grid";
import SectionHeading from "@/components/molecules/section-heading";

function ProjectsPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col gap-10 items-center justify-center h-screen translate-y-30">
        <SectionHeading text="Projects Page" />
        <LayoutGrid cards={cards} />
      </section>
    </>
  );
}

const Skeleton = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">{title}</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {description}
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: (
      <Skeleton
        title={projects[0].title}
        description={projects[0].small_description}
      />
    ),
    link: projects[0].link,
    className: "md:col-span-2",
    thumbnail: `/projects/${projects[0].link}.jpg`,
  },
  {
    id: 2,
    content: (
      <Skeleton
        title={projects[1].title}
        description={projects[1].small_description}
      />
    ),
    link: projects[1].link,
    className: "col-span-1",
    thumbnail: `/projects/${projects[1].link}.jpg`,
  },
  {
    id: 3,
    content: (
      <Skeleton
        title={projects[2].title}
        description={projects[2].small_description}
      />
    ),
    link: projects[2].link,
    className: "col-span-1",
    thumbnail: `/projects/${projects[2].link}.jpg`,
  },
  {
    id: 4,
    content: (
      <Skeleton
        title={projects[3].title}
        description={projects[3].small_description}
      />
    ),
    link: projects[3].link,
    className: "md:col-span-2",
    thumbnail: `/projects/${projects[3].link}.jpg`,
  },
];

export default ProjectsPage;
