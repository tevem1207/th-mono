import { cn } from "@repo/ui/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const TypographyH1 = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"h1">) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export const TypographyH2 = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"h2">) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export const TypographyH3 = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"h3">) => {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export const TypographyH4 = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"h4">) => {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
}

export const TypographyP = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) => {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export const TypographyBlockquote = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"blockquote">) => {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    >
      {children}
    </blockquote>
  );
}

export const TypographyInlineCode = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"code">) => {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
}
