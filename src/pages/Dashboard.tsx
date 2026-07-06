import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { LESSONS, STAGE_LABELS } from '../data/lessons';

const RING_CIRCUMFERENCE = 263.9;

export const Dashboard: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const { isLessonComplete, completedCount, totalLessons, progressPercent, allLessonsComplete, certificate } =
    useProgress();

  const stages = useMemo(() => {
    const grouped = new Map<number, typeof LESSONS>();
    LESSONS.forEach((lesson) => {
      const list = grouped.get(lesson.stage) ?? [];
      list.push(lesson);
      grouped.set(lesson.stage, list);
    });
    return Array.from(grouped.entries()).sort((a, b) => a[0] - b[0]);
  }, []);

  const ringOffset = RING_CIRCUMFERENCE - (progressPercent / 100) * RING_CIRCUMFERENCE;
  const displayName = isAuthenticated ? user?.firstName : 'Learner';

  return (
    <div className="dashboard-page">
      <div className="dash-header">
        <div className="dash-welcome">
          <h1>Welcome{isAuthenticated ? ' back' : ''}, <span className="highlight">{displayName}</span></h1>
          <p className="dash-sub">{completedCount}/{totalLessons} lessons complete</p>
        </div>
        <div className="dash-progress-ring-wrap">
          <svg className="progress-ring" width="100" height="100" viewBox="0 0 100 100">
            <circle className="ring-bg" cx="50" cy="50" r="42" strokeWidth="8" fill="none" />
            <circle
              className="ring-fill"
              cx="50"
              cy="50"
              r="42"
              strokeWidth="8"
              fill="none"
              strokeDasharray={RING_CIRCUMFERENCE}
              strokeDashoffset={ringOffset}
            />
          </svg>
          <div className="ring-label">{progressPercent}%</div>
        </div>
      </div>

      {certificate ? (
        <div className="cert-banner">
          <div className="cert-banner-left">
            <span className="cert-banner-icon">🎓</span>
            <div>
              <strong>Certificate Earned!</strong>
              <p>{certificate.certId} · Score: {certificate.score}%</p>
            </div>
          </div>
          <div className="cert-banner-actions">
            <Link to={`/certificate/${certificate.certId}`} className="btn-sm btn-primary">View Certificate</Link>
          </div>
        </div>
      ) : allLessonsComplete ? (
        <div className="cert-banner cert-banner-ready">
          <div className="cert-banner-left">
            <span className="cert-banner-icon">🏁</span>
            <div>
              <strong>All Lessons Complete!</strong>
              <p>You are ready to take the Final Exam and earn your certificate.</p>
            </div>
          </div>
          <Link to="/exam" className="btn-sm btn-glow">Take Final Exam →</Link>
        </div>
      ) : null}

      {stages.map(([stageId, lessons]) => (
        <div className="stage-section" key={stageId}>
          <div className="stage-header">
            <div className="stage-pill">Stage {stageId}</div>
            <h2 className="stage-title">{STAGE_LABELS[stageId]}</h2>
          </div>
          <div className="lessons-grid">
            {lessons.map((lesson) => {
              const done = isLessonComplete(lesson.day);
              return (
                <Link
                  key={lesson.day}
                  to={`/lesson/${lesson.day}`}
                  className={`lesson-card${done ? ' lesson-done' : ''}`}
                >
                  <div className="lesson-day">Day {lesson.day}</div>
                  {done && <div className="lesson-check">✓</div>}
                  <h3 className="lesson-title">{lesson.title}</h3>
                  <p className="lesson-sub">
                    {lesson.subtitle.length > 70 ? `${lesson.subtitle.slice(0, 70)}...` : lesson.subtitle}
                  </p>
                  <div className="lesson-meta">
                    <span>⏱ {lesson.estMinutes} min</span>
                    <span className="lesson-arrow">→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
