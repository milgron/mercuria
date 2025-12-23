import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section } from "@/components/layout";
import { CTABlock } from "@/components/blocks";
import { Heading, Text, Badge, Button } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";
import { getPostBySlug, getAllPosts } from "@/lib/content/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Articulo no encontrado | Mercuria",
    };
  }

  return {
    title: `${post.title} | Blog Mercuria`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.imageSrc],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      {/* Hero Section */}
      <Section background="warm" spacing="lg">
        <Container size="narrow">
          <ScrollReveal className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[var(--mercuria-blue)] hover:text-[var(--mercuria-burgundy)] transition-colors mb-6"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Volver al blog
            </Link>

            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>

            <Heading level={1} className="mb-4">
              {post.title}
            </Heading>

            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span>{post.author}</span>
              <span>•</span>
              <time dateTime={post.date}>{formattedDate}</time>
              {post.readingTime && (
                <>
                  <span>•</span>
                  <span>{post.readingTime} de lectura</span>
                </>
              )}
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Featured Image */}
      <Section background="white" spacing="none" className="pb-12">
        <Container>
          <ScrollReveal>
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-lg -mt-12">
              <Image
                src={post.imageSrc}
                alt={post.imageAlt || post.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Content */}
      <Section background="white" spacing="md">
        <Container size="narrow">
          <ScrollReveal>
            <article className="prose prose-lg prose-gray max-w-none prose-headings:text-[var(--mercuria-navy)] prose-a:text-[var(--mercuria-blue)] prose-a:no-underline hover:prose-a:text-[var(--mercuria-burgundy)]">
              {/* Render MDX content - for now, display raw content */}
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .split("\n")
                    .map((line) => {
                      if (line.startsWith("## ")) {
                        return `<h2>${line.slice(3)}</h2>`;
                      }
                      if (line.startsWith("### ")) {
                        return `<h3>${line.slice(4)}</h3>`;
                      }
                      if (line.trim() === "") {
                        return "";
                      }
                      return `<p>${line}</p>`;
                    })
                    .join(""),
                }}
              />
            </article>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Share & Navigation */}
      <Section background="warm" spacing="md">
        <Container size="narrow">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <Text size="sm" muted className="mb-2">
                Compartir articulo
              </Text>
              <div className="flex gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://mercuria.com.ar/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-[var(--mercuria-blue)] transition-colors"
                  aria-label="Compartir en Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://mercuria.com.ar/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-[var(--mercuria-blue)] transition-colors"
                  aria-label="Compartir en LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            <Link href="/blog">
              <Button variant="outline">Ver mas articulos</Button>
            </Link>
          </div>
        </Container>
      </Section>

      <CTABlock
        headline="¿Te gusto este articulo?"
        description="Suscribite a nuestro newsletter para recibir mas contenido como este."
        primaryButton={{
          text: "Suscribirme",
          href: "/contacto?newsletter=true",
        }}
        variant="dark"
      />
    </>
  );
}
