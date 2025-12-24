"use client";

import Link from "next/link";
import { UI_TEXTS } from "@/constants/ui-texts";

export default function Hero() {
  return (
    <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              {UI_TEXTS.hero.title}
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
              {UI_TEXTS.hero.subtitle}
            </p>
          </div>

          {/* Features */}
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-1">
            {UI_TEXTS.hero.features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex-shrink-0 text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/egitimler"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700"
            >
              {UI_TEXTS.hero.cta.primary}
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-indigo-300 hover:bg-slate-50"
            >
              {UI_TEXTS.hero.cta.secondary}
            </a>
          </div>
    </div>
  );
}

