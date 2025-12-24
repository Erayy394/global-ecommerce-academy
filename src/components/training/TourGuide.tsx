"use client";

import { useEffect, useState } from "react";
import Joyride, { type CallBackProps, STATUS, type Step } from "react-joyride";
import { markTourSeen, hasSeenTour } from "@/lib/device-store";

interface TourGuideProps {
  slug: string;
  steps: Step[];
  onTourEnd?: () => void;
}

export default function TourGuide({ slug, steps, onTourEnd }: TourGuideProps) {
  const [run, setRun] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    // İlk kez giriliyorsa rehberi başlat
    if (!hasSeenTour(slug)) {
      // Kısa bir gecikme ile başlat (sayfa yüklendikten sonra)
      const timer = setTimeout(() => {
        setRun(true);
      }, 500);
      return () => clearTimeout(timer);
    }

    // Manuel başlatma event'i dinle
    const handleStartTour = () => {
      setStepIndex(0);
      setRun(true);
    };

    window.addEventListener("start-tour", handleStartTour);
    return () => window.removeEventListener("start-tour", handleStartTour);
  }, [slug]);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status, index } = data;

    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      markTourSeen(slug);
      setRun(false);
      onTourEnd?.();
    } else if (status === STATUS.RUNNING) {
      setStepIndex(index);
    }
  };

  const handleStartTour = () => {
    setStepIndex(0);
    setRun(true);
  };

  return (
    <>
      <Joyride
        steps={steps}
        run={run}
        stepIndex={stepIndex}
        continuous
        showProgress
        showSkipButton
        callback={handleJoyrideCallback}
        styles={{
          options: {
            primaryColor: "#4f46e5", // indigo-600
            textColor: "#1e293b", // slate-800
            overlayColor: "rgba(0, 0, 0, 0.5)",
            arrowColor: "#ffffff",
            backgroundColor: "#ffffff",
            zIndex: 10000,
          },
          tooltip: {
            borderRadius: 12,
            padding: 20,
          },
          buttonNext: {
            backgroundColor: "#4f46e5",
            borderRadius: 8,
            padding: "8px 16px",
            fontSize: "14px",
            fontWeight: 600,
          },
          buttonBack: {
            color: "#64748b",
            marginRight: 8,
          },
          buttonSkip: {
            color: "#64748b",
          },
        }}
        locale={{
          back: "Geri",
          close: "Kapat",
          last: "Bitti",
          next: "Sonraki",
          skip: "Geç",
        }}
      />
    </>
  );
}

