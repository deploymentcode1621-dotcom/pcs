// import React, { useState, useEffect } from 'react';
// import { 
//   ArrowRight, CheckCircle, Phone, Award, Clock, Users, Wrench, 
//   Menu, X, Mail, MapPin, Wind, Snowflake, Zap, Shield,
//   Building, Building2, GraduationCap, Home as HomeIcon, Factory, Hotel
// } from 'lucide-react';
// import logo_company from '../../public/logo new.png';
// const Home = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeLink, setActiveLink] = useState('home');

//   // Put your image URL here - can be from your public folder or external URL
//   const heroImageUrl = '/1-B.jpg'; // Update this path to where your image is located

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
      
//       const sections = ['home', 'about', 'services', 'why-us', 'clients', 'contact'];
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top <= 150 && rect.bottom >= 150) {
//             setActiveLink(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const features = [
//     'ISO Certified Services',
//     '24/7 Customer Support',
//     'Experienced Technicians',
//     'Quality Equipment',
//   ];

//   const products = [
//     {
//       title: 'HVAC System Products & Projects',
//       items: [
//         'VRFs, VRV systems (Daikin & LG etc.)',
//         'Air condition (Ducted & Ductless)',
//         'Supply / Installation Piping & commissioning',
//         'AHU (air handling Units)',
//         'Chilled water VAV & CAV air-conditioning system',
//         'Installation of Ahu/ Ductes',
//         'AC Duct Installation & Pump',
//         'Ductwork'
//       ]
//     },
//     {
//       title: 'Industrial Structure & Fabrication',
//       items: [
//         'AC grill Supply / Installation',
//         'Structural Fabrication of Installation & Installation',
//         'Grill ducting / Piping & Wirings',
//         'MS Replacement of U bolt etc.',
//         'AC Material Replacement',
//         'Main water gutter fabrication & fence',
//         'Windows Railing / Installation from M.S Pipe/etc.',
//         'G.I fabrication & structure work'
//       ]
//     },
//     {
//       title: 'Annual Maintenance Services (AMC)',
//       items: [
//         'AMC to meet clients requirements and need to ensure continued operations and enhance the knowledge of AC maintenance service team',
//         'AMC includes quarterly and half yearly service basis',
//         'Call charges, Labor charges & other materials will be charged as actual'
//       ]
//     }
//   ];

//   const whyChooseUs = [
//     {
//       icon: Users,
//       title: 'Experienced Technical Team',
//       description: 'Skilled engineers and technicians with decades of expertise in HVAC solutions.',
//       color: 'from-blue-500 to-blue-600'
//     },
//     {
//       icon: Zap,
//       title: 'End-to-End Project Execution',
//       description: 'Comprehensive project management from design and installation through post-installation support.',
//       color: 'from-green-500 to-green-600'
//     },
//     {
//       icon: Wind,
//       title: 'Energy Efficient & Cost-Effective Solutions',
//       description: 'Solutions designed to optimize energy consumption and reduce operational costs.',
//       color: 'from-orange-500 to-orange-600'
//     },
//     {
//       icon: Award,
//       title: 'Strong After-Sales Service Support',
//       description: 'Reliable maintenance and support to ensure long-term system efficiency.',
//       color: 'from-purple-500 to-purple-600'
//     },
//     {
//       icon: Shield,
//       title: 'Quality Equipment & Trusted Brands',
//       description: 'We use only premium equipment from leading, reliable manufacturers.',
//       color: 'from-red-500 to-red-600'
//     },
//     {
//       icon: CheckCircle,
//       title: 'Compliance with Safety & Industry Standards',
//       description: 'Strict adherence to safety codes, standards, and regulations.',
//       color: 'from-indigo-500 to-indigo-600'
//     }
//   ];

//   const clients = [
//     { icon: HomeIcon, title: 'Residential', subtitle: 'Buildings' },
//     { icon: Building2, title: 'Commercial', subtitle: 'Buildings' },
//     { icon: Building, title: 'Corporate', subtitle: 'Offices' },
//     { icon: Award, title: 'Hospitals & Healthcare', subtitle: 'Facilities' },
//     { icon: Hotel, title: 'Hotels & Hospitality', subtitle: '' },
//     { icon: Factory, title: 'Industrial Units', subtitle: '' },
//     { icon: GraduationCap, title: 'Educational Institutions', subtitle: '' },
//     { icon: Building2, title: 'and more...', subtitle: '' }
//   ];

//   const navLinks = [
//     { id: 'home', label: 'Home' },
//     { id: 'about', label: 'About' },
//     { id: 'services', label: 'Services' },
//     { id: 'why-us', label: 'Why Us' },
//     { id: 'clients', label: 'Clients' },
//   ];

//   const handleLinkClick = (id) => {
//     setActiveLink(id);
//     setMobileMenuOpen(false);
//   };

//   return (
//     <>
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
        
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes slideInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
        
//         @keyframes slideInRight {
//           from {
//             opacity: 0;
//             transform: translateX(50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
        
//         @keyframes shimmer {
//           0% { background-position: -1000px 0; }
//           100% { background-position: 1000px 0; }
//         }

//         @keyframes pulse {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.8; }
//         }
        
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
        
//         .animate-fadeInUp {
//           animation: fadeInUp 0.8s ease-out forwards;
//         }
        
//         .animate-slideInLeft {
//           animation: slideInLeft 0.8s ease-out forwards;
//         }
        
//         .animate-slideInRight {
//           animation: slideInRight 0.8s ease-out forwards;
//         }
        
//         .gradient-shimmer {
//           background: linear-gradient(
//             90deg,
//             rgba(255,255,255,0) 0%,
//             rgba(255,255,255,0.3) 50%,
//             rgba(255,255,255,0) 100%
//           );
//           background-size: 1000px 100%;
//           animation: shimmer 3s infinite;
//         }
        
//         .hover-lift {
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }
        
