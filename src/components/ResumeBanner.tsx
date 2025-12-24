"use client";

import Link from "next/link";
import { UI_TEXTS } from "@/constants/ui-texts";

interface ResumeBannerProps {
  inProgressCount: number;
}

export default function ResumeBanner({ inProgressCount }: ResumeBannerProps) {
  if (inProgressCount === 0) return null;

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8">
      <div className="rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50 p-6 shadow-sm">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              {UI_TEXTS.trainings.resumeBanner.title}
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              {UI_TEXTS.trainings.resumeBanner.description}
            </p>
          </div>
          <Link
            href="#in-progress"
            className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            {UI_TEXTS.trainings.resumeBanner.viewAll}
          </Link>
        </div>
      </div>
    </div>
  );
}

