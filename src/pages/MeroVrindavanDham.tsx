import { Button } from '@/components/ui/button';
import { CheckCircle, MapPin, Home, DollarSign, Calendar } from 'lucide-react';
import ScrollToTop from '@/components/ScrollToTop';

export default function MeroVrindavanDham() {
  const projectDetails = {
    id: 'mero-vrindavan-dham',
    title: 'Mero Vrindavan Dham',
    subtitle: 'Community-centric development with cultural heritage',
    description: 'Exclusive community-centric development blending modern living with cultural heritage.',
    heroImage: '/images/plots/shri-hari-vatika-4.jpg',
  };

  const highlights = [
    'Cultural Heritage',
    'Community Spaces',
    'Modern Living',
    'Green Surroundings',
    'Registry Available',
    'Loan Facility Available',
  ];

  const specifications = [
    { label: 'Plot Sizes', value: '90-110 Gaj', icon: Home },
    { label: 'Price Range', value: 'Rs 15 Lac*', icon: DollarSign },
    { label: 'Registry Amount', value: '60%', icon: CheckCircle },
    { label: 'EMI Period', value: '24 Months', icon: Calendar },
  ];

  return (
    <div className="bg-white min-h-screen">
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] to-[#2d3e50]"></div>
        <img 
          src={projectDetails.heroImage} 
          alt={projectDetails.title}
          className="w-full h-full object-cover mix-blend-overlay opacity-70"
        />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-4 py-8 md:py-16 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-2">
              {projectDetails.title}
            </h1>
            <p className="text-lg text-gray-200">{projectDetails.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Quick Specs */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {specifications.map((spec, idx) => {
              const Icon = spec.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-[#f8f9fa] to-[#eef1f5] p-6 rounded-lg border border-gray-200">
                  <Icon className="h-6 w-6 text-[#b26243] mb-3" />
                  <p className="text-sm text-gray-600 mb-1">{spec.label}</p>
                  <p className="text-xl font-bold text-[#1a2332]">{spec.value}</p>
                </div>
              );
            })}
          </div>

          {/* Overview */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-[#1a2332] mb-3 font-playfair">Project Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {projectDetails.description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Mero Vrindavan Dham is a unique residential development that celebrates community living while preserving cultural values. It's a place where traditional warmth meets modern convenience.
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-2xl font-bold text-[#1a2332] mb-4 font-playfair">Key Highlights</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-[#f8f9fa] rounded-lg border border-gray-200">
                    <CheckCircle className="h-5 w-5 text-[#b26243] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Community Focus */}
          <div className="bg-gradient-to-br from-[#f8f9fa] to-white p-8 rounded-lg border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-[#1a2332] mb-4 font-playfair">Community Living Experience</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-[#1a2332] mb-2">Cultural Activities</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Community Events & Celebrations</li>
                  <li>✓ Cultural Programs</li>
                  <li>✓ Community Hall</li>
                  <li>✓ Yoga & Wellness Center</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#1a2332] mb-2">Living Spaces</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Parks & Recreation Areas</li>
                  <li>✓ Walking Trails</li>
                  <li>✓ Community Garden</li>
                  <li>✓ Children's Play Areas</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Investment Opportunity */}
          <div className="bg-gradient-to-br from-[#f8f9fa] to-white p-8 rounded-lg border-2 border-[#b26243]">
            <h3 className="text-2xl font-bold text-[#1a2332] mb-4 font-playfair">Community Investment Opportunity</h3>
            <p className="text-gray-700 mb-6">
              Mero Vrindavan Dham offers a unique investment proposition combining affordability with lifestyle benefits. It's perfect for those who value community and cultural heritage.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Monthly EMI</p>
                <p className="text-2xl font-bold text-[#b26243]">Rs 25,000</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Estimated Rental Income</p>
                <p className="text-2xl font-bold text-[#b26243]">Rs 8,000/month</p>
              </div>
            </div>
            <Button className="bg-[#b26243] hover:bg-[#8d4a33] text-white font-semibold px-8 py-2 h-auto">
              Request More Information
            </Button>
          </div>

          {/* Location Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-[#1a2332] mb-4 font-playfair flex items-center gap-2">
              <MapPin className="h-6 w-6 text-[#b26243]" />
              Location Advantages
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Community Hub', desc: 'Central location within a vibrant community' },
                { title: 'Green Environment', desc: 'Surrounded by lush greenery and natural beauty' },
                { title: 'Easy Access', desc: 'Connected to major commercial and educational centers' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-[#1a2332] mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1a2332] to-[#2d3e50] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-playfair">Join Our Community</h2>
          <p className="text-lg text-gray-300 mb-8">Discover the Mero Vrindavan Dham lifestyle - where culture meets modern living</p>
          <Button className="bg-[#b26243] hover:bg-[#8d4a33] text-white font-semibold px-8 py-2 h-auto">
            Contact Us Now
          </Button>
        </div>
      </section>
    </div>
  );
}
