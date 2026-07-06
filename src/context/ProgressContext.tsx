import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import type { Certificate, ExamAttempt, ExamAnswer, LessonProgressMap } from '../types';
import { LESSONS } from '../data/lessons';
import { loadJSON, saveJSON } from '../utils/storage';
import { generateAttemptId, generateCertId } from '../utils/certificate';

export const PASSING_SCORE = 70;
export const MAX_ATTEMPTS_PER_DAY = 3;

interface SubmitExamInput {
  answers: Record<number, string>;
  holderName: string;
}

interface ProgressContextValue {
  progress: LessonProgressMap;
  totalLessons: number;
  completedCount: number;
  progressPercent: number;
  allLessonsComplete: boolean;
  isLessonComplete: (day: number) => boolean;
  markLessonComplete: (day: number) => void;
  markLessonIncomplete: (day: number) => void;
  attempts: ExamAttempt[];
  bestPassingAttempt: ExamAttempt | undefined;
  lastAttempt: ExamAttempt | undefined;
  attemptsToday: number;
  submitExam: (input: SubmitExamInput) => ExamAttempt;
  certificate: Certificate | null;
  resetAllProgress: () => void;
}

const ProgressContext = createContext<ProgressContextValue | undefined>(undefined);

const PROGRESS_KEY = 'lesson-progress';
const ATTEMPTS_KEY = 'exam-attempts';
const CERT_KEY = 'certificate';

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<LessonProgressMap>(() =>
    loadJSON<LessonProgressMap>(PROGRESS_KEY, {})
  );
  const [attempts, setAttempts] = useState<ExamAttempt[]>(() =>
    loadJSON<ExamAttempt[]>(ATTEMPTS_KEY, [])
  );
  const [certificate, setCertificate] = useState<Certificate | null>(() =>
    loadJSON<Certificate | null>(CERT_KEY, null)
  );

  const totalLessons = LESSONS.length;

  const completedCount = useMemo(
    () => Object.values(progress).filter((p) => p.completed).length,
    [progress]
  );

  const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
  const allLessonsComplete = totalLessons > 0 && completedCount >= totalLessons;

  const isLessonComplete = useCallback((day: number) => !!progress[day]?.completed, [progress]);

  const markLessonComplete = useCallback((day: number) => {
    setProgress((prev) => {
      const next: LessonProgressMap = {
        ...prev,
        [day]: { completed: true, completedAt: new Date().toISOString() },
      };
      saveJSON(PROGRESS_KEY, next);
      return next;
    });
  }, []);

  const markLessonIncomplete = useCallback((day: number) => {
    setProgress((prev) => {
      const next: LessonProgressMap = {
        ...prev,
        [day]: { completed: false, completedAt: null },
      };
      saveJSON(PROGRESS_KEY, next);
      return next;
    });
  }, []);

  const bestPassingAttempt = useMemo(
    () => attempts.find((a) => a.passed),
    [attempts]
  );
  const lastAttempt = attempts[0];

  const attemptsToday = useMemo(() => {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    return attempts.filter((a) => new Date(a.startedAt) >= startOfDay).length;
  }, [attempts]);

  const submitExam = useCallback(
    ({ answers, holderName }: SubmitExamInput): ExamAttempt => {
      const startedAt = new Date().toISOString();
      const examAnswers: ExamAnswer[] = LESSONS.filter((l) => answers[l.day] !== undefined).map(
        (lesson) => {
          const chosen = answers[lesson.day] ?? '';
          return {
            day: lesson.day,
            question: lesson.quiz.question,
            chosen,
            correct: lesson.quiz.correct,
            isCorrect: chosen === lesson.quiz.correct,
            explanation: lesson.quiz.explanation,
            options: lesson.quiz.options,
          };
        }
      );

      const correctCount = examAnswers.filter((a) => a.isCorrect).length;
      const score = examAnswers.length > 0 ? Math.round((correctCount / examAnswers.length) * 1000) / 10 : 0;
      const passed = score >= PASSING_SCORE;

      const attempt: ExamAttempt = {
        id: generateAttemptId(),
        startedAt,
        finishedAt: new Date().toISOString(),
        score,
        passed,
        answers: examAnswers,
      };

      setAttempts((prev) => {
        const next = [attempt, ...prev];
        saveJSON(ATTEMPTS_KEY, next);
        return next;
      });

      if (passed) {
        setCertificate((prev) => {
          if (prev) return prev;
          const cert: Certificate = {
            certId: generateCertId(),
            holderName: holderName || 'Anonymous Learner',
            score,
            issuedAt: new Date().toISOString(),
            attemptId: attempt.id,
          };
          saveJSON(CERT_KEY, cert);
          return cert;
        });
      }

      return attempt;
    },
    []
  );

  const resetAllProgress = useCallback(() => {
    setProgress({});
    setAttempts([]);
    setCertificate(null);
    saveJSON(PROGRESS_KEY, {});
    saveJSON(ATTEMPTS_KEY, []);
    saveJSON(CERT_KEY, null);
  }, []);

  const value = useMemo<ProgressContextValue>(
    () => ({
      progress,
      totalLessons,
      completedCount,
      progressPercent,
      allLessonsComplete,
      isLessonComplete,
      markLessonComplete,
      markLessonIncomplete,
      attempts,
      bestPassingAttempt,
      lastAttempt,
      attemptsToday,
      submitExam,
      certificate,
      resetAllProgress,
    }),
    [
      progress,
      totalLessons,
      completedCount,
      progressPercent,
      allLessonsComplete,
      isLessonComplete,
      markLessonComplete,
      markLessonIncomplete,
      attempts,
      bestPassingAttempt,
      lastAttempt,
      attemptsToday,
      submitExam,
      certificate,
      resetAllProgress,
    ]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
};

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within a ProgressProvider');
  return ctx;
}
