"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Loader2,
  AlertCircle,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInLeft, fadeInRight } from "@/lib/animations";
import { siteConfig } from "@/lib/site";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Failed to submit form"
      );
    }
  };

  return (
    <AnimatedSection id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Contact Us"
          title="Let's Build Together"
          subtitle="Have a project in mind? Send us a message and we'll get back to you within 24 hours."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 lg:col-span-2"
          >
            {[
              {
                icon: Mail,
                title: "Email Us",
                value: siteConfig.email,
                isEmail: true,
              },
              {
                icon: Phone,
                title: "Call Us",
                value: siteConfig.phone,
                isEmail: false,
              },
              {
                icon: MapPin,
                title: "Visit Us",
                value: siteConfig.location,
                isEmail: false,
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20">
                  <item.icon size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  {item.isEmail ? (
                    <a
                      href={`mailto:${item.value}`}
                      className="text-sm text-zinc-400 transition-colors hover:text-cyan-400"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-zinc-400">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:col-span-3"
          >
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-cyan-500/50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-cyan-500/50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Phone Number{" "}
                <span className="text-zinc-500">(Optional)</span>
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+92 300 1234567"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-cyan-500/50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your project or inquiry..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-cyan-500/50"
              />
            </div>

            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400"
                >
                  <CheckCircle size={16} />
                  Message sent! We&apos;ll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                >
                  <AlertCircle size={16} />
                  {errorMsg}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px rgba(6,182,212,0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-4 text-base font-semibold text-white disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </AnimatedSection>
  );
}
