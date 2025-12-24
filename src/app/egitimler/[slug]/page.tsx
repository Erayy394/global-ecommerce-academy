"use client";

import { useState, useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StepSidebar from "@/components/training/StepSidebar";
import StepContent from "@/components/training/StepContent";
import TourGuide from "@/components/training/TourGuide";
import WhatsAppHelpButton from "@/components/WhatsAppHelpButton";
import { trainings } from "@/data/trainings";
import { trainingContents } from "@/data/training-content";
import type { TrainingStep } from "@/types/step";
import {
  getDeviceStore,
  getTrainingProgress,
  startTraining,
  updateTrainingStatus,
  getStepState,
  saveStepState,
} from "@/lib/device-store";
import type { Step } from "react-joyride";

/**
 * Eğitim detay sayfası - Adım adım eğitim player
 * Rehber sistemi ile kullanıcıya yol gösterir
 */
export default function TrainingDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const training = trainings.find((t) => t.slug === slug);
  const content = trainingContents[slug];

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [progress, setProgress] = useState(0);

  // Eğitim bulunamadıysa not-found
  if (!training || !content) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-2xl font-bold text-slate-900">Eğitim bulunamadı</h1>
        <Link
          href="/egitimler"
          className="mt-4 text-indigo-600 hover:text-indigo-700"
        >
          Eğitimlere dön
        </Link>
      </div>
    );
  }

  // Store'dan ilerleme durumunu yükle
  useEffect(() => {
    const store = getDeviceStore();
    const trainingProgress = store.trainings[training.id];

    // Eğitim başlatılmamışsa başlat
    if (!trainingProgress || trainingProgress.status === "not_started") {
      startTraining(training.id);
    }

    // Son adıma git
    if (trainingProgress) {
      setCurrentStepIndex(trainingProgress.lastStepIndex);
      // Tamamlanan adımları yükle
      const completed = new Set<number>();
      for (let i = 0; i < trainingProgress.lastStepIndex; i++) {
        const stepState = getStepState(training.id, i);
        if (stepState?.completed) {
          completed.add(i);
        }
      }
      setCompletedSteps(completed);
      setProgress(trainingProgress.progressPercent);
    }
  }, [training.id]);

  // İlerleme hesapla
  const calculateProgress = (stepIndex: number, totalSteps: number) => {
    return Math.round(((stepIndex + 1) / totalSteps) * 100);
  };

  // Adım tamamlandığında
  const handleStepComplete = (stepIndex: number, data?: Record<string, any>) => {
    const newCompleted = new Set(completedSteps);
    newCompleted.add(stepIndex);
    setCompletedSteps(newCompleted);

    // Step state'i kaydet
    saveStepState(training.id, stepIndex, {
      completed: true,
      ...data,
    });

    // Otomatik ilerleme yapma, kullanıcı "Devam Et" butonuna basacak
  };

  // Adım değiştiğinde
  const handleStepChange = (newIndex: number) => {
    setCurrentStepIndex(newIndex);
    const newProgress = calculateProgress(newIndex, content.steps.length);
    setProgress(newProgress);
    updateTrainingStatus(
      training.id,
      "in_progress",
      newProgress,
      newIndex,
    );
  };

  // Geri butonu
  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      handleStepChange(currentStepIndex - 1);
    }
  };

  // İleri butonu
  const handleNext = () => {
    const currentStep = content.steps[currentStepIndex];
    const stepState = getStepState(training.id, currentStepIndex);

    // Lesson: Serbest geçiş
    if (currentStep.type === "lesson") {
      if (currentStepIndex < content.steps.length - 1) {
        handleStepChange(currentStepIndex + 1);
      } else {
        // Son adım tamamlandı
        setProgress(100);
        updateTrainingStatus(training.id, "completed", 100, currentStepIndex);
      }
      return;
    }

    // Task: Tamamlanmış olmalı
    if (currentStep.type === "task") {
      if (stepState?.completed) {
        if (currentStepIndex < content.steps.length - 1) {
          handleStepChange(currentStepIndex + 1);
        } else {
          setProgress(100);
          updateTrainingStatus(training.id, "completed", 100, currentStepIndex);
        }
      }
      return;
    }

    // Checkpoint: Tüm sorular yanıtlanmış olmalı
    if (currentStep.type === "checkpoint") {
      const requiredCount =
        currentStep.requiredCorrectCount || currentStep.questions.length;
      const answeredCount = Object.keys(stepState?.checkpointAnswers || {}).length;
      if (answeredCount >= requiredCount) {
        if (currentStepIndex < content.steps.length - 1) {
          handleStepChange(currentStepIndex + 1);
        } else {
          setProgress(100);
          updateTrainingStatus(training.id, "completed", 100, currentStepIndex);
        }
      }
    }
  };

  // Devam Et butonu aktif mi?
  const canContinue = useMemo(() => {
    const currentStep = content.steps[currentStepIndex];
    const stepState = getStepState(training.id, currentStepIndex);

    if (currentStep.type === "lesson") return true;
    if (currentStep.type === "task") return stepState?.completed === true;
    if (currentStep.type === "checkpoint") {
      const requiredCount =
        currentStep.requiredCorrectCount || currentStep.questions.length;
      const answeredCount = Object.keys(stepState?.checkpointAnswers || {}).length;
      return answeredCount >= requiredCount;
    }
    return false;
  }, [currentStepIndex, content.steps, training.id]);

  // Rehber adımları
  const tourSteps: Step[] = [
    {
      target: '[data-tour="header-title"]',
      content: "Buradan eğitim başlığını ve ilerleme yüzdenizi görebilirsiniz.",
      placement: "bottom",
    },
    {
      target: '[data-tour="tour-restart-button"]',
      content: "Rehberi tekrar başlatmak için bu butonu kullanabilirsiniz.",
      placement: "left",
    },
    {
      target: '[data-tour="sidebar-steps"]',
      content:
        "Buradan adımları takip edeceksiniz. Görev tamamlanmadan sonraki adıma geçemezsiniz.",
      placement: "right",
    },
    {
      target: '[data-tour="content-panel"]',
      content:
        "Burada eğitim içeriğini okuyacak, görevleri tamamlayacak ve soruları yanıtlayacaksınız.",
      placement: "left",
    },
    ...(training.category === "Ödeme" || training.category === "Firma"
      ? [
          {
            target: '[data-tour="security-warning"]',
            content:
              "Önemli güvenlik ve yasal uyarılar burada görünür. Lütfen dikkatle okuyun.",
            placement: "bottom",
          } as Step,
        ]
      : []),
    {
      target: '[data-tour="task-checklist"]',
      content:
        "Görevler burada görünür. Tüm görevleri tamamlamadan ilerleyemezsiniz.",
      placement: "top",
    },
    ...(slug === "fiyatlandirma-karlilik"
      ? [
          {
            target: '[data-tour="profit-calculator"]',
            content:
              "Maliyet bilgilerini girdikçe kârlılık hesaplaması canlı olarak güncellenir. Toplam maliyet, brüt kâr ve brüt marj burada görünür.",
            placement: "top",
          } as Step,
        ]
      : []),
    {
      target: '[data-tour="task-complete-button"]',
      content:
        "Görevleri tamamladıktan sonra bu butona tıklayarak adımı tamamlayabilirsiniz.",
      placement: "top",
    },
    {
      target: '[data-tour="continue-button"]',
      content:
        "Adım tamamlandıktan sonra bu butonla bir sonraki adıma geçebilirsiniz.",
      placement: "top",
    },
    {
      target: '[data-tour="progress-info"]',
      content:
        "Eğitimi tamamladığınızda durum katalog sayfasında 'Tamamlandı' olarak görünecektir.",
      placement: "bottom",
    },
  ];

  const currentStep = content.steps[currentStepIndex];
  const stepState = getStepState(training.id, currentStepIndex);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      {/* Top Bar */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <Link
            href="/egitimler"
            className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
          >
            ← Eğitimlere Dön
          </Link>
          <div className="flex items-center gap-4">
            <h1
              className="text-lg font-bold text-slate-900"
              data-tour="header-title"
            >
              {training.title}
            </h1>
            <div className="flex items-center gap-3">
              <div className="text-sm text-slate-600" data-tour="progress-info">
                İlerleme: <span className="font-semibold">%{progress}</span>
              </div>
              <TourGuide slug={slug} steps={tourSteps} />
              <button
                onClick={() => {
                  // Rehberi manuel başlatmak için TourGuide'a erişim gerekir
                  // Bu basit bir çözüm, ileride ref ile daha iyi yapılabilir
                  window.dispatchEvent(new CustomEvent("start-tour"));
                }}
                data-tour="tour-restart-button"
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700"
              >
                Rehberi Aç
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:flex-row">
        <StepSidebar
          steps={content.steps}
          currentStepIndex={currentStepIndex}
          completedSteps={completedSteps}
          onStepClick={handleStepChange}
        />

        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-4xl p-6 md:p-8">
            {(training.category === "Ödeme" || training.category === "Firma" || training.category === "Strateji") && (
              <div
                className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4"
                data-tour="security-warning"
              >
                <p className="text-sm text-amber-800">
                  {training.category === "Ödeme" ? (
                    <>
                      <strong>Not:</strong> Ülkeye ve duruma göre süreçler değişebilir. Resmi
                      kaynakları ve gerektiğinde uzman görüşünü değerlendirin. Bu eğitim
                      finansal/vergisel konularda kesin danışmanlık yerine genel bilgilendirmedir.
                    </>
                  ) : training.category === "Firma" ? (
                    <>
                      <strong>Not:</strong> Bu içerik genel bilgilendirme amaçlıdır. Ülke/ürün/ticaret modeline göre yükümlülükler değişebilir. Resmi kaynaklar ve gerektiğinde uzman görüşü ile ilerleyin.
                    </>
                  ) : training.id === "reklam-temelleri" ? (
                    <>
                      <strong>Not:</strong> Reklam sonuçları ürün, pazar ve bütçeye göre değişir. Küçük testlerle ilerlemek her zaman daha sağlıklıdır.
                    </>
                  ) : (
                    <>
                      <strong>Not:</strong> Bu içerik genel bilgilendirme amaçlıdır. Ücret, vergi ve kesintiler ülke/sağlayıcıya göre değişebilir.
                    </>
                  )}
                </p>
              </div>
            )}
            <StepContent
              step={currentStep}
              stepIndex={currentStepIndex}
              onComplete={(data) => handleStepComplete(currentStepIndex, data)}
              initialData={stepState}
            />

            {/* Navigation Buttons */}
            <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">
              <button
                onClick={handlePrevious}
                disabled={currentStepIndex === 0}
                className="rounded-lg border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Geri
              </button>
              <div className="text-sm text-slate-600">
                Adım {currentStepIndex + 1} / {content.steps.length}
              </div>
              <button
                onClick={handleNext}
                disabled={!canContinue || currentStepIndex >= content.steps.length - 1}
                data-tour="continue-button"
                className="rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentStepIndex >= content.steps.length - 1
                  ? "Tamamlandı"
                  : "Devam Et"}
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* WhatsApp Help Button */}
      {training && content && (
        <WhatsAppHelpButton
          trainingTitle={training.title}
          currentStep={currentStepIndex}
          totalSteps={content.steps.length}
        />
      )}

      <Footer />
    </div>
  );
}

