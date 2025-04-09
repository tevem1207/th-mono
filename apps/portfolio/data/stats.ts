export interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

const statsData: Stat[] = [
  {
    value: 1,
    label: "경력",
    suffix: "년+",
  },
  {
    value: 2,
    label: "실무 프로젝트",
    suffix: "건",
  },
  {
    value: 4,
    label: "사이드 프로젝트",
    suffix: "건+",
  },
  {
    value: 2,
    label: "오픈소스 기여",
    suffix: "회",
  },
];

export default statsData;
