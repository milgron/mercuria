"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/layout";
import { Card, Heading, Text, Label } from "@/components/ui";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

interface Pillar {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

interface PillarsSectionProps {
  label?: string;
  title?: string;
  pillars?: Pillar[];
}

// Default icons for the three pillars
const CommunicationIcon = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

const PhotographyIcon = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ArtIcon = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
    />
  </svg>
);

export const defaultPillars: Pillar[] = [
  {
    icon: <CommunicationIcon />,
    title: "Comunicacion Estrategica",
    description:
      "Diagnostico, planificacion y acompanamiento en redes sociales para marcas con proposito.",
    href: "/servicios#comunicacion",
  },
  {
    icon: <PhotographyIcon />,
    title: "Fotografia de Marca",
    description:
      "Historias a traves de imagenes. Fotografia de producto, marca personal y contenido autentico.",
    href: "/servicios#fotografia",
  },
  {
    icon: <ArtIcon />,
    title: "Creacion Artistica",
    description:
      "Exploracion visual donde el arte se encuentra con el mensaje. Collage, fotografia experimental.",
    href: "/proyectos/arte",
  },
];

export function PillarsSection({
  label = "Lo que hacemos",
  title = "Tres pilares de creatividad con proposito",
  pillars = defaultPillars,
}: PillarsSectionProps) {
  return (
    <Section background="white" spacing="lg">
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
          {pillars.map((pillar, index) => (
            <StaggerItem key={index}>
              <PillarCard {...pillar} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}

function PillarCard({ icon, title, description, href }: Pillar) {
  const content = (
    <Card hover={!!href} className="h-full text-center">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-[var(--mercuria-cyan)]/10 flex items-center justify-center text-[var(--mercuria-blue)]">
          {icon}
        </div>
      </div>
      <Heading level={4} className="mb-3">
        {title}
      </Heading>
      <Text muted>{description}</Text>
    </Card>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
