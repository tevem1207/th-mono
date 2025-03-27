import { Button } from "@repo/ui";
import { ExternalLink } from "@repo/ui/icons";
import Link from "next/link";
import React from "react";

import resumeData from "@/data/resume";

export const ResumeSection = () => {
  return (
    <section id="resume" className="py-12 md:py-24 border-t">
      <div className="flex justify-between items-center mb-8">
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

          <div className="space-y-8">
            {resumeData.experiences.map((experience, index) => (
              <div key={index} className="border rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 className="text-lg font-medium">{experience.title}</h4>
                    <p className="text-primary">{experience.company}</p>
                  </div>
                  <p className="text-muted-foreground">{experience.period}</p>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Education</h3>

          {resumeData.education.map((edu, index) => (
            <div key={index} className="border rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="text-lg font-medium">{edu.degree}</h4>
                  <p className="text-primary">{edu.institution}</p>
                </div>
                <p className="text-muted-foreground">{edu.period}</p>
              </div>
              <p className="text-muted-foreground">{edu.description}</p>
            </div>
          ))}
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
