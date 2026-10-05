"use client";
import Reveal from "@/components/animation/Reveal";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { programs } from "@/data/programs";

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-24 md:py-32 bg-[var(--bg-soft)]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <Badge>Our Programs</Badge>
          <h2
            className="mt-4 text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Learning paths for every stage
          </h2>
          <p className="mt-4 text-[var(--text-muted)]">
            From early years to senior secondary, our curriculum grows with
            your child.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <Card className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
                    {p.description}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}