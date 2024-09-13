"use client";

import ProjectCard from "@/components/ProjectCard";
import { ProjectDetails } from "./data/ProjectData";

const AllProjects: React.FC = () => {
  return (
    <div className="z-20 grid w-full grid-cols-1 gap-4 mx-auto lg:gap-5 sm:grid-cols-2">
      {ProjectDetails.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};

export default AllProjects;
