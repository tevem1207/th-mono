import React from "react";

import { Projects } from "./projects";

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-12 md:py-24 border-t">
      <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">
        Project Showcase
      </h2>
      <Projects />
    </section>
  );
};
