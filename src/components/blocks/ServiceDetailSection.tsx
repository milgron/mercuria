"use client";

import Image from "next/image";
import { Container, Section } from "@/components/layout";
import { Heading, Text, Label, Button } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";
import Link from "next/link";

interface ServiceDetailSectionProps {
  id: string;
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
  features: string[];
  imageSrc?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaHref?: string;
  reversed?: boolean;
}

export function ServiceDetailSection({
  id,
  icon,
  label,
  title,
  description,
  features,
  imageSrc,
  imageAlt = "",
  ctaText = "Consultar",
  ctaHref = "/contacto",
  reversed = false,
}: ServiceDetailSectionProps) {
  return (
    <Section id={id} background="white" spacing="lg">
      <Container>
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            reversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          <ScrollReveal className={reversed ? "lg:order-2" : ""}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[var(--mercuria-cyan)]/10 flex items-center justify-center text-[var(--mercuria-blue)]">
                {icon}
              </div>
              <Label variant="accent">{label}</Label>
            </div>

            <Heading level={2} className="mb-4">
              {title}
            </Heading>

            <Text size="lg" muted className="mb-6">
              {description}
            </Text>

            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[var(--mercuria-gold)] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <Text>{feature}</Text>
                </li>
              ))}
            </ul>

            <Link href={ctaHref}>
              <Button variant="primary">{ctaText}</Button>
            </Link>
          </ScrollReveal>

          {imageSrc && (
            <ScrollReveal
              delay={0.2}
              className={reversed ? "lg:order-1" : ""}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
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
