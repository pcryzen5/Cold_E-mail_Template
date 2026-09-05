/**
 * Template Parser Engine
 * Handles universal placeholder replacement ({{curly}} and [bracket] syntax),
 * dynamic variable discovery, and unfilled field detection.
 */

/**
 * Convert string to camelCase identifier
 */
export function toCamelCase(str) {
  if (!str) return '';
  return str
    .replace(/[\[\]{}'’]/g, '')
    .trim()
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
    .replace(/^(.)/, c => c.toLowerCase());
}

/**
 * Convert key to human readable label
 */
export function toLabel(key) {
  if (!key) return '';
  const result = key
    .replace(/([A-Z])/g, ' $1')
    .replace(/[_-]/g, ' ')
    .trim();
  return result.charAt(0).toUpperCase() + result.slice(1);
}

/**
 * Escape HTML
 */
export function escapeHTML(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Extract all variable placeholder keys from template text
 * Finds both {{curly}} and [bracket] tokens
 */
export function extractPlaceholders(templateStr) {
  if (!templateStr) return [];
  const found = new Map();

  // 1. Match {{variableName}}
  const curlyRegex = /\{\{([a-zA-Z0-9_-]+)\}\}/g;
  let match;
  while ((match = curlyRegex.exec(templateStr)) !== null) {
    const raw = match[1];
    if (raw !== '#if' && raw !== '/if') {
      const canonicalKey = toCamelCase(raw);
      found.set(canonicalKey, {
        rawToken: match[0],
        key: canonicalKey,
        label: toLabel(raw)
      });
    }
  }

  // 2. Match [Placeholder_Name] (ignoring markdown links if any)
  const bracketRegex = /\[([a-zA-Z0-9_'\s-]+)\](?!\()/g;
  while ((match = bracketRegex.exec(templateStr)) !== null) {
    const raw = match[1];
    const canonicalKey = toCamelCase(raw);
    if (!found.has(canonicalKey)) {
      found.set(canonicalKey, {
        rawToken: match[0],
        key: canonicalKey,
        label: toLabel(raw)
      });
    }
  }

  return Array.from(found.values());
}

/**
 * Merge predefined fields with auto-discovered placeholders
 */
export function getMergedFields(predefinedFields = [], templateStr = '', subjectStr = '') {
  const combinedText = `${templateStr} ${subjectStr}`;
  const discovered = extractPlaceholders(combinedText);
  const existingKeys = new Set(predefinedFields.map(f => f.key));

  const result = [...predefinedFields];

  discovered.forEach(item => {
    if (!existingKeys.has(item.key)) {
      result.push({
        key: item.key,
        label: item.label,
        placeholder: `e.g. ${item.label}`,
        required: true,
        autoDetected: true
      });
      existingKeys.add(item.key);
    }
  });

  return result;
}

/**
 * Parse conditional blocks e.g. {{#if jobId}}...{{/if}}
 */
export function parseConditionals(text, data) {
  if (!text) return '';
  return text.replace(/\{\{#if\s+([a-zA-Z0-9_-]+)\}\}([\s\S]*?)\{\{\/if\}\}/g, (match, key, content) => {
    const canonical = toCamelCase(key);
    const val = (data[key] || data[canonical] || '').trim();
    return val ? content : '';
  });
}

/**
 * Render template text with either HTML highlights or plain text
 */
export function parseTemplate(templateStr, data = {}, isHtml = false, highlight = true, fields = []) {
  if (!templateStr) return '';

  let parsed = parseConditionals(templateStr, data);

  // Replace {{token}}
  parsed = parsed.replace(/\{\{([a-zA-Z0-9_-]+)\}\}/g, (match, key) => {
    const canonical = toCamelCase(key);
    const val = (data[key] || data[canonical] || '').trim();

    if (val) {
      if (isHtml) {
        return highlight ? `<span class="highlight-var">${escapeHTML(val)}</span>` : escapeHTML(val);
      }
      return val;
    } else {
      const field = fields.find(f => f.key === canonical || f.key === key);
      const displayLabel = field ? field.label : toLabel(key);
      if (isHtml) {
        return highlight ? `<span class="highlight-var empty">[${escapeHTML(displayLabel)}]</span>` : `[${escapeHTML(displayLabel)}]`;
      }
      return `[${displayLabel}]`;
    }
  });

  // Replace [token]
  parsed = parsed.replace(/\[([a-zA-Z0-9_'\s-]+)\](?!\()/g, (match, raw) => {
    const canonical = toCamelCase(raw);
    const val = (data[canonical] || data[raw] || '').trim();

    if (val) {
      if (isHtml) {
        return highlight ? `<span class="highlight-var">${escapeHTML(val)}</span>` : escapeHTML(val);
      }
      return val;
    } else {
      const field = fields.find(f => f.key === canonical);
      const displayLabel = field ? field.label : toLabel(raw);
      if (isHtml) {
        return highlight ? `<span class="highlight-var empty">[${escapeHTML(displayLabel)}]</span>` : `[${escapeHTML(displayLabel)}]`;
      }
      return `[${displayLabel}]`;
    }
  });

  return parsed;
}

/**
 * Identify all required fields that are currently empty
 */
export function getUnfilledFields(fields = [], data = {}) {
  return fields.filter(f => {
    if (!f.required) return false;
    const val = (data[f.key] || '').trim();
    return val.length === 0;
  });
}
