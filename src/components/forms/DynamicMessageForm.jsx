import React from 'react';

const MULTILINE_KEYS = new Set([
  'oneLineProof',
  'specificProject',
  'specificDetail',
  'keyAchievement',
  'firstStep',
  'projectResult',
  'specificTopicOrTeam',
  'specificAreaOfNeed'
]);

export default function DynamicMessageForm({
  fields = [],
  formData = {},
  onChangeField,
  onFillSample,
  onClear,
  highlightMissing = false,
  onProceedToPreview
}) {
  return (
    <div className="dynamic-form-wrapper">
      <div className="form-header">
        <div className="form-title">
          <i className="fa-solid fa-sliders" style={{ color: 'var(--lime-accent)', fontSize: '0.95rem' }}></i>
          <span>Step 3: Fill Variables</span>
        </div>
        <div className="form-actions-quick">
          <button
            type="button"
            className="btn-ghost-sm"
            onClick={onFillSample}
            title="Pre-fill form with sample test data"
          >
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            <span>Sample Data</span>
          </button>
          <button
            type="button"
            className="btn-ghost-sm"
            onClick={onClear}
            title="Clear form values"
          >
            <i className="fa-solid fa-rotate-left"></i>
            <span>Clear</span>
          </button>
        </div>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="dynamic-fields-container">
          {fields.map(field => {
            const val = formData[field.key] || '';
            const isMissing = highlightMissing && field.required && !val.trim();
            const isMultiline = field.multiline || MULTILINE_KEYS.has(field.key);
            const isPhone = field.key === 'phone';

            return (
              <div key={field.key} className={`input-field-group ${isMissing ? 'has-error' : ''}`}>
                <div className="input-label-wrap">
                  <label className="input-label" htmlFor={`input-${field.key}`}>
                    <span>{field.label}</span>
                    {field.required && <span className="required-star">*</span>}
                    {field.persistent && (
                      <span className="profile-saved-badge" title="Automatically remembered across sessions">
                        <i className="fa-solid fa-lock" style={{ fontSize: '0.65rem', marginRight: '3px' }}></i>
                        Profile
                      </span>
                    )}
                    {field.autoDetected && (
                      <span className="auto-detected-badge" title="Discovered automatically from template text">
                        Auto
                      </span>
                    )}
                  </label>
                  <span className="input-helper-badge">{`{{${field.key}}}`}</span>
                </div>

                {isMultiline ? (
                  <textarea
                    id={`input-${field.key}`}
                    name={field.key}
                    rows={2}
                    className={`custom-input custom-textarea ${isMissing ? 'input-missing' : ''}`}
                    placeholder={field.placeholder || `Enter ${field.label}`}
                    value={val}
                    onChange={(e) => onChangeField(field.key, e.target.value, field.persistent)}
                  />
                ) : (
                  <input
                    type={isPhone ? 'tel' : 'text'}
                    inputMode={isPhone ? 'tel' : 'text'}
                    id={`input-${field.key}`}
                    name={field.key}
                    className={`custom-input ${isMissing ? 'input-missing' : ''}`}
                    placeholder={field.placeholder || `Enter ${field.label}`}
                    value={val}
                    autoComplete={field.key === 'yourName' ? 'name' : isPhone ? 'tel' : 'off'}
                    onChange={(e) => onChangeField(field.key, e.target.value, field.persistent)}
                  />
                )}

                {isMissing && (
                  <span className="field-error-text">
                    <i className="fa-solid fa-circle-exclamation"></i> Required to personalize message
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </form>

      {/* Mobile-Only Proceed Button */}
      {onProceedToPreview && (
        <div className="mobile-proceed-bar">
          <button
            type="button"
            className="btn-mobile-proceed"
            onClick={onProceedToPreview}
          >
            <span>Review Output & Copy</span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      )}

      <div className="profile-memory-card">
        <div className="profile-memory-text">
          <i className="fa-solid fa-circle-check" style={{ color: '#34d399', marginRight: '6px' }}></i>
          <span>Your name, phone, LinkedIn & portfolio are saved locally and auto-populated.</span>
        </div>
      </div>
    </div>
  );
}
