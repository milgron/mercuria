import { Metadata } from "next";
import {
  AboutHero,
  ValuesSection,
  StorySection,
  MethodologySection,
  CTABlock,
} from "@/components/blocks";

export const metadata: Metadata = {
  title: "Sobre Mercuria | Comunicacion con Proposito",
  description:
    "Conoce a Mercuria Comunicacion. Creatividad estrategica, fotografia de marca y arte visual para marcas con proposito en Buenos Aires.",
};

export default function SobreMercuriaPage() {
  return (
    <>
      <AboutHero
        label="Sobre nosotros"
        title="Mercuria Comunicacion"
        subtitle="Creatividad con proposito desde Buenos Aires"
        description="Somos un estudio creativo especializado en comunicacion estrategica, fotografia de marca y creacion artistica. Trabajamos con emprendedores, profesionales y marcas que buscan comunicar con autenticidad y generar conexiones reales con su audiencia."
        imageSrc="/images/brand/mercuria-about.svg"
        imageAlt="Clara Liparoti - Mercuria Comunicacion"
      />

      <ValuesSection />

      <StorySection
        paragraphs={[
          "Mercuria nacio de la conviccion de que la comunicacion puede ser una herramienta de transformacion. No se trata solo de vender, sino de conectar, de contar historias que importan.",
          "Desde Buenos Aires, acompañamos a marcas y emprendedores que tienen algo valioso que decir. Creemos que detras de cada proyecto hay una historia unica, y nuestra mision es ayudarte a contarla de manera autentica y memorable.",
          "Combinamos estrategia, creatividad y una mirada artistica para crear comunicacion que no solo se ve bien, sino que genera impacto real.",
        ]}
        highlightText="La comunicacion con proposito no es solo lo que decis, es como lo decis y a quien se lo decis."
      />

      <MethodologySection />

      <CTABlock
        headline="¿Listo para comunicar con proposito?"
        description="Contanos sobre tu proyecto y descubramos juntos como podemos ayudarte a conectar con tu audiencia."
        primaryButton={{
          text: "Iniciar conversacion",
          href: "/contacto",
        }}
        secondaryButton={{
          text: "Ver servicios",
          href: "/servicios",
        }}
        variant="gradient"
      />
    </>
  );
}
