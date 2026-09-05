import React from 'react';

export default function Toast({ toast }) {
  if (!toast.show) return null;

  const type = toast.type || 'success';

  const iconMap = {
    success: 'fa-check',
    warning: 'fa-triangle-exclamation',
    info: 'fa-circle-info'
  };

  return (
    <div
      className={`toast-notification show toast-${type}`}
      role="status"
      aria-live="polite"
    >
      <div className={`toast-icon ${type}`}>
        <i className={`fa-solid ${iconMap[type] || 'fa-check'}`}></i>
      </div>
      <span>{toast.message}</span>
    </div>
  );
}
