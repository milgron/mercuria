import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

// Heading Component
export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  gradient?: boolean;
  className?: string;
  children: ReactNode;
}

const headingSizes = {
  1: "text-4xl md:text-5xl lg:text-6xl font-bold",
  2: "text-3xl md:text-4xl lg:text-5xl font-bold",
  3: "text-2xl md:text-3xl font-semibold",
  4: "text-xl md:text-2xl font-semibold",
  5: "text-lg md:text-xl font-medium",
  6: "text-base md:text-lg font-medium",
};

export function Heading({
  level = 2,
  gradient = false,
  className,
  children,
}: HeadingProps) {
  const classes = cn(
    headingSizes[level],
    "tracking-tight",
    gradient ? "gradient-text" : "text-[var(--mercuria-navy)]",
    className
  );

  switch (level) {
    case 1:
      return <h1 className={classes}>{children}</h1>;
    case 2:
      return <h2 className={classes}>{children}</h2>;
    case 3:
      return <h3 className={classes}>{children}</h3>;
    case 4:
      return <h4 className={classes}>{children}</h4>;
    case 5:
      return <h5 className={classes}>{children}</h5>;
    case 6:
      return <h6 className={classes}>{children}</h6>;
    default:
      return <h2 className={classes}>{children}</h2>;
  }
}

// Text Component
export interface TextProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  muted?: boolean;
  className?: string;
  children: ReactNode;
}

const textSizes = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const textWeights = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export function Text({
  size = "base",
  weight = "normal",
  muted = false,
  className,
  children,
}: TextProps) {
  return (
    <p
      className={cn(
        textSizes[size],
        textWeights[weight],
        "leading-relaxed",
        muted ? "text-[var(--foreground-muted)]" : "text-[var(--foreground)]",
        className
      )}
    >
      {children}
    </p>
  );
}

// Lead/Intro Text
export interface LeadProps {
  className?: string;
  children: ReactNode;
}

export function Lead({ className, children }: LeadProps) {
  return (
    <p
      className={cn(
        "text-xl md:text-2xl text-[var(--foreground-muted)] leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
}

// Label Component
export interface LabelProps {
  variant?: "default" | "accent" | "muted";
  className?: string;
  children: ReactNode;
}

export function Label({
  variant = "default",
  className,
  children,
}: LabelProps) {
  const variantStyles = {
    default: "text-[var(--mercuria-navy)]",
    accent: "text-[var(--mercuria-gold)]",
    muted: "text-[var(--foreground-muted)]",
  };

  return (
    <span
      className={cn(
        "text-sm font-medium uppercase tracking-widest",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

// Badge Component
export interface BadgeProps {
  variant?: "default" | "primary" | "secondary" | "outline";
  className?: string;
  children: ReactNode;
}

const badgeVariants = {
  default: "bg-gray-100 text-gray-700",
  primary: "bg-[var(--mercuria-blue)]/10 text-[var(--mercuria-blue)]",
  secondary: "bg-[var(--mercuria-gold)]/20 text-[var(--mercuria-burgundy)]",
  outline: "border border-gray-200 text-gray-700",
};

export function Badge({
  variant = "default",
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        badgeVariants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
