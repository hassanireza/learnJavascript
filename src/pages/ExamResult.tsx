import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useProgress, PASSING_SCORE } from '../context/ProgressContext';

export const ExamResult: React.FC = () => {
  const { attemptId } = useParams<{ attemptId: string }>();
  const { attempts, certificate } = useProgress();

  const attempt = attempts.find((a) => a.id === attemptId);

  if (!attempt) {
    return <Navigate to="/exam" replace />;
  }

  const correctCount = attempt.answers.filter((a) => a.isCorrect).length;

  return (
    <div className="exam-page exam-result-page">
      <div className={`result-hero ${attempt.passed ? 'result-pass' : 'result-fail'}`}>
        <div className="result-icon">{attempt.passed ? '🎉' : '📚'}</div>
        <h1>{attempt.passed ? 'You Passed!' : 'Almost There'}</h1>
        <div className="result-score-big">{attempt.score}%</div>
        <p>{correctCount} / {attempt.answers.length} correct · Pass mark: {PASSING_SCORE}%</p>

        {attempt.passed && certificate ? (
          <Link to={`/certificate/${certificate.certId}`} className="btn-glow" style={{ marginTop: 16 }}>
            View Your Certificate →
          </Link>
        ) : (
          <>
            <p className="result-retry-msg">
              You need {PASSING_SCORE}% to pass. Review the questions below and try again whenever
              you are ready.
            </p>
            <Link to="/exam" className="btn-outline" style={{ marginTop: 16 }}>Try Again</Link>
          </>
        )}
      </div>

      <div className="result-breakdown">
        <h2>Answer Breakdown</h2>
        {attempt.answers.map((r, idx) => (
          <div className={`result-item ${r.isCorrect ? 'result-correct' : 'result-wrong'}`} key={r.day}>
            <div className="result-item-header">
              <span className="result-mark">{r.isCorrect ? '✓' : '✗'}</span>
              <p className="result-q">{idx + 1}. {r.question}</p>
            </div>
            {!r.isCorrect && (
              <div className="result-detail">
                <span className="result-your">
                  Your answer: <strong>{r.chosen ? `${r.chosen}: ${r.options[r.chosen as 'A' | 'B' | 'C' | 'D']}` : '(not answered)'}</strong>
                </span>
                <span className="result-correct-ans">
                  Correct: <strong>{r.correct}: {r.options[r.correct as 'A' | 'B' | 'C' | 'D']}</strong>
                </span>
                {r.explanation && <p className="result-explanation">{r.explanation}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamResult;
