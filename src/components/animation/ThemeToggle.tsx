"use client";
import { useCallback, useEffect, useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

/**
 * Subscribe to the `dark` class on <html>.
 * This is the canonical way to read external (DOM) state in React 19 —
 * no setState inside an effect, no hydration mismatch.
 */
function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  // Server / initial client render: assume light. The inline script in
  // layout.tsx sets the class before paint, so the value flips on subscribe.
  return false;
}

export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("tis-theme", next ? "dark" : "light");
    } catch {
      /* ignore quota / private mode */
    }
  }, []);

  // Optional: if user hasn't picked a theme, follow OS changes live.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("tis-theme");
    if (stored) return; // user has an explicit preference — don't override
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      document.documentElement.classList.toggle("dark", e.matches);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      className="relative w-14 h-8 rounded-full bg-[var(--bg-soft)] border border-[var(--border)] flex items-center px-1"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`w-6 h-6 rounded-full flex items-center justify-center ${
          dark
            ? "bg-slate-800 text-amber-300 ml-auto"
            : "bg-amber-400 text-white"
        }`}
      >
        {dark ? <Moon size={14} /> : <Sun size={14} />}
      </motion.span>
    </button>
  );
}