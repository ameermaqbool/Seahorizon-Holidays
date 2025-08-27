'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace('+', '')}?text=Hi Sea Horizon! I'd like to know more about your Lakshadweep packages.`;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isMinimized ? (
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-w-sm animate-slide-up">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#25d366] rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">Sea Horizon</h4>
                <p className="text-xs text-gray-600">Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Minimize chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <p className="text-sm text-gray-700 mb-4">
            Hi! 👋 Need help planning your Lakshadweep trip? Chat with our local experts now!
          </p>
          
          <Button
            asChild
            className="w-full bg-[#25d366] hover:bg-[#128c7e] text-white"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Start Chat
            </a>
          </Button>
        </div>
      ) : (
        <button
          onClick={() => setIsMinimized(false)}
          className="w-14 h-14 bg-[#25d366] hover:bg-[#128c7e] rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Open WhatsApp chat"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </button>
      )}
    </div>
  );
}