export interface Skill {
  name: string;
  proficiency: number; // 숙련도 (0 ~ 100%)
  description: string; // 내가 가진 경험, 기술 역량을 설명
  icon: string; // 아이콘 URL
  tags: Tag[];
}
type Tag =
  | "frontend"
  | "backend"
  | "devops"
  | "authentication"
  | "database"
  | "infrastructure"
  | "testing"
  | "design"
  | "performance";

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      {
        name: "Java",
        proficiency: 60,
        description:
          "Spring Framework를 이용한 웹 애플리케이션 개발 경험이 있습니다.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        tags: ["backend"],
      },
      {
        name: "Python",
        proficiency: 70,
        description:
          "FastAPI 및 Django를 이용한 RESTful API 개발 경험이 있습니다.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        tags: ["backend"],
      },
      {
        name: "JavaScript",
        proficiency: 95,
        description:
          "다양한 프로젝트에서 복잡한 로직을 구현한 경험이 있습니다.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        tags: ["frontend"],
      },
      {
        name: "TypeScript",
        proficiency: 90,
        description: "타입 안정성을 고려해 컴포넌트를 설계한 경험이 있습니다.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        tags: ["frontend"],
      },
      {
        name: "HTML5",
        proficiency: 95,
        description:
          "시멘틱 마크업과 웹 접근성을 고려한 HTML 구조 설계 경험이 있습니다.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        tags: ["frontend"],
      },
      {
        name: "CSS3",
        proficiency: 90,
        description:
          "다양한 레이아웃 및 스타일링 기법을 통해 반응형 웹을 구현한 경험이 있습니다.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        tags: ["frontend"],
      },
    ],
  },
  {
    title: "Tools & Frameworks",
    skills: [
      {
        name: "React",
        proficiency: 95,
        description:
          "대규모 프로젝트에서 공통 컴포넌트를 설계하고 상태 관리를 구현했습니다.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        tags: ["frontend"],
      },
      {
        name: "Next.js",
        proficiency: 85,
        description:
          "Next.js의 App Router를 사용해 SSR 및 SEO 최적화를 구현했습니다.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        tags: ["frontend"],
      },
      {
        name: "Vue.js",
        proficiency: 70,
        description:
          "Vue.js로 프로젝트를 진행하며 컴포넌트 기반 개발을 경험했습니다.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        tags: ["frontend"],
      },
      {
        name: "TanStackQuery",
        proficiency: 85,
        description:
          "API 요청 최적화와 캐싱 기능을 활용해 효율적인 데이터 관리를 경험했습니다.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        tags: ["frontend"],
      },
      {
        name: "Zustand",
        proficiency: 85,
        description:
          "전역 상태 관리를 간소화하고 유연한 데이터 흐름을 구현한 경험이 있습니다.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        tags: ["frontend"],
      },
      {
        name: "MobX",
        proficiency: 75,
        description:
          "MobX를 활용해 복잡한 상태 관리를 효율적으로 수행한 경험이 있습니다.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        tags: ["frontend"],
      },
      {
        name: "React Hook Form",
        proficiency: 80,
        description: "복잡한 폼을 효과적으로 관리하고 검증한 경험이 있습니다.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        tags: ["frontend"],
      },
      {
        name: "Zod",
        proficiency: 75,
        description:
          "스키마 기반 데이터 검증을 통해 유효성 검사 및 안정성을 확보한 경험이 있습니다.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        tags: ["frontend"],
      },
      {
        name: "WebSocket",
        proficiency: 70,
        description:
          "TCP IaaS 프로젝트에서 실시간 데이터 동기화를 구현한 경험이 있습니다.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/websocket/websocket-original.svg",
        tags: ["frontend"],
      },
      {
        name: "SASS/SCSS",
        proficiency: 80,
        description:
          "SASS/SCSS를 활용해 복잡한 스타일 구조를 효율적으로 관리했습니다.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        tags: ["frontend"],
      },
      {
        name: "Tailwind CSS",
        proficiency: 85,
        description: "유지보수와 확장성을 고려한 스타일링을 경험했습니다.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        tags: ["frontend"],
      },
      {
        name: "Node.js",
        proficiency: 85,
        description:
          "Next.js 프로젝트에서 API Route 및 서버 로직 구현에 사용했습니다.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        tags: ["backend"],
      },
      {
        name: "AWS",
        proficiency: 70,
        description:
          "서버리스 환경 구축 및 배포 자동화를 통해 안정적인 서비스 운영을 경험했습니다.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        tags: ["devops"],
      },
      {
        name: "Firebase",
        proficiency: 70,
        description:
          "Firebase Authentication과 Firestore를 이용해 사용자 인증 및 데이터베이스 설계를 경험했습니다.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        tags: ["authentication", "database"],
      },
      {
        name: "Prisma",
        proficiency: 85,
        description:
          "Prisma Schema를 활용해 관계형 데이터베이스 설계 및 성능 최적화를 수행했습니다.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
        tags: ["database"],
      },
      {
        name: "Turborepo",
        proficiency: 90,
        description:
          "TCP PaaS 프로젝트에서 Monorepo 환경을 구축하고 공통 컴포넌트를 관리하며 생산성을 높였습니다.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        tags: ["infrastructure"],
      },
      {
        name: "Git",
        proficiency: 95,
        description:
          "협업 및 버전 관리를 위해 다양한 Git 워크플로우를 경험했습니다.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        tags: ["devops"],
      },
    ],
  },
  {
    title: "Design & Other",
    skills: [
      {
        name: "Figma",
        proficiency: 85,
        description:
          "UI/UX 디자인 및 협업을 위해 Figma를 활용하여 다양한 프로토타입을 제작했습니다.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        tags: ["design"],
      },
      {
        name: "Responsive Design",
        proficiency: 90,
        description:
          "다양한 디바이스 환경을 고려한 반응형 디자인을 구현했습니다.",
        icon: "https://img.icons8.com/ios/452/responsive.png",
        tags: ["design"],
      },
      {
        name: "Performance Optimization",
        proficiency: 80,
        description:
          "웹 성능 분석 도구를 이용해 다양한 최적화 작업을 진행했습니다.",
        icon: "https://img.icons8.com/ios/452/speed.png",
        tags: ["performance"],
      },
    ],
  },
];

export default skillsData;
