import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--mercuria-navy)] mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-semibold text-[var(--mercuria-navy)] mt-8 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold text-[var(--mercuria-navy)] mt-6 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
    a: ({ href, children }) => (
      <Link
        href={href || "#"}
        className="text-[var(--mercuria-blue)] hover:text-[var(--mercuria-burgundy)] underline transition-colors"
      >
        {children}
      </Link>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[var(--mercuria-gold)] pl-4 py-2 my-6 italic text-gray-600 bg-[var(--background-warm)] rounded-r-lg">
        {children}
      </blockquote>
    ),
    img: ({ src, alt }) => (
      <div className="relative my-8 rounded-lg overflow-hidden">
        <Image
          src={src || ""}
          alt={alt || ""}
          width={800}
          height={450}
          className="w-full h-auto"
        />
      </div>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-[var(--mercuria-burgundy)]">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6 text-sm">
        {children}
      </pre>
    ),
    hr: () => <hr className="my-8 border-gray-200" />,
    ...components,
  };
}
