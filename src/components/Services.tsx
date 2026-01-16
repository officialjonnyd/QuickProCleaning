import { Building2, ShieldCheck, HeartPulse, Briefcase, Landmark, Car, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Commercial Cleaning',
      description: 'Routine cleaning to maintain professional environments — Airbnb\'s, Move-In and Out cleaning, reception areas, common spaces, floors, windows, and surfaces.',
      features: [
        'Daily or weekly cleaning schedules',
        'Reception and lobby maintenance',
        'Floor care and window cleaning',
        'Surface disinfection',
        'Restroom sanitization',
        'Trash removal and waste management'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: ShieldCheck,
      title: 'Sanitation & Disinfection',
      description: 'Certified, hospital-grade disinfection services tailored for high-risk and high-traffic environments like clinics and medical offices.',
      features: [
        'EPA-approved disinfectants',
        'Hospital-grade sanitation protocols',
        'High-touch surface treatment',
        'Contamination prevention',
        'Infection control procedures',
        'Certified application methods'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: HeartPulse,
      title: 'Medical Facility Cleaning',
      description: 'Specialized protocols for dentists, chiropractic clinics, doctors\' offices — compliant, thorough, and trusted.',
      features: [
        'Healthcare compliance standards',
        'Exam room deep cleaning',
        'Biohazard waste handling',
        'Sterilization area maintenance',
        'Waiting room sanitization',
        'Medical equipment surface care'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Briefcase,
      title: 'Office & Facility Cleaning',
      description: 'Clean desktops, floors, meeting rooms, break rooms — we keep your workplace fresh, productive, and healthy.',
      features: [
        'Desk and workspace cleaning',
        'Conference room maintenance',
        'Break room and kitchen sanitization',
        'Carpet and floor care',
        'Common area cleaning',
        'Flexible scheduling options'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Landmark,
      title: 'Banking & Financial Facility Cleaning',
      description: 'Professional clean for high-visibility, high-security environments.',
      features: [
        'Teller station cleaning',
        'Lobby and reception maintenance',
        'ATM area sanitization',
        'Security-conscious procedures',
        'Professional appearance standards',
        'Off-hours scheduling available'
      ],
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Car,
      title: 'Dealership & Showroom Cleaning',
      description: 'Showroom floor care, lobby maintenance, and presentation cleaning to help your inventory shine.',
      features: [
        'Showroom floor polishing',
        'Vehicle display area cleaning',
        'Customer lounge maintenance',
        'Glass and window care',
        'Service area cleaning',
        'Detail-focused approach'
      ],
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  return (
    <div>
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/5de5f668-9c2a-49d6-8e07-02e85db7b74d.png"
            alt="Professional cleaning services"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blue Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(26, 61, 124, 0.95) 0%, rgba(26, 61, 124, 0.85) 50%, rgba(26, 61, 124, 0.75) 100%)'
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Comprehensive cleaning solutions tailored for every professional environment
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-[#7ABB00]/20 transition-all border-2 border-white/30"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  <div className={`bg-gradient-to-br ${service.color} p-8 md:p-10 text-white flex flex-col justify-center items-center text-center`}>
                    <div className="glass backdrop-blur-lg w-20 h-20 rounded-2xl flex items-center justify-center mb-4 shadow-xl">
                      <service.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>

                  <div className="md:col-span-2 p-8 md:p-10">
                    <p className="text-lg text-gray-800 mb-6 leading-relaxed font-medium">
                      {service.description}
                    </p>

                    <h4 className="text-lg font-bold text-[#1A3D7C] mb-4">
                      What's Included:
                    </h4>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#7ABB00] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#7ABB00] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Contact us today for a free quote and discover how QuickPro can transform your facility
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="glass-white text-[#7ABB00] font-bold px-8 py-4 rounded-xl hover:bg-white transition-all shadow-2xl inline-block border-2 border-white/30"
            >
              Get Your Free Quote
            </Link>
            <Link
              to="/pricing"
              className="glass-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-[#2a5294] transition-all shadow-2xl inline-block"
            >
              View Pricing Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
