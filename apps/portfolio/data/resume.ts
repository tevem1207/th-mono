export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Resume {
  experiences: WorkExperience[];
  education: Education[];
  certifications: Certification[];
  resumeUrl: string;
}

const resumeData: Resume = {
  experiences: [
    {
      title: "Front-End Developer",
      company: "티맥스 클라우드",
      period: "Jun 2018 - Dec 2020",
      responsibilities: [
        "Developed and maintained client websites using React and Vue.js",
        "Optimized website performance and implemented responsive designs",
        "Integrated third-party APIs and services into web applications",
        "Participated in agile development processes and sprint planning",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2014 - 2018",
      description:
        "Graduated with honors. Specialized in web development and user interface design.",
    },
  ],
  certifications: [
    {
      name: "Advanced React Patterns",
      issuer: "Frontend Masters",
      year: "2022",
    },
    {
      name: "Web Accessibility",
      issuer: "Google Developers",
      year: "2021",
    },
    {
      name: "TypeScript Professional",
      issuer: "TypeScript Academy",
      year: "2020",
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2019",
    },
  ],
  resumeUrl: "/resume.pdf",
};

export default resumeData;
