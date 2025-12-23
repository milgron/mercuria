"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Section } from "@/components/layout";
import { Heading, Label } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";
import { ProjectCard } from "./ProjectCard";

interface Project {
  slug: string;
  title: string;
  category: string;
  imageSrc: string;
  imageAlt?: string;
}

interface ProjectsGridProps {
  label?: string;
  title?: string;
  projects: Project[];
  categories?: string[];
  showFilters?: boolean;
}

export function ProjectsGrid({
  label,
  title = "Proyectos",
  projects,
  categories = [],
  showFilters = true,
}: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>("todos");

  const filteredProjects =
    activeFilter === "todos"
      ? projects
      : projects.filter(
          (p) => p.category.toLowerCase() === activeFilter.toLowerCase()
        );

  const allCategories = ["todos", ...categories];

  return (
    <Section background="white" spacing="lg">
      <Container>
        {(label || title) && (
          <ScrollReveal className="text-center mb-12">
            {label && (
              <Label variant="accent" className="mb-4 inline-block">
                {label}
              </Label>
            )}
            {title && <Heading level={2}>{title}</Heading>}
          </ScrollReveal>
        )}

        {showFilters && categories.length > 0 && (
          <ScrollReveal delay={0.1} className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === category
                      ? "bg-[var(--mercuria-navy)] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </ScrollReveal>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">
              No hay proyectos en esta categoria todavia.
            </p>
          </div>
        )}
      </Container>
    </Section>
  );
}
