// Public business contact details; no credentials belong here.
export const WHATSAPP_NUMBER = '918075301729';
export const PHONE_URL = `tel:+${WHATSAPP_NUMBER}`;
export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
