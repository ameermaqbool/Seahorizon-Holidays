// Comprehensive monitoring utilities

interface PerformanceMetrics {
  pageLoadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

interface UserSession {
  sessionId: string;
  userId?: string;
  startTime: number;
  pageViews: string[];
  events: any[];
  userAgent: string;
  referrer: string;
}

class MonitoringService {
  private static instance: MonitoringService;
  private session: UserSession;
  private metrics: PerformanceMetrics = {} as PerformanceMetrics;

  static getInstance(): MonitoringService {
    if (!MonitoringService.instance) {
      MonitoringService.instance = new MonitoringService();
    }
    return MonitoringService.instance;
  }

  constructor() {
    this.session = {
      sessionId: this.generateSessionId(),
      startTime: Date.now(),
      pageViews: [],
      events: [],
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      referrer: typeof document !== 'undefined' ? document.referrer : '',
    };
  }

  init() {
    if (typeof window === 'undefined') return;

    this.setupPerformanceMonitoring();
    this.setupUserBehaviorTracking();
    this.setupErrorMonitoring();
    this.setupUptimeMonitoring();
  }

  private setupPerformanceMonitoring() {
    // Web Vitals monitoring
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.largestContentfulPaint = lastEntry.startTime;
        this.sendMetric('lcp', lastEntry.startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this.metrics.firstInputDelay = entry.processingStart - entry.startTime;
          this.sendMetric('fid', entry.processingStart - entry.startTime);
        });
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.metrics.cumulativeLayoutShift = clsValue;
        this.sendMetric('cls', clsValue);
      }).observe({ entryTypes: ['layout-shift'] });
    }

    // Page load metrics
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      this.metrics.pageLoadTime = navigation.loadEventEnd - navigation.fetchStart;
      this.metrics.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
      
      this.sendMetric('page_load_time', this.metrics.pageLoadTime);
      this.sendMetric('dom_content_loaded', this.metrics.domContentLoaded);
    });
  }

  private setupUserBehaviorTracking() {
    // Page view tracking
    this.trackPageView(window.location.pathname);

    // Scroll depth tracking
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        if (scrollDepth % 25 === 0) { // Track at 25%, 50%, 75%, 100%
          this.trackEvent('scroll_depth', { depth: scrollDepth });
        }
      }
    });

    // Click tracking
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        this.trackEvent('click', {
          element: target.tagName,
          text: target.textContent?.slice(0, 50),
          href: target.getAttribute('href'),
        });
      }
    });

    // Form interaction tracking
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      this.trackEvent('form_submit', {
        formId: form.id,
        action: form.action,
      });
    });
  }

  private setupErrorMonitoring() {
    // JavaScript errors
    window.addEventListener('error', (event) => {
      this.trackError({
        type: 'javascript_error',
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack,
      });
    });

    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.trackError({
        type: 'unhandled_promise_rejection',
        message: event.reason?.message || 'Unhandled promise rejection',
        stack: event.reason?.stack,
      });
    });

    // Network errors
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      try {
        const response = await originalFetch(...args);
        if (!response.ok) {
          this.trackError({
            type: 'network_error',
            message: `HTTP ${response.status}: ${response.statusText}`,
            url: args[0].toString(),
          });
        }
        return response;
      } catch (error) {
        this.trackError({
          type: 'network_error',
          message: (error as Error).message,
          url: args[0].toString(),
        });
        throw error;
      }
    };
  }

  private setupUptimeMonitoring() {
    // Heartbeat to check if the app is responsive
    setInterval(() => {
      this.sendHeartbeat();
    }, 30000); // Every 30 seconds

    // Page visibility tracking
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.trackEvent('page_hidden', { timestamp: Date.now() });
      } else {
        this.trackEvent('page_visible', { timestamp: Date.now() });
      }
    });
  }

  trackPageView(path: string) {
    this.session.pageViews.push(path);
    this.trackEvent('page_view', { path, timestamp: Date.now() });
  }

  trackEvent(eventName: string, data: any = {}) {
    const event = {
      name: eventName,
      data,
      timestamp: Date.now(),
      sessionId: this.session.sessionId,
    };
    
    this.session.events.push(event);
    this.sendEvent(event);
  }

  trackError(error: any) {
    this.trackEvent('error', error);
  }

  private sendMetric(name: string, value: number) {
    // Send to your analytics service
    this.sendToAnalytics('metric', { name, value, timestamp: Date.now() });
  }

  private sendEvent(event: any) {
    // Send to your analytics service
    this.sendToAnalytics('event', event);
  }

  private sendHeartbeat() {
    this.sendToAnalytics('heartbeat', {
      sessionId: this.session.sessionId,
      timestamp: Date.now(),
      performance: this.metrics,
    });
  }

  private async sendToAnalytics(type: string, data: any) {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type, data }),
      });
    } catch (error) {
      console.error('Failed to send analytics data:', error);
    }
  }

  private generateSessionId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  getSessionData(): UserSession {
    return { ...this.session };
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }
}

export const monitoring = MonitoringService.getInstance();