import projectsData from "@/data/projects";

import { ProjectCard } from "./project-card";

export const Projects = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};
