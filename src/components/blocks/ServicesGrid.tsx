"use client";

import { Container, Section } from "@/components/layout";
import { Heading, Text, Label } from "@/components/ui";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { ServiceCard } from "./ServiceCard";

interface ServiceFeature {
  text: string;
}

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: ServiceFeature[];
  highlighted?: boolean;
}

interface ServicesGridProps {
  label?: string;
  title?: string;
  description?: string;
  services: Service[];
}

export function ServicesGrid({
  label,
  title = "Nuestros servicios",
  description,
  services,
}: ServicesGridProps) {
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

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard {...service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
