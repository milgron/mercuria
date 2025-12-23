"use client";

import { Container, Section } from "@/components/layout";
import { Heading, Text, Label } from "@/components/ui";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface MethodologySectionProps {
  label?: string;
  title?: string;
  description?: string;
  steps?: Step[];
}

const defaultSteps: Step[] = [
  {
    number: "01",
    title: "Escucha",
    description:
      "Comenzamos escuchando. Entendemos tu marca, tu vision, tus objetivos y tu audiencia.",
  },
  {
    number: "02",
    title: "Diagnostico",
    description:
      "Analizamos tu situacion actual, identificamos oportunidades y definimos el camino.",
  },
  {
    number: "03",
    title: "Estrategia",
    description:
      "Diseñamos un plan de comunicacion alineado con tu proposito y objetivos.",
  },
  {
    number: "04",
    title: "Creacion",
    description:
      "Damos vida a las ideas. Contenido visual, narrativas y experiencias que conectan.",
  },
  {
    number: "05",
    title: "Acompañamiento",
    description:
      "No te dejamos solo. Medimos, ajustamos y evolucionamos juntos.",
  },
];

export function MethodologySection({
  label = "Como trabajamos",
  title = "Nuestra metodologia",
  description = "Un proceso pensado para crear comunicacion con impacto real.",
  steps = defaultSteps,
}: MethodologySectionProps) {
  return (
    <Section background="white" spacing="lg">
      <Container>
        <ScrollReveal className="text-center mb-16">
          {label && (
            <Label variant="accent" className="mb-4 inline-block">
              {label}
            </Label>
          )}
          <Heading level={2} className="mb-4">
            {title}
          </Heading>
          {description && (
            <Text size="lg" muted className="max-w-2xl mx-auto">
              {description}
            </Text>
          )}
        </ScrollReveal>

        <StaggerContainer className="relative">
          {/* Connection line - positioned at circle center (32px from top = half of 64px circle) */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--mercuria-cyan)] via-[var(--mercuria-gold)] to-[var(--mercuria-burgundy)]" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <StaggerItem key={index}>
                <div className="relative text-center">
                  {/* Number circle */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--mercuria-navy)] flex items-center justify-center relative z-10">
                    <span className="text-white font-bold text-lg">
                      {step.number}
                    </span>
                  </div>
                  <Heading level={5} className="mb-2">
                    {step.title}
                  </Heading>
                  <Text size="sm" muted>
                    {step.description}
                  </Text>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </Container>
    </Section>
  );
}
