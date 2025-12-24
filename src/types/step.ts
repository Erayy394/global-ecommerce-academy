/**
 * Eğitim adımları için type tanımları
 */

export type StepType = "lesson" | "task" | "checkpoint";

export interface BaseStep {
  id: string;
  type: StepType;
  title: string;
  description: string;
}

export interface LessonStep extends BaseStep {
  type: "lesson";
  content: string; // Markdown veya HTML içerik
}

export interface TaskStep extends BaseStep {
  type: "task";
  tasks: TaskItem[];
  requiredTasksCount?: number; // Kaç task tamamlanmalı (default: tümü)
  lessonContent?: string; // Opsiyonel: Task öncesi kısa lesson içeriği
}

export interface TaskItem {
  id: string;
  type: "checkbox" | "field" | "textarea";
  label: string;
  placeholder?: string; // field ve textarea için
  required?: boolean;
}

export interface CheckpointStep extends BaseStep {
  type: "checkpoint";
  questions: CheckpointQuestion[];
  requiredCorrectCount?: number; // Kaç doğru cevap gerekli (default: tümü)
}

export interface CheckpointQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string; // Doğru/yanlış açıklaması
}

export type TrainingStep = LessonStep | TaskStep | CheckpointStep;

export interface TrainingContent {
  trainingId: string;
  steps: TrainingStep[];
}

