"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import MobileCardSlider from "@/components/ui/MobileCardSlider";
import { projects } from "@/lib/data/projects";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const categories = ["All", "E-Commerce", "Mobile App", "Business Service"];

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  color: string;
  tech: string[];
  link: string;
}

function ProjectCard({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div
        className={`relative flex items-center justify-center bg-gradient-to-br ${project.color} ${
          compact ? "h-24" : "h-48"
        }`}
      >
        <Layers
          size={compact ? 28 : 48}
          className="relative text-white/40"
        />
        {!compact && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
            <a
              href={project.link}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
            >
              <ExternalLink size={20} className="text-white" />
            </a>
          </div>
        )}
      </div>

      <div className={compact ? "p-3" : "p-6"}>
        <span
          className={`mb-2 inline-block rounded-full bg-cyan-500/10 font-medium text-cyan-400 ${
            compact ? "px-2 py-0.5 text-[10px]" : "px-3 py-1 text-xs"
          }`}
        >
          {project.category}
        </span>
        <h3
          className={`font-bold text-white ${
            compact ? "mb-1 text-sm leading-snug" : "mb-2 text-lg"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`leading-relaxed text-zinc-400 ${
            compact
              ? "mb-2 line-clamp-2 text-[11px]"
              : "mb-4 text-sm"
          }`}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {(compact ? project.tech.slice(0, 2) : project.tech).map(
            (tech) => (
              <span
                key={tech}
                className={`rounded-md border border-white/10 bg-white/5 text-zinc-400 ${
                  compact ? "px-1.5 py-0.5 text-[10px]" : "px-2 py-1 text-xs"
                }`}
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <AnimatedSection id="projects" className="relative py-10 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Portfolio"
          title="Our Recent Work"
          subtitle="Explore some of our latest projects that showcase our expertise across different industries and technologies."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 flex flex-wrap justify-center gap-2 md:mb-12 md:gap-3"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all md:px-5 md:py-2 md:text-sm ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/25"
                  : "border border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <MobileCardSlider
          key={activeCategory}
          itemCount={filtered.length}
          hint="Swipe to see more projects →"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} compact />
          ))}
        </MobileCardSlider>

        <motion.div
          layout
          className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3"
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
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
