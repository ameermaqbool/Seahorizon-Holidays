// Analytics and tracking utilities

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export function initializeAnalytics() {
  if (typeof window === 'undefined') return;

  // Google Analytics 4
  const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
  if (GA4_ID) {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    
    window.gtag('js', new Date());
    window.gtag('config', GA4_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }

  // Meta Pixel
  const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (META_PIXEL_ID) {
    (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    (window as any).fbq('init', META_PIXEL_ID);
    (window as any).fbq('track', 'PageView');
  }
}

export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }

  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, parameters);
  }
}

export function trackPageView(url: string, title: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA4_ID, {
      page_title: title,
      page_location: url,
    });
  }
}

export function trackWhatsAppClick(packageName?: string) {
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: packageName || 'general_inquiry',
    value: 1,
  });
}

export function trackPackageView(packageName: string, packagePrice?: number) {
  trackEvent('view_item', {
    event_category: 'ecommerce',
    event_label: packageName,
    value: packagePrice,
    currency: 'INR',
  });
}

export function trackFormSubmission(formType: string) {
  trackEvent('form_submit', {
    event_category: 'engagement',
    event_label: formType,
    value: 1,
  });
}