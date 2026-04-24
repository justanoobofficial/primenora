"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="premium-shadow rounded-[32px] border border-[var(--border)] bg-white p-6 md:p-8">
      <h2 className="font-[var(--font-heading)] text-3xl font-semibold">Send an Inquiry</h2>
      <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
        Use this form for delivery questions, partnership requests, and bulk order planning.
      </p>

      <form
        className="mt-8 space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <input
            required
            placeholder="Full name"
            className="rounded-2xl border border-[var(--border)] px-4 py-4 outline-none transition focus:border-[var(--primary)]"
          />
          <input
            required
            type="email"
            placeholder="Email address"
            className="rounded-2xl border border-[var(--border)] px-4 py-4 outline-none transition focus:border-[var(--primary)]"
          />
        </div>
        <input
          placeholder="Phone number"
          className="w-full rounded-2xl border border-[var(--border)] px-4 py-4 outline-none transition focus:border-[var(--primary)]"
        />
        <textarea
          required
          rows={6}
          placeholder="Tell us what you need"
          className="w-full rounded-2xl border border-[var(--border)] px-4 py-4 outline-none transition focus:border-[var(--primary)]"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          <Send size={16} />
          Submit Inquiry
        </button>
        {submitted ? (
          <p className="text-sm text-[var(--primary)]">
            Inquiry captured. Connect the form action or Firebase function later to receive live
            submissions.
          </p>
        ) : null}
      </form>
    </div>
  );
}
