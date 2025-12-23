import { Metadata } from "next";
import { SimpleHero, ProjectsGrid, CTABlock } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Proyectos | Mercuria Comunicacion",
  description:
    "Portfolio de trabajos de comunicacion estrategica, fotografia de marca y creacion artistica. Descubri proyectos de marcas con proposito.",
};

// Sample projects data - this will come from CMS in the future
const projects = [
  {
    slug: "marca-organica-sustentable",
    title: "Marca Organica Sustentable",
    category: "Comunicacion",
    imageSrc: "/images/projects/proyecto-1.svg",
  },
  {
    slug: "fotografia-producto-artesanal",
    title: "Fotografia de Producto Artesanal",
    category: "Fotografia",
    imageSrc: "/images/projects/proyecto-2.svg",
  },
  {
    slug: "collage-editorial-revista",
    title: "Collage Editorial para Revista",
    category: "Arte",
    imageSrc: "/images/projects/proyecto-3.svg",
  },
  {
    slug: "identidad-visual-emprendimiento",
    title: "Identidad Visual Emprendimiento",
    category: "Comunicacion",
    imageSrc: "/images/projects/proyecto-4.svg",
  },
  {
    slug: "sesion-marca-personal",
    title: "Sesion de Marca Personal",
    category: "Fotografia",
    imageSrc: "/images/projects/proyecto-5.svg",
  },
  {
    slug: "serie-artistica-naturaleza",
    title: "Serie Artistica Naturaleza",
    category: "Arte",
    imageSrc: "/images/projects/proyecto-6.svg",
  },
];

const categories = ["comunicacion", "fotografia", "arte"];

export default function ProyectosPage() {
  return (
    <>
      <SimpleHero
        title="Proyectos"
        subtitle="Historias visuales para marcas con proposito"
      />

      <ProjectsGrid
        projects={projects}
        categories={categories}
        showFilters={true}
      />

      <CTABlock
        headline="¿Tenes un proyecto en mente?"
        description="Nos encantaria conocer tu historia y ayudarte a comunicarla."
        primaryButton={{
          text: "Iniciar conversacion",
          href: "/contacto",
        }}
        variant="gradient"
      />
    </>
  );
}
