import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, CheckCircle, Phone, Award, Clock, Users, Wrench, 
  Menu, X, Mail, MapPin, Wind, Snowflake, Zap, Shield,
  Building, Building2, GraduationCap, Home as HomeIcon, Factory, Hotel
} from 'lucide-react';

import ImageCarousel from './ImageCarousel';
const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active link based on scroll position
      const sections = ['home', 'about', 'services', 'why-us', 'clients', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    'ISO Certified Services',
    '24/7 Customer Support',
    'Experienced Technicians',
    'Quality Equipment',
  ];

  const products = [
    {
      title: 'HVAC System Products & Projects',
      items: [
        'VRFs, VRV systems (Daikin & LG etc.)',
        'Air condition (Ducted & Ductless)',
        'Supply / Installation Piping & commissioning',
        'AHU (air handling Units)',
        'Chilled water VAV & CAV air-conditioning system',
        'Installation of Ahu/ Ductes',
        'AC Duct Installation & Pump',
        'Ductwork'
      ]
    },
    {
      title: 'Industrial Structure & Fabrication',
      items: [
        'AC grill Supply / Installation',
        'Structural Fabrication of Installation & Installation',
        'Grill ducting / Piping & Wirings',
        'MS Replacement of U bolt etc.',
        'AC Material Replacement',
        'Main water gutter fabrication & fence',
        'Windows Railing / Installation from M.S Pipe/etc.',
        'G.I fabrication & structure work'
      ]
    },
    {
      title: 'Annual Maintenance Services (AMC)',
      items: [
        'AMC to meet clients requirements and need to ensure continued operations and enhance the knowledge of AC maintenance service team',
        'AMC includes quarterly and half yearly service basis',
        'Call charges, Labor charges & other materials will be charged as actual'
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Experienced Technical Team',
      description: 'Skilled engineers and technicians with decades of expertise in HVAC solutions.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'End-to-End Project Execution',
      description: 'Comprehensive project management from design and installation through post-installation support.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Wind,
      title: 'Energy Efficient & Cost-Effective Solutions',
      description: 'Solutions designed to optimize energy consumption and reduce operational costs.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Award,
      title: 'Strong After-Sales Service Support',
      description: 'Reliable maintenance and support to ensure long-term system efficiency.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Quality Equipment & Trusted Brands',
      description: 'We use only premium equipment from leading, reliable manufacturers.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: CheckCircle,
      title: 'Compliance with Safety & Industry Standards',
      description: 'Strict adherence to safety codes, standards, and regulations.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const clients = [
    { icon: HomeIcon, title: 'Residential', subtitle: 'Buildings' },
    { icon: Building2, title: 'Commercial', subtitle: 'Buildings' },
    { icon: Building, title: 'Corporate', subtitle: 'Offices' },
    { icon: Award, title: 'Hospitals & Healthcare', subtitle: 'Facilities' },
    { icon: Hotel, title: 'Hotels & Hospitality', subtitle: '' },
    { icon: Factory, title: 'Industrial Units', subtitle: '' },
    { icon: GraduationCap, title: 'Educational Institutions', subtitle: '' },
    { icon: Building2, title: 'and more...', subtitle: '' }
  ];

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'clients', label: 'Clients' },
  ];

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .gradient-shimmer {
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.3) 50%,
            rgba(255,255,255,0) 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/98 shadow-lg' : 'bg-white/95 shadow-md'
        } backdrop-blur-lg`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
                  <Snowflake className="w-7 h-7 text-white relative z-10" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-blue-900 leading-tight">PCS</span>
                  <span className="text-[0.65rem] text-gray-600 font-medium tracking-wider">COOLING SERVICES</span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <ul className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => handleLinkClick(link.id)}
                      className={`relative font-medium text-sm transition-colors pb-2 ${
                        activeLink === link.id ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {link.label}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 ${
                        activeLink === link.id ? 'w-full' : 'w-0'
                      }`} />
                    </a>
                  </li>
                ))}
                
                <li className="flex items-center gap-3">
                  <a
                    href="tel:9766124219"
                    className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:scale-105 transition-transform"
                  >
                    <Phone className="w-4 h-4" />
                    9766124219
                  </a>
                  <a
                    href="#contact"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg shadow-blue-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </li>
              </ul>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-blue-600" /> : <Menu className="w-6 h-6 text-blue-600" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden py-4 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeLink === link.id ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2 space-y-2">
                  <a
                    href="tel:9766124219"
                    className="flex items-center justify-center gap-2 text-blue-600 font-semibold py-2.5 border-2 border-blue-600 rounded-full"
                  >
                    <Phone className="w-5 h-5" />
                    9766124219
                  </a>
                  <a
                    href="#contact"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 rounded-full font-semibold"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Spacer for fixed navbar */}
        <div className="h-20" />
{/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
          {/* Animated background shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float" style={{ animationDelay: '2s' }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-14 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-semibold shadow-sm animate-slideInLeft border border-blue-200">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Trusted HVAC Solutions Provider
                </div>

               <div className="animate-slideInLeft" style={{ animationDelay: '0.1s' }}>
  <h1 className="text-[clamp(1.9rem,4vw,2.8rem)] font-bold text-gray-900 leading-tight mb-4 max-w-xl">
    Cooling India,
    <span className="block mt-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent relative">
      Comfortably...!
      <div className="absolute inset-0 gradient-shimmer" />
    </span>
  </h1>

  <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-lg">
    Professional HVAC solutions delivering efficient, reliable, and sustainable cooling systems 
    for residential, commercial, and industrial applications.
  </p>
</div>


                <div className="grid grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2.5 text-gray-700 bg-white rounded-xl p-2.5 shadow-sm hover-lift animate-fadeInUp"
                      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                    >
                      <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2 animate-slideInLeft" style={{ animationDelay: '0.5s' }}>
                  <a
                    href="#contact"
                    className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-7 py-3 rounded-full font-semibold text-sm shadow-lg shadow-blue-500/30 overflow-hidden transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative">Get Free Quote</span>
                    <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="tel:9766124219"
                    className="group flex items-center justify-center gap-2 bg-white text-blue-600 px-7 py-3 rounded-full font-semibold text-sm border-2 border-blue-600 hover:bg-blue-50 transition-all shadow-md hover:shadow-lg"
                  >
                    <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    Call Now
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                  <div className="text-center group cursor-default">
                    <div className="text-3xl font-bold bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent group-hover:scale-110 transition-transform">15+</div>
                    <div className="text-xs text-gray-600 mt-1 font-medium">Years Experience</div>
                  </div>
                  <div className="text-center group cursor-default">
                    <div className="text-3xl font-bold bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent group-hover:scale-110 transition-transform">500+</div>
                    <div className="text-xs text-gray-600 mt-1 font-medium">Projects Done</div>
                  </div>
                  <div className="text-center group cursor-default">
                    <div className="text-3xl font-bold bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent group-hover:scale-110 transition-transform">100%</div>
                    <div className="text-xs text-gray-600 mt-1 font-medium">Client Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Image Carousel */}
              <div className="relative animate-slideInRight" style={{ animationDelay: '0.3s' }}>
                <div className="relative">
                  <ImageCarousel />

                  {/* Floating badges - smaller size */}
                  <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-xl p-3 animate-float hover-lift z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">ISO Certified</div>
                        <div className="text-[0.65rem] text-gray-600">Quality Assured</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-3 animate-float hover-lift z-10" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">24/7 Support</div>
                        <div className="text-[0.65rem] text-gray-600">Always Available</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 -right-3 -translate-y-1/2 bg-white rounded-xl shadow-xl p-3 animate-float hover-lift z-10" style={{ animationDelay: '0.5s' }}>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">Expert Team</div>
                        <div className="text-[0.65rem] text-gray-600">Skilled Technicians</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/4 -left-3 bg-white rounded-xl shadow-xl p-3 animate-float hover-lift z-10" style={{ animationDelay: '1.5s' }}>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Wrench className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">Pro Equipment</div>
                        <div className="text-[0.65rem] text-gray-600">Latest Technology</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
     <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-block">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">About Company</h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We specialize in designing, installing, and maintaining cutting-edge cooling solutions for 
                  residential, commercial, and industrial applications. With a focus on energy efficiency, 
                  reliability, and customer satisfaction, we help businesses optimize their HVAC infrastructure 
                  to ensure comfort, productivity, and cost savings while staying aligned with their needs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our expertise includes system design, installation, and maintenance of air conditioning and refrigeration 
                  systems tailored to residential, commercial, and industrial needs.
                </p>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Our Vision</h3>
                    <p className="text-gray-700 text-sm">
                      To be a leading HVAC solution company recognized for innovation, sustainability, 
                      and exceptional client-driven service, demonstrating excellence and exemplary 
                      performance.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Our Mission</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>To provide innovative solutions that enhance comfort and productivity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>To foster partnerships built on quality, trust, and value</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>To promote energy efficiency and sustainable practices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>To build long-term client relationships through reliable support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative px-4">
                <div className="aspect-square bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="text-center text-white">
                      <Snowflake className="w-32 h-32 mx-auto mb-6 animate-float" />
                      <h3 className="text-3xl font-bold mb-4">Excellence in Cooling</h3>
                      <p className="text-blue-100 text-lg">
                        Delivering comfort through innovation and expertise
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-200 rounded-full filter blur-3xl opacity-50"></div>
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-300 rounded-full filter blur-3xl opacity-40"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Products & Services Section */}
        <section id="services" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Products & Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive HVAC Solutions for Your Comfort
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 hover-lift"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${index === 0 ? 'from-blue-500 to-blue-600' : index === 1 ? 'from-green-500 to-green-600' : 'from-orange-500 to-orange-600'} rounded-xl flex items-center justify-center mb-4`}>
                    {index === 0 ? <Snowflake className="w-7 h-7 text-white" /> : 
                     index === 1 ? <Building className="w-7 h-7 text-white" /> : 
                     <Wrench className="w-7 h-7 text-white" />}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{product.title}</h3>
                  <ul className="space-y-2">
                    {product.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Reliable HVAC Solutions for Your Comfort
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 hover-lift border border-blue-100"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Clients Section */}
        <section id="clients" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Clients</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clients.map((client, index) => {
                const Icon = client.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-6 text-center hover-lift shadow-md"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">{client.title}</h3>
                    {client.subtitle && (
                      <p className="text-xs text-gray-600 mt-1">{client.subtitle}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

  
      </div>
    </>
  );
};

export default Home;