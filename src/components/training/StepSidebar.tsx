"use client";

import type { TrainingStep } from "@/types/step";

interface StepSidebarProps {
  steps: TrainingStep[];
  currentStepIndex: number;
  completedSteps: Set<number>;
  onStepClick: (index: number) => void;
}

export default function StepSidebar({
  steps,
  currentStepIndex,
  completedSteps,
  onStepClick,
}: StepSidebarProps) {
  return (
    <aside className="w-full border-r border-slate-200 bg-white lg:w-80">
      <div className="sticky top-0 p-6">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Eğitim Adımları
        </h3>
        <nav className="space-y-2" data-tour="sidebar-steps">
          {steps.map((step, index) => {
            const isActive = index === currentStepIndex;
            const isCompleted = completedSteps.has(index);
            const isClickable = isCompleted || index <= currentStepIndex;

            return (
              <button
                key={step.id}
                onClick={() => isClickable && onStepClick(index)}
                disabled={!isClickable}
                className={`w-full rounded-lg px-4 py-3 text-left transition ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700 ring-2 ring-indigo-200"
                    : isCompleted
                      ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                      : isClickable
                        ? "bg-slate-50 text-slate-700 hover:bg-slate-100"
                        : "bg-slate-50 text-slate-400 cursor-not-allowed"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                      isActive
                        ? "bg-indigo-600 text-white"
                        : isCompleted
                          ? "bg-emerald-600 text-white"
                          : "bg-slate-300 text-slate-600"
                    }`}
                  >
                    {isCompleted ? "✓" : index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-medium text-slate-500">
                      Adım {index + 1}
                    </div>
                    <div className="text-sm font-semibold">{step.title}</div>
                  </div>
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

