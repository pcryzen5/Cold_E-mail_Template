import React, { useState } from 'react';
import { PLATFORMS } from '../../data/platforms.js';

export default function MessagePreview({
  platformId,
  htmlContent,
  plainTextContent,
  customTextOverride,
  onCustomTextChange,
  onResetCustomText,
  highlightVars,
  onToggleHighlight,
  onCopyMessage,
  unfilledFields = [],
  copyStatusText = 'Copy Message'
}) {
  const [isEditMode, setIsEditMode] = useState(false);
  const platform = PLATFORMS[platformId] || PLATFORMS.whatsapp;

  // Active text to display / copy
  const activePlainText = customTextOverride !== null ? customTextOverride : plainTextContent;

  // Stats
  const charCount = activePlainText.length;
  const wordCount = activePlainText.trim() === '' ? 0 : activePlainText.trim().split(/\s+/).length;

  // Limit indicators
  let limitTag = null;
  if (platformId === 'linkedin') {
    if (charCount <= 300) {
      limitTag = (
        <span className="char-limit-tag safe">
          {charCount}/300 chars (Fits Connection Note)
        </span>
      );
    } else {
      limitTag = (
        <span className="char-limit-tag warning">
          {charCount} chars (InMail / Regular DM)
        </span>
      );
    }
  } else {
    limitTag = <span className="char-limit-tag safe">{wordCount} words</span>;
  }

  return (
    <div className="preview-container">
      <div className="preview-header">
        <div className="preview-title-badge">
          <h2>Message Output</h2>
          <span className={`platform-pill ${platform.id}`}>
            <i className={`fa-${platform.id === 'email' ? 'regular' : 'brands'} ${platform.icon}`}></i>{' '}
            {platform.name}
          </span>
          {customTextOverride !== null && (
            <span className="custom-edited-pill" title="You have typed manual customizations into the preview">
              <i className="fa-solid fa-pen-to-square"></i> Customized
            </span>
          )}
        </div>

        <div className="preview-tools">
          {/* Mode Switcher: Form View vs Direct Edit */}
          <button
            type="button"
            className={`toggle-highlight-btn ${isEditMode ? 'active' : ''}`}
            onClick={() => setIsEditMode(prev => !prev)}
            title="Toggle direct editing of the generated message"
          >
            <i className={`fa-solid ${isEditMode ? 'fa-eye' : 'fa-pen'}`}></i>
            <span>{isEditMode ? 'Preview Mode' : 'Direct Edit'}</span>
          </button>

          {!isEditMode && (
            <button
              type="button"
              className={`toggle-highlight-btn ${highlightVars ? 'active' : ''}`}
              onClick={onToggleHighlight}
              title="Toggle variable highlights"
            >
              <i className="fa-solid fa-highlighter"></i>
              <span>{highlightVars ? 'Highlights' : 'Plain'}</span>
            </button>
          )}

          {customTextOverride !== null && (
            <button
              type="button"
              className="btn-ghost-sm"
              onClick={onResetCustomText}
              title="Discard direct edits and revert back to formulaic generated output"
            >
              <i className="fa-solid fa-rotate-left"></i>
              <span>Revert</span>
            </button>
          )}
        </div>
      </div>

      {/* Missing Required Fields Alert Safeguard */}
      {unfilledFields.length > 0 && (
        <div className="unfilled-warning-banner">
          <i className="fa-solid fa-triangle-exclamation"></i>
          <div>
            <strong>Notice:</strong> {unfilledFields.length} unfilled field{unfilledFields.length > 1 ? 's' : ''}:{' '}
            <span>{unfilledFields.map(f => f.label).join(', ')}</span>
          </div>
        </div>
      )}

      <div className="preview-card-wrapper">
        <div className="preview-top-status">
          <div className="meta-stats">
            <span>
              <i className="fa-solid fa-align-left"></i> <strong>{charCount}</strong> chars
            </span>
            <span>
              <i className="fa-solid fa-feather-pointed"></i> <strong>{wordCount}</strong> words
            </span>
          </div>
          <div>{limitTag}</div>
        </div>

        {/* Dynamic Display: Editable Textarea vs Rendered Preview */}
        {isEditMode ? (
          <textarea
            className="message-edit-area"
            value={activePlainText}
            onChange={(e) => onCustomTextChange(e.target.value)}
            placeholder="Type your message here..."
            rows={12}
            aria-label="Direct message editor"
          />
        ) : (
          <div
            className="message-render-area"
            tabIndex={0}
            role="region"
            aria-label="Message Preview"
            dangerouslySetInnerHTML={{
              __html: customTextOverride !== null
                ? activePlainText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')
                : htmlContent
            }}
          />
        )}
      </div>

      {/* Actions Bar: Copy Only */}
      <div className="preview-actions-bar">
        <div className="copy-action-single">
          <button
            type="button"
            className="btn-primary-action btn-copy-full"
            onClick={() => onCopyMessage(activePlainText)}
          >
            <i className="fa-solid fa-copy"></i>
            <span>{copyStatusText}</span>
          </button>
        </div>

        <div className="platform-advisory-box">
          <i className="fa-solid fa-circle-info"></i>
          <span>
            {customTextOverride !== null
              ? 'You are copying your directly customized message.'
              : (platform.charLimitNotice || platform.description)}
          </span>
        </div>
      </div>
    </div>
  );
}
