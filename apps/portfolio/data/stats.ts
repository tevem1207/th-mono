export interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

const statsData: Stat[] = [
  {
    value: 1,
    label: "Years Experience",
    suffix: "+",
  },
  {
    value: 8,
    label: "Projects Completed",
  },
  {
    value: 15,
    label: "Happy Clients",
  },
  {
    value: 99,
    label: "Success Rate",
    suffix: "%",
  },
];

export default statsData;
