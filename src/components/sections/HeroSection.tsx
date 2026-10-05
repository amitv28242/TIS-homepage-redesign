"use client";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-slate-900">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1920&q=80')",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-slate-900/85 to-sky-950/80"
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs md:text-sm backdrop-blur-md border border-white/20"
        >
          ✦ Admissions Open 2026–27
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="mt-6 text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight max-w-4xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Nurturing Global Citizens,{" "}
          <span className="text-emerald-400">One Student at a Time</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-6 max-w-xl text-base md:text-lg text-white/75"
        >
          A world-class international curriculum, expert faculty and a vibrant
          campus — empowering every child to excel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <Button variant="primary" asLink href="/apply">
            Apply Now <ArrowRight size={18} aria-hidden />
          </Button>
          <Button variant="ghost" asLink href="#about">
            <PlayCircle size={18} aria-hidden /> Book a Campus Tour
          </Button>
        </motion.div>
      </div>

      {/* Scroll hint — chevron + label, no false pointer affordance */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 text-[10px] tracking-[0.25em] uppercase"
      >
        <ChevronDown size={16} strokeWidth={2} />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}