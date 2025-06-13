export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  type: "full-time" | "training";
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  type: "degree";
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Resume {
  experiences: (WorkExperience | Education)[];
  certifications: Certification[];
  resumeUrl: string;
}

const resumeData: Resume = {
  experiences: [
    {
      title: "프론트엔드 개발자",
      company: "티맥스클라우드",
      period: "2023년 1월 - 2023년 12월",
      type: "full-time",
      responsibilities: [
        "React와 TypeScript 기반의 IaaS, PaaS 제품 UI 개발 및 아키텍처 설계 참여",
        "Yarn Workspaces를 활용한 모노레포 환경 구축 및 공통 컴포넌트 라이브러리 개발",
        "TanStack Query, Zustand, React Hook Form 등 라이브러리를 도입하여 상태 관리 및 API 통신 구조 개선",
        "공통 UI 디자인 시스템을 도입하고 UX 팀과 협업하여 일관된 사용자 경험 제공",
        "GNB 통합, HMR 이슈 해결 등 타 계열사와의 협업을 위한 기술적 문제 해결",
      ],
    },
    {
      title: "우리 FIS 아카데미 클라우드 엔지니어링 교육과정",
      company: "우리 FIS",
      period: "2023년 4월 - 2023년 7월",
      type: "training",
      responsibilities: [
        "클라우드 환경 및 서비스 구성 방식에 대한 이해",
        "Spring 기반 웹 어플리케이션 개발 실습 진행",
        "VMWare를 활용한 가상 인프라 환경 구축 및 운영 실습",
        "AWS EC2, RDS, S3 등을 활용한 웹 어플리케이션 배포 경험",
      ],
    },
    {
      title: "삼성 청년 SW 아카데미",
      company: "삼성전자",
      period: "2022년 1월 - 2022년 12월",
      type: "training",
      responsibilities: [
        "React, Vue.js 기반의 웹 프로젝트 4건 기획 및 개발",
        "Vue3와 Composition API를 활용한 컴포넌트 기반 아키텍처 설계",
        "WebRTC, WebSocket을 활용한 실시간 채팅/화상 기능 구현",
        "Git 전략 수립 및 코드 리뷰 문화 도입",
        "알고리즘 및 컴퓨터 공학 기초 학습 병행하여 우수 교육생 선정",
      ],
    },
    {
      degree: "기계항공공학부 학사",
      institution: "건국대학교",
      period: "2015년 - 2022년",
      description:
        "항공우주정보시스템 공학으로 입학하였으나, 학과 통폐합으로 인해 기계항공공학부로 변경",
      type: "degree",
    },
  ],
  certifications: [
    {
      name: "정보처리기사",
      issuer: "한국산업인력공단",
      year: "2025",
    },
    {
      name: "ADsP(데이터분석준전문가)",
      issuer: "한국데이터베이스진흥원",
      year: "2021",
    },
    {
      name: "COS Pro(Python) 1급",
      issuer: "YBM",
      year: "2023",
    },
  ],
  resumeUrl: "/resume.pdf",
};

export default resumeData;
