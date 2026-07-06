import React from 'react';
import { useToast } from '../context/ToastContext';

export const ToastBar: React.FC = () => {
  const { toasts, dismissToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="messages-bar">
      {toasts.map((toast) => (
        <div key={toast.id} className={`message message-${toast.kind}`}>
          <span>{toast.text}</span>
          <button className="msg-close" onClick={() => dismissToast(toast.id)}>
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToastBar;
