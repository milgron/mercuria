"use client";

import { Container, Section } from "@/components/layout";
import { Heading, Text, Label } from "@/components/ui";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

interface Audience {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TargetAudienceProps {
  label?: string;
  title?: string;
  audiences?: Audience[];
}

// Icons
const OrganizationIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);

const EntrepreneurIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const CommunityIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const defaultAudiences: Audience[] = [
  {
    icon: <OrganizationIcon />,
    title: "Organizaciones Sociales y ONGs",
    description:
      "Comunicacion con impacto social, coherente con sus valores y mision.",
  },
  {
    icon: <EntrepreneurIcon />,
    title: "Emprendedores Conscientes",
    description:
      "Marcas que buscan diferenciarse desde la autenticidad y el proposito.",
  },
  {
    icon: <CommunityIcon />,
    title: "Proyectos Comunitarios",
    description:
      "Iniciativas que construyen tejido social y generan transformacion.",
  },
];

export function TargetAudience({
  label = "Para y con quien trabajamos",
  title = "Acompanamos a quienes creen en lo que hacen",
  audiences = defaultAudiences,
}: TargetAudienceProps) {
  return (
    <Section background="warm" spacing="lg">
      <Container>
        <ScrollReveal className="text-center mb-16">
          {label && (
            <Label variant="accent" className="mb-4 inline-block">
              {label}
            </Label>
          )}
          <Heading level={2}>{title}</Heading>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <StaggerItem key={index}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-[var(--shadow-card)] text-[var(--mercuria-blue)] mb-6">
                  {audience.icon}
                </div>
                <Heading level={4} className="mb-3">
                  {audience.title}
                </Heading>
                <Text muted>{audience.description}</Text>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
