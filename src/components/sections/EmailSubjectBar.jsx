import React, { useState } from 'react';

export default function EmailSubjectBar({
  subjectText,
  onCopySubject,
  customSubjectOverride,
  onCustomSubjectChange
}) {
  const [isEditing, setIsEditing] = useState(false);

  if (!subjectText && customSubjectOverride === null) return null;

  const displaySubject = customSubjectOverride !== null ? customSubjectOverride : subjectText;

  return (
    <div className="email-subject-container">
      <div className="subject-info">
        <div className="subject-label-row">
          <span className="subject-label">
            <i className="fa-regular fa-bookmark"></i> Subject Line
          </span>
          <button
            type="button"
            className="btn-edit-subject"
            onClick={() => setIsEditing(prev => !prev)}
            title="Edit subject line directly"
          >
            <i className={`fa-solid ${isEditing ? 'fa-check' : 'fa-pen'}`}></i>
            <span>{isEditing ? 'Done' : 'Edit'}</span>
          </button>
        </div>

        {isEditing ? (
          <input
            type="text"
            className="custom-input subject-input-inline"
            value={displaySubject}
            onChange={(e) => onCustomSubjectChange(e.target.value)}
            placeholder="Enter custom email subject..."
          />
        ) : (
          <div className="subject-text">{displaySubject}</div>
        )}
      </div>

      <button
        type="button"
        className="copy-subject-btn"
        onClick={() => onCopySubject(displaySubject)}
        title="Copy Subject Line"
      >
        <i className="fa-regular fa-copy"></i> Copy
      </button>
    </div>
  );
}
