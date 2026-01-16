import { Link } from 'react-router-dom';
import { DollarSign, Building2, Calendar, Ruler, ArrowRight, CheckCircle2, Info } from 'lucide-react';

export default function Pricing() {
  const pricingFactors = [
    {
      icon: Ruler,
      title: 'Facility Square Footage',
      description: 'Larger spaces require more time and resources'
    },
    {
      icon: Calendar,
      title: 'Service Frequency',
      description: 'Regular schedules offer better value'
    },
    {
      icon: Building2,
      title: 'Type of Service',
      description: 'Specialized services have different requirements'
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-[#1A3D7C] to-[#2a5294] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/4099470/pexels-photo-4099470.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Cleaning checklist background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <DollarSign className="w-16 h-16 mb-6 opacity-90 mx-auto md:mx-0" />
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Transparent Pricing
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Custom quotes tailored to your facility's unique needs
                </p>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://images.pexels.com/photos/4099470/pexels-photo-4099470.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional cleaning checklist and supplies"
                  className="rounded-2xl shadow-2xl border-4 border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-[#1A3D7C] p-6 rounded-r-lg mb-12">
              <div className="flex gap-3">
                <Info className="w-6 h-6 text-[#1A3D7C] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#1A3D7C] text-lg mb-2">
                    Custom Pricing Explained
                  </h3>
                  <p className="text-gray-700">
                    Every facility is unique, and so are its cleaning needs. Our pricing is based on several factors to ensure you get the most accurate quote for your specific requirements.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#1A3D7C] mb-8 text-center">
              Pricing Factors
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {pricingFactors.map((factor, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                  <div className="bg-[#7ABB00] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <factor.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-[#1A3D7C] mb-2">
                    {factor.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1A3D7C] to-[#2a5294] text-white p-12 md:p-16 rounded-2xl shadow-2xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get Your Custom Quote Today
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
                Every facility is unique, and pricing depends on your specific needs, size, and service requirements. We provide detailed, transparent quotes tailored to your business.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#7ABB00] text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-[#6aa900] transition-all shadow-lg hover:shadow-xl"
              >
                Request Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                <CheckCircle2 className="w-10 h-10 text-[#7ABB00] mb-4" />
                <h3 className="font-bold text-[#1A3D7C] text-xl mb-3">
                  Competitive Pricing & No Hidden Fees
                </h3>
                <p className="text-gray-700">
                  Our quotes include all costs upfront. What we quote is what you pay - no surprises.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                <CheckCircle2 className="w-10 h-10 text-[#7ABB00] mb-4" />
                <h3 className="font-bold text-[#1A3D7C] text-xl mb-3">
                  Flexible Options
                </h3>
                <p className="text-gray-700">
                  We offer one-time services or ongoing contracts with volume discounts for regular cleaning schedules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-[#1A3D7C] to-[#2a5294] text-white p-10 md:p-12 rounded-2xl shadow-2xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What's Included in Every Service
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 text-left mt-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#7ABB00] flex-shrink-0 mt-1" />
                  <span>Professional, trained staff</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#7ABB00] flex-shrink-0 mt-1" />
                  <span>All cleaning supplies included</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#7ABB00] flex-shrink-0 mt-1" />
                  <span>Eco-friendly products</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#7ABB00] flex-shrink-0 mt-1" />
                  <span>Flexible scheduling</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#7ABB00] flex-shrink-0 mt-1" />
                  <span>Quality assurance checks</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#7ABB00] flex-shrink-0 mt-1" />
                  <span>Insured and bonded service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#7ABB00] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Custom Quote?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get a detailed, no-obligation quote tailored to your facility's specific needs
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#7ABB00] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg"
          >
            Request Your Free Custom Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
