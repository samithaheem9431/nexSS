"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-400"
      >
        {badge}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-zinc-400"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
