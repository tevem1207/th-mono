import { MessageSquare } from "@repo/ui/icons";
import React from "react";

export const NavHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">AddChat</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#use-cases"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Use Cases
          </a>
          <a
            href="#demo"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Demo
          </a>
          <a
            href="#install"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Install
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Pricing
          </a>
        </nav>
      </div>
    </header>
  );
};
