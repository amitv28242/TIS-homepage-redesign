"use client";
import Reveal from "@/components/animation/Reveal";
import Badge from "@/components/ui/Badge";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-2 items-start">
        <Reveal className="md:pt-8">
          <Badge>About TIS</Badge>
          <h2
            id="about-heading"
            className="mt-3 text-3xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            A legacy of{" "}
            <span className="text-emerald-600">academic excellence</span> &
            character.
          </h2>
          <p className="mt-5 text-[var(--text-muted)] leading-relaxed">
            For over two decades, Tulas International School has shaped
            confident, compassionate and capable young people. Our
            inquiry-driven curriculum blends the rigor of international
            standards with the warmth of Indian values.
          </p>
          <p className="mt-4 text-[var(--text-muted)] leading-relaxed">
            Small class sizes, personalised mentoring and world-class
            facilities ensure every student discovers their unique potential.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-4">
            <div
              className="aspect-square rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80')",
              }}
            />
            <div
              className="aspect-square rounded-2xl bg-cover bg-center translate-y-8"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80')",
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}