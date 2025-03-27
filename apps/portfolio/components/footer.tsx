import { Button } from "@repo/ui";
import Link from "next/link";
import React from "react";

import personalInfo from "@/data/personal";

export const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
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
    </footer>
  );
};
