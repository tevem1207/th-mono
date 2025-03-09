import { Github, Mail, ExternalLink } from "@repo/ui/icons";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/project-card";
import SkillBadge from "@/components/skill-badge";
import { Button } from "@repo/ui";

import personalInfo from "@/data/personal";
import navigationItems from "@/data/navigation";
import skillsData from "@/data/skills";
import projectsData from "@/data/projects";
import resumeData from "@/data/resume";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold">
            <Link href="/" className="text-xl">
              {personalInfo.name}
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href={`https://${personalInfo.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            {/* <Link
              href={`https://${personalInfo.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link> */}
            <Link href={`mailto:${personalInfo.contact.email}`}>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Hero Section */}
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

        {/* About Section */}
        <section id="about" className="py-12 md:py-24 border-t">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={
                  personalInfo.profileImageUrl || "https://placehold.co/600x500"
                }
                alt={`${personalInfo.name} working`}
                width={500}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">
                About Me
              </h2>
              {personalInfo.bio.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground mb-6 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24 border-t">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">
            Technical Skills
          </h2>

          <div className="grid gap-8">
            {skillsData.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 border-t">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">
            Project Showcase
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                demoUrl={project.demoUrl}
                repoUrl={project.repoUrl}
              />
            ))}
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-12 md:py-24 border-t">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">
              Resume & Experience
            </h2>
            <Button asChild variant="outline">
              <Link
                href={resumeData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Work Experience</h3>

              <div className="space-y-8">
                {resumeData.experiences.map((experience, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h4 className="text-lg font-medium">
                          {experience.title}
                        </h4>
                        <p className="text-primary">{experience.company}</p>
                      </div>
                      <p className="text-muted-foreground">
                        {experience.period}
                      </p>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      {experience.responsibilities.map(
                        (responsibility, idx) => (
                          <li key={idx}>{responsibility}</li>
                        )
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Education</h3>

              {resumeData.education.map((edu, index) => (
                <div key={index} className="border rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-lg font-medium">{edu.degree}</h4>
                      <p className="text-primary">{edu.institution}</p>
                    </div>
                    <p className="text-muted-foreground">{edu.period}</p>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>

              <div className="grid md:grid-cols-2 gap-4">
                {resumeData.certifications.map((cert, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h4 className="font-medium">{cert.name}</h4>
                    <p className="text-muted-foreground">
                      {cert.issuer}, {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 border-t">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground mb-6">
                I'm currently open to freelance opportunities and interesting
                projects. If you have a project that needs a front-end developer
                or just want to chat, feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {personalInfo.contact.email}
                  </a>
                </div>

                {/* <div className="flex items-center">
                  <Linkedin className="h-5 w-5 mr-3 text-primary" />
                  <a
                    href={`https://${personalInfo.contact.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {personalInfo.contact.linkedin}
                  </a>
                </div> */}

                <div className="flex items-center">
                  <Github className="h-5 w-5 mr-3 text-primary" />
                  <a
                    href={`https://${personalInfo.contact.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {personalInfo.contact.github}
                  </a>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="Subject"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="Your message"
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {personalInfo.name}. All rights
              reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={`https://${personalInfo.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            {/* <Link
              href={`https://${personalInfo.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link> */}
            <Link href={`mailto:${personalInfo.contact.email}`}>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
