"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target, Users, Lightbulb } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

const values = [
  {
    icon: Target,
    title: "Mission Driven",
    desc: "Delivering solutions that solve real business problems",
  },
  {
    icon: Users,
    title: "Client Focused",
    desc: "Your success is our priority in every project we undertake",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    desc: "Leveraging latest tech to build future-ready products",
  },
];

const highlights = [
  "Expert team of developers & designers",
  "Agile development methodology",
  "Transparent communication & reporting",
  "Post-launch support & maintenance",
  "Competitive pricing with no hidden costs",
  "On-time delivery guarantee",
];

export default function About() {
  return (
    <AnimatedSection id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="About Us"
          title="Who We Are"
          subtitle="Nexasoft Studio is a passionate team of developers, designers, and strategists dedicated to building world-class digital products."
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={fadeInUp} className="mb-6 text-lg leading-relaxed text-zinc-400">
              Founded with a vision to empower businesses through technology,
              Nexasoft Studio has grown into a trusted partner for companies
              seeking digital transformation. From startups to enterprises, we
              deliver tailored solutions that drive growth.
            </motion.p>
            <motion.p variants={fadeInUp} className="mb-8 text-lg leading-relaxed text-zinc-400">
              Specializing in e-commerce development, mobile applications, and
              custom business software, we combine technical excellence with
              creative design to build products users love.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-sm text-zinc-300"
                >
                  <CheckCircle2 size={16} className="shrink-0 text-cyan-400" />
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(6,182,212,0.3)",
                }}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/[0.07]"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20"
                >
                  <value.icon size={24} className="text-cyan-400" />
                </motion.div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="text-sm text-zinc-400">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
