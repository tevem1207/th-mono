import { Button } from "@repo/ui";
import Link from "next/link";

import navigationItems from "@/data/navigation";
import personalInfo from "@/data/personal";

import { MobileMenu } from "./mobile-menu";
import { ThemeToggle } from "./theme";

export const Header = () => {
  return (
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
          <ThemeToggle />
          <MobileMenu />
          {personalInfo.contact.map(({ type, href, label, ContactIcon }) => (
            <Button key={type} variant="ghost" size="icon" asChild>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <ContactIcon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">{label}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
};
