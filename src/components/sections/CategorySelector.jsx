import React, { useState, useMemo } from 'react';
import { CATEGORIES, CATEGORY_GROUPS } from '../../data/categories.js';

export default function CategorySelector({
  selectedCategory,
  onSelectCategory,
  customTemplatesCountByCategory = {}
}) {
  const [selectedGroup, setSelectedGroup] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  // Active category object
  const activeCategory = useMemo(() => {
    return CATEGORIES.find(c => c.id === selectedCategory) || CATEGORIES[0];
  }, [selectedCategory]);

  // Filter categories by group and search query
  const filteredCategories = useMemo(() => {
    return CATEGORIES.filter(cat => {
      const matchesGroup = selectedGroup === 'All' || cat.group === selectedGroup;
      const query = searchQuery.trim().toLowerCase();
      const matchesQuery = !query || 
        cat.name.toLowerCase().includes(query) ||
        cat.description.toLowerCase().includes(query) ||
        cat.badge.toLowerCase().includes(query);

      return matchesGroup && matchesQuery;
    });
  }, [selectedGroup, searchQuery]);

  // Compute counts per group
  const groupCounts = useMemo(() => {
    const counts = { All: CATEGORIES.length };
    CATEGORY_GROUPS.forEach(g => {
      if (g !== 'All') {
        counts[g] = CATEGORIES.filter(c => c.group === g).length;
      }
    });
    return counts;
  }, []);

  const handleSelect = (catId) => {
    onSelectCategory(catId);
    // On mobile screens, collapse after selection so user sees the form
    setIsMobileExpanded(false);
  };

  return (
    <section className="category-selection-section">
      {/* Mobile-Only Summary Bar: tap to expand/collapse scenarios */}
      <div 
        className="category-mobile-summary"
        onClick={() => setIsMobileExpanded(prev => !prev)}
        role="button"
        tabIndex={0}
        aria-expanded={isMobileExpanded}
        aria-label="Toggle scenario selection list"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsMobileExpanded(prev => !prev);
          }
        }}
      >
        <div className="mobile-summary-left">
          <div className="category-icon-box">
            <i className={`fa-solid ${activeCategory.icon}`}></i>
          </div>
          <div className="mobile-summary-text">
            <span className="mobile-summary-sub">Step 1: Scenario ({CATEGORIES.length})</span>
            <span className="mobile-summary-title">{activeCategory.name}</span>
          </div>
        </div>
        <div className="btn-mobile-toggle-categories">
          <span>{isMobileExpanded ? 'Close' : 'Change'}</span>
          <i className={`fa-solid ${isMobileExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </div>
      </div>

      {/* Main Container: Always visible on desktop, toggleable on mobile */}
      <div className={`category-dropdown-container ${isMobileExpanded ? 'mobile-open' : 'mobile-collapsed'}`}>
        <div className="category-section-top">
          <div className="section-headline desktop-only">
            <i className="fa-solid fa-layer-group"></i>
            <span>Step 1: Select Outreach Scenario ({CATEGORIES.length} Templates)</span>
          </div>

          {/* Search & Filter Controls */}
          <div className="category-search-bar">
            <div className="search-input-wrapper">
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
              <input
                type="text"
                className="category-search-input"
                placeholder="Search scenarios (e.g. follow-up, referral...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search outreach scenarios"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  title="Clear search"
                  aria-label="Clear search input"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter Tabs by Group */}
        <div className="category-group-tabs" role="tablist" aria-label="Template Scenarios">
          {CATEGORY_GROUPS.map(group => (
            <button
              key={group}
              type="button"
              className={`group-filter-pill ${selectedGroup === group ? 'active' : ''}`}
              onClick={() => setSelectedGroup(group)}
            >
              <span>{group}</span>
              <span className="group-count-badge">{groupCounts[group] || 0}</span>
            </button>
          ))}
        </div>

        {/* Category Grid */}
        {filteredCategories.length > 0 ? (
          <div className="category-grid" role="tablist" aria-label="Outreach Purpose">
            {filteredCategories.map(cat => {
              const isActive = cat.id === selectedCategory;
              const customCount = customTemplatesCountByCategory[cat.id] || 0;

              return (
                <div
                  key={cat.id}
                  className={`category-card ${isActive ? 'active' : ''}`}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={0}
                  onClick={() => handleSelect(cat.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelect(cat.id);
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
        ) : (
          <div className="category-empty-search">
            <i className="fa-solid fa-filter-circle-xmark"></i>
            <p>No outreach scenarios match "{searchQuery}"</p>
            <button
              type="button"
              className="btn-ghost-sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedGroup('All');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
