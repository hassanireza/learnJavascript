import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

export const Login: React.FC = () => {
  const { login } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(username.trim() || 'guest');
    showToast('Welcome back! This is a demo login, no password was checked.', 'success');
    navigate('/dashboard');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Log In</h1>
        <p className="auth-sub">Sign in to personalize your dashboard.</p>
        <div className="auth-demo-notice">
          This login is a showcase only. No account is created on any server and no password is
          verified. Type anything and continue. You never need to log in to take lessons, sit the
          exam, or download your certificate.
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. ada_lovelace"
              autoComplete="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Any value works in this demo"
              autoComplete="current-password"
            />
          </div>
          <button type="submit" className="btn-full btn-glow">Log In</button>
        </form>
        <p className="auth-footer-note">
          Do not have an account? <Link to="/register">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
