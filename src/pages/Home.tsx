import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const STAGES = [
  { num: '01', title: 'JS Fundamentals', desc: 'Variables, data types, operators, conditionals, loops, and functions.', days: 'Days 1-6' },
  { num: '02', title: 'Data Structures', desc: 'Arrays, array methods, objects, object methods, and strings in depth.', days: 'Days 7-11' },
  { num: '03', title: 'The Browser and DOM', desc: 'DOM manipulation, events, forms, validation, and building a to-do app.', days: 'Days 12-15' },
  { num: '04', title: 'Modern JavaScript', desc: 'Scope, closures, ES6+ syntax, spread/rest, higher-order functions, error handling.', days: 'Days 16-20' },
  { num: '05', title: 'Async, OOP and Real World', desc: 'Promises, async/await, Fetch API, localStorage, classes, modules, regex, debugging.', days: 'Days 21-30' },
];

const STEPS = [
  { num: '01', title: 'Jump Right In', desc: 'No account required. Open the dashboard and start learning immediately.' },
  { num: '02', title: 'Learn Daily', desc: 'Study one lesson per day. Each takes 40 to 60 minutes with a hands-on project.' },
  { num: '03', title: 'Take the Exam', desc: 'Whenever you feel ready, take the final exam. You need 70% or higher to pass.' },
  { num: '04', title: 'Get Certified', desc: 'Download your certificate and share it directly to LinkedIn, with no login needed.' },
];

export const Home: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <header className="hero">
        <div className="hero-badge">30 Day Course · Free, No Login Required</div>
        <h1 className="hero-title">
          <span className="line">Master</span>
          <span className="line highlight">JavaScript</span>
          <span className="line">in 30 Days.</span>
        </h1>
        <p className="hero-subtitle">
          From variables to async/await, build 30 real projects and earn a LinkedIn shareable
          certificate. Every lesson is unlocked from day one and navigation is always free, so
          jump forward, go back, and learn at your own pace.
        </p>
        <div className="hero-cta">
          {isAuthenticated ? (
            <Link to="/dashboard" className="btn-glow">Continue Learning →</Link>
          ) : (
            <>
              <Link to="/dashboard" className="btn-glow">Start Learning Free</Link>
              <Link to="/login" className="btn-ghost">Log In (Demo)</Link>
            </>
          )}
        </div>
        <div className="hero-stats">
          <div className="hstat"><span>30</span> Lessons</div>
          <div className="hstat-divider"></div>
          <div className="hstat"><span>30</span> Projects</div>
          <div className="hstat-divider"></div>
          <div className="hstat"><span>1</span> Certificate</div>
        </div>
      </header>

      <section className="curriculum-section">
        <div className="section-header">
          <h2>What You Will Learn</h2>
          <div className="line-divider"></div>
        </div>
        <div className="stages-grid">
          {STAGES.map((s) => (
            <div className="stage-card" key={s.num}>
              <div className="stage-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="stage-days">{s.days}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="how-section">
        <div className="glass-panel">
          <h2>How It Works</h2>
          <div className="steps-grid">
            {STEPS.map((s) => (
              <div className="step-item" key={s.num}>
                <div className="step-icon">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta-section">
        <div className="home-cta-content">
          <h2>Ready to become a<br /><span className="highlight">JavaScript developer?</span></h2>
          <p>No sign up required. Your progress is saved right in this browser.</p>
          <Link to="/dashboard" className="btn-glow">Go to Dashboard →</Link>
        </div>
      </section>
    </>
  );
};

export default Home;
