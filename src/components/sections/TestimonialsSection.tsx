"use client";
import { Quote } from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

const testimonials = [
  {
    quote:
      "TIS gave my daughter the confidence to speak on a global stage. The teachers genuinely know every child.",
    name: "Priya Sharma",
    role: "Parent, Grade 9",
  },
  {
    quote:
      "The IB curriculum here is world-class. I got into my dream university with a scholarship.",
    name: "Arjun Mehta",
    role: "Alumnus, Class of 2023",
  },
  {
    quote:
      "Beyond academics, the sports and arts programs shaped who I am today. Forever grateful to TIS.",
    name: "Sara Khan",
    role: "Alumna, Class of 2021",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <Badge>Voices of TIS</Badge>
          <h2
            className="mt-4 text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Stories that inspire us
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <Card className="h-full flex flex-col">
                <Quote className="text-emerald-500 mb-4" size={28} />
                <p className="text-[var(--text-muted)] leading-relaxed flex-1">
                  {"\u201C"}{t.quote}{"\u201D"}
                </p>
                <div className="mt-6 pt-4 border-t border-[var(--border)]">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-[var(--text-muted)]">{t.role}</div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}