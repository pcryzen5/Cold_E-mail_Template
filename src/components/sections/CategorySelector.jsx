import React from 'react';
import { CATEGORIES } from '../../data/categories.js';

export default function CategorySelector({
  selectedCategory,
  onSelectCategory,
  customTemplatesCountByCategory = {}
}) {
  return (
    <section className="category-selection-section">
      <div className="section-headline">
        <i className="fa-solid fa-layer-group"></i>
        <span>Step 1: Select Outreach Purpose</span>
      </div>

      <div className="category-grid" role="tablist" aria-label="Outreach Purpose">
        {CATEGORIES.map(cat => {
          const isActive = cat.id === selectedCategory;
          const customCount = customTemplatesCountByCategory[cat.id] || 0;

          return (
            <div
              key={cat.id}
              className={`category-card ${isActive ? 'active' : ''}`}
              role="tab"
              aria-selected={isActive}
              tabIndex={0}
              onClick={() => onSelectCategory(cat.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectCategory(cat.id);
                }
              }}
            >
              <div className="category-header">
                <div className="category-title-wrap">
                  <div className="category-icon-box">
                    <i className={`fa-solid ${cat.icon}`}></i>
                  </div>
                  <span className="category-name">{cat.name}</span>
                </div>
                <div className="badges-group">
                  {customCount > 0 && (
                    <span className="category-badge custom" title={`${customCount} user-created template(s)`}>
                      +{customCount} Custom
                    </span>
                  )}
                  <span className="category-badge">{cat.badge}</span>
                </div>
              </div>
              <p className="category-desc">{cat.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
