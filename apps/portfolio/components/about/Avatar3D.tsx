"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

import personalInfo from "@/data/personal";

export const Avatar3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);

  const clamp = (value: number, min: number, max: number) =>
    Math.max(min, Math.min(max, value));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rawX = ((y - centerY) / 10) * -1;
      const rawY = (x - centerX) / 10;

      const clampedX = clamp(rawX, -20, 20);
      const clampedY = clamp(rawY, -20, 20);

      animate(rotateX, clampedX, {
        type: "spring",
        stiffness: 100,
        damping: 15,
      });
      animate(rotateY, clampedY, {
        type: "spring",
        stiffness: 100,
        damping: 15,
      });
    };
    const handleClick = async () => {
      await animate(scale, 1.1, {
        type: "spring",
        stiffness: 400,
        damping: 5,
      });

      animate(scale, 1, {
        type: "spring",
        stiffness: 200,
        damping: 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("click", handleClick);
    };
  }, [rotateX, rotateY, scale]);

  return (
    <div className="w-full h-full" style={{ perspective: "1000px" }}>
      <motion.div
        ref={containerRef}
        className="w-full h-full relative"
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute inset-0 backface-hidden">
          <Image
            src={personalInfo.profileImageUrl}
            width={512}
            height={512}
            alt="coin front"
            className="w-full h-full object-contain"
          />
        </div>
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className="absolute inset-0"
            style={{
              background: "radial-gradient(#aaa, #333)",
              transform: `translateZ(-${(index + 1) * 8}px)`,
              maskImage: `url(${personalInfo.profileImageUrl})`,
              WebkitMaskImage: `url(${personalInfo.profileImageUrl})`,
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};
