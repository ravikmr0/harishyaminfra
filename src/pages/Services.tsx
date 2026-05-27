import { Building2, Home, TrendingUp, Users, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Residential Development',
      description: 'Premium residential projects designed with modern architecture and sustainable living in mind.',
      features: ['Luxury Apartments', 'Villas', 'Townhouses', 'Smart Homes']
    },
    {
      icon: Home,
      title: 'Property Management',
      description: 'Comprehensive property management services ensuring optimal maintenance and tenant satisfaction.',
      features: ['Maintenance', 'Tenant Relations', 'Financial Management', '24/7 Support']
    },
    {
      icon: TrendingUp,
      title: 'Investment Consulting',
      description: 'Expert guidance on real estate investments with proven returns and growth potential.',
      features: ['Market Analysis', 'Portfolio Planning', 'ROI Optimization', 'Legal Support']
    },
    {
      icon: Users,
      title: 'Customer Support',
      description: 'Dedicated support team available round-the-clock for all your queries and concerns.',
      features: ['24/7 Assistance', 'Expert Advisors', 'Quick Resolution', 'Personalized Service']
    },
    {
      icon: Shield,
      title: 'Legal & Compliance',
      description: 'Ensuring all projects meet Government regulations and legal requirements.',
      features: ['Government Approved', 'Documentation', 'Compliance', 'Transparency']
    },
    {
      icon: Zap,
      title: 'Smart Infrastructure',
      description: 'State-of-the-art infrastructure with modern amenities and sustainable features.',
      features: ['IoT Integration', 'Green Energy', 'Security Systems', 'Smart Parking']
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section-shell-hero bg-gradient-to-r from-[#1a2332] to-[#2c3e50] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 font-playfair">Our Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Comprehensive real estate solutions tailored to meet your needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-shell bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 card-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 border-t-4 border-[#b26243]">
                  <div className="bg-gradient-to-br from-[#b26243]/10 to-[#8d4a33]/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-[#b26243]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a2332] mb-2 font-playfair">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  <ul className="space-y-1 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                        <span className="w-2 h-2 bg-[#b26243] rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-[#b26243] hover:bg-[#8d4a33] text-white font-semibold">
                    Learn More
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-shell-tight bg-gradient-to-r from-[#b26243] to-[#8d4a33]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#1a2332] mb-3 font-playfair">Ready to Get Started?</h2>
          <p className="text-base text-[#1a2332]/80 mb-5">Contact our team today to discuss your real estate needs</p>
          <Button className="bg-[#1a2332] hover:bg-[#2c3e50] text-white font-semibold px-8 py-3 text-lg">
            Contact Us Now
          </Button>
        </div>
      </section>
    </div>
  );
}


