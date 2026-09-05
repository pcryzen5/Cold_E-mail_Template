import React, { useState } from 'react';
import { CATEGORIES } from '../../data/categories.js';
import { PLATFORMS } from '../../data/platforms.js';

export default function TemplateModal({ isOpen, onClose, onSaveTemplate }) {
  if (!isOpen) return null;

  const [title, setTitle] = useState('');
  const [categoryId, setCategoryId] = useState('job_inquiry');
  const [platformId, setPlatformId] = useState('whatsapp');
  const [subjectTemplate, setSubjectTemplate] = useState('');
  const [templateText, setTemplateText] = useState('');
  const [error, setError] = useState('');

  const insertVariable = (varName) => {
    setTemplateText(prev => `${prev} {{${varName}}}`);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Please provide a title for your template.');
      return;
    }
    if (!templateText.trim()) {
      setError('Please enter your template message text.');
      return;
    }

    const customId = `custom_${Date.now()}`;
    const newTemplate = {
      id: `${categoryId}:${platformId}:${customId}`,
      customId,
      isCustom: true,
      categoryId,
      platformId,
      title: title.trim(),
      hasSubject: platformId === 'email',
      subjectTemplate: platformId === 'email' ? subjectTemplate.trim() : '',
      template: templateText.trim(),
      fields: [] // fields will be auto-detected!
    };

    onSaveTemplate(newTemplate);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <div className="modal-icon-badge">
              <i className="fa-solid fa-plus"></i>
            </div>
            <div>
              <h3>Create Custom Template</h3>
              <p className="modal-subtitle">Add your own template right from the browser</p>
            </div>
          </div>
          <button type="button" className="btn-close-modal" onClick={onClose} aria-label="Close">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {error && (
          <div className="modal-error-alert">
            <i className="fa-solid fa-circle-exclamation"></i>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSave} className="modal-form">
          <div className="input-field-group">
            <label className="input-label" htmlFor="custom-title">
              Template Title <span className="required-star">*</span>
            </label>
            <input
              id="custom-title"
              type="text"
              className="custom-input"
              placeholder="e.g. My Personal Job Inquiry Pitch"
              value={title}
              onChange={(e) => { setTitle(e.target.value); setError(''); }}
              required
            />
          </div>

          <div className="modal-grid-2">
            <div className="input-field-group">
              <label className="input-label" htmlFor="custom-cat">Category</label>
              <select
                id="custom-cat"
                className="custom-input custom-select"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
              >
                {CATEGORIES.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="input-field-group">
              <label className="input-label" htmlFor="custom-plat">Platform</label>
              <select
                id="custom-plat"
                className="custom-input custom-select"
                value={platformId}
                onChange={(e) => setPlatformId(e.target.value)}
              >
                {Object.values(PLATFORMS).map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>
          </div>

          {platformId === 'email' && (
            <div className="input-field-group">
              <label className="input-label" htmlFor="custom-subject">
                Email Subject Line
              </label>
              <input
                id="custom-subject"
                type="text"
                className="custom-input"
                placeholder="e.g. Inquiry regarding {{companyName}} engineering roles"
                value={subjectTemplate}
                onChange={(e) => setSubjectTemplate(e.target.value)}
              />
            </div>
          )}

          <div className="input-field-group">
            <div className="input-label-wrap">
              <label className="input-label" htmlFor="custom-body">
                Message Body <span className="required-star">*</span>
              </label>
              <span className="input-helper-badge">Supports {'{{variable}}'} &amp; [Variable]</span>
            </div>
            <textarea
              id="custom-body"
              className="custom-input custom-textarea"
              rows={8}
              placeholder={`Hey {{recruiterName}}!\n\nSaw you recruit for {{companyName}}...\n\nThanks,\n{{yourName}}`}
              value={templateText}
              onChange={(e) => { setTemplateText(e.target.value); setError(''); }}
              required
            />
          </div>

          <div className="quick-tags-bar">
            <span className="quick-tags-label">Quick Placeholders:</span>
            <button type="button" className="btn-tag-chip" onClick={() => insertVariable('recruiterName')}>+ recruiterName</button>
            <button type="button" className="btn-tag-chip" onClick={() => insertVariable('companyName')}>+ companyName</button>
            <button type="button" className="btn-tag-chip" onClick={() => insertVariable('yourName')}>+ yourName</button>
          </div>

          <div className="modal-footer-actions">
            <button type="button" className="btn-ghost-sm" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary-action" style={{ padding: '10px 20px' }}>
              <i className="fa-solid fa-floppy-disk"></i>
              <span>Save Template</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
