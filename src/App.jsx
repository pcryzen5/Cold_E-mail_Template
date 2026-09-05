import React, { useState, useCallback } from 'react';
import Header from './components/shared/Header.jsx';
import Footer from './components/shared/Footer.jsx';
import Toast from './components/shared/Toast.jsx';
import ErrorBoundary from './components/shared/ErrorBoundary.jsx';
import GeneratorHome from './pages/GeneratorHome.jsx';
import './App.css';

export default function App() {
  const [profileSaved, setProfileSaved] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resetDraftTrigger, setResetDraftTrigger] = useState(0);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const showToast = useCallback((message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 2800);
  }, []);

  const handleResetDraft = useCallback(() => {
    setResetDraftTrigger(prev => prev + 1);
  }, []);

  return (
    <ErrorBoundary>
      <div className="app-container">
        <Header
          profileSaved={profileSaved}
          onOpenNewTemplateModal={() => setIsModalOpen(true)}
          onClearDraft={handleResetDraft}
        />
        <GeneratorHome
          onShowToast={showToast}
          onProfileStatusChange={setProfileSaved}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          onResetDraftSignal={resetDraftTrigger}
        />
        <Footer />
        <Toast toast={toast} />
      </div>
    </ErrorBoundary>
  );
}
