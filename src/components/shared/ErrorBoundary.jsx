import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ColdReach ErrorBoundary caught:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReset = () => {
    try {
      localStorage.removeItem('coldreach_active_draft');
    } catch (e) {}
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-wrapper">
          <div className="error-card">
            <div className="error-icon">
              <i className="fa-solid fa-triangle-exclamation"></i>
            </div>
            <h2>Something went wrong</h2>
            <p className="error-desc">
              An unexpected render error occurred in the application. Don't worry, your profile is safe.
            </p>
            {this.state.error && (
              <div className="error-details">
                <code>{this.state.error.toString()}</code>
              </div>
            )}
            <div className="error-actions">
              <button
                type="button"
                className="btn-primary-action"
                onClick={this.handleReset}
              >
                <i className="fa-solid fa-rotate-right"></i>
                <span>Reset Draft & Reload App</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
