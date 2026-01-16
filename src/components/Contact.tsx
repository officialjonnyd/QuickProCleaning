import { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    facilityType: '',
    serviceNeeded: '',
    comments: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/.netlify/functions/send-quote-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to send quote request');
      }

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({
        businessName: '',
        contactName: '',
        email: '',
        phone: '',
        facilityType: '',
        serviceNeeded: '',
        comments: ''
      });
    } catch (err) {
      console.error('Error submitting quote request:', err);
      setError(err instanceof Error ? err.message : 'Failed to send quote request. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-[#1A3D7C] to-[#2a5294] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Get in touch for a free quote or to learn more about our services
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#1A3D7C] mb-6">
                  QuickPro Information
                </h2>

                <div className="space-y-4">
                  <div className="glass-white p-6 rounded-2xl shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="glass-green p-3 rounded-xl shadow-lg">
                        <Phone className="w-6 h-6 text-[#7ABB00]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1A3D7C] mb-1">Phone</h3>
                        <a href="tel:7802788231" className="text-gray-700 hover:text-[#7ABB00] transition-colors text-lg font-medium">
                          780 278 8231
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="glass-white p-6 rounded-2xl shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="glass-green p-3 rounded-xl shadow-lg">
                        <Mail className="w-6 h-6 text-[#7ABB00]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1A3D7C] mb-1">Email</h3>
                        <a href="mailto:quickpro2025@gmail.com" className="text-gray-700 hover:text-[#7ABB00] transition-colors break-all">
                          quickpro2025@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="glass-white p-6 rounded-2xl shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="glass-green p-3 rounded-xl shadow-lg">
                        <Clock className="w-6 h-6 text-[#7ABB00]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1A3D7C] mb-1">Business Hours</h3>
                        <p className="text-gray-700">Mon–Sun: 8:00 AM – 10:00 PM</p>
                        <p className="text-gray-700 text-sm mt-1">Emergency Cleaning: 24/7</p>
                        <p className="text-gray-600 text-xs">(By Appointment)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-dark text-white p-6 rounded-2xl shadow-2xl">
                <h3 className="font-bold text-lg mb-3">Why Choose QuickPro?</h3>
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#7ABB00] rounded-full"></div>
                    Certified sanitation specialists
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#7ABB00] rounded-full"></div>
                    Fast response times
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#7ABB00] rounded-full"></div>
                    Eco-friendly solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#7ABB00] rounded-full"></div>
                    Flexible scheduling
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#7ABB00] rounded-full"></div>
                    Fully insured & bonded
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="glass-white p-8 rounded-2xl shadow-2xl border-2 border-white/30">
                <h2 className="text-2xl font-bold text-[#1A3D7C] mb-6">
                  Request a Quote
                </h2>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
                    <p className="font-semibold">Thank you for your inquiry!</p>
                    <p className="text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                )}

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg mb-6 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Error</p>
                      <p className="text-sm">{error}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7ABB00] focus:border-transparent outline-none transition-all"
                      placeholder="Your Business Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7ABB00] focus:border-transparent outline-none transition-all"
                      placeholder="Your Full Name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7ABB00] focus:border-transparent outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7ABB00] focus:border-transparent outline-none transition-all"
                        placeholder="(780) 278-8231"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="facilityType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Facility Type *
                    </label>
                    <select
                      id="facilityType"
                      name="facilityType"
                      value={formData.facilityType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7ABB00] focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select Facility Type</option>
                      <option value="medical">Medical Clinic / Healthcare</option>
                      <option value="office">Office / Corporate</option>
                      <option value="banking">Bank / Financial Institution</option>
                      <option value="dealership">Vehicle Dealership</option>
                      <option value="retail">Retail / Commercial</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="serviceNeeded" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="serviceNeeded"
                      name="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7ABB00] focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select Service</option>
                      <option value="commercial">Commercial Cleaning</option>
                      <option value="sanitation">Sanitation & Disinfection</option>
                      <option value="medical">Medical Facility Cleaning</option>
                      <option value="office">Office Cleaning</option>
                      <option value="banking">Banking Facility Cleaning</option>
                      <option value="dealership">Dealership Cleaning</option>
                      <option value="multiple">Multiple Services</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="comments" className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Comments
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7ABB00] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us more about your cleaning needs, facility size, preferred schedule, etc."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full glass-green border-2 border-[#7ABB00]/50 text-[#7ABB00] font-bold py-4 rounded-xl hover:bg-[#7ABB00] hover:text-white transition-all shadow-2xl hover:shadow-[#7ABB00]/50 flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Me a Quote
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A3D7C] mb-4">
              We Look Forward to Serving You
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Whether you need routine commercial cleaning or specialized sanitation services, our team is ready to provide the professional care your facility deserves. Contact us today to get started.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
