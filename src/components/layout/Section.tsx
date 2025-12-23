import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  background?: "white" | "warm" | "dark" | "gradient";
  spacing?: "none" | "sm" | "md" | "lg";
  as?: "section" | "div" | "article";
}

const backgroundStyles = {
  white: "bg-white",
  warm: "bg-[var(--background-warm)]",
  dark: "bg-[var(--mercuria-navy)] text-white",
  gradient: "gradient-bg text-white",
};

const spacingStyles = {
  none: "",
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-24 md:py-32",
};

export function Section({
  background = "white",
  spacing = "md",
  as: Tag = "section",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn(
        backgroundStyles[background],
        spacingStyles[spacing],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
