'use client';

import type { FormEvent, ReactNode } from 'react';

export function WhatsAppContactForm({ children, className }: {
  children: ReactNode;
  className?: string;
}) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const value = (name: string) => String(fields.get(name) || '').trim();
    const message = [
      'Hi Sea Horizon! I would like to enquire about a Lakshadweep trip.',
      `Name: ${value('firstName')} ${value('lastName')}`,
      `Email: ${value('email')}`,
      `Phone: ${value('phone')}`,
      `Travel dates: ${value('travelDates') || 'Not decided'}`,
      `Travelers: ${value('travelers') || 'Not specified'}`,
      `Message: ${value('message')}`,
    ].join('\n');
    // The visitor reviews and sends the enquiry in WhatsApp.
    window.location.assign(`https://wa.me/918075301729?text=${encodeURIComponent(message)}`);
  }

  return <form className={className} onSubmit={handleSubmit}>{children}</form>;
}
