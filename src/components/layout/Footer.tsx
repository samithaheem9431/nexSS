"use client";

import { motion } from "framer-motion";
import { Share2, Globe, MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

const footerLinks = {
  Services: ["E-Commerce", "Mobile Apps", "Business Services", "Web Development"],
  Company: ["About Us", "Our Work", "Careers", "Blog"],
  Support: ["Contact", "FAQ", "Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#06060a]">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600">
                <span className="text-sm font-bold text-white">N</span>
              </div>
              <span className="text-xl font-bold text-white">
                Nexa<span className="text-cyan-400">soft</span> Studio
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-zinc-400">
              We build innovative digital solutions — e-commerce platforms,
              mobile apps, and business software that help companies grow.
            </p>
            <div className="flex gap-3">
              {[Share2, Globe, MessageCircle, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([title, links], colIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (colIndex + 1) }}
            >
              <h4 className="mb-4 font-semibold text-white">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-400 transition-colors hover:text-cyan-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="mb-4 font-semibold text-white">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-zinc-400">
                <Mail size={14} className="text-cyan-400" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-cyan-400"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-zinc-400">
                <Phone size={14} className="text-cyan-400" />
                +92 300 1234567
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <MapPin size={14} className="mt-0.5 shrink-0 text-cyan-400" />
                Karachi, Pakistan
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row"
        >
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Nexasoft Studio. All rights
            reserved.
          </p>
          <p className="text-sm text-zinc-500">
            Crafted with passion in Pakistan
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
