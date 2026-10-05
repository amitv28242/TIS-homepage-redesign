"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, MessageCircle } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const options = [
  {
    icon: Phone,
    label: "Call Admissions",
    sub: "+91 12345 67890",
    href: "tel:+911234567890",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Us",
    sub: "Replies within 1 hour",
    href: "https://wa.me/911234567890?text=Hi%20TIS%2C%20I%27d%20like%20to%20know%20about%20admissions.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Mail,
    label: "Email Admissions",
    sub: "admissions@tis.edu.in",
    href: "mailto:admissions@tis.edu.in?subject=Admission%20Enquiry",
    color: "bg-sky-500/10 text-sky-600",
  },
];

export default function ContactModal({ open, onClose }: Props) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed z-[201] inset-x-4 bottom-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[420px] rounded-2xl bg-[var(--bg)] border border-[var(--border)] shadow-2xl p-6"
          >
            <div className="flex items-start justify-between mb-1">
              <h3
                id="contact-modal-title"
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Talk to Admissions
              </h3>
              <button
                onClick={onClose}
                aria-label="Close"
                className="p-1.5 rounded-lg hover:bg-[var(--bg-soft)] transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <p className="text-sm text-[var(--text-muted)] mb-6">
              Our team is available Mon–Sat, 9 AM – 6 PM IST.
            </p>

            <div className="flex flex-col gap-3">
              {options.map((o) => {
                const Icon = o.icon;
                return (
                  <a
                    key={o.label}
                    href={o.href}
                    target={o.href.startsWith("http") ? "_blank" : undefined}
                    rel={o.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-3 rounded-xl border border-[var(--border)] hover:border-emerald-500/40 hover:bg-[var(--bg-soft)] transition-all group"
                  >
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center ${o.color}`}
                    >
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{o.label}</div>
                      <div className="text-xs text-[var(--text-muted)] truncate">
                        {o.sub}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}