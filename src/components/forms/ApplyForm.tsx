"use client";
import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button";

interface FormState {
  parentName: string;
  email: string;
  phone: string;
  studentName: string;
  grade: string;
  message: string;
}

type Status = "idle" | "submitting" | "success" | "error";

const initialForm: FormState = {
  parentName: "",
  email: "",
  phone: "",
  studentName: "",
  grade: "",
  message: "",
};

const grades = [
  "Nursery",
  "LKG",
  "UKG",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
];

const inputClass =
  "w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)]/60 focus:border-emerald-500 focus:outline-none transition-colors";

const labelClass = "block text-sm font-medium mb-2";

export default function ApplyForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const update =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
    };

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.parentName.trim()) next.parentName = "Parent name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (!form.phone.trim()) next.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, "")))
      next.phone = "Enter a valid 10-digit phone number.";
    if (!form.studentName.trim())
      next.studentName = "Student name is required.";
    if (!form.grade) next.grade = "Please select a grade.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      // No backend yet — simulate a request.
      // Replace this block with a real fetch('/api/apply', { method: 'POST', body: JSON.stringify(form) })
      // or Formspree / Web3Forms / Google Apps Script endpoint.
      await new Promise((r) => setTimeout(r, 900));
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-10 text-center"
      >
        <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-5">
          <CheckCircle2 size={32} />
        </div>
        <h2
          className="text-2xl md:text-3xl font-bold"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Application received!
        </h2>
        <p className="mt-3 text-[var(--text-muted)] max-w-md mx-auto">
          Thank you. Our admissions team will reach out to you within 24
          hours. Please check your email for confirmation.
        </p>
        <div className="mt-7 flex justify-center gap-3">
          <Button variant="primary" asLink href="/">
            Back to Home
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6 md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        
        <div>
          <label htmlFor="studentName" className={labelClass}>
            Student Name *
          </label>
          <input
            id="studentName"
            type="text"
            value={form.studentName}
            onChange={update("studentName")}
            placeholder="Child's full name"
            className={inputClass}
            aria-invalid={!!errors.studentName}
          />
          {errors.studentName && (
            <p className="mt-1 text-xs text-red-500">{errors.studentName}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@example.com"
            className={inputClass}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="10-digit mobile number"
            className={inputClass}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="parentName" className={labelClass}>
            Parent / Guardian Name *
          </label>
          <input
            id="parentName"
            type="text"
            value={form.parentName}
            onChange={update("parentName")}
            placeholder="e.g. Priya Sharma"
            className={inputClass}
            aria-invalid={!!errors.parentName}
          />
          {errors.parentName && (
            <p className="mt-1 text-xs text-red-500">{errors.parentName}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="grade" className={labelClass}>
            Grade Applying For *
          </label>
          <select
            id="grade"
            value={form.grade}
            onChange={update("grade")}
            className={inputClass}
            aria-invalid={!!errors.grade}
          >
            <option value="">Select a grade</option>
            {grades.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          {errors.grade && (
            <p className="mt-1 text-xs text-red-500">{errors.grade}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Anything we should know? (optional)
          </label>
          <textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={update("message")}
            placeholder="Previous school, special requirements, questions…"
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 flex items-start gap-2 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-xl p-3"
          >
            <AlertCircle size={16} className="mt-0.5 shrink-0" />
            <span>
              Something went wrong. Please try again or email us at
              admissions@tis.edu.in.
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-[var(--text-muted)]">
          By submitting you agree to be contacted by TIS admissions.
        </p>
        <Button
          variant="primary"
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={18} className="animate-spin" /> Submitting…
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      </div>
    </motion.form>
  );
}