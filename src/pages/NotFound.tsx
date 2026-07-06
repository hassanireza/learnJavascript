import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => (
  <div className="empty-state">
    <h1>404: Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <Link to="/">← Back Home</Link>
  </div>
);

export default NotFound;
