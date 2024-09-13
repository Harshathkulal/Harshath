"use client";

import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { Button } from "./ui/Button";
import ProjectCard from "@/components/ProjectCard";
import { ProjectDetails } from "./data/ProjectData";

const FeaturedProjects = () => {
  const featuredProject = ProjectDetails.slice(0, 4);

  return (
    <>
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-center text-white lg:text-start">
        Featured Projects
      </h2>

      <div className="z-20 grid w-full grid-cols-1 gap-4 mx-auto lg:gap-5 sm:grid-cols-2">
        {featuredProject.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Link href="/projects" className="pt-4">
        <Button variant="secondary" size="sm">
          Show More
          <IoArrowForward className="w-4 h-4 ml-2" />
        </Button>
      </Link>
    </>
  );
};

export default FeaturedProjects;
