"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data/testimonials";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Testimonials() {
  return (
    <AnimatedSection id="testimonials" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="What Clients Say"
          subtitle="Don't just take our word for it — hear from the businesses we've helped transform."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              whileHover={{
                y: -5,
                borderColor: "rgba(6,182,212,0.2)",
              }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <motion.div
                initial={{ opacity: 0.1 }}
                whileHover={{ opacity: 0.2, scale: 1.1 }}
                className="absolute top-4 right-4"
              >
                <Quote size={48} className="text-cyan-500" />
              </motion.div>

              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  </motion.div>
                ))}
              </div>

              <p className="relative mb-6 text-base leading-relaxed text-zinc-300">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 text-sm font-bold text-white"
                >
                  {testimonial.avatar}
                </motion.div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-zinc-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
