"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated logo or spinner */}
        <motion.div
          className="w-12 h-12 rounded-full border-4 border-[var(--mercuria-gold)]/20 border-t-[var(--mercuria-gold)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <p className="text-sm text-gray-500">Cargando...</p>
      </motion.div>
    </div>
  );
}
