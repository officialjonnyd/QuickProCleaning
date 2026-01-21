import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Building2,
  HeartPulse,
  Briefcase,
  Landmark,
  Car,
  ArrowRight,
  CheckCircle2,
  Leaf,
  Clock,
  Award
} from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/5de5f668-9c2a-49d6-8e07-02e85db7b74d.png',
    '/8d3ce9ba-c558-43e2-8b59-fbda44fcceeb.png',
    '/78e57bf0-d9f5-4985-bd60-3c5a34744dc5.png',
    '/e67c4573-d61f-4846-9275-2c1fc00d95a4.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const services = [
    {
      icon: Building2,
      title: 'Airbnb & Rental Turnover',
      description: 'Specialized cleaning for Airbnb hosts and rental properties, ensuring units are move-in ready after every guest.'
    },
    {
      icon: ShieldCheck,
      title: 'Property Management Cleaning',
      description: 'Comprehensive cleaning solutions tailored for property managers handling multiple units and tenant turnovers.'
    },
    {
      icon: HeartPulse,
      title: 'Move-In & Move-Out Cleaning',
      description: 'Detailed cleaning services to restore rental properties to pristine condition between tenants.'
    },
    {
      icon: Briefcase,
      title: 'Commercial Window Cleaning',
      description: 'Professional window and glass cleaning for storefronts, offices, and commercial buildings.'
    },
    {
      icon: Landmark,
      title: 'Office & Facility Cleaning',
      description: 'Keep your workplace fresh, organized, and professional with regular cleaning services.'
    },
    {
      icon: Car,
      title: 'Post-Construction Cleaning',
      description: 'Remove construction dust and debris to prepare buildings for occupancy or presentation.'
    }
  ];

  return (
    <div>
      <section className="relative text-white py-16 md:py-24 overflow-hidden">
        {/* Slideshow Background */}
        <div className="absolute inset-0">
          {slides.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt="Commercial cleaning background"
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* Blue Gradient Overlay - fades from left to right */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(26, 61, 124, 0.95) 0%, rgba(26, 61, 124, 0.85) 30%, rgba(26, 61, 124, 0.6) 60%, rgba(26, 61, 124, 0.3) 100%)'
          }}
        />

        {/* Wavy lines overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.6 }}>
            <defs>
              <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7ABB00" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1A3D7C" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1A3D7C" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#7ABB00" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7ABB00" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#1A3D7C" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#7ABB00" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Wave 1 - thin to thick */}
            <path
              d="M 50 0 Q 80 100, 50 200 T 50 400 T 50 600 T 50 800"
              stroke="url(#waveGradient1)"
              strokeWidth="1"
              fill="none"
              className="wave-animate"
            >
              <animate attributeName="stroke-width" values="1;8;1" dur="4s" repeatCount="indefinite" />
            </path>

            {/* Wave 2 - thick to thin */}
            <path
              d="M 200 0 Q 230 120, 200 240 T 200 480 T 200 720"
              stroke="url(#waveGradient2)"
              strokeWidth="8"
              fill="none"
              className="wave-animate"
            >
              <animate attributeName="stroke-width" values="8;2;8" dur="5s" repeatCount="indefinite" />
            </path>

            {/* Wave 3 - pulsing */}
            <path
              d="M 400 0 Q 370 80, 400 160 T 400 320 T 400 480 T 400 640 T 400 800"
              stroke="url(#waveGradient3)"
              strokeWidth="4"
              fill="none"
              className="wave-animate"
            >
              <animate attributeName="stroke-width" values="4;12;4" dur="3.5s" repeatCount="indefinite" />
            </path>

            {/* Wave 4 - smooth flow */}
            <path
              d="M 600 0 Q 630 100, 600 200 T 600 400 T 600 600 T 600 800"
              stroke="url(#waveGradient1)"
              strokeWidth="3"
              fill="none"
              className="wave-animate"
            >
              <animate attributeName="stroke-width" values="3;10;3" dur="4.5s" repeatCount="indefinite" />
            </path>

            {/* Wave 5 - right side thin to thick */}
            <path
              d="M 800 0 Q 770 120, 800 240 T 800 480 T 800 720"
              stroke="url(#waveGradient2)"
              strokeWidth="2"
              fill="none"
              className="wave-animate"
            >
              <animate attributeName="stroke-width" values="2;9;2" dur="5.5s" repeatCount="indefinite" />
            </path>

            {/* Wave 6 - far right accent */}
            <path
              d="M 950 0 Q 980 90, 950 180 T 950 360 T 950 540 T 950 720"
              stroke="url(#waveGradient3)"
              strokeWidth="1"
              fill="none"
              className="wave-animate"
            >
              <animate attributeName="stroke-width" values="1;6;1" dur="6s" repeatCount="indefinite" />
            </path>

            {/* Additional pattern waves for mobile */}
            <path
              d="M 300 0 Q 320 110, 300 220 T 300 440 T 300 660"
              stroke="url(#waveGradient1)"
              strokeWidth="5"
              fill="none"
              opacity="0.5"
              className="wave-animate"
            >
              <animate attributeName="stroke-width" values="5;15;5" dur="4s" repeatCount="indefinite" />
            </path>

            <path
              d="M 700 0 Q 680 95, 700 190 T 700 380 T 700 570 T 700 760"
              stroke="url(#waveGradient2)"
              strokeWidth="6"
              fill="none"
              opacity="0.5"
              className="wave-animate"
            >
              <animate attributeName="stroke-width" values="6;14;6" dur="5s" repeatCount="indefinite" />
            </path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 glass-green text-[#7ABB00] font-bold px-4 py-2 rounded-full text-sm mb-6 shadow-lg">
              <Award className="w-4 h-4" />
              CERTIFIED & RELIABLE
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl">
              Commercial & Property Management Cleaning Services in <span className="text-[#7ABB00]">Edmonton</span>
            </h1>

            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg">
              We provide professional commercial, Airbnb, and property management cleaning services throughout Edmonton and surrounding areas. From move-out rental cleaning and post-construction cleanup to commercial window and building cleaning, our services are designed to keep properties clean, presentable, and ready for occupancy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="glass-green text-[#7ABB00] font-bold px-8 py-4 rounded-xl hover:bg-[#7ABB00] hover:text-white transition-all shadow-2xl hover:shadow-[#7ABB00]/50 flex items-center justify-center gap-2 border-2 border-[#7ABB00]/30"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="glass-white text-[#1A3D7C] px-8 py-4 rounded-xl font-bold hover:bg-white transition-all shadow-2xl hover:shadow-white/30"
              >
                Learn More
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#7ABB00]" />
                <span>Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#7ABB00]" />
                <span>Reliable</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#7ABB00]" />
                <span>Fast Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#7ABB00]" />
                <span>Eco-Friendly Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/5217882/pexels-photo-5217882.jpeg"
            alt="Professional window cleaning"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <section className="py-16 bg-white/85 relative z-10">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A3D7C] mb-4">
                About QuickPro
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Professional cleaning services focused on property management, Airbnb turnover, commercial spaces, and move-in/move-out cleaning — serving property managers, business owners, and facility managers across the region.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6 glass-white rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                <div className="glass-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8 text-[#7ABB00]" />
                </div>
                <h3 className="font-semibold text-[#1A3D7C] mb-2">Certified</h3>
                <p className="text-sm text-gray-600">Professional protocols</p>
              </div>
              <div className="text-center p-6 glass-white rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                <div className="glass-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-[#7ABB00]" />
                </div>
                <h3 className="font-semibold text-[#1A3D7C] mb-2">Flexible</h3>
                <p className="text-sm text-gray-600">Scheduling available</p>
              </div>
              <div className="text-center p-6 glass-white rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                <div className="glass-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-[#7ABB00]" />
                </div>
                <h3 className="font-semibold text-[#1A3D7C] mb-2">Eco-Friendly</h3>
                <p className="text-sm text-gray-600">Safe products</p>
              </div>
              <div className="text-center p-6 glass-white rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                <div className="glass-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#7ABB00]" />
                </div>
                <h3 className="font-semibold text-[#1A3D7C] mb-2">Trusted</h3>
                <p className="text-sm text-gray-600">Reliable service</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50/85 relative z-10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3D7C] mb-4">
              Core Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive cleaning solutions for every professional environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:border-[#7ABB00] group"
              >
                <div className="glass-dark w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#7ABB00] transition-all shadow-lg">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A3D7C] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 glass-dark text-white px-6 py-3 rounded-xl font-bold hover:bg-[#7ABB00] transition-all shadow-xl"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      </div>

      <section className="py-20 bg-[#7ABB00] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need reliable cleaning for your property or business?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Whether you manage Airbnb properties, rental units, or commercial spaces — get a free quote today
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#7ABB00] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
