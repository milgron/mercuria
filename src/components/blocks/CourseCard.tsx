"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, Heading, Text, Badge, Button } from "@/components/ui";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  format: string;
  level: string;
  price?: string;
  features: string[];
  href: string;
  highlighted?: boolean;
}

export function CourseCard({
  title,
  description,
  duration,
  format,
  level,
  price,
  features,
  href,
  highlighted = false,
}: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card
        variant={highlighted ? "elevated" : "bordered"}
        padding="lg"
        className={`h-full flex flex-col ${
          highlighted ? "ring-2 ring-[var(--mercuria-gold)]" : ""
        }`}
      >
        {highlighted && (
          <Badge variant="secondary" className="w-fit mb-4">
            Destacado
          </Badge>
        )}

        <Heading level={4} className="mb-3">
          {title}
        </Heading>

        <Text muted className="mb-6">
          {description}
        </Text>

        {/* Course details */}
        <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-gray-100">
          <div className="text-center">
            <Text size="xs" muted className="mb-1">
              Duracion
            </Text>
            <Text size="sm" weight="medium">
              {duration}
            </Text>
          </div>
          <div className="text-center">
            <Text size="xs" muted className="mb-1">
              Formato
            </Text>
            <Text size="sm" weight="medium">
              {format}
            </Text>
          </div>
          <div className="text-center">
            <Text size="xs" muted className="mb-1">
              Nivel
            </Text>
            <Text size="sm" weight="medium">
              {level}
            </Text>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg
                className="w-5 h-5 text-[var(--mercuria-gold)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <Text size="sm">{feature}</Text>
            </li>
          ))}
        </ul>

        {/* Price and CTA */}
        <div className="mt-auto">
          {price && (
            <div className="mb-4 text-center">
              <Text size="sm" muted>
                Inversion
              </Text>
              <Text size="xl" weight="bold" className="text-[var(--mercuria-navy)]">
                {price}
              </Text>
            </div>
          )}
          <Link href={href} className="block">
            <Button
              variant={highlighted ? "primary" : "outline"}
              className="w-full"
            >
              Inscribirme
            </Button>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}
