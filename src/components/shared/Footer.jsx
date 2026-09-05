import React from 'react';

export default function Footer() {
  return (
    <footer className="app-footer">
      <div>
        <span>ColdReach Studio &copy; {new Date().getFullYear()} — Built for fast, impactful professional outreach.</span>
      </div>
      <div className="footer-links">
        <span><i className="fa-solid fa-bolt" style={{ color: '#f59e0b' }}></i> Instant Client-Side Generation</span>
        <span><i className="fa-solid fa-shield-halved" style={{ color: '#10b981' }}></i> 100% Private (No data leaves your browser)</span>
      </div>
    </footer>
  );
}
