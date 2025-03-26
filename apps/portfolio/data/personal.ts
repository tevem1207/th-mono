export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: {
    paragraphs: string[];
  };
  contact: {
    email: string;
    github: string;
    blog: string;
  };
  avatarUrl: string;
  profileImageUrl: string;
}

const personalInfo: PersonalInfo = {
  name: "황태희",
  role: "프론트엔드 개발자",
  tagline:
    "햄버거를 사랑하며, 개발자와 사용자가 모두 행복한 세상을 꿈꿉니다! 🍔😎",
  bio: {
    paragraphs: [
      "안녕하세요, 저는 사용자 중심의 웹 애플리케이션을 개발하는 프론트엔드 개발자입니다.",
      "주로 React, Next.js, TypeScript를 활용한 모던 프론트엔드 개발에 집중하고 있으며, 코드의 일관성과 확장성을 중요하게 생각합니다.",
      "티맥스 클라우드에서 TCP IaaS와 TCP PaaS 프로젝트에 참여하여 여러 직군과의 협업 경험을 쌓으며, API 통신 최적화와 UI 컴포넌트 라이브러리 구축을 통해 개발 생산성을 높이는 방법을 고민해 왔습니다.",
      "개인 프로젝트 'TypeBoy'에서는 Next.js와 Prisma를 활용해 서버부터 클라이언트까지 직접 설계 및 개발하며 풀스택 개발자로서의 경험을 쌓았습니다. 또한, Vercel을 이용한 배포 자동화 경험을 통해 서비스 배포와 관리에 대한 이해를 넓혔습니다.",
      "저는 개발자들이 더 효율적으로 일할 수 있는 환경을 만들기 위해 아키텍처 설계와 자동화 도구에 관심을 갖고 있습니다. 복잡한 설정 없이 빠르게 기능을 추가하고, 개발자가 비즈니스 로직에 집중할 수 있는 환경을 만들기 위해 고민하고 있습니다.",
    ],
  },
  contact: {
    email: "tevem1207@gmail.com",
    github: "github.com/tevem1207",
    blog: "velog.io/@tevem1207",
  },
  avatarUrl: "/avatar.png",
  profileImageUrl: "/android-chrome-512x512.png",
};

export default personalInfo;
