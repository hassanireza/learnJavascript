import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProgress, PASSING_SCORE, MAX_ATTEMPTS_PER_DAY } from '../context/ProgressContext';
import { useCertificateName } from '../utils/useCertificateName';

export const ExamIntro: React.FC = () => {
  const { allLessonsComplete, completedCount, totalLessons, certificate, lastAttempt, attemptsToday } =
    useProgress();
  const [name, setName] = useCertificateName();
  const navigate = useNavigate();

  const canStart = attemptsToday < MAX_ATTEMPTS_PER_DAY;

  return (
    <div className="exam-page">
      <div className="exam-intro-card">
        <div className="exam-icon">🎓</div>
        <h1>JavaScript Final Exam</h1>
        <p className="exam-intro-sub">30 questions, one from each lesson, no strict time pressure</p>

        <div className="exam-rules">
          <div className="rule-item"><span>✓</span> 30 questions, one per lesson</div>
          <div className="rule-item"><span>✓</span> Multiple choice, 4 options each</div>
          <div className="rule-item"><span>✓</span> Pass mark: <strong>{PASSING_SCORE}%</strong> (21/30 correct)</div>
          <div className="rule-item"><span>✓</span> Max {MAX_ATTEMPTS_PER_DAY} attempts per day</div>
          <div className="rule-item"><span>✓</span> Certificate issued immediately on pass, no login required</div>
        </div>

        {!allLessonsComplete && (
          <div className="exam-last-attempt">
            You have completed {completedCount}/{totalLessons} lessons. You can take the exam any
            time, though finishing every lesson first is the best way to be ready.
          </div>
        )}

        {certificate ? (
          <div className="exam-already-passed">
            <p>🎉 You already passed! Your certificate is ready.</p>
            <Link to={`/certificate/${certificate.certId}`} className="btn-glow">View Certificate</Link>
          </div>
        ) : (
          <>
            {lastAttempt && !lastAttempt.passed && (
              <div className="exam-last-attempt">
                Last attempt: <strong>{lastAttempt.score}%</strong>, not passed.
              </div>
            )}

            <div className="form-group exam-guest-name">
              <label htmlFor="certName">Name for your certificate</label>
              <input
                id="certName"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ada Lovelace"
              />
            </div>

            {canStart ? (
              <button
                type="button"
                className="btn-glow exam-start-btn"
                onClick={() => navigate('/exam/take')}
              >
                Start Exam Now →
              </button>
            ) : (
              <div className="exam-last-attempt">
                Maximum {MAX_ATTEMPTS_PER_DAY} exam attempts reached for today. Please try again
                tomorrow.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ExamIntro;
