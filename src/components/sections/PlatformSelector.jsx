import React from 'react';
import { PLATFORMS } from '../../data/platforms.js';

export default function PlatformSelector({ selectedPlatform, onSelectPlatform }) {
  return (
    <div className="platform-section">
      <div className="platform-bar-title">
        <div className="section-headline" style={{ marginBottom: 0 }}>
          <i className="fa-solid fa-share-nodes"></i>
          <span>Step 2: Choose Platform</span>
        </div>
      </div>

      <div className="platform-selector" role="tablist" aria-label="Platform Selector">
        {Object.values(PLATFORMS).map(platform => {
          const isActive = platform.id === selectedPlatform;
          return (
            <button
              key={platform.id}
              type="button"
              className={`platform-tab ${isActive ? 'active' : ''}`}
              data-platform={platform.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectPlatform(platform.id)}
            >
              <i className={`fa-${platform.id === 'email' ? 'regular' : 'brands'} ${platform.icon}`}></i>
              <span>{platform.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
