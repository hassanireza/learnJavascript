import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { LESSONS, STAGE_LABELS } from '../data/lessons';
import { useProgress } from '../context/ProgressContext';
import { useToast } from '../context/ToastContext';
import Markdown from '../components/Markdown';

export const LessonPage: React.FC = () => {
  const { day } = useParams<{ day: string }>();
  const dayNum = Number(day);
  const { isLessonComplete, markLessonComplete } = useProgress();
  const { showToast } = useToast();

  const lesson = useMemo(() => LESSONS.find((l) => l.day === dayNum), [dayNum]);
  const prevLesson = useMemo(
    () => LESSONS.filter((l) => l.day < dayNum).sort((a, b) => b.day - a.day)[0],
    [dayNum]
  );
  const nextLesson = useMemo(
    () => LESSONS.filter((l) => l.day > dayNum).sort((a, b) => a.day - b.day)[0],
    [dayNum]
  );

  if (!lesson) {
    return <Navigate to="/dashboard" replace />;
  }

  const completed = isLessonComplete(lesson.day);

  const handleComplete = () => {
    markLessonComplete(lesson.day);
    showToast(`Day ${lesson.day} marked complete!`, 'success');
  };

  return (
    <div className="lesson-page">
      <div className="lesson-hero">
        <div className="lesson-hero-meta">
          <span className="lesson-stage-tag">Stage {lesson.stage} · {STAGE_LABELS[lesson.stage]}</span>
          <span className="lesson-est">⏱ {lesson.estMinutes} min</span>
        </div>
        <h1 className="lesson-hero-title">
          <span className="day-badge">Day {lesson.day}</span>
          {lesson.title}
        </h1>
        <p className="lesson-hero-sub">{lesson.subtitle}</p>
        {completed && <div className="completed-badge">✓ Completed</div>}
      </div>

      <div className="lesson-layout">
        <article className="lesson-content">
          <Markdown content={lesson.contentMd} />
        </article>

        <aside className="lesson-sidebar">
          <div className="sidebar-card">
            <h3>Your Progress</h3>
            <div className={`sidebar-status ${completed ? 'status-done' : 'status-pending'}`}>
              {completed ? '✓ Lesson Complete' : 'In Progress'}
            </div>
            {!completed && (
              <button type="button" className="btn-full btn-glow" onClick={handleComplete}>
                Mark as Complete ✓
              </button>
            )}
          </div>

          {lesson.projectName && (
            <div className="sidebar-card sidebar-project">
              <h3>🛠 Today's Project</h3>
              <strong>{lesson.projectName}</strong>
              <p>{lesson.projectDesc}</p>
            </div>
          )}

          <div className="sidebar-card sidebar-nav">
            {prevLesson && (
              <Link to={`/lesson/${prevLesson.day}`} className="lesson-nav-btn">
                ← Day {prevLesson.day}
              </Link>
            )}
            <Link to="/dashboard" className="lesson-nav-btn lesson-nav-center">All Lessons</Link>
            {nextLesson && (
              <Link to={`/lesson/${nextLesson.day}`} className="lesson-nav-btn lesson-nav-right">
                Day {nextLesson.day} →
              </Link>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default LessonPage;
