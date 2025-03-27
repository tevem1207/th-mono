import React from "react";

import skillsData from "@/data/skills";

import { SkillBadge } from "./skill-badge";

export const SkillSection = () => {
  return (
    <section id="skills" className="py-12 md:py-24 border-t">
      <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">
        Technical Skills
      </h2>

      <div className="grid gap-8">
        {skillsData.map((category, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map(({ name }) => (
                <SkillBadge key={name} name={name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
