// Error tracking and monitoring utilities

interface ErrorLog {
  message: string;
  stack?: string;
  url: string;
  timestamp: number;
  userAgent: string;
  userId?: string;
}

class ErrorTracker {
  private static instance: ErrorTracker;
  private errors: ErrorLog[] = [];
  private maxErrors = 100;

  static getInstance(): ErrorTracker {
    if (!ErrorTracker.instance) {
      ErrorTracker.instance = new ErrorTracker();
    }
    return ErrorTracker.instance;
  }

  init() {
    if (typeof window === 'undefined') return;

    // Global error handler
    window.addEventListener('error', (event) => {
      this.logError({
        message: event.message,
        stack: event.error?.stack,
        url: window.location.href,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.logError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
        url: window.location.href,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
      });
    });

    // React error boundary integration
    this.setupReactErrorBoundary();
  }

  logError(error: ErrorLog) {
    console.error('Error logged:', error);
    
    this.errors.push(error);
    
    // Keep only the latest errors
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
    }

    // Send to monitoring service (implement based on your choice)
    this.sendToMonitoringService(error);
  }

  private async sendToMonitoringService(error: ErrorLog) {
    try {
      // Replace with your monitoring service endpoint
      await fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(error),
      });
    } catch (e) {
      console.error('Failed to send error to monitoring service:', e);
    }
  }

  private setupReactErrorBoundary() {
    // This will be used by the ErrorBoundary component
    (window as any).__errorTracker = this;
  }

  getErrors(): ErrorLog[] {
    return [...this.errors];
  }

  clearErrors() {
    this.errors = [];
  }
}

export const errorTracker = ErrorTracker.getInstance();