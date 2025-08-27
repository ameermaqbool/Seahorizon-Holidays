import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Play } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Sea Horizon Holidays</h3>
            <p className="text-slate-300 text-sm">
              Your trusted Lakshadweep destination management company. 
              Local expertise, permits handled, end-to-end planning with 24×7 support.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/seahorizonindia/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-full hover:bg-primary-600 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-full hover:bg-primary-600 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-full hover:bg-primary-600 transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Tour Packages', href: '/packages' },
                { name: 'Lakshadweep Guide', href: '/lakshadweep' },
                { name: 'Best Time to Visit', href: '/lakshadweep/guide/best-time-to-visit' },
                { name: 'How to Reach', href: '/lakshadweep/guide/how-to-reach' },
                { name: 'Permits & Rules', href: '/lakshadweep/guide/permits-rules' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Islands */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Popular Islands</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Agatti Island', href: '/lakshadweep/islands/agatti' },
                { name: 'Bangaram Island', href: '/lakshadweep/islands/bangaram' },
                { name: 'Thinnakara Island', href: '/lakshadweep/islands/thinnakara' },
                { name: 'Kavaratti Island', href: '/lakshadweep/islands/kavaratti' },
                { name: 'Blog & Travel Tips', href: '/blog' },
                { name: 'Customer Reviews', href: '/#reviews' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-0.5 text-primary-400 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">24×7 WhatsApp Support</p>
                  <a 
                    href="tel:+918075301729"
                    className="text-white hover:text-primary-400 transition-colors"
                  >
                    +91 8075301729
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-0.5 text-primary-400 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">Email Inquiries</p>
                  <a 
                    href="mailto:info@seahorizonholidays.com"
                    className="text-white hover:text-primary-400 transition-colors"
                  >
                    info@seahorizonholidays.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-400 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">Office Location</p>
                  <p className="text-white">Lakshadweep Islands, India</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/918075301729?text=Hi Sea Horizon! I'd like to plan my Lakshadweep trip.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#25d366] hover:bg-[#128c7e] text-white rounded-md font-medium transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-slate-400">
              <p>© {currentYear} Sea Horizon Holidays. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="text-slate-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}