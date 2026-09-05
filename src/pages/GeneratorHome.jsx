import React, { useState, useEffect, useMemo, useCallback } from 'react';
import CategorySelector from '../components/sections/CategorySelector.jsx';
import PlatformSelector from '../components/sections/PlatformSelector.jsx';
import DynamicMessageForm from '../components/forms/DynamicMessageForm.jsx';
import EmailSubjectBar from '../components/sections/EmailSubjectBar.jsx';
import MessagePreview from '../components/sections/MessagePreview.jsx';
import TemplateModal from '../components/forms/TemplateModal.jsx';
import { getTemplate } from '../data/templates/index.js';
import { SAMPLE_DATA } from '../data/sampleData.js';
import { storage } from '../utils/storage.js';
import {
  getMergedFields,
  parseTemplate,
  getUnfilledFields
} from '../utils/templateParser.js';

export default function GeneratorHome({
  onShowToast,
  onProfileStatusChange,
  isModalOpen,
  setIsModalOpen,
  onResetDraftSignal
}) {
  // Load initial draft or default
  const savedDraft = storage.getDraft();

  const [selectedCategory, setSelectedCategory] = useState(savedDraft?.category || 'job_inquiry');
  const [selectedPlatform, setSelectedPlatform] = useState(savedDraft?.platform || 'whatsapp');
  const [formData, setFormData] = useState(savedDraft?.formData || {});
  const [customTemplates, setCustomTemplates] = useState(storage.getCustomTemplates());
  const [selectedTemplateId, setSelectedTemplateId] = useState(null);

  // Direct editing overrides
  const [customTextOverride, setCustomTextOverride] = useState(null);
  const [customSubjectOverride, setCustomSubjectOverride] = useState(null);

  // UI Toggles
  const [highlightVars, setHighlightVars] = useState(true);
  const [highlightMissing, setHighlightMissing] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState('Copy Message');

  // Load persistent profile on mount if form data lacks yourName
  useEffect(() => {
    const profile = storage.getProfile();
    if (profile?.yourName && !formData.yourName) {
      setFormData(prev => ({ ...prev, yourName: profile.yourName }));
    }
  }, []);

  // Autosave draft
  useEffect(() => {
    storage.saveDraft({
      category: selectedCategory,
      platform: selectedPlatform,
      formData
    });
    onProfileStatusChange(true);
  }, [selectedCategory, selectedPlatform, formData, onProfileStatusChange]);

  // Handle external reset draft signal from Header
  useEffect(() => {
    if (onResetDraftSignal) {
      handleClearDraft();
    }
  }, [onResetDraftSignal]);

  // Find all available templates for selected category and platform (built-in + custom)
  const availableTemplates = useMemo(() => {
    const defaultT = getTemplate(selectedCategory, selectedPlatform);
    const matchingCustom = customTemplates.filter(
      t => t.categoryId === selectedCategory && t.platformId === selectedPlatform
    );
    return [defaultT, ...matchingCustom];
  }, [selectedCategory, selectedPlatform, customTemplates]);

  // Active Template
  const activeTemplate = useMemo(() => {
    if (selectedTemplateId) {
      const found = availableTemplates.find(t => t.id === selectedTemplateId);
      if (found) return found;
    }
    return availableTemplates[0] || getTemplate(selectedCategory, selectedPlatform);
  }, [availableTemplates, selectedTemplateId, selectedCategory, selectedPlatform]);

  // Merge predefined fields with any auto-detected placeholders in the template string
  const mergedFields = useMemo(() => {
    return getMergedFields(
      activeTemplate.fields || [],
      activeTemplate.template || '',
      activeTemplate.subjectTemplate || ''
    );
  }, [activeTemplate]);

  // Compute unfilled required fields
  const unfilledFields = useMemo(() => {
    return getUnfilledFields(mergedFields, formData);
  }, [mergedFields, formData]);

  // Custom templates count by category
  const customTemplatesCountByCategory = useMemo(() => {
    const counts = {};
    customTemplates.forEach(t => {
      counts[t.categoryId] = (counts[t.categoryId] || 0) + 1;
    });
    return counts;
  }, [customTemplates]);

  // Form field change handler
  const handleFieldChange = (key, value, persistent) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    setHighlightMissing(false);

    if (persistent && key === 'yourName') {
      storage.saveProfile({ yourName: value });
    }
  };

  // Fill sample data
  const handleFillSample = () => {
    const updated = { ...formData };
    mergedFields.forEach(f => {
      if (SAMPLE_DATA[f.key]) {
        updated[f.key] = SAMPLE_DATA[f.key];
      }
    });
    if (SAMPLE_DATA.yourName) {
      storage.saveProfile({ yourName: SAMPLE_DATA.yourName });
    }
    setFormData(updated);
    setHighlightMissing(false);
    onShowToast('Sample data populated!', 'info');
  };

  // Clear current form inputs (except persistent yourName)
  const handleClearForm = () => {
    const updated = { ...formData };
    mergedFields.forEach(f => {
      if (!f.persistent) {
        updated[f.key] = '';
      }
    });
    setFormData(updated);
    setHighlightMissing(false);
    onShowToast('Form inputs cleared.', 'info');
  };

  // Reset entire draft
  const handleClearDraft = () => {
    storage.clearDraft();
    const profile = storage.getProfile();
    setFormData(profile?.yourName ? { yourName: profile.yourName } : {});
    setCustomTextOverride(null);
    setCustomSubjectOverride(null);
    setHighlightMissing(false);
    onShowToast('Draft reset to blank template.', 'info');
  };

  // Copy helper
  const copyToClipboard = async (text, successMsg, isWarning = false) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      onShowToast(successMsg, isWarning ? 'warning' : 'success');
    } catch (err) {
      console.error('Clipboard copy error:', err);
      onShowToast('Failed to copy. Please select text manually.', 'warning');
    }
  };

  // Handle Copy Message with Safeguards
  const handleCopyMessage = (textToCopy) => {
    if (unfilledFields.length > 0 && customTextOverride === null) {
      setHighlightMissing(true);
      setCopyButtonText('Copied (Notice Missing Fields)');
      setTimeout(() => setCopyButtonText('Copy Message'), 2000);

      copyToClipboard(
        textToCopy,
        `Copied! Notice: ${unfilledFields.length} placeholder(s) still unfilled.`,
        true
      );
    } else {
      setCopyButtonText('Copied to Clipboard!');
      setTimeout(() => setCopyButtonText('Copy Message'), 1600);

      copyToClipboard(textToCopy, 'Message copied to clipboard!', false);
    }
  };

  // Handle Copy Subject
  const handleCopySubject = (subjectToCopy) => {
    copyToClipboard(subjectToCopy, 'Subject line copied!', false);
  };

  // Save new custom template from modal
  const handleSaveCustomTemplate = (newTemplate) => {
    const updated = storage.saveCustomTemplate(newTemplate);
    setCustomTemplates(updated);
    setSelectedCategory(newTemplate.categoryId);
    setSelectedPlatform(newTemplate.platformId);
    setSelectedTemplateId(newTemplate.id);
    onShowToast('Custom template saved & active!', 'success');
  };

  // Generated Outputs
  const htmlPreview = useMemo(() => {
    return parseTemplate(
      activeTemplate.template,
      formData,
      true,
      highlightVars,
      mergedFields
    );
  }, [activeTemplate.template, formData, highlightVars, mergedFields]);

  const plainTextOutput = useMemo(() => {
    return parseTemplate(
      activeTemplate.template,
      formData,
      false,
      false,
      mergedFields
    );
  }, [activeTemplate.template, formData, mergedFields]);

  const defaultSubject = useMemo(() => {
    return activeTemplate.hasSubject
      ? parseTemplate(activeTemplate.subjectTemplate, formData, false, false, mergedFields)
      : null;
  }, [activeTemplate.hasSubject, activeTemplate.subjectTemplate, formData, mergedFields]);

  return (
    <div className="generator-main">
      {/* Step 1: Category Selector */}
      <CategorySelector
        selectedCategory={selectedCategory}
        onSelectCategory={(catId) => {
          setSelectedCategory(catId);
          setSelectedTemplateId(null);
          setCustomTextOverride(null);
          setCustomSubjectOverride(null);
        }}
        customTemplatesCountByCategory={customTemplatesCountByCategory}
      />

      {/* Main Workspace Layout */}
      <div className="workspace-layout">
        {/* Left Column: Platform & Dynamic Form */}
        <section className="panel-card form-panel">
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platId) => {
              setSelectedPlatform(platId);
              setSelectedTemplateId(null);
              setCustomTextOverride(null);
              setCustomSubjectOverride(null);
            }}
          />

          {/* Template variant selector if more than 1 template is available in this category/platform */}
          {availableTemplates.length > 1 && (
            <div className="template-variant-bar">
              <span className="variant-label">Active Variant:</span>
              <div className="variant-pills">
                {availableTemplates.map((tmpl, idx) => (
                  <button
                    key={tmpl.id}
                    type="button"
                    className={`btn-variant-pill ${activeTemplate.id === tmpl.id ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedTemplateId(tmpl.id);
                      setCustomTextOverride(null);
                    }}
                  >
                    <span>{tmpl.title || `Variant ${idx + 1}`}</span>
                    {tmpl.isCustom && <span className="tag-custom">Custom</span>}
                  </button>
                ))}
              </div>
            </div>
          )}

          <DynamicMessageForm
            fields={mergedFields}
            formData={formData}
            onChangeField={handleFieldChange}
            onFillSample={handleFillSample}
            onClear={handleClearForm}
            highlightMissing={highlightMissing}
          />
        </section>

        {/* Right Column: Live Output Preview & Direct Editing */}
        <section className="panel-card preview-panel">
          {activeTemplate.hasSubject && (
            <EmailSubjectBar
              subjectText={defaultSubject}
              onCopySubject={handleCopySubject}
              customSubjectOverride={customSubjectOverride}
              onCustomSubjectChange={setCustomSubjectOverride}
            />
          )}

          <MessagePreview
            platformId={selectedPlatform}
            htmlContent={htmlPreview}
            plainTextContent={plainTextOutput}
            customTextOverride={customTextOverride}
            onCustomTextChange={setCustomTextOverride}
            onResetCustomText={() => setCustomTextOverride(null)}
            highlightVars={highlightVars}
            onToggleHighlight={() => setHighlightVars(prev => !prev)}
            onCopyMessage={handleCopyMessage}
            unfilledFields={unfilledFields}
            copyStatusText={copyButtonText}
          />
        </section>
      </div>

      {/* Modal for Creating Custom Templates */}
      <TemplateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSaveTemplate={handleSaveCustomTemplate}
      />
    </div>
  );
}
