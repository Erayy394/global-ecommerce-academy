"use client";

import { UI_TEXTS } from "@/constants/ui-texts";
import { startTraining } from "@/lib/device-store";
import { useRouter } from "next/navigation";

interface StarterGuideProps {
  onStart: (trainingId: string) => void;
}

export default function StarterGuide({ onStart }: StarterGuideProps) {
  const router = useRouter();

  const handleStartRecommended = () => {
    // İlk öneriyi başlat (Amazon Başlangıç)
    const firstTrainingId = "amazon-baslangic";
    startTraining(firstTrainingId);
    onStart(firstTrainingId);
    router.push("/egitimler/amazon-satisa-baslangic");
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            {UI_TEXTS.trainings.starterGuide.title}
          </h2>
          <p className="mt-2 text-slate-600">
            {UI_TEXTS.trainings.starterGuide.subtitle}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {UI_TEXTS.trainings.starterGuide.suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6"
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-700">
                {index + 1}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {suggestion.title}
              </h3>
              <p className="text-sm text-slate-600">{suggestion.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={handleStartRecommended}
            className="rounded-xl bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            {UI_TEXTS.trainings.starterGuide.startButton}
          </button>
        </div>
      </div>
    </section>
  );
}

