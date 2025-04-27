export interface Project {
  id: number;
  title: string;
  small_description: string;
  descriptions: string[];
  order: string;
  link: string;
  colSpan?: number;
  rounded?: string;
  className?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    small_description: "Description for Project 1",
    descriptions: [
      "Setup the project repository",
      "Define the project requirements",
      "Build core components",
      "Deploy initial version",
    ],
    order: "order-1",
    link: "project-1",
  },
  {
    id: 2,
    title: "Project 2",
    small_description: "Description for Project 2",
    descriptions: [
      "Research user needs",
      "Design UI/UX mockups",
      "Develop authentication flow",
      "Launch MVP to beta users",
    ],
    order: "order-3 md:order-2",
    colSpan: 2,
    className: "col-span-2",
    link: "project-2",
  },
  {
    id: 3,
    title: "Project 3",
    small_description: "Description for Project 3",
    descriptions: [
      "Create backend API endpoints",
      "Implement database models",
      "Secure data with middleware",
      "Optimize for scalability",
    ],
    order: "order-2 md:order-3",
    link: "project-3",
  },
  {
    id: 4,
    title: "Project 4",
    small_description: "Description for Project 4",
    descriptions: [
      "Conduct competitor analysis",
      "Prototype key features",
      "Integrate payment systems",
      "Prepare marketing strategy",
    ],
    order: "order-4",
    link: "project-4",
  },
  {
    id: 5,
    title: "Project 5",
    small_description: "Description for Project 5",
    descriptions: [
      "Plan event schedule",
      "Create registration forms",
      "Develop ticketing system",
      "Host live event launch",
    ],
    order: "order-5",
    rounded: "rounded-br-[80px]",
    link: "project-5",
  },
];
