import Link from "next/link";
import { Container, Section } from "@/components/layout";
import { Heading, Text, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <Section background="warm" spacing="lg" className="min-h-screen flex items-center">
      <Container size="narrow">
        <div className="text-center">
          <div className="text-8xl font-bold text-[var(--mercuria-gold)]/30 mb-4">
            404
          </div>
          <Heading level={2} className="mb-4">
            Pagina no encontrada
          </Heading>
          <Text size="lg" muted className="mb-8">
            La pagina que buscas no existe o fue movida. Pero no te preocupes,
            podemos ayudarte a encontrar lo que necesitas.
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button>Volver al inicio</Button>
            </Link>
            <Link href="/contacto">
              <Button variant="outline">Contactanos</Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
