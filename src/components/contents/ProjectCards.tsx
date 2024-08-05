"use client";

import { Project as ProjectProps } from '../types/index';
import { useEffect, useState } from 'react';
import { Skeleton } from '../ui/Skeleton';
import AnimationContainer from '../utils/AnimationContainer';
import Project from '../utils/Project';
import { ProjectDetails } from '../data/ProjectData';

const ProjectCards = () => {

    const [projects, setProjects] = useState<ProjectProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Simulating data fetch
                setProjects(ProjectDetails);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProjects();
    }, []);

    const data = projects?.map((item: any) => item.node);


    return (
        <AnimationContainer customClassName="w-full flex flex-col">

            <div className="z-20 grid w-full grid-cols-1 gap-4 mx-auto lg:gap-5 sm:grid-cols-2">

                {isLoading ? (
                    <>
                        <Skeleton className="w-full h-40" />
                        <Skeleton className="w-full h-40" />
                        <Skeleton className="w-full h-40" />
                        <Skeleton className="w-full h-40" />
                        
                    </>
                ) : (
                    <>
                        {projects && projects?.map((project: ProjectProps) => (
                            <Project key={project.title} project={project} />
                        ))}
                    </>
                )}

            </div>
        </AnimationContainer>
    )
};

export default ProjectCards