import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold text-emerald-600">404</h1>
      <p className="mt-4 text-lg text-[var(--text-muted)]">
        We couldn&apos;t find that page.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center gap-2 min-h-11 px-6 py-3 rounded-full font-medium bg-[var(--brand-primary)] text-white hover:bg-emerald-800 transition-colors"
      >
        Back to Home
      </Link>
    </main>
  );
}