import { cn } from "@repo/ui/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Section = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"section">) => {
  return (
    <section
      className={cn("p-4 flex flex-col items-center gap-4 w-full", className)}
      {...props}
    >
      {children}
    </section>
  );
};
