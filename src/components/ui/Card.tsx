"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { cardHover } from "@/lib/animations/config";

export interface CardProps {
  children: ReactNode;
  variant?: "default" | "elevated" | "bordered" | "warm";
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

const variantStyles = {
  default: "bg-white shadow-[var(--shadow-card)]",
  elevated: "bg-white shadow-[var(--shadow-card-hover)]",
  bordered: "bg-white border border-gray-200",
  warm: "bg-[var(--background-warm)]",
};

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  variant = "default",
  padding = "md",
  hover = false,
  className,
  onClick,
}: CardProps) {
  const classes = cn(
    "rounded-[var(--radius-card)]",
    variantStyles[variant],
    paddingStyles[padding],
    hover && "cursor-pointer",
    className
  );

  if (hover) {
    return (
      <motion.div
        className={classes}
        initial="rest"
        whileHover="hover"
        variants={cardHover}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
}

// Card Header
export function CardHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

// Card Title
export function CardTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "text-xl font-semibold text-[var(--mercuria-navy)]",
        className
      )}
    >
      {children}
    </h3>
  );
}

// Card Description
export function CardDescription({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-[var(--foreground-muted)] mt-1", className)}>
      {children}
    </p>
  );
}

// Card Content
export function CardContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("", className)}>{children}</div>;
}

// Card Footer
export function CardFooter({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mt-4 flex items-center gap-4", className)}>
      {children}
    </div>
  );
}
