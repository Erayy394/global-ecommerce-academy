/**
 * Eğitim ve ilerleme takibi için type tanımları
 */

export type TrainingCategory =
  | "Pazaryeri"
  | "Ödeme"
  | "Firma"
  | "Web Site"
  | "Operasyon"
  | "Strateji";

export type TrainingLevel = "Başlangıç" | "Orta" | "İleri";

export type TrainingStatus =
  | "not_started"
  | "in_progress"
  | "completed"
  | "exam_passed";

export interface Training {
  id: string;
  slug: string;
  title: string;
  summary: string;
  stepsCount: number;
  quizQuestionsCount: number;
  estimatedHours: number;
  category: TrainingCategory;
  level: TrainingLevel;
  tags: string[];
  order: number;
}

export interface TrainingProgress {
  status: TrainingStatus;
  progressPercent: number;
  lastStepIndex: number;
  updatedAt: string;
}

export interface DeviceStore {
  trainings: {
    [trainingId: string]: TrainingProgress;
  };
  meta?: {
    toursSeen?: {
      [slug: string]: boolean;
    };
    stepState?: {
      [trainingId: string]: {
        [stepIndex: number]: {
          completed: boolean;
          taskData?: Record<string, any>;
          checkpointAnswers?: Record<number, number>;
        };
      };
    };
  };
}

