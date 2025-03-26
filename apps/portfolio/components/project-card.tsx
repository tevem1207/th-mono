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
import ProjectModal from "./project-modal";

export default function ProjectCard({ ...project }: Project) {
  const { title, description, thumbnail, technologies, demoUrl, repoUrl } =
    project;

  return (
    <Card className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={thumbnail || "https://placehold.co/300x500"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-0 p-4 -translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <div className="flex justify-end gap-2">
            <ProjectModal project={project} />
          </div>
        </div>
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
