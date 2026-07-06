import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import { ToastProvider } from './context/ToastContext';
import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <ToastProvider>
        <AuthProvider>
          <ProgressProvider>
            <App />
          </ProgressProvider>
        </AuthProvider>
      </ToastProvider>
    </HashRouter>
  </React.StrictMode>
);
