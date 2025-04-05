import { Fragment } from "react";

import type { Resume, Education, WorkExperience } from "@/data/resume";

interface ExperienceTimelineProps {
  experiences: Resume["experiences"];
}

export const ExperienceTimeline = ({
  experiences,
}: ExperienceTimelineProps) => {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
      {experiences.map((experience, index) => {
        const content =
          experience.type === "degree"
            ? renderDegree(experience)
            : renderWorkOrTraining(experience);

        return <Fragment key={index}>{content}</Fragment>;
      })}
    </div>
  );
};

const TimelineDot = () => (
  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
    <span className="w-3 h-3 bg-primary rounded-full"></span>
  </div>
);

const TimelineContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
    {children}
  </div>
);

function renderDegree(experience: Education) {
  return (
    <TimelineContainer>
      <TimelineDot />
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg border bg-background shadow">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <div>
            <h4 className="text-lg font-medium">{experience.degree}</h4>
            <p className="text-primary">{experience.institution}</p>
          </div>
          <time className="text-sm text-muted-foreground">
            {experience.period}
          </time>
        </div>
        <ul className="mt-1 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
          <li>{experience.description}</li>
        </ul>
      </div>
    </TimelineContainer>
  );
}

function renderWorkOrTraining(experience: WorkExperience) {
  return (
    <TimelineContainer>
      <TimelineDot />
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg border bg-background shadow">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <div>
            <h4 className="text-lg font-medium">{experience.title}</h4>
            <p className="text-primary">{experience.company}</p>
          </div>
          <time className="text-sm text-muted-foreground">
            {experience.period}
          </time>
        </div>
        <ul className="mt-1 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
          {experience.responsibilities.map((responsibility, idx) => (
            <li key={idx}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </TimelineContainer>
  );
}
