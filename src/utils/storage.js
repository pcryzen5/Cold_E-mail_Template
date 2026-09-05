/**
 * Robust LocalStorage helper with graceful error handling and fallbacks
 */

const STORAGE_KEYS = {
  PROFILE: 'coldreach_user_profile',
  DRAFT: 'coldreach_active_draft',
  CUSTOM_TEMPLATES: 'coldreach_custom_templates'
};

export const storage = {
  /**
   * Save user profile (e.g. yourName)
   */
  saveProfile(profile) {
    try {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
    } catch (err) {
      console.warn('LocalStorage saveProfile failed:', err);
    }
  },

  /**
   * Get user profile
   */
  getProfile() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PROFILE);
      return data ? JSON.parse(data) : {};
    } catch (err) {
      console.warn('LocalStorage getProfile failed:', err);
      return {};
    }
  },

  /**
   * Save active draft (formData, category, platform)
   */
  saveDraft(draft) {
    try {
      localStorage.setItem(STORAGE_KEYS.DRAFT, JSON.stringify(draft));
    } catch (err) {
      console.warn('LocalStorage saveDraft failed:', err);
    }
  },

  /**
   * Get active draft
   */
  getDraft() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.DRAFT);
      return data ? JSON.parse(data) : null;
    } catch (err) {
      console.warn('LocalStorage getDraft failed:', err);
      return null;
    }
  },

  /**
   * Clear active draft
   */
  clearDraft() {
    try {
      localStorage.removeItem(STORAGE_KEYS.DRAFT);
    } catch (err) {
      console.warn('LocalStorage clearDraft failed:', err);
    }
  },

  /**
   * Get user-created custom templates
   */
  getCustomTemplates() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CUSTOM_TEMPLATES);
      return data ? JSON.parse(data) : [];
    } catch (err) {
      console.warn('LocalStorage getCustomTemplates failed:', err);
      return [];
    }
  },

  /**
   * Save user-created custom template
   */
  saveCustomTemplate(newTemplate) {
    try {
      const existing = storage.getCustomTemplates();
      const filtered = existing.filter(t => t.id !== newTemplate.id);
      filtered.push(newTemplate);
      localStorage.setItem(STORAGE_KEYS.CUSTOM_TEMPLATES, JSON.stringify(filtered));
      return filtered;
    } catch (err) {
      console.warn('LocalStorage saveCustomTemplate failed:', err);
      return [];
    }
  },

  /**
   * Delete custom template
   */
  deleteCustomTemplate(templateId) {
    try {
      const existing = storage.getCustomTemplates();
      const updated = existing.filter(t => t.id !== templateId);
      localStorage.setItem(STORAGE_KEYS.CUSTOM_TEMPLATES, JSON.stringify(updated));
      return updated;
    } catch (err) {
      console.warn('LocalStorage deleteCustomTemplate failed:', err);
      return [];
    }
  }
};
