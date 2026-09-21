'use client';
import { useEffect } from 'react';
export function ClientSideScripts() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        for (const registration of registrations) {
          if (registration.active?.scriptURL === `${location.origin}/sw.js`) {
            void registration.update().catch(() => {});
          }
        }
      }).catch(() => {});
    }
  }, []);
  return null;
}
