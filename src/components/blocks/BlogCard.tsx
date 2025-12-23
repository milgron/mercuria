"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge, Text } from "@/components/ui";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageSrc: string;
  imageAlt?: string;
  readingTime?: string;
}

export function BlogCard({
  slug,
  title,
  excerpt,
  date,
  category,
  imageSrc,
  imageAlt,
  readingTime,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link href={`/blog/${slug}`}>
      <motion.article
        className="group h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
              {category}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <time dateTime={date}>{formattedDate}</time>
            {readingTime && (
              <>
                <span>•</span>
                <span>{readingTime} de lectura</span>
              </>
            )}
          </div>

          <h3 className="text-lg font-semibold text-[var(--mercuria-navy)] mb-2 group-hover:text-[var(--mercuria-blue)] transition-colors line-clamp-2">
            {title}
          </h3>

          <Text size="sm" muted className="line-clamp-2">
            {excerpt}
          </Text>

          <div className="mt-4 flex items-center text-sm font-medium text-[var(--mercuria-blue)] group-hover:text-[var(--mercuria-burgundy)] transition-colors">
            Leer mas
            <svg
              className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
