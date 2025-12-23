import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

const navigation = {
  servicios: [
    { name: "Gestion de Redes", href: "/servicios#gestion-redes" },
    { name: "Consultoria", href: "/servicios#consultoria" },
    { name: "Fotografia", href: "/servicios#fotografia" },
    { name: "Identidad Verbal", href: "/servicios#identidad-verbal" },
  ],
  recursos: [
    { name: "Blog", href: "/blog" },
    { name: "Clases Virtuales", href: "/clases-virtuales" },
    { name: "Kit Mercuria", href: "/servicios#kit-mercuria" },
  ],
  contacto: [
    { name: "Contacto", href: "/contacto" },
    { name: "Sobre Mercuria", href: "/sobre-mercuria" },
  ],
};

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/mercuriacomunicacion",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:mercuriacomunicacion@gmail.com",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "Linktree",
    href: "https://linktr.ee/mercuriacomunicacion",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.953 15.066l-.038.019a1.048 1.048 0 00-.466.602c-.113.351-.065.72.136 1.027a1.075 1.075 0 001.449.373l.036-.019 3.93-2.274 3.93 2.274.036.019a1.075 1.075 0 001.449-.373c.201-.307.249-.676.136-1.027a1.048 1.048 0 00-.466-.602l-.038-.019-3.932-2.275 3.932-2.275.038-.019c.199-.099.357-.261.466-.602.113-.351.065-.72-.136-1.027a1.075 1.075 0 00-1.449-.373l-.036.019-3.93 2.274L9.07 8.519l-.036-.019a1.075 1.075 0 00-1.449.373c-.201.307-.249.676-.136 1.027.109.341.267.503.466.602l.038.019L11.885 12.8l-3.932 2.266z" />
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-[var(--background-warm)] border-t border-gray-200">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/images/brand/isotipo.png"
                  alt="Mercuria"
                  width={60}
                  height={60}
                  className="w-14 h-14"
                />
              </Link>
              <p className="text-[var(--mercuria-navy)] text-sm leading-relaxed mb-6">
                Comunicacion con Proposito,
                <br />
                Creatividad que Conecta.
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--mercuria-blue)] hover:text-[var(--mercuria-burgundy)] transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="font-semibold text-[var(--mercuria-navy)] mb-4">Servicios</h4>
              <ul className="space-y-3">
                {navigation.servicios.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[var(--foreground-muted)] hover:text-[var(--mercuria-burgundy)] text-sm transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recursos */}
            <div>
              <h4 className="font-semibold text-[var(--mercuria-navy)] mb-4">Recursos</h4>
              <ul className="space-y-3">
                {navigation.recursos.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[var(--foreground-muted)] hover:text-[var(--mercuria-burgundy)] text-sm transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="font-semibold text-[var(--mercuria-navy)] mb-4">Contacto</h4>
              <ul className="space-y-3">
                {navigation.contacto.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[var(--foreground-muted)] hover:text-[var(--mercuria-burgundy)] text-sm transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="mailto:mercuriacomunicacion@gmail.com"
                    className="text-[var(--mercuria-blue)] hover:text-[var(--mercuria-burgundy)] text-sm transition-colors"
                  >
                    mercuriacomunicacion@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[var(--foreground-muted)] text-sm">
              © {new Date().getFullYear()} Mercuria Comunicacion®. Todos los
              derechos reservados.
            </p>
            <p className="text-[var(--foreground-muted)] text-sm">Buenos Aires, Argentina</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
