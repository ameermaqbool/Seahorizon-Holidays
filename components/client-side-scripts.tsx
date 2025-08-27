'use client';

import { useEffect } from 'react';
import { measureWebVitals, preloadCriticalResources, enableServiceWorker } from '@/lib/utils/performance';

export function ClientSideScripts() {
  useEffect(() => {
    measureWebVitals();
    preloadCriticalResources();
    enableServiceWorker();
  }, []);

  return null;
}