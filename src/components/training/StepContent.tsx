"use client";

import { useState, useEffect } from "react";
import type {
  TrainingStep,
  TaskStep,
  CheckpointStep,
} from "@/types/step";

interface StepContentProps {
  step: TrainingStep;
  stepIndex: number;
  onComplete: (data?: Record<string, any>) => void;
  initialData?: Record<string, any>;
}

export default function StepContent({
  step,
  stepIndex,
  onComplete,
  initialData,
}: StepContentProps) {
  const [taskData, setTaskData] = useState<Record<string, any>>(
    initialData?.taskData || {},
  );
  const [checkpointAnswers, setCheckpointAnswers] = useState<
    Record<number, number>
  >(initialData?.checkpointAnswers || {});

  useEffect(() => {
    if (initialData) {
      if (initialData.taskData) {
        setTaskData(initialData.taskData);
      }
      if (initialData.checkpointAnswers) {
        setCheckpointAnswers(initialData.checkpointAnswers);
      }
    }
  }, [initialData, stepIndex]);

  if (step.type === "lesson") {
    return (
      <div className="space-y-6" data-tour="content-panel">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{step.title}</h2>
          <p className="mt-2 text-slate-600">{step.description}</p>
        </div>
        <div className="prose prose-slate max-w-none rounded-xl border border-slate-200 bg-white p-6">
          <div
            className="whitespace-pre-line text-slate-700"
            dangerouslySetInnerHTML={{
              __html: step.content.replace(/\n/g, "<br />"),
            }}
          />
        </div>
      </div>
    );
  }

  if (step.type === "task") {
    const taskStep = step as TaskStep;
    const requiredCount =
      taskStep.requiredTasksCount || taskStep.tasks.length;
    const completedCount = taskStep.tasks.filter((task) => {
      if (task.type === "checkbox") {
        return taskData[task.id] === true;
      }
      return taskData[task.id] && taskData[task.id].trim() !== "";
    }).length;
    const canComplete = completedCount >= requiredCount;
    const isCompleted = initialData?.completed === true;

    // Mini kârlılık hesaplayıcı (sadece step-3 için)
    const isProfitCalculator = step.id === "step-3";
    
    // Hesaplama değerleri
    const urunMaliyeti = parseFloat(taskData["field-1"] || "0") || 0;
    const paketlemeMaliyeti = parseFloat(taskData["field-2"] || "0") || 0;
    const kargoMaliyeti = parseFloat(taskData["field-3"] || "0") || 0;
    const komisyonOrani = parseFloat(taskData["field-4"] || "0") || 0;
    const satisFiyati = parseFloat(taskData["field-5"] || "0") || 0;

    // Hesaplamalar
    const komisyonTutari = satisFiyati * (komisyonOrani / 100);
    const toplamMaliyet = urunMaliyeti + paketlemeMaliyeti + kargoMaliyeti + komisyonTutari;
    const brutKar = satisFiyati - toplamMaliyet;
    const brutMarj = satisFiyati > 0 ? (brutKar / satisFiyati) * 100 : 0;

    // Hesaplama sonuçlarını taskData'ya ekle (stepState'e kaydetmek için)
    useEffect(() => {
      if (isProfitCalculator && satisFiyati > 0) {
        const calculatorResults = {
          komisyonTutari: komisyonTutari.toFixed(2),
          toplamMaliyet: toplamMaliyet.toFixed(2),
          brutKar: brutKar.toFixed(2),
          brutMarj: brutMarj.toFixed(2),
        };
        setTaskData((prev) => ({
          ...prev,
          calculatorResults,
        }));
      }
    }, [urunMaliyeti, paketlemeMaliyeti, kargoMaliyeti, komisyonOrani, satisFiyati]);

    return (
      <div className="space-y-6" data-tour="content-panel">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{step.title}</h2>
          <p className="mt-2 text-slate-600">{step.description}</p>
        </div>
        {taskStep.lessonContent && (
          <div className="prose prose-slate max-w-none rounded-xl border border-slate-200 bg-white p-6">
            <div
              className="whitespace-pre-line text-slate-700"
              dangerouslySetInnerHTML={{
                __html: taskStep.lessonContent.replace(/\n/g, "<br />"),
              }}
            />
          </div>
        )}
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <div className="space-y-4" data-tour="task-checklist">
            {taskStep.tasks.map((task) => {
              if (task.type === "checkbox") {
                return (
                  <label
                    key={task.id}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 hover:bg-slate-50"
                  >
                    <input
                      type="checkbox"
                      checked={taskData[task.id] === true}
                      onChange={(e) =>
                        setTaskData({ ...taskData, [task.id]: e.target.checked })
                      }
                      className="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="text-sm font-medium text-slate-700">
                      {task.label}
                    </span>
                  </label>
                );
              }

              if (task.type === "textarea") {
                return (
                  <div key={task.id} className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">
                      {task.label}
                    </label>
                    <textarea
                      value={taskData[task.id] || ""}
                      onChange={(e) =>
                        setTaskData({ ...taskData, [task.id]: e.target.value })
                      }
                      placeholder={task.placeholder}
                      rows={4}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 resize-y"
                    />
                  </div>
                );
              }

              return (
                <div key={task.id} className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">
                    {task.label}
                  </label>
                  <input
                    type="text"
                    value={taskData[task.id] || ""}
                    onChange={(e) =>
                      setTaskData({ ...taskData, [task.id]: e.target.value })
                    }
                    placeholder={task.placeholder}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              );
            })}
          </div>

          {/* Mini Kârlılık Hesaplayıcı (sadece step-3 için) */}
          {isProfitCalculator && satisFiyati > 0 && (
            <div className="mt-6 space-y-4" data-tour="profit-calculator">
              <h3 className="text-lg font-semibold text-slate-900">
                Kârlılık Hesaplama Sonuçları
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-600">
                    Toplam Maliyet
                  </p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    {toplamMaliyet.toFixed(2)} ₺
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-indigo-50 p-4">
                  <p className="text-sm font-medium text-indigo-600">
                    Brüt Kâr
                  </p>
                  <p
                    className={`mt-1 text-2xl font-bold ${
                      brutKar >= 0 ? "text-indigo-700" : "text-red-600"
                    }`}
                  >
                    {brutKar.toFixed(2)} ₺
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-emerald-50 p-4">
                  <p className="text-sm font-medium text-emerald-600">
                    Brüt Marj
                  </p>
                  <p
                    className={`mt-1 text-2xl font-bold ${
                      brutMarj >= 0 ? "text-emerald-700" : "text-red-600"
                    }`}
                  >
                    {brutMarj.toFixed(2)} %
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-slate-600">
              {completedCount} / {requiredCount} görev tamamlandı
            </p>
            {!isCompleted && (
              <button
                onClick={() => {
                  if (canComplete) {
                    onComplete({ taskData, completed: true });
                  }
                }}
                disabled={!canComplete}
                data-tour="task-complete-button"
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Tamamladım
              </button>
            )}
            {isCompleted && (
              <span className="rounded-lg bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                ✓ Tamamlandı
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (step.type === "checkpoint") {
    const checkpointStep = step as CheckpointStep;
    const requiredCount =
      checkpointStep.requiredCorrectCount || checkpointStep.questions.length;
    const answeredCount = Object.keys(checkpointAnswers).length;
    const correctCount = checkpointStep.questions.filter(
      (q, index) => checkpointAnswers[index] === q.correctIndex,
    ).length;
    const canComplete = answeredCount >= requiredCount;
    const isCompleted = initialData?.completed === true;

    return (
      <div className="space-y-6" data-tour="content-panel">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{step.title}</h2>
          <p className="mt-2 text-slate-600">{step.description}</p>
        </div>
        <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-6">
          {checkpointStep.questions.map((question, qIndex) => {
            const selectedAnswer = checkpointAnswers[qIndex];
            const isCorrect =
              selectedAnswer !== undefined &&
              selectedAnswer === question.correctIndex;

            return (
              <div key={question.id} className="space-y-3">
                <h3 className="font-semibold text-slate-900">
                  {qIndex + 1}. {question.question}
                </h3>
                <div className="space-y-2">
                  {question.options.map((option, oIndex) => {
                    const isSelected = selectedAnswer === oIndex;
                    return (
                      <label
                        key={oIndex}
                        className={`flex items-center gap-3 rounded-lg border p-3 transition ${
                          isSelected
                            ? isCorrect
                              ? "border-emerald-500 bg-emerald-50"
                              : "border-red-500 bg-red-50"
                            : "border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${qIndex}`}
                          checked={isSelected}
                          onChange={() =>
                            setCheckpointAnswers({
                              ...checkpointAnswers,
                              [qIndex]: oIndex,
                            })
                          }
                          className="h-4 w-4 border-slate-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="text-sm text-slate-700">{option}</span>
                      </label>
                    );
                  })}
                </div>
                {selectedAnswer !== undefined && (
                  <div
                    className={`rounded-lg p-3 text-sm ${
                      isCorrect
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    <p className="font-semibold">
                      {isCorrect ? "✓ Doğru!" : "✗ Yanlış"}
                    </p>
                    <p className="mt-1">{question.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-slate-600">
              {answeredCount} / {requiredCount} soru yanıtlandı • {correctCount}{" "}
              doğru
            </p>
            {canComplete && !isCompleted && (
              <button
                onClick={() => {
                  onComplete({
                    checkpointAnswers,
                    completed: true,
                  });
                }}
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Tamamladım
              </button>
            )}
            {isCompleted && (
              <span className="rounded-lg bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                ✓ Tamamlandı
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
}

