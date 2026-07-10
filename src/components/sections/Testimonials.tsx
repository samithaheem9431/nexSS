"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import MobileCardSlider from "@/components/ui/MobileCardSlider";
import { testimonials } from "@/lib/data/testimonials";
import { staggerContainer, fadeInUp } from "@/lib/animations";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

function TestimonialCard({
  testimonial,
  compact = false,
}: {
  testimonial: Testimonial;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm ${
        compact ? "p-3" : "p-8"
      }`}
    >
      <Quote
        size={compact ? 24 : 48}
        className={`absolute text-cyan-500/20 ${
          compact ? "top-2 right-2" : "top-4 right-4"
        }`}
      />

      <div className={`flex gap-0.5 ${compact ? "mb-2" : "mb-4"}`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            size={compact ? 12 : 16}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p
        className={`relative leading-relaxed text-zinc-300 ${
          compact
            ? "mb-3 line-clamp-4 text-[11px]"
            : "mb-6 text-base"
        }`}
      >
        &ldquo;{testimonial.content}&rdquo;
      </p>

      <div className="flex items-center gap-2">
        <div
          className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 font-bold text-white ${
            compact ? "h-7 w-7 text-[10px]" : "h-10 w-10 text-sm"
          }`}
        >
          {testimonial.avatar}
        </div>
        <div className="min-w-0">
          <div
            className={`truncate font-semibold text-white ${
              compact ? "text-xs" : ""
            }`}
          >
            {testimonial.name}
          </div>
          <div
            className={`truncate text-zinc-500 ${
              compact ? "text-[10px]" : "text-sm"
            }`}
          >
            {testimonial.role}
          </div>
        </div>
      </div>
    </div>
  );
}

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

        <MobileCardSlider
          itemCount={testimonials.length}
          hint="Swipe to see more reviews →"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              compact
            />
          ))}
        </MobileCardSlider>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="hidden gap-6 md:grid md:grid-cols-2"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              whileHover={{
                y: -5,
                borderColor: "rgba(6,182,212,0.2)",
              }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