//         .hover-lift:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 20px 40px rgba(0,0,0,0.15);
//         }

//         html {
//           scroll-behavior: smooth;
//         }

//         .hero-image-container {
//           position: relative;
//           width: 100%;
//           overflow: hidden;
//         }

//         .hero-image-container img {
//           width: 100%;
//           height: auto;
//           display: block;
//           object-fit: contain;
//           max-width: 100%;
//         }

//         /* Mobile responsive - reduce image size */
//         @media (max-width: 768px) {
//           .hero-image-container {
//             max-height: 500px;
//           }
          
//           .hero-image-container img {
//             object-fit: cover;
//             height: 100%;
//           }
//         }

//         @media (max-width: 480px) {
//           .hero-image-container {
//             max-height: 400px;
//           }
//         }

//         /* Extra small devices */
//         @media (max-width: 360px) {
//           .hero-image-container {
//             max-height: 300px;
//           }
//         }
//       `}</style>

//       <div className="min-h-screen bg-white">
//         {/* Navigation */}
//         <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled ? 'bg-white/98 shadow-lg' : 'bg-white/95 shadow-md'
//         } backdrop-blur-lg`}>
//           <div className="max-w-7xl mx-auto px-4 sm:px-6">
//             <div className="flex justify-between items-center h-26 sm:h-20">
//               {/* Logo */}
//               <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
                
//                 <div className="flex flex-col">
//                 <img src={logo_company} alt="Logo" className="w-19 h-10 sm:w-30 sm:h-12" />
//                 </div>
//               </div>

//               {/* Desktop Navigation */}
//               <ul className="hidden lg:flex items-center gap-8">
//                 {navLinks.map((link) => (
//                   <li key={link.id}>
//                     <a
//                       href={`#${link.id}`}
//                       onClick={() => handleLinkClick(link.id)}
//                       className={`relative font-medium text-sm transition-colors pb-2 ${
//                         activeLink === link.id ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
//                       }`}
//                     >
//                       {link.label}
//                       <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 ${
//                         activeLink === link.id ? 'w-full' : 'w-0'
//                       }`} />
//                     </a>
//                   </li>
//                 ))}
                
//                 <li className="flex items-center gap-3">
//                   <a
//                     href="tel:9766124219"
//                     className="hidden xl:flex items-center gap-2 text-blue-600 font-semibold text-sm hover:scale-105 transition-transform"
//                   >
//                     <Phone className="w-4 h-4" />
//                     9766124219
//                   </a>
//                   <a
//                     href="#contact"
//                     className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm shadow-lg shadow-blue-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
//                   >
//                     Get Quote
//                     <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
//                   </a>
//                 </li>
//               </ul>

//               {/* Mobile Menu Button */}
//               <button 
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
//               >
//                 {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />}
//               </button>
//             </div>

//             {/* Mobile Menu */}
//             {mobileMenuOpen && (
//               <div className="lg:hidden py-4 space-y-2">
//                 {navLinks.map((link) => (
//                   <a
//                     key={link.id}
//                     href={`#${link.id}`}
//                     onClick={() => handleLinkClick(link.id)}
//                     className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
//                       activeLink === link.id ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
//                     }`}
//                   >
//                     {link.label}
//                   </a>
//                 ))}
//                 <div className="pt-2 space-y-2">
//                   <a
//                     href="tel:9766124219"
//                     className="flex items-center justify-center gap-2 text-blue-600 font-semibold py-2.5 border-2 border-blue-600 rounded-full"
//                   >
//                     <Phone className="w-5 h-5" />
//                     9766124219
//                   </a>
//                   <a
//                     href="#contact"
//                     className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 rounded-full font-semibold"
//                   >
//                     Get Quote
//                     <ArrowRight className="w-4 h-4" />
//                   </a>
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>

//         {/* Spacer for fixed navbar */}
//         <div className="h-16 sm:h-20" />

