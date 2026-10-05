"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useHasFinePointer } from "@/hooks/useHasFinePointer";

export default function CustomCursor() {
  const prefersReduced = usePrefersReducedMotion();
  const hasFinePointer = useHasFinePointer();
  const enabled = hasFinePointer && !prefersReduced;

  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 200, damping: 25 });
  const ringY = useSpring(y, { stiffness: 200, damping: 25 });

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setHovering(!!t?.closest("a, button, [data-cursor-hover]"));
    };
    const leave = () => setHovering(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseleave", leave);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Trailing glow ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9997] rounded-full bg-emerald-500/20 blur-xl"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 60 : 32,
          height: hovering ? 60 : 32,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />

      {/* Arrow pointer — instant, no spring */}
      <motion.svg
        aria-hidden
        width="22"
        height="22"
        viewBox="0 0 24 24"
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          x,
          y,
          translateX: "-2px",
          translateY: "-2px",
        }}
        animate={{ rotate: hovering ? -12 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
      >
        <path
          d="M4 2 L4 20 L9.5 15 L13 22 L16 20.5 L12.5 13.5 L20 13.5 Z"
          fill="#10b981"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </motion.svg>
    </>
  );
}