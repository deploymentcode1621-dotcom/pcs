import { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'products', label: 'Products', href: '#products' },
    { id: 'clients', label: 'Clients', href: '#clients' },
  ];

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 shadow-lg shadow-blue-500/10'
            : 'bg-white/95 shadow-md shadow-blue-500/5'
        } backdrop-blur-lg`}
      >
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex justify-between items-center h-20 lg:h-[85px]">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="relative w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 animate-float">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
                
                {/* Logo Icon */}
                <svg
                  className="w-7 h-7 lg:w-8 lg:h-8 fill-white relative z-10"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  <circle cx="12" cy="12" r="3" fill="rgba(255,255,255,0.3)" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-bold text-blue-900 leading-tight tracking-tight">
                  PCS
                </span>
                <span className="text-[0.65rem] text-gray-600 font-medium tracking-widest">
                  COOLING SERVICES
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.id)}
                    className={`relative font-medium text-[15px] transition-colors pb-2 ${
                      activeLink === link.id
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 ${
                        activeLink === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>
                </li>
              ))}

              {/* CTA Buttons */}
              <li className="flex items-center gap-4">
                <a
                  href="tel:9766124219"
                  className="flex items-center gap-2 text-blue-600 font-semibold text-[15px] transition-transform hover:scale-105"
                >
                  <Phone className="w-[18px] h-[18px]" />
                  9766124219
                </a>

                <a
                  href="#contact"
                  className="relative flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full font-semibold text-[15px] shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 overflow-hidden group"
                >
                  {/* Shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                  
                  <span className="relative z-10">Get Quote</span>
                  <ArrowRight className="w-4 h-4 relative z-10" />
                </a>
              </li>
            </ul>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-blue-600" />
              ) : (
                <Menu className="w-6 h-6 text-blue-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0 visible'
              : 'opacity-0 -translate-y-4 invisible'
          }`}
        >
          <ul className="py-4">
            {navLinks.map((link) => (
              <li key={link.id} className="border-b border-gray-100">
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={`block px-8 py-4 font-medium transition-colors ${
                    activeLink === link.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Mobile CTA */}
            <li className="px-8 py-4 space-y-3">
              <a
                href="tel:9766124219"
                className="flex items-center justify-center gap-2 text-blue-600 font-semibold py-3 border-2 border-blue-600 rounded-full transition-colors hover:bg-blue-50"
              >
                <Phone className="w-5 h-5" />
                9766124219
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-full font-semibold shadow-lg shadow-blue-500/30"
              >
                Get Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20 lg:h-[85px]" />
    </>
  );
};

export default Navbar;