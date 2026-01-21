import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Award, Users } from 'lucide-react';

export default function PropertyManagement() {
  const benefits = [
    {
      icon: Clock,
      title: 'Fast Turnaround Times',
      description: 'Quick, reliable cleaning between tenants and guests to minimize vacancy periods'
    },
    {
      icon: Award,
      title: 'Consistent Standards',
      description: 'Maintain uniform cleanliness across your entire property portfolio'
    },
    {
      icon: Users,
      title: 'Multi-Unit Portfolios',
      description: 'Scalable services designed for property managers with multiple properties'
    },
    {
      icon: CheckCircle,
      title: 'Professional Teams',
      description: 'Experienced, insured cleaning professionals you can trust'
    }
  ];

  const services = [
    'After-tenant move-out cleaning',
    'Airbnb & short-term rental turnover',
    'Property management unit resets',
    'Move-in ready preparation',
    'Deep cleaning between occupants',
    'Final inspection preparation'
  ];

  return (
    <div>
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4239039/pexels-photo-4239039.jpeg"
            alt="Professional property cleaning service"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(26, 61, 124, 0.95) 0%, rgba(26, 61, 124, 0.85) 50%, rgba(26, 61, 124, 0.75) 100%)'
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Airbnb & Property Management Cleaning Services
            </h1>
            <p className="text-2xl text-gray-200 leading-relaxed mb-4">
              Reliable Turnover Cleaning for Rentals & Short-Term Properties
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Professional cleaning services for property managers, landlords, and Airbnb hosts. We specialize in post-tenant and post-stay cleaning to prepare units for new occupants quickly and professionally.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-12 rounded-r-lg">
              <h2 className="text-2xl font-bold text-red-900 mb-4">
                What This Service Is
              </h2>
              <p className="text-red-900 mb-4 font-semibold text-lg">
                This is NOT standard residential cleaning.
              </p>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-red-900 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A3D7C] mb-12">
              Why Property Managers Choose QuickPro
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="glass-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#7ABB00] rounded-xl flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1A3D7C] mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-white p-8 md:p-12 rounded-2xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A3D7C] mb-6 text-center">
                Perfect for:
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-6">
                  <div className="text-4xl mb-3">🏢</div>
                  <h3 className="text-xl font-bold text-[#1A3D7C] mb-2">
                    Property Managers
                  </h3>
                  <p className="text-gray-700">
                    Multi-unit portfolio turnover and maintenance
                  </p>
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-3">🏠</div>
                  <h3 className="text-xl font-bold text-[#1A3D7C] mb-2">
                    Landlords
                  </h3>
                  <p className="text-gray-700">
                    Move-in/move-out cleaning for rental properties
                  </p>
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-3">🔑</div>
                  <h3 className="text-xl font-bold text-[#1A3D7C] mb-2">
                    Airbnb Hosts
                  </h3>
                  <p className="text-gray-700">
                    Fast turnaround between guest stays
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#7ABB00] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Streamline Your Property Turnovers?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get a customized quote for your property management cleaning needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="glass-white text-[#7ABB00] font-bold px-8 py-4 rounded-xl hover:bg-white transition-all shadow-2xl inline-block border-2 border-white/30"
            >
              Request a Quote
            </Link>
            <Link
              to="/services"
              className="glass-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-[#2a5294] transition-all shadow-2xl inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
