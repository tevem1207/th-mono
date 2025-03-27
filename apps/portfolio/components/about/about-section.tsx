import React from "react";

import personalInfo from "@/data/personal";

import { Avatar3D } from "./Avatar3D";

export const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-24 border-t">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Avatar3D />
        <div>
          <h2 className="text-3xl font-bold tracking-tighter mb-4">About Me</h2>
          {personalInfo.bio.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-muted-foreground mb-6 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
