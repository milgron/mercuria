// Placeholder image generator using data URLs
// These provide nice gradient placeholders while real images load

type PlaceholderColor = "gold" | "cyan" | "navy" | "burgundy" | "warm";

const colorMap: Record<PlaceholderColor, { from: string; to: string }> = {
  gold: { from: "#ecab5f", to: "#d4983f" },
  cyan: { from: "#59c1da", to: "#4aa8c0" },
  navy: { from: "#172f3d", to: "#2e5980" },
  burgundy: { from: "#5e232c", to: "#7a3038" },
  warm: { from: "#f8f5f0", to: "#e8e2d8" },
};

export function getPlaceholderDataUrl(
  width: number,
  height: number,
  color: PlaceholderColor = "warm"
): string {
  const { from, to } = colorMap[color];
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${from};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${to};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
    </svg>
  `.trim();

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

// Blur placeholder for Next.js Image component
export function getBlurDataUrl(color: PlaceholderColor = "warm"): string {
  const { from } = colorMap[color];
  const svg = `
    <svg width="8" height="8" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${from}"/>
    </svg>
  `.trim();

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

// Static placeholder paths
export const placeholders = {
  services: {
    comunicacion: "/images/services/comunicacion.jpg",
    fotografia: "/images/services/fotografia.jpg",
    arte: "/images/services/arte.jpg",
  },
  projects: {
    default: "/images/projects/proyecto-1.jpg",
  },
  blog: {
    default: "/images/blog/default.jpg",
  },
  about: {
    hero: "/images/brand/mercuria-about.jpg",
  },
};
