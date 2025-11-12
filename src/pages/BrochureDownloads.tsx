import { Download, FileText, Image, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BrochureDownloads() {
  const brochures = [
    {
      title: 'Shri Hari Vatika - Project Brochure',
      description: 'Complete project overview with floor plans, amenities, and pricing',
      icon: FileText,
      size: '12 MB',
      format: 'PDF'
    },
    {
      title: 'Harishyam Township - Master Plan',
      description: 'Detailed master plan with location map and project highlights',
      icon: MapPin,
      size: '8 MB',
      format: 'PDF'
    },
    {
      title: 'Investment Guide 2024',
      description: 'Comprehensive investment opportunities and ROI analysis',
      icon: FileText,
      size: '5 MB',
      format: 'PDF'
    },
    {
      title: 'Project Gallery',
      description: 'High-resolution images of completed projects and amenities',
      icon: Image,
      size: '45 MB',
      format: 'ZIP'
    },
    {
      title: 'Floor Plans Collection',
      description: 'All available floor plans with detailed specifications',
      icon: FileText,
      size: '15 MB',
      format: 'PDF'
    },
    {
      title: 'Amenities Catalog',
      description: 'Complete list of amenities with specifications and features',
      icon: FileText,
      size: '6 MB',
      format: 'PDF'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a2332] to-[#2c3e50] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Brochures & Downloads</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Access detailed project information and resources</p>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brochures.map((brochure, index) => {
              const Icon = brochure.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-t-4 border-[#d4af37]">
                  <div className="bg-gradient-to-br from-[#d4af37]/10 to-[#c9a227]/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-[#d4af37]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a2332] mb-3 font-playfair">{brochure.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm">{brochure.description}</p>
                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
                    <div className="text-xs text-gray-600">
                      <p><strong>Size:</strong> {brochure.size}</p>
                      <p><strong>Format:</strong> {brochure.format}</p>
                    </div>
                  </div>
                  <Button className="w-full bg-[#d4af37] hover:bg-[#c9a227] text-[#1a2332] font-semibold flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-[#1a2332] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-playfair">Need More Information?</h2>
              <p className="text-gray-300 mb-6">
                Our team is ready to provide you with detailed information about our projects, investment opportunities, and services. Contact us today for personalized assistance.
              </p>
              <Button className="bg-[#d4af37] hover:bg-[#c9a227] text-[#1a2332] font-semibold">
                Contact Our Team
              </Button>
            </div>
            <div className="bg-white/10 rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 font-playfair">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="/projects" className="text-gray-300 hover:text-[#d4af37] transition-colors">View All Projects</a></li>
                <li><a href="/amenities" className="text-gray-300 hover:text-[#d4af37] transition-colors">Explore Amenities</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-[#d4af37] transition-colors">Our Services</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-[#d4af37] transition-colors">Get in Touch</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}