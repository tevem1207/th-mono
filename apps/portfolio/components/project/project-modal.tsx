"use client";
import Image from "next/image";
import { ExternalLink, Github, Info } from "@repo/ui/icons";
import { AnimatePresence } from "framer-motion";
import type { Project } from "@/data/projects";
import {
  Badge,
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui";
interface ProjectModalProps {
  project: Project;
}

export function ProjectModal({
  project: {
    title,
    description,
    thumbnail,
    technologies,
    solutions,
    challenges,
    additionalImages,
    repoUrl,
    demoUrl,
  },
}: ProjectModalProps) {
  return (
    <AnimatePresence>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            size="sm"
            className="bg-background/80 backdrop-blur-sm"
          >
            <Info className="mr-1 h-4 w-4" />
            Details
          </Button>
        </DialogTrigger>
        <DialogContent className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-lg bg-background p-6 shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-2">
              {title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {description}
            </DialogDescription>
          </DialogHeader>

          <div className="relative h-72 w-full mb-6 rounded-lg overflow-hidden">
            <Image
              src={thumbnail || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Project Gallery</h3>
              <div className="grid grid-cols-2 gap-2">
                {additionalImages?.map((img, index) => (
                  <div
                    key={index}
                    className="relative h-[100px] rounded-md overflow-hidden"
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Challenges</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {challenges?.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Solutions</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {solutions?.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </div>
          </div>

          <DialogFooter>
            <Button asChild variant="outline">
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </a>
            </Button>
            <Button asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AnimatePresence>
  );
}
