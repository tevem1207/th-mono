import personalInfo from "@/data/personal";
import projectsData from "@/data/projects";
import resumeData from "@/data/resume";
import skillsData from "@/data/skills";

interface Chunk {
  id: string;
  type: string;
  content: string;
}

export const generateChunks = (): Chunk[] => {
  const chunks: Chunk[] = [];

  skillsData.forEach((category) => {
    category.skills.forEach((skill) => {
      chunks.push({
        id: `skill-${skill.name.toLowerCase().replace(/\s+/g, "-")}`,
        type: "skill",
        content: `${skill.name}: ${skill.description} \n${skill.tags
          .map((tag) => `#${tag}`)
          .join(" ")}`,
      });
    });
  });

  projectsData.forEach((project) => {
    chunks.push({
      id: `project-${project.title.toLowerCase().replace(/\s+/g, "-")}`,
      type: "project",
      content: `${project.title}: ${project.description} \n${project.technologies
        .map((tech) => `#${tech}`)
        .join(" ")} \n${project.challenges
        ?.map((challenge) => `#${challenge}`)
        .join(" ")} \n${project.solutions
        ?.map((solution) => `#${solution}`)
        .join(" ")}`,
    });
  });

  resumeData.experiences.forEach((experience) => {
    if (experience.type === "degree") {
      chunks.push({
        id: `experience-${experience.degree.toLowerCase().replace(/\s+/g, "-")}`,
        type: "education",
        content: `${experience.degree} at ${experience.institution} (${experience.period}) \n${experience.description}`,
      });
    } else {
      chunks.push({
        id: `experience-${experience.title.toLowerCase().replace(/\s+/g, "-")}`,
        type: "work",
        content: `${experience.title} at ${experience.company} (${experience.period}) \n${experience.responsibilities
          .map((responsibility) => `#${responsibility}`)
          .join(" ")}`,
      });
    }
  });

  personalInfo.contact.forEach((contact) => {
    chunks.push({
      id: `contact-${contact.type.toLowerCase().replace(/\s+/g, "-")}`,
      type: "contact",
      content: `${contact.type}: ${contact.href}`,
    });
  });

  return chunks;
};
