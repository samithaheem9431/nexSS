"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/data/services";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Services() {
  return (
    <AnimatedSection id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Our Services"
          title="What We Do Best"
          subtitle="From e-commerce stores to enterprise software, we deliver end-to-end digital solutions tailored to your business needs."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
              />

              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.color}`}
              >
                <service.icon size={28} className="text-white" />
              </motion.div>

              <h3 className="mb-3 text-xl font-bold text-white">
                {service.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                {service.description}
              </p>

              <ul className="mb-6 space-y-2">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                    className="flex items-center gap-2 text-sm text-zinc-300"
                  >
                    <span className="h-1 w-1 rounded-full bg-cyan-400" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-1 text-sm font-medium text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100"
              >
                Learn More <ArrowUpRight size={14} />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
