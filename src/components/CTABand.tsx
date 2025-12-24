"use client";

import Link from "next/link";
import { UI_TEXTS } from "@/constants/ui-texts";

export default function CTABand() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-blue-50 p-8 text-center shadow-sm md:p-12">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
          {UI_TEXTS.ctaBand.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          {UI_TEXTS.ctaBand.description}
        </p>
        <Link
          href="/egitimler"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700"
        >
          {UI_TEXTS.ctaBand.button}
        </Link>
      </div>
    </section>
  );
}

