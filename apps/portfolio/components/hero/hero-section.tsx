import { Button } from "@repo/ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import personalInfo from "@/data/personal";
import statsData from "@/data/stats";

import { StatsCounter } from "./stats-counter";

export const HeroSection = () => {
  return (
    <section className="h-[calc(100svh-6rem)] min-h-[550px] flex flex-col justify-center items-center text-center gap-1">
      <div className="relative w-32 h-32 mb-8 rounded-full overflow-hidden border-4 border-primary-foreground">
        <Image
          src={personalInfo.avatarUrl || "https://placehold.co/128"}
          alt={personalInfo.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex gap-1 items-baseline justify-center">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">
          {personalInfo.role}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          , {personalInfo.name}입니다.
        </p>
      </div>

      <p className="text-xl md:text-xl text-muted-foreground mb-8 max-w-[700px]">
        {personalInfo.tagline}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="#projects">View My Work</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="#contact">Contact Me</Link>
        </Button>
      </div>
      <div className="mt-12 border-t">
        <StatsCounter stats={statsData} />
      </div>
    </section>
  );
};
