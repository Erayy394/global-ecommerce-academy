"use client";

import Link from "next/link";
import { UI_TEXTS } from "@/constants/ui-texts";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-slate-600">
            {UI_TEXTS.footer.copyright(currentYear)}
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="#gizlilik"
              className="text-slate-600 transition hover:text-indigo-600"
            >
              {UI_TEXTS.footer.links.privacy}
            </Link>
            <Link
              href="#kullanim"
              className="text-slate-600 transition hover:text-indigo-600"
            >
              {UI_TEXTS.footer.links.terms}
            </Link>
            <Link
              href="#iletisim"
              className="text-slate-600 transition hover:text-indigo-600"
            >
              {UI_TEXTS.footer.links.contact}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

