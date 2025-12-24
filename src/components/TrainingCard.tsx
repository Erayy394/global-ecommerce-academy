"use client";

import { useRouter } from "next/navigation";
import type { Training, TrainingStatus } from "@/types/training";
import { UI_TEXTS } from "@/constants/ui-texts";

interface TrainingCardProps {
  training: Training;
  status: TrainingStatus;
  progressPercent: number;
  onStart: (trainingId: string) => void;
}

export default function TrainingCard({
  training,
  status,
  progressPercent,
  onStart,
}: TrainingCardProps) {
  const router = useRouter();

  const getStatusBadge = () => {
    const statusConfig = {
      not_started: {
        label: UI_TEXTS.trainings.card.status.not_started,
        className: "bg-slate-100 text-slate-700",
        icon: null,
      },
      in_progress: {
        label: UI_TEXTS.trainings.card.status.in_progress,
        className: "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100",
        icon: null,
      },
      completed: {
        label: UI_TEXTS.trainings.card.status.completed,
        className: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
        icon: "⭐",
      },
      exam_passed: {
        label: UI_TEXTS.trainings.card.status.exam_passed,
        className: "bg-amber-50 text-amber-700 ring-1 ring-amber-100",
        icon: "🏆",
      },
    };

    const config = statusConfig[status];
    return (
      <span
        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${config.className}`}
      >
        {config.icon && <span>{config.icon}</span>}
        {config.label}
      </span>
    );
  };

  const getActionButton = () => {
    const actions = {
      not_started: {
        label: UI_TEXTS.trainings.card.actions.start,
        onClick: () => {
          onStart(training.id);
          router.push(`/egitimler/${training.slug}`);
        },
        className: "bg-indigo-600 hover:bg-indigo-700 text-white",
      },
      in_progress: {
        label: UI_TEXTS.trainings.card.actions.continue,
        onClick: () => {
          router.push(`/egitimler/${training.slug}`);
        },
        className: "bg-indigo-600 hover:bg-indigo-700 text-white",
      },
      completed: {
        label: UI_TEXTS.trainings.card.actions.review,
        onClick: () => {
          router.push(`/egitimler/${training.slug}`);
        },
        className: "bg-slate-600 hover:bg-slate-700 text-white",
      },
      exam_passed: {
        label: UI_TEXTS.trainings.card.actions.viewResults,
        onClick: () => {
          router.push(`/egitimler/${training.slug}`);
        },
        className: "bg-emerald-600 hover:bg-emerald-700 text-white",
      },
    };

    const action = actions[status];
    return (
      <button
        onClick={action.onClick}
        className={`w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition ${action.className}`}
      >
        {action.label}
      </button>
    );
  };

  const visibleTags = training.tags.slice(0, 3);
  const remainingTags = training.tags.length - 3;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2">
            {getStatusBadge()}
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
              {training.level}
            </span>
            <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700">
              {training.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-900">{training.title}</h3>
        </div>
      </div>

      {/* Summary */}
      <p className="mb-4 text-slate-600">{training.summary}</p>

      {/* Metrics */}
      <div className="mb-4 rounded-lg bg-slate-50 px-4 py-3">
        <p className="text-sm font-medium text-slate-700">
          {UI_TEXTS.trainings.card.metrics
            .replace("{stepsCount}", training.stepsCount.toString())
            .replace("{quizQuestionsCount}", training.quizQuestionsCount.toString())
            .replace("{estimatedHours}", training.estimatedHours.toString())}
        </p>
        <p className="mt-1 text-xs text-slate-500">
          {UI_TEXTS.trainings.card.quizNote}
        </p>
      </div>

      {/* Progress Bar (if in progress) */}
      {status === "in_progress" && (
        <div className="mb-4">
          <div className="mb-1 flex items-center justify-between text-xs text-slate-600">
            <span>İlerleme</span>
            <span className="font-semibold">{progressPercent}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-100">
            <div
              className="h-2 rounded-full bg-indigo-600 transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* Tags */}
      {training.tags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {visibleTags.map((tag, index) => (
            <span
              key={index}
              className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
            >
              {tag}
            </span>
          ))}
          {remainingTags > 0 && (
            <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
              +{remainingTags}
            </span>
          )}
        </div>
      )}

      {/* Actions */}
      <div>
        {getActionButton()}
      </div>
    </article>
  );
}