//         {/* Hero Section - Your Full Image */}
//        <section id="home" className="relative w-full">
//   <img
//     src={heroImageUrl}
//     alt="PCS Professional Cooling Services - Cooling India, Comfortably"
//     className="w-full h-auto object-contain"
//     loading="eager"
//   />
// </section>
//         {/* About Section */}
     

//         {/* Products & Services Section */}
//         <section id="services" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6">
//             <div className="text-center mb-8 sm:mb-12 md:mb-16">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">Products & Services</h2>
//               <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
//                 Comprehensive HVAC Solutions for Your Comfort
//               </p>
//               <div className="h-1 sm:h-1.5 w-16 sm:w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-3 sm:mt-4 md:mt-6"></div>
//             </div>

//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
//               {products.map((product, index) => (
//                 <div 
//                   key={index}
//                   className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 hover-lift transition-all"
//                 >
//                   <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${
//                     index === 0 ? 'from-blue-500 to-blue-600' : 
//                     index === 1 ? 'from-green-500 to-green-600' : 
//                     'from-orange-500 to-orange-600'
//                   } rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-lg`}>
//                     {index === 0 ? <Snowflake className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" /> : 
//                      index === 1 ? <Building className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" /> : 
//                      <Wrench className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />}
//                   </div>
//                   <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">{product.title}</h3>
//                   <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
//                     {product.items.map((item, i) => (
//                       <li key={i} className="flex items-start gap-2 sm:gap-2.5 md:gap-3 text-gray-600">
//                         <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
//                         <span className="text-xs sm:text-sm leading-relaxed">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Why Choose Us Section */}
//         <section id="why-us" className="py-12 sm:py-16 md:py-24 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6">
//             <div className="text-center mb-8 sm:mb-12 md:mb-16">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">Why Choose Us</h2>
//               <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
//                 Reliable HVAC Solutions for Your Comfort
//               </p>
//               <div className="h-1 sm:h-1.5 w-16 sm:w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-3 sm:mt-4 md:mt-6"></div>
//             </div>

//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
//               {whyChooseUs.map((item, index) => {
//                 const Icon = item.icon;
//                 return (
//                   <div 
//                     key={index}
//                     className="bg-gradient-to-br from-blue-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover-lift border border-blue-100 shadow-md transition-all"
//                   >
//                     <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${item.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-lg`}>
//                       <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
//                     </div>
//                     <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
//                     <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{item.description}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* Our Clients Section */}
//         <section id="clients" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6">
//             <div className="text-center mb-8 sm:mb-12 md:mb-16">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">Our Clients</h2>
//               <div className="h-1 sm:h-1.5 w-16 sm:w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-3 sm:mt-4 md:mt-6"></div>
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
//               {clients.map((client, index) => {
//                 const Icon = client.icon;
//                 return (
//                   <div 
//                     key={index}
//                     className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center hover-lift shadow-md transition-all"
//                   >
//                     <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 shadow-lg">
//                       <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
//                     </div>
//                     <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">{client.title}</h3>
//                     {client.subtitle && (
//                       <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">{client.subtitle}</p>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

       
//       </div>
//     </>
//   );
// };

// export default Home;
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Phone, Menu, X
} from 'lucide-react';
import logo_company from '../../public/logo new.png';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const heroImageUrl = '/1-B.jpg';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
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
        html {
          scroll-behavior: smooth;
        }

        .hero-image-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .hero-image-container img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          max-width: 100%;
        }

        @media (max-width: 768px) {
          .hero-image-container {
            max-height: 500px;
          }
          
          .hero-image-container img {
            object-fit: cover;
            height: 100%;
          }
        }

        @media (max-width: 480px) {
          .hero-image-container {
            max-height: 400px;
          }
        }

        @media (max-width: 360px) {
          .hero-image-container {
            max-height: 300px;
          }
        }
      `}</style>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/98 shadow-lg' : 'bg-white/95 shadow-md'
        } backdrop-blur-lg`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center h-26 sm:h-20">
              {/* Logo */}
              <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
                <div className="flex flex-col">
                  <img src={logo_company} alt="Logo" className="w-19 h-10 sm:w-30 sm:h-12" />
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
                    className="hidden xl:flex items-center gap-2 text-blue-600 font-semibold text-sm hover:scale-105 transition-transform"
                  >
                    <Phone className="w-4 h-4" />
                    9766124219
                  </a>
                  <a
                    href="#contact"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm shadow-lg shadow-blue-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  >
                    Get Quote
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </li>
              </ul>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />}
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
        <div className="h-16 sm:h-20" />

        {/* Hero Section */}
        <section id="home" className="relative w-full">
          <img
            src={heroImageUrl}
            alt="PCS Professional Cooling Services - Cooling India, Comfortably"
            className="w-full h-auto object-contain"
            loading="eager"
          />
        </section>
      </div>
    </>
  );
};

export default Home;