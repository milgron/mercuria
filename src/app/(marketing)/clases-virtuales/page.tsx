import { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/layout";
import { SimpleHero, CTABlock } from "@/components/blocks";
import { CourseCard } from "@/components/blocks/CourseCard";
import { Heading, Text, Label } from "@/components/ui";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

export const metadata: Metadata = {
  title: "Clases Virtuales | Mercuria Comunicacion",
  description:
    "Aprende comunicacion estrategica, fotografia de marca y creacion de contenido con nuestras clases virtuales. Cursos online para emprendedores y creativos.",
};

const courses = [
  {
    title: "Fundamentos de Comunicacion Estrategica",
    description:
      "Aprende a construir una estrategia de comunicacion solida para tu marca o emprendimiento.",
    duration: "4 semanas",
    format: "En vivo",
    level: "Inicial",
    price: "USD 150",
    features: [
      "4 clases en vivo de 2 horas",
      "Material descargable",
      "Ejercicios practicos",
      "Acceso a comunidad privada",
      "Certificado de finalizacion",
    ],
    href: "/contacto?curso=fundamentos-comunicacion",
    highlighted: false,
  },
  {
    title: "Fotografia de Marca con Celular",
    description:
      "Domina la fotografia de producto y contenido usando solo tu celular. Tecnicas profesionales accesibles.",
    duration: "6 semanas",
    format: "En vivo",
    level: "Todos",
    price: "USD 200",
    features: [
      "6 clases en vivo de 2 horas",
      "Guias de iluminacion y composicion",
      "Apps y herramientas de edicion",
      "Feedback personalizado",
      "Banco de recursos visuales",
      "Certificado de finalizacion",
    ],
    href: "/contacto?curso=fotografia-celular",
    highlighted: true,
  },
  {
    title: "Creacion de Contenido Autentico",
    description:
      "Aprende a crear contenido que conecta. Desde la idea hasta la publicacion.",
    duration: "4 semanas",
    format: "Grabado",
    level: "Intermedio",
    price: "USD 120",
    features: [
      "8 modulos grabados",
      "Templates de contenido",
      "Calendario editorial",
      "Acceso de por vida",
      "Actualizaciones incluidas",
    ],
    href: "/contacto?curso=contenido-autentico",
    highlighted: false,
  },
];

const benefits = [
  {
    icon: (
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
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Clases en vivo o grabadas",
    description:
      "Elige el formato que mejor se adapte a tu ritmo de aprendizaje.",
  },
  {
    icon: (
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
    ),
    title: "Grupos reducidos",
    description:
      "Atencion personalizada en cada clase para maximizar tu aprendizaje.",
  },
  {
    icon: (
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
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "Enfoque practico",
    description:
      "Ejercicios aplicables desde la primera clase para resultados reales.",
  },
  {
    icon: (
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
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "A tu ritmo",
    description:
      "Acceso a grabaciones y material para repasar cuando lo necesites.",
  },
];

export default function ClasesVirtualesPage() {
  return (
    <>
      <SimpleHero
        title="Clases Virtuales"
        subtitle="Aprende comunicacion y creatividad desde donde estes"
      />

      {/* Benefits Section */}
      <Section background="warm" spacing="md">
        <Container>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white shadow-sm flex items-center justify-center text-[var(--mercuria-blue)]">
                    {benefit.icon}
                  </div>
                  <Heading level={5} className="mb-2">
                    {benefit.title}
                  </Heading>
                  <Text size="sm" muted>
                    {benefit.description}
                  </Text>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Courses Section */}
      <Section background="white" spacing="lg">
        <Container>
          <ScrollReveal className="text-center mb-12">
            <Label variant="accent" className="mb-4 inline-block">
              Cursos disponibles
            </Label>
            <Heading level={2} className="mb-4">
              Elige tu proximo aprendizaje
            </Heading>
            <Text size="lg" muted className="max-w-2xl mx-auto">
              Cursos diseñados para emprendedores, creativos y profesionales que
              quieren mejorar su comunicacion visual y estrategica.
            </Text>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <StaggerItem key={index}>
                <CourseCard {...course} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* FAQ or Custom Course Section */}
      <Section background="warm" spacing="lg">
        <Container size="narrow">
          <ScrollReveal className="text-center">
            <Heading level={3} className="mb-4">
              ¿Necesitas algo mas personalizado?
            </Heading>
            <Text size="lg" muted className="mb-8">
              Ofrecemos capacitaciones in-company y talleres personalizados para
              equipos y organizaciones. Diseñamos el contenido segun tus
              necesidades especificas.
            </Text>
            <Link
              href="/contacto?servicio=capacitacion"
              className="inline-flex items-center gap-2 text-[var(--mercuria-blue)] font-medium hover:text-[var(--mercuria-burgundy)] transition-colors"
            >
              Consultar por capacitacion personalizada
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </ScrollReveal>
        </Container>
      </Section>

      <CTABlock
        headline="¿Tenes dudas sobre los cursos?"
        description="Escribinos y te ayudamos a elegir el curso ideal para vos."
        primaryButton={{
          text: "Consultar",
          href: "/contacto",
        }}
        variant="dark"
      />
    </>
  );
}
