"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data/projects";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const categories = ["All", "E-Commerce", "Mobile App", "Business Service"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <AnimatedSection id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Portfolio"
          title="Our Recent Work"
          subtitle="Explore some of our latest projects that showcase our expertise across different industries and technologies."
        />

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/25"
                  : "border border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                {/* Project image placeholder with gradient */}
                <div
                  className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${project.color}`}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-30"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent, rgba(6,182,212,0.3), transparent)",
                    }}
                  />
                  <Layers size={48} className="relative text-white/40" />

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </motion.a>
                  </motion.div>
                </div>

                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
