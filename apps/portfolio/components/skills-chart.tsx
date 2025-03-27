"use client";

import Chart from "chart.js/auto";
import { useRef, useEffect } from "react";

import type { SkillCategory } from "@/data/skills";

interface SkillsChartProps {
  category: SkillCategory;
  isVisible: boolean;
}

export default function SkillsChart({ category }: SkillsChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const chart = new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: category.skills.map((skill) => skill.name),
        datasets: [
          {
            label: "Proficiency (%)",
            data: category.skills.map((skill) => skill.proficiency),
            backgroundColor: "#0ea5e9",
            borderRadius: 8,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
            max: 100,
            ticks: { stepSize: 20, callback: (value) => `${value}%` },
            grid: { display: false },
          },
          y: { grid: { display: false } },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => `${context.raw}%`,
            },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [category.skills]);

  return (
    <div className="mt-4 mb-8">
      <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
      <div style={{ height: `${category.skills.length * 50}px` }}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
