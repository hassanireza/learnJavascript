import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { certificate } = useProgress();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        <img src={withBase('logo.svg')} alt="JSLearn" className="logo-img" />
        <span className="logo-text">JSLearn</span>
      </Link>

      <div className="menu-toggle" id="menu-toggle" onClick={() => setOpen((o) => !o)}>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links${open ? ' open' : ''}`} key={location.pathname}>
        <li><Link to="/dashboard" onClick={closeMenu}>Dashboard</Link></li>
        <li><Link to="/profile" onClick={closeMenu}>Profile</Link></li>
        {certificate && (
          <li>
            <Link to={`/certificate/${certificate.certId}`} className="nav-cert-link" onClick={closeMenu}>
              My Certificate
            </Link>
          </li>
        )}
        {isAuthenticated ? (
          <>
            <li><span className="nav-demo-tag">Demo: {user?.username}</span></li>
            <li>
              <button
                type="button"
                className="btn-nav-outline"
                onClick={() => {
                  logout();
                  closeMenu();
                }}
              >
                Log Out
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login" onClick={closeMenu}>Log In</Link></li>
            <li><Link to="/register" className="btn-primary" onClick={closeMenu}>Get Started Free</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
