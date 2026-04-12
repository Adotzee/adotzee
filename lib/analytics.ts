/**
 * Google Analytics Utilities
 * Used for tracking custom events like leads, button clicks, and funnel progress.
 */

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'set',
      action: string,
      params?: Record<string, string | number | boolean | undefined>
    ) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Log page views (Next.js automatically handles basic pageview with gtag config)
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID as string, {
      page_path: url,
    });
  }
};

// Log specific events
export const event = (action: string, params: Record<string, string | number | boolean | undefined>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, params);
  }
};

// Conversion Tracking Helpers
export const trackLeadInitiated = (entityName: string, entityType: 'college' | 'course' | 'addon' | 'general') => {
  event('lead_initiated', {
    event_category: 'conversion',
    event_label: entityName,
    entity_type: entityType,
  });
};

export const trackContactClick = (channel: 'whatsapp' | 'phone' | 'email') => {
  event('contact_click', {
    event_category: 'engagement',
    channel: channel,
  });
};

export const trackScrollDepth = (depth: number) => {
  event('scroll_depth', {
    event_category: 'engagement',
    depth: depth,
  });
};

export const trackFeatureView = (featureName: string) => {
  event('feature_view', {
    event_category: 'engagement',
    feature_name: featureName,
  });
};
