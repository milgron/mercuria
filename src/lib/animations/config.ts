/**
 * Animation configuration for Mercuria website
 * Using Framer Motion (motion library)
 */

// Easing functions
export const easings = {
  // Primary easing - smooth and professional
  mercuria: [0.4, 0, 0.2, 1] as const,
  // Entry animations
  easeOut: [0, 0, 0.2, 1] as const,
  // Exit animations
  easeIn: [0.4, 0, 1, 1] as const,
  // Playful bounce for special elements
  bounce: [0.34, 1.56, 0.64, 1] as const,
  // Smooth natural movement
  smooth: [0.25, 0.1, 0.25, 1] as const,
};

// Duration presets (in seconds)
export const durations = {
  fast: 0.2,
  normal: 0.35,
  slow: 0.5,
  slower: 0.7,
  page: 0.6,
};

// Stagger configuration for lists
export const staggerConfig = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
};

// Common animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.mercuria,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: durations.normal,
      ease: easings.mercuria,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.slow,
      ease: easings.bounce,
    },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.slow,
      ease: easings.mercuria,
    },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.slow,
      ease: easings.mercuria,
    },
  },
};

// Stagger container for children animations
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerConfig.normal,
      delayChildren: 0.1,
    },
  },
};

// Card hover animation
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0 4px 20px rgba(23, 47, 61, 0.07)",
  },
  hover: {
    scale: 1.02,
    y: -4,
    boxShadow: "0 8px 30px rgba(23, 47, 61, 0.12)",
    transition: {
      duration: durations.fast,
      ease: easings.mercuria,
    },
  },
};

// Button press animation
export const buttonPress = {
  rest: { scale: 1 },
  pressed: { scale: 0.97 },
  hover: {
    scale: 1.03,
    transition: {
      duration: durations.fast,
      ease: easings.mercuria,
    },
  },
};

// Page transition variants
export const pageTransition = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.page,
      ease: easings.mercuria,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: durations.normal,
      ease: easings.easeIn,
    },
  },
};
