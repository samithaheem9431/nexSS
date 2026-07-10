"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-violet-600/20 to-cyan-600/20" />
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-violet-500/10 bg-[length:200%_200%]"
          />

          <div className="relative px-8 py-16 text-center md:px-16 md:py-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-3xl font-bold text-white md:text-4xl"
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mx-auto mb-8 max-w-xl text-lg text-zinc-400"
            >
              Let&apos;s turn your vision into a powerful digital product.
              Get in touch today for a free consultation.
            </motion.p>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(6,182,212,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-8 py-4 text-base font-semibold text-white"
            >
              Get Free Quote
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
