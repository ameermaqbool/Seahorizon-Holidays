'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Packages', href: '/packages' },
  { name: 'Why Us', href: '/why-us' },
  { name: 'Lakshadweep Guide', href: '/lakshadweep' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/918075301729?text=Hi%20Sea%20Horizon!%20I%20want%20to%20plan%20a%20Lakshadweep%20trip. Sea Horizon! I'd like to know more about your Lakshadweep packages.`;

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 font-bold text-xl focus-ring"
          >
            <img
              src="/logo.png.jpg"
              alt="Sea Horizon Holidays Logo"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className={cn(
              "transition-colors duration-300",
              isScrolled ? "text-primary-700" : "text-white text-shadow-md"
            )}>
              Sea Horizon
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus-ring",
                  pathname === item.href
                    ? isScrolled
                      ? "bg-primary-100 text-primary-800"
                      : "bg-white/20 text-white"
                    : isScrolled
                      ? "text-gray-600 hover:text-primary-700 hover:bg-primary-50"
                      : "text-white/90 hover:text-white hover:bg-white/10 text-shadow-md"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* WhatsApp CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm"
            >
              <Phone className="h-4 w-4" />
              <span className={cn(
                "transition-colors duration-300",
                isScrolled ? "text-gray-600" : "text-white/90 text-shadow-md"
              )}>
                +91 8075301729
              </span>
            </a>
            <Button
              asChild
              className="whatsapp-green hover:bg-[#128c7e] text-white"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Quote
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-md transition-colors duration-200 focus-ring",
              isScrolled ? "text-gray-600 hover:text-primary-700" : "text-white text-shadow-md hover:text-white/80"
            )}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200",
                    pathname === item.href
                      ? "bg-primary-100 text-primary-800"
                      : "text-gray-600 hover:text-primary-700 hover:bg-primary-50"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 mx-3 py-2 px-4 bg-[#25d366] hover:bg-[#128c7e] text-white rounded-md font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="h-4 w-4" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}