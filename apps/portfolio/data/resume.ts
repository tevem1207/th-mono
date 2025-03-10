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
      title: "프론트엔드 개발자",
      company: "티맥스 클라우드",
      period: "2018년 6월 - 2020년 12월",
      responsibilities: [
        "React 및 Vue.js를 사용하여 클라이언트 웹사이트 개발 및 유지보수",
        "웹사이트 성능 최적화 및 반응형 디자인 구현",
        "서드파티 API 및 서비스와의 통합",
        "애자일 개발 프로세스 및 스프린트 계획에 참여",
      ],
    },
  ],
  education: [
    {
      degree: "컴퓨터 공학 학사",
      institution: "기술대학교",
      period: "2014년 - 2018년",
      description:
        "우등 졸업. 웹 개발 및 사용자 인터페이스 디자인을 전문적으로 학습.",
    },
  ],
  certifications: [
    {
      name: "고급 React 패턴",
      issuer: "Frontend Masters",
      year: "2022",
    },
    {
      name: "웹 접근성",
      issuer: "Google Developers",
      year: "2021",
    },
    {
      name: "TypeScript 전문가",
      issuer: "TypeScript Academy",
      year: "2020",
    },
    {
      name: "반응형 웹 디자인",
      issuer: "freeCodeCamp",
      year: "2019",
    },
  ],
  resumeUrl: "/resume.pdf",
};

export default resumeData;
