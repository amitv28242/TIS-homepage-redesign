"use client";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/data/navigation";
import ThemeToggle from "@/components/animation/ThemeToggle";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg)]/80 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2" aria-label="TIS home">
          <div className="w-9 h-9 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center text-white font-bold">
            T
          </div>
          <span className="font-semibold tracking-tight hidden sm:block">
            Tulas International
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium hover:text-emerald-600 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#talk"
            aria-label="Talk to Admissions"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--border)] hover:border-emerald-500 hover:text-emerald-600 transition-colors"
          >
            <Phone size={16} aria-hidden />
          </a>
          <Button variant="primary" asLink href="/apply">
            Apply Now <ArrowRight size={18} aria-hidden />
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[var(--bg)] border-t border-[var(--border)] overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#talk"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 py-2 font-medium hover:text-emerald-600 transition-colors"
                >
                  <Phone size={16} aria-hidden /> Talk to Admissions
                </a>
              </li>
              <li className="pt-2">
                <Button
                  variant="primary"
                  asLink
                  href="/apply"
                  className="w-full"
                >
                  Apply Now <ArrowRight size={18} aria-hidden />
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}