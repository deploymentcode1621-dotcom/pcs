import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, ArrowUp, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'Our Clients', href: '#clients' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    { label: 'HVAC Systems', href: '#hvac' },
    { label: 'Installation', href: '#installation' },
    { label: 'Maintenance (AMC)', href: '#maintenance' },
    { label: 'Fabrication', href: '#fabrication' },
    { label: 'Industrial Solutions', href: '#industrial' },
    { label: 'Commercial Projects', href: '#commercial' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <>
      <footer className="bg-slate-900 text-slate-300 relative overflow-hidden">
        {/* Animated gradient border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-[length:200%_100%] animate-gradient" />

        <div className="max-w-[1400px] mx-auto px-8 pt-16 pb-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Company Info */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center overflow-hidden">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
                  
                  <svg
                    className="w-7 h-7 fill-white relative z-10"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    <circle cx="12" cy="12" r="3" fill="rgba(255,255,255,0.3)" />
                  </svg>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-white">PCS</h3>
                  <p className="text-[0.65rem] tracking-widest">PROFESSIONAL COOLING SERVICES</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-6">
                We are a trusted HVAC solutions provider delivering efficient, reliable, and sustainable
                cooling systems. With a focus on comfort, energy efficiency, and innovation.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1.5 bg-blue-600/10 border border-blue-600/30 rounded-full text-xs text-blue-400 transition-all hover:bg-blue-600/20 hover:-translate-y-0.5">
                  ISO Certified
                </span>
                <span className="px-4 py-1.5 bg-blue-600/10 border border-blue-600/30 rounded-full text-xs text-blue-400 transition-all hover:bg-blue-600/20 hover:-translate-y-0.5">
                  Licensed
                </span>
                <span className="px-4 py-1.5 bg-blue-600/10 border border-blue-600/30 rounded-full text-xs text-blue-400 transition-all hover:bg-blue-600/20 hover:-translate-y-0.5">
                  Insured
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-lg font-bold text-white mb-6 relative pb-2">
                Quick Links
                <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
              </h4>

              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="group flex items-center text-sm transition-all hover:text-blue-400 hover:translate-x-2"
                    >
                      <span className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 mr-2">
                        →
                      </span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <h4 className="text-lg font-bold text-white mb-6 relative pb-2">
                Our Services
                <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
              </h4>

              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="group flex items-center text-sm transition-all hover:text-blue-400 hover:translate-x-2"
                    >
                      <span className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 mr-2">
                        →
                      </span>
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <h4 className="text-lg font-bold text-white mb-6 relative pb-2">
                Contact Us
                <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
              </h4>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3 transition-transform hover:translate-x-1">
                  <div className="w-10 h-10 bg-blue-600/15 rounded-lg flex items-center justify-center flex-shrink-0 transition-all hover:bg-blue-600/25 hover:scale-110">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h5 className="text-white text-sm font-semibold mb-1">Address</h5>
                    <p className="text-xs leading-relaxed">
                      Govind Niwas, Shop No-01 & 02<br />
                      House No-1411, Near Bhairavnath Temple,<br />
                      Undri Gaon, Pune - 411060
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 transition-transform hover:translate-x-1">
                  <div className="w-10 h-10 bg-blue-600/15 rounded-lg flex items-center justify-center flex-shrink-0 transition-all hover:bg-blue-600/25 hover:scale-110">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h5 className="text-white text-sm font-semibold mb-1">Phone</h5>
                    <a href="tel:9766124219" className="text-xs hover:text-blue-400 transition-colors block">
                      9766124219
                    </a>
                    <a href="tel:8806982266" className="text-xs hover:text-blue-400 transition-colors block">
                      8806982266
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 transition-transform hover:translate-x-1">
                  <div className="w-10 h-10 bg-blue-600/15 rounded-lg flex items-center justify-center flex-shrink-0 transition-all hover:bg-blue-600/25 hover:scale-110">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h5 className="text-white text-sm font-semibold mb-1">Email</h5>
                    <a
                      href="mailto:umesh@professionalcoolingservices.com"
                      className="text-xs hover:text-blue-400 transition-colors block break-all"
                    >
                      umeshkoli975@gmail.com
                    </a>
                    <a
                      href="mailto:services@professionalcoolingservuces.com"
                      className="text-xs hover:text-blue-400 transition-colors block break-all"
                    >
                      servicespcs15@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-11 h-11 bg-blue-600/10 border border-blue-600/30 rounded-xl flex items-center justify-center transition-all hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-1 hover:rotate-6 group"
                    >
                      <Icon className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              &copy; 2026{' '}
              <a href="#" className="text-blue-400 hover:text-white transition-colors">
                Professional Cooling Services
              </a>
              . All rights reserved.
            </p>

            <ul className="flex flex-wrap gap-6 text-sm">
              <li>
                <a href="#privacy" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#sitemap" className="hover:text-blue-400 transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/40 transition-all z-50 ${
          showScrollTop
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible translate-y-4'
        } hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/60`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    </>
  );
};

export default Footer;