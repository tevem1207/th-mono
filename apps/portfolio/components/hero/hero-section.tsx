import { Button } from "@repo/ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import personalInfo from "@/data/personal";

export const HeroSection = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
      <div className="relative w-32 h-32 mb-8 rounded-full overflow-hidden border-4 border-primary-foreground">
        <Image
          src={personalInfo.avatarUrl || "https://placehold.co/128"}
          alt={personalInfo.name}
          fill
          className="object-cover"
        />
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
        {personalInfo.name}
      </h1>
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
    </section>
  );
};
