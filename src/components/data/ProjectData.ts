import { Project as ProjectProps } from "../types/index";

export const ProjectDetails: ProjectProps[] = [
  {
    id: "1",
    title: "Xike",
    view: "https://example.com/project-one",
    github: "https://github.com/projectone",
    stack: ["React", "Node.js"],
    description: "This is the first project.",
    image:
      "https://res.cloudinary.com/dqijpkpsr/image/upload/v1723393889/Xike_djblzv.webp",
  },
  {
    id: "2",
    title: "WebChat",
    view: "https://example.com/project-two",
    github: "https://github.com/projecttwo",
    stack: ["Vue", "Django"],
    description: "This is the second project.",
    image:
      "https://res.cloudinary.com/dqijpkpsr/image/upload/v1723393901/Webchat_qcyic4.webp",
  },
  // Add more projects here
];
