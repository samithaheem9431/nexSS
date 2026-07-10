"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket, HeadphonesIcon } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

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

export default function Process() {
  return (
    <AnimatedSection className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Our Process"
          title="How We Work"
          subtitle="A proven 5-step process that ensures quality delivery, transparent communication, and exceptional results."
        />

        <div className="relative">
          {/* Connection line */}
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
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 shadow-lg shadow-cyan-500/20"
                >
                  <step.icon size={28} className="text-white" />
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
                    className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#0a0a0f] text-xs font-bold text-cyan-400 ring-2 ring-cyan-500/50"
                  >
                    {step.step}
                  </motion.span>
                </motion.div>
                <h3 className="mb-2 font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
