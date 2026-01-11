import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Clock, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`bg-white text-gray-900 sticky top-0 z-50 shadow-md transition-all duration-300 ${
          isHeaderVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-8">
            <Link to="/" className="flex items-center group flex-shrink-0">
              <img
                src="/reliable_commercial_cleaning_you_can_trust.png"
                alt="QuickPro Cleaning Solutions Ltd"
                className="h-28 w-auto transition-transform group-hover:scale-105 -my-6"
                style={{ objectFit: 'contain' }}
              />
            </Link>

            <nav className="hidden lg:flex items-center flex-1 justify-center">
              <ul className="flex items-center gap-8 text-sm font-medium">
                <li>
                  <Link
                    to="/"
                    className={`hover:text-[#7ABB00] transition-colors ${
                      isActive('/') ? 'text-[#7ABB00]' : 'text-gray-700'
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className={`hover:text-[#7ABB00] transition-colors ${
                      isActive('/services') ? 'text-[#7ABB00]' : 'text-gray-700'
                    }`}
                  >
                    Commercial Cleaning
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`hover:text-[#7ABB00] transition-colors ${
                      isActive('/about') ? 'text-[#7ABB00]' : 'text-gray-700'
                    }`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className={`hover:text-[#7ABB00] transition-colors ${
                      isActive('/pricing') ? 'text-[#7ABB00]' : 'text-gray-700'
                    }`}
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="hidden md:flex items-center gap-4 flex-shrink-0">
              <div className="flex flex-col items-end gap-1 text-sm">
                <a href="mailto:quickpro2025@gmail.com" className="text-gray-600 hover:text-[#7ABB00] transition-colors">
                  quickpro2025@gmail.com
                </a>
                <a href="tel:7802788231" className="text-gray-900 font-semibold hover:text-[#7ABB00] transition-colors">
                  (780) 278-8231
                </a>
              </div>
              <Link
                to="/contact"
                className="bg-[#7ABB00] text-white px-6 py-2.5 rounded-md font-medium hover:bg-[#6aa300] transition-colors shadow-sm"
              >
                Get a Quote
              </Link>
            </div>

            <button className="lg:hidden text-gray-700 hover:text-[#7ABB00] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-gray-900 text-white mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img
                src="/reliable_commercial_cleaning_you_can_trust.png"
                alt="QuickPro Cleaning Solutions Ltd"
                className="h-20 w-auto mb-4"
                style={{ objectFit: 'contain' }}
              />
              <p className="text-gray-400 text-sm">
                Certified sanitation and disinfection services backed by professional commercial cleaning.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#7ABB00]">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#7ABB00]">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Commercial Cleaning</li>
                <li>Sanitation & Disinfection</li>
                <li>Medical Facility Cleaning</li>
                <li>Office Cleaning</li>
                <li>Banking Facilities</li>
                <li>Dealership Cleaning</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#7ABB00]">Contact Info</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2 text-gray-400">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <a href="tel:7802788231" className="hover:text-white transition-colors">
                    780 278 8231
                  </a>
                </li>
                <li className="flex items-start gap-2 text-gray-400">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <a href="mailto:quickpro2025@gmail.com" className="hover:text-white transition-colors break-all">
                    quickpro2025@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2 text-gray-400">
                  <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Monday–Friday<br />9am–9pm</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} QuickPro Cleaning Solutions Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
