"use client";

import { useState } from "react";
import type { TrainingCategory, TrainingLevel } from "@/types/training";
import { UI_TEXTS } from "@/constants/ui-texts";

interface FiltersBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: TrainingCategory | "Tümü";
  onCategoryChange: (category: TrainingCategory | "Tümü") => void;
  selectedLevel: TrainingLevel | "Tümü";
  onLevelChange: (level: TrainingLevel | "Tümü") => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  onClearFilters: () => void;
}

const categories: (TrainingCategory | "Tümü")[] = [
  "Tümü",
  "Pazaryeri",
  "Ödeme",
  "Firma",
  "Web Site",
  "Operasyon",
  "Strateji",
];

const levels: (TrainingLevel | "Tümü")[] = ["Tümü", "Başlangıç", "Orta", "İleri"];

const sortOptions = [
  { value: "default", label: UI_TEXTS.trainings.filters.sort.default },
  { value: "duration", label: UI_TEXTS.trainings.filters.sort.duration },
  { value: "level", label: UI_TEXTS.trainings.filters.sort.level },
  { value: "alphabetical", label: UI_TEXTS.trainings.filters.sort.alphabetical },
];

export default function FiltersBar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedLevel,
  onLevelChange,
  sortBy,
  onSortChange,
  onClearFilters,
}: FiltersBarProps) {
  const hasActiveFilters =
    searchQuery !== "" ||
    selectedCategory !== "Tümü" ||
    selectedLevel !== "Tümü" ||
    sortBy !== "default";

  return (
    <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Search */}
      <div>
        <label htmlFor="search" className="sr-only">
          {UI_TEXTS.trainings.filters.search}
        </label>
        <input
          id="search"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={UI_TEXTS.trainings.filters.search}
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      {/* Filters Row */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="mb-1 block text-xs font-medium text-slate-700"
          >
            {UI_TEXTS.trainings.filters.category.label}
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) =>
              onCategoryChange(e.target.value as TrainingCategory | "Tümü")
            }
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Level */}
        <div>
          <label
            htmlFor="level"
            className="mb-1 block text-xs font-medium text-slate-700"
          >
            {UI_TEXTS.trainings.filters.level.label}
          </label>
          <select
            id="level"
            value={selectedLevel}
            onChange={(e) =>
              onLevelChange(e.target.value as TrainingLevel | "Tümü")
            }
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          >
            {levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div>
          <label
            htmlFor="sort"
            className="mb-1 block text-xs font-medium text-slate-700"
          >
            {UI_TEXTS.trainings.filters.sort.label}
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Filters */}
        <div className="flex items-end">
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:bg-slate-50"
            >
              {UI_TEXTS.trainings.emptyState.clearFilters}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

