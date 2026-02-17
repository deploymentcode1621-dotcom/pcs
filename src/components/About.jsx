import React, { useEffect, useRef } from 'react';
import { Award, CheckCircle } from 'lucide-react';
import logo_company from '../../public/logo new.png';

const About = () => {
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (leftContentRef.current) observer.observe(leftContentRef.current);
    if (rightContentRef.current) observer.observe(rightContentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .slide-left {
          opacity: 0;
          transform: translateX(-100px);
        }

        .slide-right {
          opacity: 0;
          transform: translateX(100px);
        }

        .slide-left.animate-in {
          animation: slideInLeft 1s ease-out forwards;
        }

        .slide-right.animate-in {
          animation: slideInRight 1s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <section id="about" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Left Content - Slides in from LEFT */}
            <div 
              ref={leftContentRef}
              className="space-y-4 sm:space-y-6 slide-left"
            >
              <div className="inline-block">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  About Company
                </h2>
                <div className="h-1 sm:h-1.5 w-16 sm:w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                We specialize in designing, installing, and maintaining cutting-edge cooling solutions for 
                residential, commercial, and industrial applications. With a focus on energy efficiency, 
                reliability, and customer satisfaction, we help businesses optimize their HVAC infrastructure 
                to ensure comfort, productivity, and cost savings while staying aligned with their needs.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Our expertise includes system design, installation, and maintenance of air conditioning and 
                refrigeration systems tailored to residential, commercial, and industrial needs.
              </p>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 shadow-lg border border-blue-200">
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-900 mb-2 sm:mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" />
                    Our Vision
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    To be a leading HVAC solution company recognized for innovation, sustainability, 
                    and exceptional client-driven service, demonstrating excellence and exemplary 
                    performance.
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-900 mb-2 sm:mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" />
                    Our Mission
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base text-gray-700">
                    <li className="flex items-start gap-2 sm:gap-3 transition-all duration-300 hover:translate-x-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>To provide innovative solutions that enhance comfort and productivity</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3 transition-all duration-300 hover:translate-x-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>To foster partnerships built on quality, trust, and value</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3 transition-all duration-300 hover:translate-x-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>To promote energy efficiency and sustainable practices</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3 transition-all duration-300 hover:translate-x-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>To build long-term client relationships through reliable support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Content - Slides in from RIGHT */}
            <div 
              ref={rightContentRef}
              className="relative px-4 sm:px-0 slide-right"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
                
                <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 md:p-12">
                  <div className="text-center text-white relative z-10">
                    {/* Replace with your logo image */}
                    <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-70 md:h-40 mx-auto mb-4 sm:mb-6 md:mb-8 animate-float">
                                        <img src={logo_company} alt="Logo" className="w-full h-full" />
                      
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 drop-shadow-lg">
                      Excellence in Cooling
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 drop-shadow-md">
                      Delivering comfort through innovation and expertise
                    </p>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                </div>
              </div>

              <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-4 sm:-right-6 md:-right-8 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-blue-200 rounded-full filter blur-3xl opacity-50 -z-10"></div>
              <div className="absolute -top-4 sm:-top-6 md:-top-8 -left-4 sm:-left-6 md:-left-8 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-blue-300 rounded-full filter blur-3xl opacity-40 -z-10"></div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;