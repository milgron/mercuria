import { Metadata } from "next";
import { Container, Section } from "@/components/layout";
import { SimpleHero, CTABlock } from "@/components/blocks";
import { BlogCard } from "@/components/blocks/BlogCard";
import { Heading, Text, Label } from "@/components/ui";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { getAllPosts, getAllCategories } from "@/lib/content/blog";

export const metadata: Metadata = {
  title: "Blog | Mercuria Comunicacion",
  description:
    "Articulos sobre comunicacion estrategica, fotografia de marca, creatividad y emprendimiento. Recursos para marcas con proposito.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <>
      <SimpleHero
        title="Blog"
        subtitle="Ideas, recursos y reflexiones sobre comunicacion y creatividad"
      />

      {posts.length > 0 ? (
        <Section background="white" spacing="lg">
          <Container>
            {categories.length > 0 && (
              <ScrollReveal className="mb-12">
                <div className="flex flex-wrap justify-center gap-2">
                  <button className="px-5 py-2 rounded-full text-sm font-medium bg-[var(--mercuria-navy)] text-white">
                    Todos
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="px-5 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </ScrollReveal>
            )}

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <StaggerItem key={post.slug}>
                  <BlogCard {...post} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </Section>
      ) : (
        <Section background="warm" spacing="lg">
          <Container size="narrow">
            <ScrollReveal className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--mercuria-gold)]/20 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-[var(--mercuria-gold)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <Heading level={3} className="mb-4">
                Proximamente
              </Heading>
              <Text size="lg" muted>
                Estamos preparando contenido de valor para vos. Muy pronto
                encontraras articulos sobre comunicacion, fotografia y
                creatividad.
              </Text>
            </ScrollReveal>
          </Container>
        </Section>
      )}

      <CTABlock
        headline="¿Queres recibir nuestros articulos?"
        description="Suscribite a nuestro newsletter y recibe recursos exclusivos."
        primaryButton={{
          text: "Suscribirme",
          href: "/contacto?newsletter=true",
        }}
        variant="gradient"
      />
    </>
  );
}
