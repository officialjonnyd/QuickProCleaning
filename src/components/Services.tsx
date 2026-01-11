import { Building2, ShieldCheck, HeartPulse, Briefcase, Landmark, Car, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Commercial Cleaning',
      description: 'Routine cleaning to maintain professional environments — reception areas, common spaces, floors, windows, and surfaces.',
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
      <section className="bg-gradient-to-br from-[#1A3D7C] to-[#2a5294] text-white py-20">
        <div className="container mx-auto px-4">
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
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  <div className={`bg-gradient-to-br ${service.color} p-8 md:p-10 text-white flex flex-col justify-center items-center text-center`}>
                    <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-4">
                      <service.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {service.title}
                    </h3>
                  </div>

                  <div className="md:col-span-2 p-8 md:p-10">
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
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
              className="bg-white text-[#7ABB00] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg inline-block"
            >
              Get Your Free Quote
            </Link>
            <Link
              to="/pricing"
              className="bg-[#1A3D7C] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2a5294] transition-all shadow-lg inline-block"
            >
              View Pricing Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
