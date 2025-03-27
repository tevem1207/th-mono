import navigationItems from "@/data/navigation";
import personalInfo from "@/data/personal";
import { Button } from "@repo/ui";
import { Github, Mail } from "@repo/ui/icons";
import Link from "next/link";

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
</header>;
