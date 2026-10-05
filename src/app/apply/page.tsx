import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ApplyForm from "@/components/forms/ApplyForm";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Apply Now — Tulas International School",
  description:
    "Start your child's TIS journey. Submit the admission enquiry form and our team will reach out within 24 hours.",
};

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 min-h-screen bg-[var(--bg-soft)]">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-emerald-600 transition-colors mb-6"
          >
            <ArrowLeft size={16} /> Back to home
          </Link>

          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-semibold tracking-wide uppercase">
              Admissions 2026–27
            </span>
            <h1
              className="mt-4 text-3xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Begin your child&rsquo;s TIS journey
            </h1>
            <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto">
              Fill in the form below and our admissions team will contact you
              within 24 hours to schedule a campus tour.
            </p>
          </div>

          <ApplyForm />
        </div>
      </main>
      <Footer />
    </>
  );
}