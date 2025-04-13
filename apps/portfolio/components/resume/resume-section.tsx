import { Button } from "@repo/ui";
import { ExternalLink } from "@repo/ui/icons";
import Link from "next/link";
import React from "react";

import resumeData from "@/data/resume";

import { ExperienceTimeline } from "./experience-timeline";

export const ResumeSection = () => {
  return (
    <section id="resume" className="py-12 md:py-24 border-t">
      <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
        <h2 className="text-3xl font-bold tracking-tighter">
          Resume & Experience
        </h2>
        <Button asChild variant="outline">
          <Link
            href={resumeData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="space-y-12">
        <div>
          <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
          <ExperienceTimeline experiences={resumeData.experiences} />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {resumeData.certifications.map((cert, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-medium">{cert.name}</h4>
                <p className="text-muted-foreground">
                  {cert.issuer}, {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
