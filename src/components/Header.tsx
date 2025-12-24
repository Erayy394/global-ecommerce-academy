"use client";

import Link from "next/link";
import { UI_TEXTS } from "@/constants/ui-texts";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-slate-900 transition hover:text-indigo-600"
        >
          {UI_TEXTS.header.logo}
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/egitimler"
            className="text-sm font-medium text-slate-700 transition hover:text-indigo-600"
          >
            {UI_TEXTS.header.nav.trainings}
          </Link>
          <Link
            href="/nasil-calisir"
            className="text-sm font-medium text-slate-700 transition hover:text-indigo-600"
          >
            {UI_TEXTS.header.nav.howItWorks}
          </Link>
          <Link
            href="/iletisim"
            className="text-sm font-medium text-slate-700 transition hover:text-indigo-600"
          >
            {UI_TEXTS.header.nav.contact}
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="/egitimler"
          className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
        >
          {UI_TEXTS.header.cta}
        </Link>
      </div>
    </header>
  );
}

