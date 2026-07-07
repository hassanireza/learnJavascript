import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { useToast } from '../context/ToastContext';

export const Profile: React.FC = () => {
  const { user, isAuthenticated, updateProfile } = useAuth();
  const { completedCount, totalLessons, certificate, resetAllProgress } = useProgress();
  const { showToast } = useToast();

  const [firstName, setFirstName] = useState(user?.firstName ?? '');
  const [lastName, setLastName] = useState(user?.lastName ?? '');
  const [email, setEmail] = useState(user?.email ?? '');

  const handleReset = () => {
    const confirmed = window.confirm(
      'This will erase all lesson progress, exam attempts, and your certificate from this browser. This cannot be undone. Continue?'
    );
    if (!confirmed) return;
    resetAllProgress();
    showToast('Your progress has been reset.', 'info');
  };

  if (!isAuthenticated) {
    return (
      <div className="profile-page">
        <div className="empty-state">
          <h1>No Profile Yet</h1>
          <p>
            You are browsing as a guest, which is perfectly fine, all lessons, the exam, and your
            certificate work without an account.
          </p>
          <p>
            If you would like to see a personalized profile screen, this is a showcase feature you
            can try with <Link to="/login">a demo login</Link> or by{' '}
            <Link to="/register">creating a demo account</Link>.
          </p>
        </div>

        <div className="profile-card" style={{ marginBottom: 20 }}>
          <h3 style={{ marginTop: 0 }}>Your Progress</h3>
          <p style={{ color: 'var(--muted)' }}>
            {completedCount} / {totalLessons} lessons complete
            {certificate && (
              <>
                {' '}· Certificate earned:{' '}
                <Link to={`/certificate/${certificate.certId}`}>{certificate.certId}</Link>
              </>
            )}
          </p>
        </div>

        <div className="profile-card">
          <h3 style={{ marginTop: 0 }}>Reset Progress</h3>
          <p style={{ color: 'var(--muted)', fontSize: '0.88rem', marginBottom: 16 }}>
            Clears all lesson completions, exam attempts, and your certificate from this browser.
          </p>
          <button type="button" className="btn-outline" onClick={handleReset}>
            Reset All Progress
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ firstName, lastName, email });
    showToast('Profile updated successfully.', 'success');
  };

  const initials = `${user?.firstName?.[0] ?? ''}${user?.lastName?.[0] ?? ''}`.toUpperCase();

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-avatar">{initials || 'JS'}</div>
        <div>
          <h1 style={{ margin: 0 }}>{user?.firstName} {user?.lastName}</h1>
          <p style={{ margin: '4px 0 0', color: 'var(--muted)' }}>@{user?.username}</p>
        </div>
      </div>

      <div className="profile-card" style={{ marginBottom: 20 }}>
        <h3 style={{ marginTop: 0 }}>Your Progress</h3>
        <p style={{ color: 'var(--muted)' }}>
          {completedCount} / {totalLessons} lessons complete
          {certificate && (
            <>
              {' '}· Certificate earned:{' '}
              <Link to={`/certificate/${certificate.certId}`}>{certificate.certId}</Link>
            </>
          )}
        </p>
      </div>

      <div className="profile-card">
        <h3 style={{ marginTop: 0 }}>Edit Profile</h3>
        <div className="auth-demo-notice">
          This is a showcase profile form. Changes are saved to your browser only.
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button type="submit" className="btn-glow">Save Changes</button>
        </form>
      </div>

      <div className="profile-card" style={{ marginTop: 20 }}>
        <h3 style={{ marginTop: 0 }}>Reset Progress</h3>
        <p style={{ color: 'var(--muted)', fontSize: '0.88rem', marginBottom: 16 }}>
          Clears all lesson completions, exam attempts, and your certificate from this browser.
          Your profile details above are not affected.
        </p>
        <button type="button" className="btn-outline" onClick={handleReset}>
          Reset All Progress
        </button>
      </div>
    </div>
  );
};

export default Profile;
