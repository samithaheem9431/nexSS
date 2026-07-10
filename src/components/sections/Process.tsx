"use client";

import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  HeadphonesIcon,
  type LucideIcon,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import MobileCardSlider from "@/components/ui/MobileCardSlider";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    desc: "We understand your goals, audience, and requirements through detailed consultation.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design",
    desc: "Our designers create intuitive UI/UX mockups and prototypes for your approval.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Development",
    desc: "Our developers build your solution using agile methodology with regular updates.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    desc: "Thorough testing, deployment, and a smooth launch with performance optimization.",
  },
  {
    icon: HeadphonesIcon,
    step: "05",
    title: "Support",
    desc: "Ongoing maintenance, updates, and 24/7 support to keep your product running smoothly.",
  },
];

function StepCard({
  step,
  compact = false,
}: {
  step: {
    icon: LucideIcon;
    step: string;
    title: string;
    desc: string;
  };
  compact?: boolean;
}) {
  return (
    <div
      className={`relative h-full rounded-2xl border border-white/10 bg-white/5 text-center ${
        compact ? "p-3" : ""
      }`}
    >
      <div
        className={`relative z-10 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 shadow-lg shadow-cyan-500/20 ${
          compact ? "mb-2 h-12 w-12" : "mb-4 h-16 w-16"
        }`}
      >
        <step.icon
          size={compact ? 20 : 28}
          className="text-white"
        />
        <span
          className={`absolute flex items-center justify-center rounded-full bg-[#0a0a0f] font-bold text-cyan-400 ring-2 ring-cyan-500/50 ${
            compact
              ? "-top-1 -right-1 h-5 w-5 text-[10px]"
              : "-top-2 -right-2 h-6 w-6 text-xs"
          }`}
        >
          {step.step}
        </span>
      </div>
      <h3
        className={`font-bold text-white ${
          compact ? "mb-1 text-xs" : "mb-2"
        }`}
      >
        {step.title}
      </h3>
      <p
        className={`leading-relaxed text-zinc-400 ${
          compact ? "line-clamp-3 text-[10px]" : "text-sm"
        }`}
      >
        {step.desc}
      </p>
    </div>
  );
}

export default function Process() {
  return (
    <AnimatedSection className="relative py-10 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Our Process"
          title="How We Work"
          subtitle="A proven 5-step process that ensures quality delivery, transparent communication, and exceptional results."
        />

        <MobileCardSlider
          itemCount={steps.length}
          hint="Swipe to see more steps →"
        >
          {steps.map((step) => (
            <StepCard key={step.step} step={step} compact />
          ))}
        </MobileCardSlider>

        <div className="relative hidden md:block">
          <div className="absolute top-1/2 right-0 left-0 hidden h-0.5 -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent lg:block" />

          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="relative text-center"
              >
                <StepCard step={step} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
