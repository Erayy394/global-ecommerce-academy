"use client";

import { UI_TEXTS } from "@/constants/ui-texts";

export default function HowItWorks() {
  return (
    <section
      id="nasil-calisir"
      className="mx-auto max-w-7xl px-4 py-16 md:px-8"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
          {UI_TEXTS.howItWorks.title}
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {UI_TEXTS.howItWorks.steps.map((step, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold text-indigo-700">
              {step.number}
            </div>
            <h3 className="mb-2 text-xl font-semibold text-slate-900">
              {step.title}
            </h3>
            <p className="text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

