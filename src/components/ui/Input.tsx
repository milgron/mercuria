"use client";

import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-[var(--mercuria-navy)] mb-2"
          >
            {label}
            {props.required && (
              <span className="text-[var(--mercuria-burgundy)] ml-1">*</span>
            )}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full px-4 py-3",
            "bg-white border border-gray-200 rounded-[var(--radius-button)]",
            "text-[var(--foreground)] placeholder:text-gray-400",
            "transition-all duration-[var(--transition-fast)]",
            "focus:outline-none focus:ring-2 focus:ring-[var(--mercuria-cyan)] focus:border-transparent",
            "disabled:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60",
            error && "border-[var(--mercuria-burgundy)] focus:ring-[var(--mercuria-burgundy)]",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-[var(--mercuria-burgundy)]">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="mt-1.5 text-sm text-[var(--foreground-muted)]">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

// Textarea component
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-[var(--mercuria-navy)] mb-2"
          >
            {label}
            {props.required && (
              <span className="text-[var(--mercuria-burgundy)] ml-1">*</span>
            )}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "w-full px-4 py-3 min-h-[120px] resize-y",
            "bg-white border border-gray-200 rounded-[var(--radius-button)]",
            "text-[var(--foreground)] placeholder:text-gray-400",
            "transition-all duration-[var(--transition-fast)]",
            "focus:outline-none focus:ring-2 focus:ring-[var(--mercuria-cyan)] focus:border-transparent",
            "disabled:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60",
            error && "border-[var(--mercuria-burgundy)] focus:ring-[var(--mercuria-burgundy)]",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-[var(--mercuria-burgundy)]">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="mt-1.5 text-sm text-[var(--foreground-muted)]">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

// Select component
export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { label, error, helperText, options, placeholder, className, id, ...props },
    ref
  ) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-[var(--mercuria-navy)] mb-2"
          >
            {label}
            {props.required && (
              <span className="text-[var(--mercuria-burgundy)] ml-1">*</span>
            )}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={cn(
            "w-full px-4 py-3",
            "bg-white border border-gray-200 rounded-[var(--radius-button)]",
            "text-[var(--foreground)]",
            "transition-all duration-[var(--transition-fast)]",
            "focus:outline-none focus:ring-2 focus:ring-[var(--mercuria-cyan)] focus:border-transparent",
            "disabled:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60",
            error && "border-[var(--mercuria-burgundy)] focus:ring-[var(--mercuria-burgundy)]",
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1.5 text-sm text-[var(--mercuria-burgundy)]">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="mt-1.5 text-sm text-[var(--foreground-muted)]">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
