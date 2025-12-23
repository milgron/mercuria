"use client";

import Image from "next/image";
import { Container, Section } from "@/components/layout";
import { Text } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";

interface TestimonialBlockProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  image?: string;
  variant?: "centered" | "card";
}

export function TestimonialBlock({
  quote,
  author,
  role,
  company,
  image,
  variant = "centered",
}: TestimonialBlockProps) {
  if (variant === "card") {
    return (
      <Section background="white" spacing="md">
        <Container size="narrow">
          <ScrollReveal>
            <div className="card">
              <QuoteIcon />
              <Text size="lg" className="italic mb-6">
                "{quote}"
              </Text>
              <div className="flex items-center gap-4">
                {image && (
                  <Image
                    src={image}
                    alt={author}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <Text weight="semibold">{author}</Text>
                  {(role || company) && (
                    <Text size="sm" muted>
                      {role}
                      {role && company && ", "}
                      {company}
                    </Text>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    );
  }

  return (
    <Section background="warm" spacing="lg">
      <Container size="narrow">
        <ScrollReveal className="text-center">
          <QuoteIcon className="mx-auto mb-6 text-[var(--mercuria-gold)]" />
          <blockquote>
            <Text size="xl" className="italic mb-8 leading-relaxed">
              "{quote}"
            </Text>
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            {image && (
              <Image
                src={image}
                alt={author}
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover"
              />
            )}
            <div className="text-left">
              <Text weight="semibold">{author}</Text>
              {(role || company) && (
                <Text size="sm" muted>
                  {role}
                  {role && company && ", "}
                  {company}
                </Text>
              )}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}

function QuoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-10 h-10 ${className}`}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}
