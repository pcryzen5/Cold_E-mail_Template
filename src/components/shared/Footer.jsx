import React from 'react';

export default function Footer() {
  return (
    <footer className="app-footer">
      <div>
        <span>ColdReach Studio &copy; {new Date().getFullYear()} — Built for fast, impactful professional outreach.</span>
      </div>
      <div className="footer-links">
        <span><i className="fa-solid fa-bolt" style={{ color: 'var(--lime-accent)' }}></i> Instant Client-Side Generation</span>
        <span><i className="fa-solid fa-shield-halved" style={{ color: 'var(--cyan-mint)' }}></i> 100% Private (No data leaves your browser)</span>
      </div>
    </footer>
  );
}
