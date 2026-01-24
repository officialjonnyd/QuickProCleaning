import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Clock, Sparkles, X, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`glass-white text-gray-900 sticky top-0 z-50 shadow-xl transition-all duration-300 ${
          isScrolled ? 'mx-4 mt-4 rounded-2xl' : ''
        }`}
      >
        <div className={`container mx-auto px-6 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}>
          <div className="flex items-center justify-between gap-8">
            <Link to="/" className="flex items-center group flex-shrink-0">
              <img
                src="/reliable_commercial_cleaning_you_can_trust.png"
                alt="QuickPro Cleaning Solutions Ltd"
                className={`w-auto transition-all duration-300 group-hover:scale-105 ${
                  isScrolled ? 'h-16 -my-2' : 'h-28 -my-6'
                }`}
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
                className="glass-green text-[#7ABB00] font-bold px-6 py-2.5 rounded-md hover:bg-[#7ABB00] hover:text-white transition-all shadow-lg"
              >
                Get a Quote
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-[#7ABB00] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 mt-4">
              <nav className="py-4">
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-colors ${
                        isActive('/')
                          ? 'bg-[#7ABB00]/10 text-[#7ABB00] font-semibold'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-colors ${
                        isActive('/services')
                          ? 'bg-[#7ABB00]/10 text-[#7ABB00] font-semibold'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      Commercial Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-colors ${
                        isActive('/about')
                          ? 'bg-[#7ABB00]/10 text-[#7ABB00] font-semibold'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pricing"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-colors ${
                        isActive('/pricing')
                          ? 'bg-[#7ABB00]/10 text-[#7ABB00] font-semibold'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>

                <div className="mt-6 px-4 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <a href="tel:7802788231" className="hover:text-[#7ABB00] transition-colors">
                      (780) 278-8231
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:quickpro2025@gmail.com" className="hover:text-[#7ABB00] transition-colors break-all">
                      quickpro2025@gmail.com
                    </a>
                  </div>
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center glass-green text-[#7ABB00] font-bold px-6 py-3 rounded-lg hover:bg-[#7ABB00] hover:text-white transition-all shadow-lg"
                  >
                    Get a Quote
                  </Link>
                </div>
              </nav>
            </div>
          )}
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
                Professional sanitation and disinfection services backed by expert commercial cleaning.
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
                <li>Property Management Cleaning</li>
                <li>Medical Facility Cleaning</li>
                <li>Office Cleaning</li>
                <li>Airbnb Turnover Cleaning</li>
                <li>Move-Out Cleaning</li>
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
