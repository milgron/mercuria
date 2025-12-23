"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui";

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  imageSrc: string;
  imageAlt?: string;
}

export function ProjectCard({
  slug,
  title,
  category,
  imageSrc,
  imageAlt = "",
}: ProjectCardProps) {
  return (
    <Link href={`/proyectos/${slug}`}>
      <motion.article
        className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -4 }}
      >
        {/* Image */}
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <Badge
            variant="secondary"
            className="w-fit mb-3 bg-white/20 backdrop-blur-sm text-white border-0"
          >
            {category}
          </Badge>
          <h3 className="text-xl font-semibold text-white group-hover:text-[var(--mercuria-gold)] transition-colors">
            {title}
          </h3>
        </div>

        {/* Hover indicator */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </motion.article>
    </Link>
  );
}
