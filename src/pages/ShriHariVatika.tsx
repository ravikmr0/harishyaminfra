import { Button } from '@/components/ui/button';
import { CheckCircle, MapPin, Home, DollarSign, Calendar } from 'lucide-react';
import ScrollToTop from '@/components/ScrollToTop';

export default function ShriHariVatika() {
  const projectDetails = {
    id: 'shri-hari-vatika',
    title: 'Shri Hari Vatika Phase-1',
    subtitle: 'Exclusive luxury residential plots in a gated community',
    description: 'A gated plotted community shaped for families and investors who want cleaner planning, better access, and a location positioned for long-term growth.',
    image: '/images/plots/shri-hari-vatika-4.jpg',
    heroImage: '/images/plots/shri-hari-vatika-6.jpg',
  };

  const highlights = [
    'Registry Available',
    'Near Expressway',
    'Gated Community',
    'Wide Roads',
    'Water & Electricity',
    'Investment Hotspot',
  ];

  const specifications = [
    { label: 'Plot Sizes', value: '100 Gaj', icon: Home },
    { label: 'Price Range', value: 'Rs 16 Lac*', icon: DollarSign },
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
                Our premium residential plots are designed with meticulous attention to detail, offering the perfect blend of luxury and affordability. Each plot is strategically located to provide easy access to schools, hospitals, shopping centers, and transportation hubs.
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

          {/* Investment Opportunity */}
          <div className="bg-gradient-to-br from-[#f8f9fa] to-white p-8 rounded-lg border-2 border-[#b26243]">
            <h3 className="text-2xl font-bold text-[#1a2332] mb-4 font-playfair">Investment Opportunity</h3>
            <p className="text-gray-700 mb-6">
              This is an excellent investment opportunity with strong appreciation potential. The location's proximity to the Yamuna Expressway and upcoming commercial hubs makes it an ideal choice for both residential and investment purposes.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Monthly EMI</p>
                <p className="text-2xl font-bold text-[#b26243]">Rs 30,000</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Estimated Rental Income</p>
                <p className="text-2xl font-bold text-[#b26243]">Rs 10,000/month</p>
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
                { title: 'Near Expressway', desc: 'Quick access to major corridors and highways' },
                { title: 'School Proximity', desc: 'Located near top-rated educational institutions' },
                { title: 'Healthcare', desc: 'Hospitals and medical facilities nearby' },
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
          <h2 className="text-3xl font-bold mb-4 font-playfair">Ready to Invest?</h2>
          <p className="text-lg text-gray-300 mb-8">Contact us today to schedule a site visit or get more information</p>
          <Button className="bg-[#b26243] hover:bg-[#8d4a33] text-white font-semibold px-8 py-2 h-auto">
            Contact Us Now
          </Button>
        </div>
      </section>
    </div>
  );
}
