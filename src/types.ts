export interface QuizOption {
  A: string;
  B: string;
  C: string;
  D: string;
}

export interface Quiz {
  question: string;
  options: QuizOption;
  correct: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export interface Lesson {
  day: number;
  slug: string;
  stage: number;
  title: string;
  subtitle: string;
  estMinutes: number;
  projectName: string;
  projectDesc: string;
  contentMd: string;
  quiz: Quiz;
}

export interface LessonProgressMap {
  [day: number]: {
    completed: boolean;
    completedAt: string | null;
  };
}

export interface ExamAnswer {
  day: number;
  question: string;
  chosen: string;
  correct: string;
  isCorrect: boolean;
  explanation: string;
  options: QuizOption;
}

export interface ExamAttempt {
  id: string;
  startedAt: string;
  finishedAt: string;
  score: number;
  passed: boolean;
  answers: ExamAnswer[];
}

export interface Certificate {
  certId: string;
  holderName: string;
  score: number;
  issuedAt: string;
  attemptId: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  bio: string;
  linkedinUrl: string;
  githubUrl: string;
}

export interface AuthUser {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}
