export interface SkillCategory {
  title: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Front-End Technologies",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "SASS/SCSS",
    ],
  },
  {
    title: "Tools & Frameworks",
    skills: [
      "Git",
      "Webpack",
      "Vite",
      "Jest",
      "React Testing Library",
      "Redux",
      "GraphQL",
      "REST APIs",
    ],
  },
  {
    title: "Design & Other",
    skills: [
      "Figma",
      "Adobe XD",
      "Responsive Design",
      "Web Accessibility",
      "Performance Optimization",
      "SEO Basics",
    ],
  },
];

export default skillsData;
