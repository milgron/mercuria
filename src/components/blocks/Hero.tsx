"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout";
import { Button, GradientButton, Heading, Lead, Label } from "@/components/ui";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations/config";

interface HeroProps {
  label?: string;
  headline: string;
  highlightedText?: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  showLogo?: boolean;
}

export function Hero({
  label,
  headline,
  highlightedText,
  description,
  primaryCTA,
  secondaryCTA,
  showLogo = true,
}: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden">
      {/* Background gradient subtle */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--background-warm)] via-white to-white -z-10" />

      <Container>
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Logo */}
          {showLogo && (
            <motion.div className="mb-8" variants={scaleIn}>
              <Image
                src="/images/brand/isotipo.png"
                alt="Mercuria"
                width={80}
                height={80}
                className="mx-auto w-20 h-20"
                priority
              />
            </motion.div>
          )}

          {/* Label */}
          {label && (
            <motion.div variants={fadeInUp}>
              <Label variant="accent" className="mb-6 inline-block">
                {label}
              </Label>
            </motion.div>
          )}

          {/* Headline */}
          <motion.div variants={fadeInUp}>
            <Heading level={1} className="mb-6">
              {headline}
              {highlightedText && (
                <>
                  <br />
                  <span className="gradient-text">{highlightedText}</span>
                </>
              )}
            </Heading>
          </motion.div>

          {/* Description */}
          <motion.div variants={fadeInUp}>
            <Lead className="mb-10 max-w-2xl mx-auto">{description}</Lead>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={fadeInUp}
          >
            <Link href={primaryCTA.href}>
              <GradientButton>{primaryCTA.text}</GradientButton>
            </Link>
            {secondaryCTA && (
              <Link href={secondaryCTA.href}>
                <Button variant="outline">{secondaryCTA.text}</Button>
              </Link>
            )}
          </motion.div>
        </motion.div>
      </Container>

      {/* Decorative elements */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[var(--mercuria-cyan)]/10 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[var(--mercuria-gold)]/10 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      />
    </section>
  );
}

// Simple Hero variant for internal pages
interface SimpleHeroProps {
  title: string;
  subtitle?: string;
}

export function SimpleHero({ title, subtitle }: SimpleHeroProps) {
  return (
    <section className="py-16 md:py-24 bg-[var(--background-warm)]">
      <Container>
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heading level={1} className="mb-4">
            {title}
          </Heading>
          {subtitle && <Lead>{subtitle}</Lead>}
        </motion.div>
      </Container>
    </section>
  );
}
