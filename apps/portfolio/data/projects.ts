import { generateThumbnailPath } from "@/lib/utils";

export interface Project {
  title: string;
  description: string;
  organization: string;
  startDate: string;
  role: ProjectRole[];
  endDate?: string;
  thumbnail?: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  additionalImages?: string[];
  challenges?: string[];
  solutions?: string[];
}

export type ProjectRole = "frontend-developer" | "backend-developer";

const projectsData: Project[] = [
  {
    title: "TypeBoy",
    description:
      "Next.js를 활용해 개발한 풀스택 프로젝트로, 사용자 입력을 통해 타자 연습을 진행할 수 있는 플랫폼입니다. Prisma를 이용해 데이터베이스를 구축하고, Vercel로 배포했습니다.",
    organization: "개인 프로젝트",
    role: ["frontend-developer", "backend-developer"],
    startDate: "2024.01",
    endDate: "2024.03",
    thumbnail: generateThumbnailPath({
      src: "/images/typeboy.png",
      options: {
        x: 0,
        y: 0,
        tw: 800,
        th: 600,
      },
    }),
    technologies: ["Next.js", "Turborepo", "shadcn/ui", "Prisma", "Vercel"],
    demoUrl: "https://typeboy.vercel.app",
    repoUrl: "https://github.com/tevem1207/th-mono/tree/main/apps/typeboy",
    additionalImages: ["/images/typeboy-1.png", "/images/typeboy-2.png"],
    challenges: [
      "Next.js의 SSR을 활용해 SEO 최적화를 적용",
      "Modal 컴포넌트 SEO 최적화",
      "1인 개발 및 운영을 고려한 가벼운 서버 설계",
      "사용자 입력을 안정적으로 처리",
      "확장성 있는 데이터베이스 설계",
    ],
    solutions: [
      "Next.js App Router와 서버 컴포넌트를 활용해 SSR 구현",
      "Parallel Routes와 Intercepting Routes를 사용해 Modal 컴포넌트를 서버 컴포넌트로 전환",
      "Route Handlers를 도입해 서버리스 환경에서 API 엔드포인트 관리",
      "Prisma Schema를 기반으로 데이터베이스를 구축",
    ],
  },
  {
    title: "TCP PaaS",
    description:
      "티맥스 클라우드에서 진행한 프로젝트로, 다양한 리소스를 통합 관리하는 UI 개발에 참여했습니다. Monorepo 환경을 구축하고, 공통 UI 컴포넌트를 개발하여 팀 간 협업을 원활하게 만들었습니다.",
    organization: "티맥스 클라우드",
    role: ["frontend-developer"],
    startDate: "2024.02",
    endDate: "2024.11",
    thumbnail: generateThumbnailPath({
      src: "/images/tcp-paas.png",
      options: {
        x: 0,
        y: 0,
        tw: 800,
        th: 400,
      },
    }),
    technologies: [
      "React",
      "TypeScript",
      "Monorepo",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
    ],
    additionalImages: ["/images/tcp-paas-1.png", "/images/tcp-paas-2.png"],
    challenges: [
      "고객의 요구사항에 맞춰 유연하게 메뉴 구성 변경 필요",
      "각 팀의 UI 스타일이 달라 일관된 디자인 시스템 구축 필요",
      "API 요청 중복 호출 및 비효율적인 상태 관리 문제",
    ],
    solutions: [
      "Monorepo 도입을 통해 공통 컴포넌트를 개발하여 UI 일관성 유지",
      "각 메뉴 패키지로 관리하며, 빌드 시점에 구성을 변경할 수 있음",
      "UX 팀과 협업하여 공통 디자인 시스템을 적용",
      "TanStack Query를 도입해 캐싱 및 비동기 데이터 동기화 최적화",
    ],
  },
  {
    title: "TCP IaaS",
    description:
      "티맥스 클라우드에서 진행한 프로젝트로, VM 및 HostOS 관련 UI를 담당했습니다. API와 연동해 데이터 시각화 및 관리 기능을 개발했으며, Message Listener를 통해 비동기 통신을 최적화했습니다.",
    organization: "티맥스 클라우드",
    role: ["frontend-developer"],
    startDate: "2023.09",
    endDate: "2024.02",
    thumbnail: generateThumbnailPath({
      src: "/images/tcp-iaas.png",
      options: {
        x: 0,
        y: 0,
        tw: 800,
        th: 400,
      },
    }),
    technologies: ["React", "TypeScript", "WebSockets", "Mobx"],
    additionalImages: ["/images/tcp-iaas-1.png", "/images/tcp-iaas-2.png"],
    challenges: [
      "대규모 리소스 데이터를 효율적으로 시각화하는 문제",
      "다양한 API 상태 변화에 대응하는 UI 안정성 문제",
    ],
    solutions: [
      "WebSocket을 활용한 데이터 동기화 및 상태 변경 로직 구현",
      "Message Listener 패턴을 도입해 비동기 이벤트 처리 및 UI 상태 관리 강화",
    ],
  },
  {
    title: "빈지도",
    description:
      "지도 기반 실시간 채팅 서비스입니다. WebSocket의 클라이언트 코드 구현, 지도 API를 이용한 채팅 오버레이와 마커 표시, 모바일 환경을 고려한 반응형 웹 설계 및 개발을 맡았습니다. PWA로 구현하여 데스크탑과 모바일 환경에 모두 최적화된 서비스를 제공했습니다.",
    organization: "삼성 청년 SW 아카데미",
    role: ["frontend-developer"],
    startDate: "2022.10",
    endDate: "2022.11",
    thumbnail: generateThumbnailPath({
      src: "/images/beanzido.png",
      options: {
        x: 200,
        y: 0,
        w: 680,
        h: 380,
        tw: 800,
        th: 600,
      },
    }),
    technologies: ["React", "Recoil", "WebSocket", "Leaflet.js", "PWA"],
    additionalImages: ["/images/binjido-1.png", "/images/binjido-2.png"],
    challenges: [
      "WebSocket 통신 오류로 인한 메시지 누락 문제",
      "지도 오버레이에서 반응형 UI 설계 문제",
      "동일 위치에 여러 개의 마커가 생성되는 문제",
    ],
    solutions: [
      "Recoil의 selector 기능을 통해 비동기 데이터 흐름 최적화",
      "Responsively App과 Chrome DevTools로 다양한 해상도 테스트 진행",
      "마커 클러스터링 기법을 도입해 가독성 개선",
    ],
  },
  {
    title: "우주",
    description:
      "빅데이터를 활용한 전통주 추천 서비스입니다. Vue3를 이용하여 취향 설문 페이지를 구현하고, 데이터 분석을 위한 크롤링과 Python 개발을 담당하였습니다. 전통주 조회 페이지 사용자의 설정 값을 쿼리 스트링으로 저장하여 뒤로가기 시에도 설정이 유지되도록 구현했습니다.",
    organization: "삼성 청년 SW 아카데미",
    role: ["frontend-developer", "backend-developer"],
    startDate: "2022.08",
    endDate: "2022.10",
    thumbnail: generateThumbnailPath({
      src: "/images/woo-ju.png",
      options: {
        x: 0,
        y: 0,
        tw: 800,
        th: 600,
      },
    }),
    technologies: ["Vue3", "Pinia", "Python", "Axios", "koNLPy"],
    additionalImages: ["/images/wooju-1.png", "/images/wooju-2.png"],
    challenges: [
      "팀원들과의 데이터 분석 결과 해석 차이",
      "설문 결과 데이터 시각화에서 UX/UI 직관성 문제",
      "크롤링을 통한 대규모 데이터 수집 및 정제 과정에서의 문제",
    ],
    solutions: [
      "데이터 시각화를 위한 Chart.js 도입으로 정보 전달력 개선",
      "모의 사용자 테스트를 통해 설문 결과의 직관성을 개선",
      "koNLPy를 활용해 전통주 상세 설명에서 키워드 추출 및 추천 로직 최적화",
    ],
  },
  {
    title: "캐치프라이즈",
    description:
      "WebRTC를 이용한 화상 보드 게임 서비스입니다. Vue와 Element Plus 라이브러리를 이용한 프론트 엔드를 담당하였습니다.",
    organization: "삼성 청년 SW 아카데미",
    role: ["frontend-developer"],
    startDate: "2022.07",
    endDate: "2022.08",
    thumbnail: generateThumbnailPath({
      src: "/images/catch-prize.png",
      options: {
        x: 0,
        y: 0,
        tw: 800,
        th: 600,
      },
    }),
    technologies: ["Vue", "Element Plus", "WebRTC", "JavaScript", "CSS"],
    additionalImages: ["/images/catchprize-1.png", "/images/catchprize-2.png"],
    challenges: [
      "JavaScript와 CSS 애니메이션을 이용한 상호작용 UI 구현 문제",
      "WebSocket을 통한 실시간 친구 목록 및 방 목록 동기화 문제",
    ],
    solutions: [
      "의사 클래스와 CSS 애니메이션을 적극 활용하여 직관적인 상호작용 UI 구현",
      "WebSocket의 이벤트 흐름을 최적화하여 실시간 동기화 성능 개선",
    ],
  },
];

export default projectsData;
