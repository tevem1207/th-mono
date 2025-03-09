import { Badge } from "@repo/ui";

interface SkillBadgeProps {
  name: string;
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <Badge variant="outline" className="py-1.5 px-3 text-sm">
      {name}
    </Badge>
  );
}
