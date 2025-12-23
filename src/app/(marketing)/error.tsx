"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Container, Section } from "@/components/layout";
import { Heading, Text, Button } from "@/components/ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Section background="warm" spacing="lg" className="min-h-screen flex items-center">
      <Container size="narrow">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--mercuria-burgundy)]/10 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-[var(--mercuria-burgundy)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <Heading level={2} className="mb-4">
            Algo salio mal
          </Heading>
          <Text size="lg" muted className="mb-8">
            Lo sentimos, ocurrio un error inesperado. Por favor, intenta de nuevo.
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={reset}>Intentar de nuevo</Button>
            <Link href="/">
              <Button variant="outline">Volver al inicio</Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
