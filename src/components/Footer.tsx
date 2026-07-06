import React from 'react';

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const Footer: React.FC = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <img src={withBase('logo.svg')} alt="JSLearn" />
        <span>JSLearn</span>
      </div>
      <p className="footer-copy">Learn JavaScript in 30 Days. A React and TypeScript showcase project.</p>
      <div className="footer-links">
        <a href="https://github.com" target="_blank" rel="noreferrer">View on GitHub</a>
      </div>
    </div>
  </footer>
);

export default Footer;
