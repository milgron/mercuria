import { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/layout";
import {
  SimpleHero,
  ServiceDetailSection,
  CTABlock,
} from "@/components/blocks";
import { Heading, Text, Label } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";

export const metadata: Metadata = {
  title: "Servicios | Mercuria Comunicacion",
  description:
    "Comunicacion estrategica, fotografia de marca y creacion artistica. Servicios creativos para marcas con proposito en Buenos Aires.",
};

// Icons
const CommunicationIcon = () => (
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
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

const PhotographyIcon = () => (
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
    className="w-8 h-8"
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

// Quick navigation for services
function ServicesNav() {
  const services = [
    { id: "comunicacion", label: "Comunicacion Estrategica", icon: <CommunicationIcon /> },
    { id: "fotografia", label: "Fotografia de Marca", icon: <PhotographyIcon /> },
    { id: "arte", label: "Creacion Artistica", icon: <ArtIcon /> },
  ];

  return (
    <Section background="white" spacing="sm">
      <Container>
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`#${service.id}`}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 hover:border-[var(--mercuria-gold)] hover:bg-[var(--mercuria-gold)]/5 transition-all group"
              >
                <span className="text-[var(--mercuria-blue)] group-hover:text-[var(--mercuria-burgundy)] transition-colors">
                  {service.icon}
                </span>
                <span className="text-sm font-medium text-[var(--mercuria-navy)]">
                  {service.label}
                </span>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}

export default function ServiciosPage() {
  return (
    <>
      <SimpleHero
        title="Nuestros Servicios"
        subtitle="Creatividad estrategica para marcas con proposito"
      />

      <ServicesNav />

      <ServiceDetailSection
        id="comunicacion"
        icon={<CommunicationIcon />}
        label="Comunicacion Estrategica"
        title="Comunicacion que conecta con tu audiencia"
        description="Desarrollamos estrategias de comunicacion personalizadas para marcas que quieren destacar con autenticidad. Desde el diagnostico inicial hasta la gestion continua de tus redes sociales."
        features={[
          "Diagnostico de comunicacion y marca",
          "Estrategia de contenidos para redes sociales",
          "Planificacion y calendario editorial",
          "Redaccion de textos y copywriting",
          "Gestion y community management",
          "Analisis de metricas y reportes mensuales",
        ]}
        imageSrc="/images/services/comunicacion.svg"
        imageAlt="Comunicacion estrategica"
        ctaText="Consultar servicio"
        ctaHref="/contacto?servicio=comunicacion"
      />

      <Section background="warm" spacing="md">
        <Container size="narrow">
          <ScrollReveal className="text-center">
            <Label variant="accent" className="mb-4 inline-block">
              Ideal para
            </Label>
            <Text size="lg">
              Emprendedores, profesionales independientes y pequeñas empresas que
              necesitan ordenar su comunicacion y construir una presencia digital coherente.
            </Text>
          </ScrollReveal>
        </Container>
      </Section>

      <ServiceDetailSection
        id="fotografia"
        icon={<PhotographyIcon />}
        label="Fotografia de Marca"
        title="Imagenes que cuentan tu historia"
        description="La fotografia como herramienta de comunicacion. Creamos contenido visual autentico que refleja la esencia de tu marca y conecta con tu audiencia."
        features={[
          "Fotografia de producto y still life",
          "Retratos corporativos y de marca personal",
          "Sesiones de lifestyle y contenido autentico",
          "Fotografia para redes sociales",
          "Banco de imagenes personalizado",
          "Direccion de arte y styling",
        ]}
        imageSrc="/images/services/fotografia.svg"
        imageAlt="Fotografia de marca"
        ctaText="Ver portfolio fotografico"
        ctaHref="/proyectos?categoria=fotografia"
        reversed
      />

      <ServiceDetailSection
        id="arte"
        icon={<ArtIcon />}
        label="Creacion Artistica"
        title="Arte visual con mensaje"
        description="Exploracion creativa donde el arte se encuentra con la comunicacion. Proyectos artisticos, collage digital y fotografia experimental para marcas que buscan diferenciarse."
        features={[
          "Collage digital y analogico",
          "Fotografia experimental y artistica",
          "Ilustracion y composicion visual",
          "Proyectos artisticos personalizados",
          "Piezas unicas para campañas especiales",
          "Colaboraciones artisticas",
        ]}
        imageSrc="/images/services/arte.svg"
        imageAlt="Creacion artistica"
        ctaText="Explorar proyectos"
        ctaHref="/proyectos?categoria=arte"
      />

      <Section background="white" spacing="lg">
        <Container size="narrow">
          <ScrollReveal className="text-center">
            <Heading level={3} className="mb-6">
              ¿No sabes que servicio necesitas?
            </Heading>
            <Text size="lg" muted className="mb-8">
              Cada proyecto es unico. Si no estas seguro de por donde empezar,
              agenda una llamada de descubrimiento sin compromiso donde podemos
              evaluar juntos tus necesidades.
            </Text>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 text-[var(--mercuria-blue)] font-medium hover:text-[var(--mercuria-burgundy)] transition-colors"
            >
              Agendar llamada de descubrimiento
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
        headline="¿Listo para empezar?"
        description="Contanos sobre tu proyecto y diseñemos juntos la mejor solucion para tu marca."
        primaryButton={{
          text: "Contactar ahora",
          href: "/contacto",
        }}
        variant="dark"
      />
    </>
  );
}
