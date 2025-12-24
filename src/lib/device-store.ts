"use client";

import type {
  DeviceStore,
  TrainingProgress,
  TrainingStatus,
} from "@/types/training";

const STORE_KEY = "gea_device_store_v1";

/**
 * Device store utility - LocalStorage tabanlı ilerleme takibi
 * İleride IndexedDB'ye genişletilebilir
 */

/**
 * Store'u başlat (yoksa oluştur)
 */
export function ensureDeviceStoreInitialized(): DeviceStore {
  if (typeof window === "undefined") {
    return { trainings: {} };
  }

  const existing = localStorage.getItem(STORE_KEY);
  if (existing) {
    try {
      return JSON.parse(existing) as DeviceStore;
    } catch {
      // Hatalı veri, yeni store oluştur
    }
  }

  const newStore: DeviceStore = { trainings: {} };
  saveDeviceStore(newStore);
  return newStore;
}

/**
 * Store'u oku
 */
export function getDeviceStore(): DeviceStore {
  return ensureDeviceStoreInitialized();
}

/**
 * Store'u kaydet
 */
export function saveDeviceStore(store: DeviceStore): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORE_KEY, JSON.stringify(store));
}

/**
 * Belirli bir eğitimin ilerlemesini al
 */
export function getTrainingProgress(
  trainingId: string,
): TrainingProgress | null {
  const store = getDeviceStore();
  return store.trainings[trainingId] || null;
}

/**
 * Eğitimi başlat (status: in_progress)
 */
export function startTraining(trainingId: string): void {
  const store = getDeviceStore();
  const now = new Date().toISOString();

  store.trainings[trainingId] = {
    status: "in_progress",
    progressPercent: 1,
    lastStepIndex: 0,
    updatedAt: now,
  };

  saveDeviceStore(store);
}

/**
 * Eğitimin durumunu güncelle
 */
export function updateTrainingStatus(
  trainingId: string,
  status: TrainingStatus,
  progressPercent: number,
  lastStepIndex: number,
): void {
  const store = getDeviceStore();
  const now = new Date().toISOString();

  store.trainings[trainingId] = {
    status,
    progressPercent: Math.min(100, Math.max(0, progressPercent)),
    lastStepIndex,
    updatedAt: now,
  };

  saveDeviceStore(store);
}

/**
 * Tüm ilerlemeleri al
 */
export function getAllProgress(): DeviceStore["trainings"] {
  const store = getDeviceStore();
  return store.trainings;
}

/**
 * Rehber görüldü mü kontrol et
 */
export function hasSeenTour(slug: string): boolean {
  const store = getDeviceStore();
  return store.meta?.toursSeen?.[slug] === true;
}

/**
 * Rehber görüldü olarak işaretle
 */
export function markTourSeen(slug: string): void {
  const store = getDeviceStore();
  if (!store.meta) {
    store.meta = { toursSeen: {}, stepState: {} };
  }
  if (!store.meta.toursSeen) {
    store.meta.toursSeen = {};
  }
  store.meta.toursSeen[slug] = true;
  saveDeviceStore(store);
}

/**
 * Step state'i al
 */
export function getStepState(
  trainingId: string,
  stepIndex: number,
): DeviceStore["meta"]["stepState"][string][number] | null {
  const store = getDeviceStore();
  return store.meta?.stepState?.[trainingId]?.[stepIndex] || null;
}

/**
 * Step state'i kaydet
 */
export function saveStepState(
  trainingId: string,
  stepIndex: number,
  state: DeviceStore["meta"]["stepState"][string][number],
): void {
  const store = getDeviceStore();
  if (!store.meta) {
    store.meta = { toursSeen: {}, stepState: {} };
  }
  if (!store.meta.stepState) {
    store.meta.stepState = {};
  }
  if (!store.meta.stepState[trainingId]) {
    store.meta.stepState[trainingId] = {};
  }
  store.meta.stepState[trainingId][stepIndex] = state;
  saveDeviceStore(store);
}

