import AnimatedCounter from "@/components/animated-counter";

interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

interface StatsCounterProps {
  stats: Stat[];
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-4 text-center"
        >
          <div className="text-3xl font-bold mb-1">
            <AnimatedCounter
              end={stat.value}
              suffix={stat.suffix}
              duration={Math.min(1000, stat.value * 200)}
            />
          </div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
