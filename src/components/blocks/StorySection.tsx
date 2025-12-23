"use client";

import { Container, Section } from "@/components/layout";
import { Heading, Text, Label } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";

interface StorySectionProps {
  label?: string;
  title?: string;
  paragraphs: string[];
  highlightText?: string;
}

export function StorySection({
  label = "Nuestra historia",
  title = "El camino de Mercuria",
  paragraphs,
  highlightText,
}: StorySectionProps) {
  return (
    <Section background="warm" spacing="lg">
      <Container size="narrow">
        <ScrollReveal className="text-center mb-12">
          {label && (
            <Label variant="accent" className="mb-4 inline-block">
              {label}
            </Label>
          )}
          <Heading level={2}>{title}</Heading>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <Text key={index} size="lg" className="text-center">
                {paragraph}
              </Text>
            ))}

            {highlightText && (
              <blockquote className="mt-12 py-8 px-6 border-l-4 border-[var(--mercuria-gold)] bg-white rounded-r-lg">
                <Text
                  size="xl"
                  className="italic text-[var(--mercuria-navy)] font-medium"
                >
                  &ldquo;{highlightText}&rdquo;
                </Text>
              </blockquote>
            )}
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
