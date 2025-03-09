import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "@repo/ui/icons";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  demoUrl,
  repoUrl,
}: Project) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-[200px] w-full">
        <Image
          src={image || "https://placehold.co/300x500"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {repoUrl && (
          <Button asChild variant="outline" size="sm">
            <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
        )}
        {demoUrl && (
          <Button asChild size="sm">
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
