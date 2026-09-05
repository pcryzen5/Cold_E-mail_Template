import React from 'react';

export default function DynamicMessageForm({
  fields = [],
  formData = {},
  onChangeField,
  onFillSample,
  onClear,
  highlightMissing = false
}) {
  return (
    <div className="dynamic-form-wrapper">
      <div className="form-header">
        <div className="form-title">
          <i className="fa-solid fa-sliders" style={{ color: '#818cf8', fontSize: '0.95rem' }}></i>
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

            return (
              <div key={field.key} className={`input-field-group ${isMissing ? 'has-error' : ''}`}>
                <div className="input-label-wrap">
                  <label className="input-label" htmlFor={`input-${field.key}`}>
                    <span>{field.label}</span>
                    {field.required && <span className="required-star">*</span>}
                    {field.autoDetected && (
                      <span className="auto-detected-badge" title="Discovered automatically from template text">
                        Auto
                      </span>
                    )}
                  </label>
                  <span className="input-helper-badge">{`{{${field.key}}}`}</span>
                </div>
                <input
                  type="text"
                  id={`input-${field.key}`}
                  name={field.key}
                  className={`custom-input ${isMissing ? 'input-missing' : ''}`}
                  placeholder={field.placeholder || `Enter ${field.label}`}
                  value={val}
                  autoComplete={field.key === 'yourName' ? 'name' : 'off'}
                  onChange={(e) => onChangeField(field.key, e.target.value, field.persistent)}
                />
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

      <div className="profile-memory-card">
        <div className="profile-memory-text">
          <i className="fa-solid fa-circle-check" style={{ color: '#34d399', marginRight: '6px' }}></i>
          <span>Your name is stored locally and remembered across sessions.</span>
        </div>
      </div>
    </div>
  );
}
