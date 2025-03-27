"use client";

import { Badge } from "@repo/ui";
import { motion } from "framer-motion";

interface AnimatedSkillBadgeProps {
  name: string;
  index: number;
}

export default function AnimatedSkillBadge({
  name,
  index,
}: AnimatedSkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      viewport={{ once: true }}
    >
      <Badge
        variant="outline"
        className="py-1.5 px-3 text-sm cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        {name}
      </Badge>
    </motion.div>
  );
}
