import { Button } from "@repo/ui";
import Link from "next/link";

import navigationItems from "@/data/navigation";
import personalInfo from "@/data/personal";

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
          {personalInfo.contact.map(({ href, label, ContactIcon }) => (
            <Link href={href} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <ContactIcon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
