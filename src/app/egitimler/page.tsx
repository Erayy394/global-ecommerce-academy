"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrainingCard from "@/components/TrainingCard";
import FiltersBar from "@/components/FiltersBar";
import ResumeBanner from "@/components/ResumeBanner";
import StarterGuide from "@/components/StarterGuide";
import { trainings } from "@/data/trainings";
import type { Training, TrainingCategory, TrainingLevel } from "@/types/training";
import {
  getDeviceStore,
  getTrainingProgress,
  startTraining,
  getAllProgress,
} from "@/lib/device-store";
import { UI_TEXTS } from "@/constants/ui-texts";

/**
 * Eğitimler listesi sayfası
 * LocalStorage tabanlı ilerleme takibi ile çalışır
 * İleride backend entegrasyonu yapılabilir
 */
export default function TrainingsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    TrainingCategory | "Tümü"
  >("Tümü");
  const [selectedLevel, setSelectedLevel] = useState<TrainingLevel | "Tümü">(
    "Tümü",
  );
  const [sortBy, setSortBy] = useState("default");
  const [progressData, setProgressData] = useState(getAllProgress());

  // Store'u başlat
  useEffect(() => {
    getDeviceStore();
  }, []);

  // Filtreleme ve sıralama
  const filteredAndSortedTrainings = useMemo(() => {
    let filtered: Training[] = trainings;

    // Arama
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (t) =>
          t.title.toLowerCase().includes(query) ||
          t.summary.toLowerCase().includes(query) ||
          t.tags.some((tag) => tag.toLowerCase().includes(query)),
      );
    }

    // Kategori
    if (selectedCategory !== "Tümü") {
      filtered = filtered.filter((t) => t.category === selectedCategory);
    }

    // Seviye
    if (selectedLevel !== "Tümü") {
      filtered = filtered.filter((t) => t.level === selectedLevel);
    }

    // Sıralama
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "duration":
          return a.estimatedHours - b.estimatedHours;
        case "level": {
          const levelOrder = { Başlangıç: 1, Orta: 2, İleri: 3 };
          return levelOrder[a.level] - levelOrder[b.level];
        }
        case "alphabetical":
          return a.title.localeCompare(b.title, "tr");
        default:
          return a.order - b.order;
      }
    });

    return sorted;
  }, [searchQuery, selectedCategory, selectedLevel, sortBy]);

  // İlerleme durumu kontrolü
  const hasInProgress = useMemo(() => {
    return Object.values(progressData).some(
      (p) => p.status === "in_progress",
    );
  }, [progressData]);

  const allNotStarted = useMemo(() => {
    return filteredAndSortedTrainings.every((t) => {
      const progress = progressData[t.id];
      return !progress || progress.status === "not_started";
    });
  }, [filteredAndSortedTrainings, progressData]);

  const handleStartTraining = (trainingId: string) => {
    startTraining(trainingId);
    setProgressData(getAllProgress());
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("Tümü");
    setSelectedLevel("Tümü");
    setSortBy("default");
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
            <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
              {UI_TEXTS.trainings.title}
            </h1>
            <p className="mt-2 text-lg text-slate-600">
              {UI_TEXTS.trainings.subtitle}
            </p>
          </div>
        </section>

        {/* Info Banner */}
        <section className="border-b border-slate-200 bg-indigo-50/50">
          <div className="mx-auto max-w-7xl px-4 py-4 md:px-8">
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💻</span>
                <p className="text-sm text-slate-700">
                  {UI_TEXTS.trainings.infoBanner.message}
                </p>
              </div>
              <Link
                href="/#nasil-calisir"
                className="text-sm font-semibold text-indigo-600 transition hover:text-indigo-700"
              >
                {UI_TEXTS.trainings.infoBanner.link} →
              </Link>
            </div>
          </div>
        </section>

        {/* Resume Banner */}
        {hasInProgress && (
          <section className="border-b border-slate-200 bg-white py-6">
            <ResumeBanner
              inProgressCount={Object.values(progressData).filter(
                (p) => p.status === "in_progress",
              ).length}
            />
          </section>
        )}

        {/* Starter Guide (if all not started) */}
        {allNotStarted && filteredAndSortedTrainings.length > 0 && (
          <StarterGuide onStart={handleStartTraining} />
        )}

        {/* Filters */}
        <section className="border-b border-slate-200 bg-white py-6">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <FiltersBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedLevel={selectedLevel}
              onLevelChange={setSelectedLevel}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onClearFilters={handleClearFilters}
            />
          </div>
        </section>

        {/* Trainings Grid */}
        <section className="mx-auto max-w-7xl px-4 py-8 md:px-8">
          {filteredAndSortedTrainings.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredAndSortedTrainings.map((training) => {
                const progress = progressData[training.id];
                const status = progress?.status || "not_started";
                const progressPercent = progress?.progressPercent || 0;

                return (
                  <TrainingCard
                    key={training.id}
                    training={training}
                    status={status}
                    progressPercent={progressPercent}
                    onStart={handleStartTraining}
                  />
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
              <p className="text-xl font-semibold text-slate-900">
                {UI_TEXTS.trainings.emptyState.title}
              </p>
              <p className="mt-2 text-slate-600">
                {UI_TEXTS.trainings.emptyState.description}
              </p>
              <button
                onClick={handleClearFilters}
                className="mt-4 rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                {UI_TEXTS.trainings.emptyState.clearFilters}
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

