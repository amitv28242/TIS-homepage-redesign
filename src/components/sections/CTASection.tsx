"use client";
import { ArrowRight, Phone } from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section id="cta" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-sky-900 p-10 md:p-16 text-center text-white">
            <div
              aria-hidden
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-sky-400/20 blur-3xl"
            />
            <h2
              className="relative text-3xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Give your child a future-ready education
            </h2>
            <p className="relative mt-5 text-white/75 max-w-xl mx-auto">
              Applications for the 2025–26 academic year are now open. Seats
              are limited.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="primary" asLink href="/apply">
                Apply Now <ArrowRight size={18} aria-hidden />
              </Button>
              <Button variant="ghost" asLink href="#talk">
                <Phone size={18} aria-hidden /> Talk to Admissions
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}