import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "wide" | "narrow";
}

const containerSizes = {
  default: "max-w-[1200px]",
  wide: "max-w-[1440px]",
  narrow: "max-w-[900px]",
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = "default", className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8",
          containerSizes[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";
