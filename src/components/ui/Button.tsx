"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonPress, durations, easings } from "@/lib/animations/config";

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
  asChild?: boolean;
}

const variantStyles = {
  primary:
    "bg-[var(--mercuria-blue)] text-white hover:bg-[var(--mercuria-navy)]",
  secondary:
    "bg-[var(--mercuria-gold)] text-[var(--mercuria-navy)] hover:bg-[var(--mercuria-gold)]/90",
  outline:
    "border-2 border-[var(--mercuria-blue)] text-[var(--mercuria-blue)] hover:bg-[var(--mercuria-blue)] hover:text-white",
  ghost:
    "text-[var(--mercuria-blue)] hover:bg-[var(--mercuria-blue)]/10",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      loading = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2",
          "font-medium rounded-[var(--radius-button)]",
          "transition-colors duration-[var(--transition-fast)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mercuria-cyan)] focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          className
        )}
        disabled={disabled || loading}
        initial="rest"
        whileHover={!disabled ? "hover" : undefined}
        whileTap={!disabled ? "pressed" : undefined}
        variants={buttonPress}
        {...props}
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : null}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

// Gradient Button variant - matches the logo gradient ring
export function GradientButton({
  children,
  className,
  ...props
}: Omit<ButtonProps, "variant">) {
  return (
    <motion.button
      className={cn(
        "relative inline-flex items-center justify-center",
        "px-8 py-4 font-semibold text-[var(--mercuria-navy)]",
        "rounded-[var(--radius-button)] overflow-hidden",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mercuria-cyan)] focus-visible:ring-offset-2",
        className
      )}
      initial="rest"
      whileHover="hover"
      whileTap="pressed"
      variants={buttonPress}
      {...props}
    >
      {/* Gradient border */}
      <span className="absolute inset-0 gradient-bg rounded-[var(--radius-button)]" />
      {/* White inner background */}
      <span className="absolute inset-[2px] bg-white rounded-[calc(var(--radius-button)-2px)]" />
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
