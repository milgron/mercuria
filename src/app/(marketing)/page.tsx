import {
  Hero,
  PillarsSection,
  TargetAudience,
  TestimonialBlock,
  CTABlock,
} from "@/components/blocks";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        label="Comunicacion con Proposito"
        headline="Creatividad que"
        highlightedText="Conecta"
        description="Mercuria es un espacio de comunicacion visual, fotografia y creatividad estrategica. Acompanamos a organizaciones sociales y emprendedores a comunicar desde la autenticidad, con metodologia y alma."
        primaryCTA={{
          text: "Conversemos sobre tu proyecto",
          href: "/contacto",
        }}
        secondaryCTA={{
          text: "Ver proyectos",
          href: "/proyectos",
        }}
      />

      {/* Three Pillars */}
      <PillarsSection />

      {/* Target Audience */}
      <TargetAudience />

      {/* Testimonial */}
      <TestimonialBlock
        quote="Trabajar con Mercuria fue encontrar alguien que entiende que comunicar es mucho mas que postear. Es construir sentido juntos."
        author="Cliente destacado"
        role="Emprendedora"
      />

      {/* Final CTA */}
      <CTABlock
        headline="Tenes un proyecto con proposito?"
        description="Hablemos. La comunicacion empieza por compartir."
        primaryButton={{
          text: "Contactar",
          href: "/contacto",
        }}
        secondaryButton={{
          text: "Conocer servicios",
          href: "/servicios",
        }}
        variant="dark"
      />
    </>
  );
}
