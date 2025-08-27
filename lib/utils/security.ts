// Security utilities for input validation and sanitization

export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,15}$/;
  return phoneRegex.test(phone);
}

export function rateLimitCheck(identifier: string, limit: number = 5, windowMs: number = 60000): boolean {
  // Simple in-memory rate limiting (replace with Redis in production)
  const now = Date.now();
  const key = `rate_limit_${identifier}`;
  
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(key);
    if (stored) {
      const { count, timestamp } = JSON.parse(stored);
      if (now - timestamp < windowMs) {
        if (count >= limit) return false;
        localStorage.setItem(key, JSON.stringify({ count: count + 1, timestamp }));
      } else {
        localStorage.setItem(key, JSON.stringify({ count: 1, timestamp: now }));
      }
    } else {
      localStorage.setItem(key, JSON.stringify({ count: 1, timestamp: now }));
    }
  }
  
  return true;
}

export function generateCSRFToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}