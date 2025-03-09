export interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
}

const projectsData: Project[] = [
  {
    title: "TypeBoy",
    description:
      "Next.js를 활용해 개발한 풀스택 프로젝트로, 사용자 입력을 통해 타자 연습을 진행할 수 있는 플랫폼입니다. Prisma를 이용해 데이터베이스를 구축하고, Vercel로 배포했습니다.",
    image: "",
    technologies: ["Next.js", "Turborepo", "shadcn/ui", "Prisma", "Vercel"],
    demoUrl: "https://typeboy.vercel.app",
    repoUrl: "https://github.com/tevem1207/th-mono/tree/main/apps/typeboy",
  },
  {
    title: "TCP PaaS",
    description:
      "티맥스 클라우드에서 진행한 프로젝트로, 다양한 리소스를 통합 관리하는 PaaS 플랫폼 UI 개발에 참여했습니다. Monorepo 환경을 구축하고, 공통 UI 컴포넌트를 개발하여 팀 간 협업을 원활하게 만들었습니다.",
    image: "",
    technologies: [
      "React",
      "TypeScript",
      "Monorepo",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    title: "TCP IaaS",
    description:
      "티맥스 클라우드에서 진행한 프로젝트로, IaaS 플랫폼에서 VM 및 HostOS 관련 UI를 담당했습니다. API와 연동해 데이터 시각화 및 관리 기능을 개발했으며, Message Listener를 통해 비동기 통신을 최적화했습니다.",
    image: "",
    technologies: ["React", "TypeScript", "WebSockets"],
  },
];

export default projectsData;
