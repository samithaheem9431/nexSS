"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code, Rocket } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const floatingIcons = [
  { Icon: Code, x: "10%", y: "20%", delay: 0 },
  { Icon: Rocket, x: "80%", y: "15%", delay: 1 },
  { Icon: Sparkles, x: "70%", y: "70%", delay: 2 },
  { Icon: Code, x: "15%", y: "75%", delay: 1.5 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]"
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute hidden text-cyan-500/20 lg:block"
          style={{ left: x, top: y }}
          animate={{ y: [-15, 15, -15], rotate: [0, 10, -10, 0] }}
          transition={{
            duration: 5 + delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        >
          <Icon size={32} />
        </motion.div>
      ))}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={14} />
            </motion.span>
            Software Development Company
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="mb-6 text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          We Build Digital
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent">
            <motion.span
              animate={{ backgroundPosition: ["0% center", "200% center"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="inline-block bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              Experiences
            </motion.span>
          </span>
          <br />
          That Matter
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl"
        >
          Nexasoft Studio crafts powerful e-commerce platforms, mobile
          applications, and business solutions that transform ideas into
          reality.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(6,182,212,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-8 py-4 text-base font-semibold text-white"
          >
            Start Your Project
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, borderColor: "rgba(6,182,212,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/5"
          >
            View Our Work
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={fadeInUp}
          className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {[
            { value: "150+", label: "Projects Delivered" },
            { value: "80+", label: "Happy Clients" },
            { value: "5+", label: "Years Experience" },
            { value: "24/7", label: "Support" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-white md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-zinc-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-cyan-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
