import { Button } from '@/components/ui/button';
import { CheckCircle, MapPin, Home, DollarSign, Calendar } from 'lucide-react';
import ScrollToTop from '@/components/ScrollToTop';

export default function HariShyamTownship() {
  const projectDetails = {
    id: 'hari-shyam-township',
    title: 'Hari Shyam Township',
    subtitle: 'Integrated township with world-class facilities',
    description: 'A full township format with strong internal infrastructure, neighborhood amenities, and a layout designed for balanced daily living.',
    heroImage: '/images/plots/shri-hari-vatika-3.jpg',
  };

  const highlights = [
    'Integrated Township',
    'Wide Roads',
    'Near Expressway',
    'Gated Community',
    'Water & Electricity',
    'Investment Hotspot',
  ];

  const specifications = [
    { label: 'Plot Sizes', value: '100-125 Gaj', icon: Home },
    { label: 'Price Range', value: 'Rs 17 Lac*', icon: DollarSign },
    { label: 'Registry Amount', value: '60%', icon: CheckCircle },
    { label: 'EMI Period', value: '20 Months', icon: Calendar },
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
                Hari Shyam Township is our flagship development offering a complete living solution. With comprehensive infrastructure and community amenities, it's designed as a self-contained ecosystem for modern families.
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

          {/* Township Features */}
          <div className="bg-gradient-to-br from-[#f8f9fa] to-white p-8 rounded-lg border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-[#1a2332] mb-4 font-playfair">Township Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-[#1a2332] mb-2">Community Amenities</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Central Park & Green Spaces</li>
                  <li>✓ Community Center</li>
                  <li>✓ Sports Facilities</li>
                  <li>✓ Shopping District</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#1a2332] mb-2">Infrastructure</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ 24/7 Security & Surveillance</li>
                  <li>✓ Underground Utility Lines</li>
                  <li>✓ High-Speed Internet</li>
                  <li>✓ Waste Management System</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Investment Opportunity */}
          <div className="bg-gradient-to-br from-[#f8f9fa] to-white p-8 rounded-lg border-2 border-[#b26243]">
            <h3 className="text-2xl font-bold text-[#1a2332] mb-4 font-playfair">Investment Opportunity</h3>
            <p className="text-gray-700 mb-6">
              Hari Shyam Township is the ideal investment for those seeking a complete living experience with strong appreciation potential. The integrated township concept ensures long-term value creation.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Monthly EMI</p>
                <p className="text-2xl font-bold text-[#b26243]">Rs 32,000</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Estimated Rental Income</p>
                <p className="text-2xl font-bold text-[#b26243]">Rs 11,000/month</p>
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
                { title: 'Transportation Hub', desc: 'Well-connected to major highways and expressways' },
                { title: 'Education Zone', desc: 'Close proximity to schools and colleges' },
                { title: 'Commercial Access', desc: 'Near emerging commercial developments' },
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
          <h2 className="text-3xl font-bold mb-4 font-playfair">Experience Township Living</h2>
          <p className="text-lg text-gray-300 mb-8">Contact us for a virtual tour and detailed project information</p>
          <Button className="bg-[#b26243] hover:bg-[#8d4a33] text-white font-semibold px-8 py-2 h-auto">
            Contact Us Now
          </Button>
        </div>
      </section>
    </div>
  );
}
