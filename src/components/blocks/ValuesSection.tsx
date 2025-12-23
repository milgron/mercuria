"use client";

import { Container, Section } from "@/components/layout";
import { Heading, Text, Label } from "@/components/ui";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ValuesSectionProps {
  label?: string;
  title?: string;
  values?: Value[];
}

const HeartIcon = () => (
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
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const SparklesIcon = () => (
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
      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
    />
  </svg>
);

const UsersIcon = () => (
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
      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
    />
  </svg>
);

const LightbulbIcon = () => (
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
      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
    />
  </svg>
);

const defaultValues: Value[] = [
  {
    icon: <HeartIcon />,
    title: "Proposito",
    description:
      "Cada proyecto nace de un proposito claro. Trabajamos con marcas que quieren comunicar algo significativo.",
  },
  {
    icon: <SparklesIcon />,
    title: "Autenticidad",
    description:
      "Creemos en la comunicacion genuina. Sin formulas, sin cliches. Tu esencia, amplificada.",
  },
  {
    icon: <UsersIcon />,
    title: "Conexion",
    description:
      "El objetivo final siempre es conectar: con tu audiencia, con tu comunidad, con tu proposito.",
  },
  {
    icon: <LightbulbIcon />,
    title: "Creatividad Consciente",
    description:
      "La creatividad como herramienta de transformacion. Ideas que inspiran y generan impacto.",
  },
];

export function ValuesSection({
  label = "Nuestros valores",
  title = "Lo que nos mueve",
  values = defaultValues,
}: ValuesSectionProps) {
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

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <StaggerItem key={index}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--mercuria-gold)]/20 flex items-center justify-center text-[var(--mercuria-burgundy)]">
                  {value.icon}
                </div>
                <Heading level={5} className="mb-2">
                  {value.title}
                </Heading>
                <Text size="sm" muted>
                  {value.description}
                </Text>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
