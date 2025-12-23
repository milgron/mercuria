"use client";

import Link from "next/link";
import { Container, Section } from "@/components/layout";
import { Button, GradientButton, Heading, Text } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";

interface CTABlockProps {
  headline: string;
  description?: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  variant?: "light" | "dark" | "gradient";
}

export function CTABlock({
  headline,
  description,
  primaryButton,
  secondaryButton,
  variant = "light",
}: CTABlockProps) {
  const backgrounds = {
    light: "warm" as const,
    dark: "dark" as const,
    gradient: "gradient" as const,
  };

  const textColor = variant === "light" ? "" : "text-white";

  return (
    <Section background={backgrounds[variant]} spacing="lg">
      <Container size="narrow">
        <ScrollReveal className="text-center">
          <Heading level={2} className={`mb-4 ${textColor}`}>
            {headline}
          </Heading>
          {description && (
            <Text
              size="lg"
              className={`mb-8 ${variant === "light" ? "" : "text-gray-200"}`}
            >
              {description}
            </Text>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={primaryButton.href}>
              {variant === "light" ? (
                <GradientButton>{primaryButton.text}</GradientButton>
              ) : (
                <Button
                  variant={variant === "dark" ? "secondary" : "outline"}
                  className="border-white text-white hover:bg-white hover:text-[var(--mercuria-navy)]"
                >
                  {primaryButton.text}
                </Button>
              )}
            </Link>
            {secondaryButton && (
              <Link href={secondaryButton.href}>
                <Button
                  variant="ghost"
                  className={variant === "light" ? "" : "text-white hover:bg-white/10"}
                >
                  {secondaryButton.text}
                </Button>
              </Link>
            )}
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
