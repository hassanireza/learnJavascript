import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

export const Register: React.FC = () => {
  const { register } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register({
      firstName: firstName.trim() || 'Demo',
      lastName: lastName.trim() || 'Learner',
      username: username.trim() || 'guest',
      email: email.trim() || 'guest@example.com',
    });
    showToast(`Welcome to JSLearn, ${firstName.trim() || 'friend'}!`, 'success');
    navigate('/dashboard');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p className="auth-sub">Join to personalize your learning dashboard.</p>
        <div className="auth-demo-notice">
          This registration form is a showcase only. Nothing is sent to a server and no account is
          actually created anywhere. Everything you type is stored locally in this browser so you
          can see how the profile screen would look. Courses, the exam, and the certificate all
          work perfectly well without registering.
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <input id="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Ada" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <input id="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Lovelace" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="ada_lovelace" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ada@example.com" />
          </div>
          <button type="submit" className="btn-full btn-glow">Create Account</button>
        </form>
        <p className="auth-footer-note">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
