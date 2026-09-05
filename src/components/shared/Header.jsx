import React from 'react';

export default function Header({ profileSaved, onOpenNewTemplateModal, onClearDraft }) {
  return (
    <header className="app-header">
      <div className="brand-section">
        <div className="brand-logo" aria-hidden="true">
          <i className="fa-solid fa-paper-plane"></i>
        </div>
        <div className="brand-titles">
          <h1>
            ColdReach Studio{' '}
            <span className="version-pill">Production Ready</span>
          </h1>
          <p className="brand-subtitle">
            Smart Cold Message & Email Generator for Recruiters, Referrals & Founders
          </p>
        </div>
      </div>

      <div className="header-actions-group">
        <button
          type="button"
          className="btn-header-secondary"
          onClick={onClearDraft}
          title="Clear active form inputs"
        >
          <i className="fa-solid fa-rotate-left"></i>
          <span>Reset Draft</span>
        </button>

        <button
          type="button"
          className="btn-header-primary"
          onClick={onOpenNewTemplateModal}
          title="Create a custom template in the browser"
        >
          <i className="fa-solid fa-plus"></i>
          <span>New Template</span>
        </button>

        <div className="status-pill" title="Changes are automatically persisted">
          <span className="pulse-dot"></span>
          <span>{profileSaved ? 'Draft Autosaved' : 'Draft Saved'}</span>
        </div>
      </div>
    </header>
  );
}
