"use client";

import { motion } from "framer-motion";
import { Card, Heading, Text, Badge } from "@/components/ui";
import { cn } from "@/lib/utils";

interface ServiceFeature {
  text: string;
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: ServiceFeature[];
  highlighted?: boolean;
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  features = [],
  highlighted = false,
  className,
}: ServiceCardProps) {
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
        className={cn(
          "h-full relative overflow-hidden",
          highlighted && "ring-2 ring-[var(--mercuria-gold)]",
          className
        )}
      >
        {highlighted && (
          <div className="absolute top-0 right-0">
            <Badge variant="secondary" className="rounded-none rounded-bl-lg">
              Popular
            </Badge>
          </div>
        )}

        <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-[var(--mercuria-cyan)]/20 to-[var(--mercuria-blue)]/20 flex items-center justify-center text-[var(--mercuria-blue)]">
          {icon}
        </div>

        <Heading level={4} className="mb-3">
          {title}
        </Heading>

        <Text muted className="mb-6">
          {description}
        </Text>

        {features.length > 0 && (
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
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
                <Text size="sm">{feature.text}</Text>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </motion.div>
  );
}
