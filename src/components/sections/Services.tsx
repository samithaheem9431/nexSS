"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/data/services";
import { staggerContainer, fadeInUp } from "@/lib/animations";

interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: string;
}

function ServiceCard({
  service,
  compact = false,
}: {
  service: Service;
  compact?: boolean;
}) {
  return (
    <motion.div
      whileHover={compact ? undefined : { y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm ${
        compact ? "p-4" : "p-8"
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
      />

      <div
        className={`mb-3 inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${service.color} ${
          compact ? "h-10 w-10" : "mb-6 h-14 w-14"
        }`}
      >
        <service.icon
          size={compact ? 20 : 28}
          className="text-white"
        />
      </div>

      <h3
        className={`font-bold text-white ${
          compact ? "mb-2 text-sm leading-snug" : "mb-3 text-xl"
        }`}
      >
        {service.title}
      </h3>

      <p
        className={`leading-relaxed text-zinc-400 ${
          compact
            ? "mb-3 line-clamp-3 text-xs"
            : "mb-6 text-sm"
        }`}
      >
        {service.description}
      </p>

      {!compact && (
        <ul className="mb-6 space-y-2">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-zinc-300"
            >
              <span className="h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {compact && (
        <ul className="space-y-1">
          {service.features.slice(0, 2).map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-1.5 text-[11px] text-zinc-400"
            >
              <span className="h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {!compact && (
        <a
          href="#contact"
          className="inline-flex items-center gap-1 text-sm font-medium text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100"
        >
          Learn More <ArrowUpRight size={14} />
        </a>
      )}
    </motion.div>
  );
}

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);
  const totalPages = Math.ceil(services.length / 2);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / services.length;
    const page = Math.round(el.scrollLeft / (cardWidth * 2));
    setActivePage(Math.min(page, totalPages - 1));
  }, [totalPages]);

  const scrollToPage = (page: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / services.length;
    el.scrollTo({ left: page * cardWidth * 2, behavior: "smooth" });
    setActivePage(page);
  };

  return (
    <AnimatedSection id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Our Services"
          title="What We Do Best"
          subtitle="From e-commerce stores to enterprise software, we deliver end-to-end digital solutions tailored to your business needs."
        />

        {/* Mobile: 2 cards visible, horizontal swipe */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="scrollbar-hide -mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-4"
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="w-[calc(50%-6px)] shrink-0 snap-start"
              >
                <ServiceCard service={service} compact />
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToPage(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activePage === i
                    ? "w-6 bg-cyan-400"
                    : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>

          <p className="mt-3 text-center text-xs text-zinc-500">
            Swipe to see more services →
          </p>
        </div>

        {/* Tablet & Desktop: grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={fadeInUp}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
