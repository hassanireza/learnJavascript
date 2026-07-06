import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { LESSONS } from '../data/lessons';
import { useProgress } from '../context/ProgressContext';
import { useCertificateName } from '../utils/useCertificateName';

const EXAM_SECONDS = 45 * 60;

export const ExamTake: React.FC = () => {
  const { submitExam } = useProgress();
  const [name] = useCertificateName();
  const navigate = useNavigate();

  const questions = useMemo(() => LESSONS, []);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [secondsLeft, setSecondsLeft] = useState(EXAM_SECONDS);

  const handleSubmit = useCallback(() => {
    const attempt = submitExam({ answers, holderName: name || 'Anonymous Learner' });
    navigate(`/exam/result/${attempt.id}`);
  }, [answers, submitExam, name, navigate]);

  const handleSubmitRef = useRef(handleSubmit);
  useEffect(() => {
    handleSubmitRef.current = handleSubmit;
  }, [handleSubmit]);

  useEffect(() => {
    const tick = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(tick);
          handleSubmitRef.current();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(tick);
  }, []);

  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const seconds = String(secondsLeft % 60).padStart(2, '0');
  const answeredCount = Object.keys(answers).length;

  const selectAnswer = (day: number, letter: string) => {
    setAnswers((prev) => ({ ...prev, [day]: letter }));
  };

  return (
    <div className="exam-page exam-take-page">
      <div className="exam-take-header">
        <h1>JavaScript Final Exam</h1>
        <div className={`exam-timer${secondsLeft <= 300 ? ' timer-warning' : ''}`}>
          {minutes}:{seconds}
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {questions.map((lesson, idx) => {
          const chosen = answers[lesson.day];
          return (
            <div className="exam-question" key={lesson.day}>
              <div className="q-header">
                <span className="q-num">Q{idx + 1}</span>
                <p className="q-text">{lesson.quiz.question}</p>
              </div>
              <div className="q-options">
                {(['A', 'B', 'C', 'D'] as const).map((letter) => (
                  <label
                    key={letter}
                    className={`q-option${chosen === letter ? ' q-selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name={`q_${lesson.day}`}
                      value={letter}
                      checked={chosen === letter}
                      onChange={() => selectAnswer(lesson.day, letter)}
                    />
                    <span className="q-letter">{letter}</span>
                    <span className="q-opt-text">{lesson.quiz.options[letter]}</span>
                  </label>
                ))}
              </div>
            </div>
          );
        })}

        <div className="exam-submit-area">
          <div className="exam-answered">{answeredCount} / {questions.length} answered</div>
          <button type="submit" className="btn-glow">Submit Exam →</button>
        </div>
      </form>
    </div>
  );
};

export default ExamTake;
