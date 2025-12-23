import type { Metadata } from "next";
import { Lato, Quicksand } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://mercuria.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Mercuria Comunicacion | Comunicacion con Proposito",
    template: "%s | Mercuria Comunicacion",
  },
  description:
    "Mercuria es un espacio de comunicacion visual, fotografia y creatividad estrategica. Acompañamos a organizaciones sociales y emprendedores a comunicar desde la autenticidad, con metodologia y alma.",
  keywords: [
    "comunicacion estrategica",
    "fotografia de marca",
    "branding",
    "redes sociales",
    "emprendedores",
    "organizaciones sociales",
    "Buenos Aires",
    "Argentina",
    "creatividad",
    "marketing digital",
  ],
  authors: [{ name: "Clara Liparoti", url: baseUrl }],
  creator: "Mercuria Comunicacion",
  publisher: "Mercuria Comunicacion",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Mercuria Comunicacion",
    description: "Comunicacion con Proposito, Creatividad que Conecta",
    url: baseUrl,
    siteName: "Mercuria Comunicacion",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mercuria Comunicacion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mercuria Comunicacion",
    description: "Comunicacion con Proposito, Creatividad que Conecta",
    images: ["/images/brand/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${lato.variable} ${quicksand.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
