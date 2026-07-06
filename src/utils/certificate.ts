export function generateCertId(): string {
  const year = new Date().getFullYear();
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `LFS-JS30-${year}-${random}`;
}

export function getGrade(score: number): 'Distinction' | 'Merit' | 'Pass' {
  if (score >= 95) return 'Distinction';
  if (score >= 85) return 'Merit';
  return 'Pass';
}

export function generateAttemptId(): string {
  return `attempt-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
