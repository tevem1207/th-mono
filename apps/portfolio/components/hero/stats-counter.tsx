"use client";

import { motion } from "framer-motion";

interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

interface StatsCounterProps {
  stats: Stat[];
}

export const StatsCounter = ({ stats }: StatsCounterProps) => {
  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center justify-center p-4 text-center"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="text-3xl font-bold mb-1 flex items-center justify-center">
            {stat.value}
            {stat.suffix}
          </div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};
