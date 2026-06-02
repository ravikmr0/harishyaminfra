import { Button } from '@/components/ui/button';
import { CheckCircle, MapPin, Home, DollarSign, Calendar } from 'lucide-react';
import ScrollToTop from '@/components/ScrollToTop';

export default function AgriculturalLand() {
  const projectDetails = {
    id: 'agricultural-land',
    title: 'Agricultural Land',
    subtitle: 'Premium agricultural land for farming and investment',
    description: 'Premium agricultural land for farming and agricultural investments with modern infrastructure and irrigation facilities.',
    heroImage: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&q=80',
  };

  const highlights = [
    'Fertile Land',
    'Irrigation Facility',
    'Market Access',
    'Road Connectivity',
    'Registry Available',
    'Loan Facility Available',
  ];

  const specifications = [
    { label: 'Land Size', value: '1-5 Acres', icon: Home },
    { label: 'Price Range', value: 'Rs 5-25 Lac*', icon: DollarSign },
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
                Our agricultural land offerings are meticulously selected for their fertility, accessibility, and growth potential. Perfect for farmers, investors, and those seeking agricultural investment opportunities.
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

          {/* Agriculture Features */}
          <div className="bg-gradient-to-br from-[#f8f9fa] to-white p-8 rounded-lg border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-[#1a2332] mb-4 font-playfair">Agricultural Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-[#1a2332] mb-2">Irrigation & Water</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Drip Irrigation System</li>
                  <li>✓ Groundwater Access</li>
                  <li>✓ Storage Tanks</li>
                  <li>✓ Bore Well Facility</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#1a2332] mb-2">Infrastructure</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Farm Roads</li>
                  <li>✓ Electricity Connection</li>
                  <li>✓ Market Access Road</li>
                  <li>✓ Storage Facilities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Investment Opportunity */}
          <div className="bg-gradient-to-br from-[#f8f9fa] to-white p-8 rounded-lg border-2 border-[#b26243]">
            <h3 className="text-2xl font-bold text-[#1a2332] mb-4 font-playfair">Agricultural Investment Opportunity</h3>
            <p className="text-gray-700 mb-6">
              Agricultural land represents a solid investment with dual benefits - income generation through cultivation and appreciation of land value. It's a tangible asset that provides financial security.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Monthly EMI (Sample)</p>
                <p className="text-2xl font-bold text-[#b26243]">Rs 15,000-50,000</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Annual Agricultural Income</p>
                <p className="text-2xl font-bold text-[#b26243]">Rs 60,000-180,000</p>
              </div>
            </div>
            <Button className="bg-[#b26243] hover:bg-[#8d4a33] text-white font-semibold px-8 py-2 h-auto">
              Request Agricultural Consultation
            </Button>
          </div>

          {/* Farming Opportunities */}
          <div>
            <h3 className="text-2xl font-bold text-[#1a2332] mb-4 font-playfair">Farming & Cultivation Opportunities</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Cash Crops', desc: 'High-value crops suitable for market sale' },
                { title: 'Organic Farming', desc: 'Organic certification support available' },
                { title: 'Horticulture', desc: 'Fruit and vegetable cultivation support' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-[#1a2332] mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Location Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-[#1a2332] mb-4 font-playfair flex items-center gap-2">
              <MapPin className="h-6 w-6 text-[#b26243]" />
              Location Advantages
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Market Proximity', desc: 'Close to agricultural markets and mandis' },
                { title: 'Road Network', desc: 'Well-connected highways for easy transport' },
                { title: 'Transportation', desc: 'Easy logistics for agricultural products' },
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
          <h2 className="text-3xl font-bold mb-4 font-playfair">Invest in Agricultural Land</h2>
          <p className="text-lg text-gray-300 mb-8">Contact our agricultural specialists for consultation and site visits</p>
          <Button className="bg-[#b26243] hover:bg-[#8d4a33] text-white font-semibold px-8 py-2 h-auto">
            Contact Us Now
          </Button>
        </div>
      </section>
    </div>
  );
}
