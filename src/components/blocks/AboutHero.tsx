"use client";

import Image from "next/image";
import { Container, Section } from "@/components/layout";
import { Heading, Text, Label } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";

interface AboutHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function AboutHero({
  label,
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt = "Mercuria",
}: AboutHeroProps) {
  return (
    <Section background="warm" spacing="lg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            {label && (
              <Label variant="accent" className="mb-4 inline-block">
                {label}
              </Label>
            )}
            <Heading level={1} className="mb-4">
              {title}
            </Heading>
            {subtitle && (
              <Text size="xl" className="mb-6 text-[var(--mercuria-blue)]">
                {subtitle}
              </Text>
            )}
            <Text size="lg" muted className="leading-relaxed">
              {description}
            </Text>
          </ScrollReveal>

          {imageSrc && (
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          )}
        </div>
      </Container>
    </Section>
  );
}
