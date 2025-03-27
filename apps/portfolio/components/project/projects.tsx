import projectsData from "@/data/projects";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
