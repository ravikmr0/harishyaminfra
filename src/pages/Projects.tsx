import { useState } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';

const allProjects = [
  {
    id: 'shri-hari-vatika',
    title: 'Shri Hari Vatika Phase-1',
    description: 'Exclusive luxury residential plots in a gated community with premium amenities',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    plotSizes: '100 Gaj',
    priceRange: 'Rs 16 Lac*',
    ratePerGaj: '16 Lac / 100 Gaj',
    registryAmount: '60%',
    emiDetails: '40% in 20 Months',
    monthlyEmi: 'Rs 30,000',
    rentalIncome: 'Rs 10,000/month',
    status: 'Active',
    type: 'Residential',
    openSides: '2-side',
    badge: 'Premium',
    highlights: ['Registry Available', 'Near Expressway', 'Gated Community'],
  },
  {
    id: 'shri-hari-vatika-phase-2',
    title: 'Shri Hari Vatika Phase-2',
    description: 'Extended luxury development with enhanced infrastructure and premium facilities',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    plotSizes: '100-150 Gaj',
    priceRange: 'Rs 18 Lac*',
    ratePerGaj: '18 Lac / 100 Gaj',
    registryAmount: '60%',
    emiDetails: '40% in 20 Months',
    monthlyEmi: 'Rs 32,000',
    rentalIncome: 'Rs 12,000/month',
    status: 'Active',
    type: 'Residential',
    openSides: '2-side',
    badge: 'New Launch',
    highlights: ['Future Growth Zone', 'Loan Facility Available', 'Wide Roads'],
  },
  {
    id: 'shri-hari-vatika-phase-3',
    title: 'Shri Hari Vatika Phase-3',
    description: 'Latest phase featuring ultra-premium plots with world-class amenities',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    plotSizes: '120-200 Gaj',
    priceRange: 'Rs 20 Lac*',
    ratePerGaj: '20 Lac / 100 Gaj',
    registryAmount: '60%',
    emiDetails: '40% in 20 Months',
    monthlyEmi: 'Rs 35,000',
    rentalIncome: 'Rs 14,000/month',
    status: 'Active',
    type: 'Residential',
    openSides: '3-side',
    badge: 'Premium Plus',
    highlights: ['Premium Edge Plots', 'Gated Community', 'Water & Electricity'],
  },
  {
    id: 'hari-shyam-township',
    title: 'Hari Shyam Township',
    description: 'Integrated township with world-class facilities and premium infrastructure',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    plotSizes: '100-125 Gaj',
    priceRange: 'Rs 17 Lac*',
    ratePerGaj: '17 Lac / 100 Gaj',
    registryAmount: '60%',
    emiDetails: '40% in 20 Months',
    monthlyEmi: 'Rs 32,000',
    rentalIncome: 'Rs 11,000/month',
    status: 'Active',
    type: 'Residential',
    openSides: '3-side',
    badge: 'Flagship',
    highlights: ['Integrated Township', 'Investment Hotspot', 'Near Expressway'],
  },
  {
    id: 'mero-vrindavan-dham',
    title: 'Mero Vrindavan Dham',
    description: 'Exclusive community-centric development blending modern living with cultural heritage',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80',
    plotSizes: '90-110 Gaj',
    priceRange: 'Rs 15 Lac*',
    ratePerGaj: '15 Lac / 100 Gaj',
    registryAmount: '60%',
    emiDetails: '40% in 24 Months',
    monthlyEmi: 'Rs 25,000',
    rentalIncome: 'Rs 8,000/month',
    status: 'Active',
    type: 'Residential',
    openSides: '2-side',
    badge: 'Community Living',
    highlights: ['Cultural Heritage', 'Community Spaces', 'Modern Living'],
  },
  {
    id: 'commercial-plaza',
    title: 'Premium Commercial Plaza',
    description: 'Strategic commercial spaces with premium location and high visibility',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    plotSizes: '150 Gaj',
    priceRange: 'Rs 28 Lac*',
    ratePerGaj: '28 Lac / 150 Gaj',
    registryAmount: '60%',
    emiDetails: '40% in 24 Months',
    monthlyEmi: 'Rs 47,000',
    rentalIncome: 'Rs 20,000/month',
    status: 'Active',
    type: 'Commercial',
    openSides: '2-side',
    badge: 'Premium',
    highlights: ['High Visibility', 'Strategic Location', 'Premium Spaces'],
  },
  {
    id: 'green-valley-residency',
    title: 'Green Valley Residency',
    description: 'Eco-conscious residential development surrounded by lush greenery',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80',
    plotSizes: '120 Gaj',
    priceRange: 'Rs 19 Lac*',
    ratePerGaj: '19 Lac / 120 Gaj',
    registryAmount: '60%',
    emiDetails: '40% in 24 Months',
    monthlyEmi: 'Rs 32,000',
    rentalIncome: 'Rs 13,000/month',
    status: 'Active',
    type: 'Residential',
    openSides: '3-side',
    badge: 'Green Living',
    highlights: ['Eco-Conscious', 'Lush Greenery', 'Sustainable Development'],
  },
  {
    id: 'sunrise-commercial-hub',
    title: 'Sunrise Commercial Hub',
    description: 'Strategic commercial location with modern infrastructure and excellent connectivity',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    plotSizes: '200 Gaj',
    priceRange: 'Rs 38 Lac*',
    ratePerGaj: '38 Lac / 200 Gaj',
    registryAmount: '60%',
    emiDetails: '40% in 18 Months',
    monthlyEmi: 'Rs 85,000',
    rentalIncome: 'Rs 28,000/month',
    status: 'Active',
    type: 'Commercial',
    openSides: '3-side',
    badge: 'Premium Plus',
    highlights: ['Modern Infrastructure', 'Excellent Connectivity', 'Strategic Hub'],
  },
  {
    id: 'royal-enclave',
    title: 'Royal Enclave',
    description: 'Ultra-luxury residential community with exclusive amenities and gated security',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80',
    plotSizes: '150 Gaj',
    priceRange: 'Rs 26 Lac*',
    ratePerGaj: '26 Lac / 150 Gaj',
    registryAmount: '60%',
    emiDetails: '40% in 20 Months',
    monthlyEmi: 'Rs 52,000',
    rentalIncome: 'Rs 18,000/month',
    status: 'Active',
    type: 'Residential',
    openSides: '1-side',
    badge: 'Luxury',
    highlights: ['Ultra-Luxury', 'Exclusive Amenities', 'Gated Security'],
  },
  {
    id: 'metro-business-park',
    title: 'Metro Business Park',
    description: 'Commercial plots strategically located near metro with premium connectivity',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    plotSizes: '180 Gaj',
    priceRange: 'Rs 33 Lac*',
    ratePerGaj: '33 Lac / 180 Gaj',
    registryAmount: '60%',
    emiDetails: '40% in 24 Months',
    monthlyEmi: 'Rs 55,000',
    rentalIncome: 'Rs 23,000/month',
    status: 'Active',
    type: 'Commercial',
    openSides: '1-side',
    badge: 'Strategic Location',
    highlights: ['Near Metro', 'Premium Connectivity', 'Business Hub'],
  },
];

export default function Projects() {
  const [typeFilter, setTypeFilter] = useState('all');
  const [openSidesFilter, setOpenSidesFilter] = useState('all');

  const filteredProjects = allProjects.filter(project => {
    const matchesType = typeFilter === 'all' || project.type === typeFilter;
    const matchesOpenSides = openSidesFilter === 'all' || project.openSides === openSidesFilter;
    return matchesType && matchesOpenSides;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="section-shell-hero bg-gradient-to-br from-[#0f1419] via-[#1a2332] to-[#2d3e50] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#b26243] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#5a6b7f] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 font-playfair tracking-tight">Our Exclusive Projects</h1>
          <p className="text-lg text-gray-300 font-light">Discover premium residential and commercial developments crafted with excellence</p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 py-6 md:py-8 bg-gradient-to-b from-[#f8f9fa] to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Property Type Filter */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Filter className="h-5 w-5 text-[#b26243]" />
              <h3 className="font-semibold text-[#1a2332] text-base">Property Type</h3>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={() => setTypeFilter('all')}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  typeFilter === 'all'
                    ? 'bg-gradient-to-r from-[#b26243] to-[#8d4a33] text-white shadow-lg hover:shadow-xl'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#b26243] hover:shadow-md'
                }`}
              >
                All Types
              </button>
              <button
                onClick={() => setTypeFilter('Residential')}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  typeFilter === 'Residential'
                    ? 'bg-gradient-to-r from-[#b26243] to-[#8d4a33] text-white shadow-lg hover:shadow-xl'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#b26243] hover:shadow-md'
                }`}
              >
                Residential
              </button>
              <button
                onClick={() => setTypeFilter('Commercial')}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  typeFilter === 'Commercial'
                    ? 'bg-gradient-to-r from-[#b26243] to-[#8d4a33] text-white shadow-lg hover:shadow-xl'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#b26243] hover:shadow-md'
                }`}
              >
                Commercial
              </button>
            </div>
          </div>

          {/* Open Sides Filter */}
          <div>
            <h3 className="font-semibold text-[#1a2332] text-base mb-3">Plot Configuration</h3>
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={() => setOpenSidesFilter('all')}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  openSidesFilter === 'all'
                    ? 'bg-gradient-to-r from-[#b26243] to-[#8d4a33] text-white shadow-lg hover:shadow-xl'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#b26243] hover:shadow-md'
                }`}
              >
                All Configurations
              </button>
              <button
                onClick={() => setOpenSidesFilter('1-side')}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  openSidesFilter === '1-side'
                    ? 'bg-gradient-to-r from-[#b26243] to-[#8d4a33] text-white shadow-lg hover:shadow-xl'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#b26243] hover:shadow-md'
                }`}
              >
                1 Side Open
              </button>
              <button
                onClick={() => setOpenSidesFilter('2-side')}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  openSidesFilter === '2-side'
                    ? 'bg-gradient-to-r from-[#b26243] to-[#8d4a33] text-white shadow-lg hover:shadow-xl'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#b26243] hover:shadow-md'
                }`}
              >
                2 Side Open
              </button>
              <button
                onClick={() => setOpenSidesFilter('3-side')}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  openSidesFilter === '3-side'
                    ? 'bg-gradient-to-r from-[#b26243] to-[#8d4a33] text-white shadow-lg hover:shadow-xl'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#b26243] hover:shadow-md'
                }`}
              >
                3 Side Open
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-600 pt-2 border-t border-gray-200">
            Showing <span className="font-semibold text-[#1a2332]">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-shell bg-white">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 card-grid">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  plotSizes={project.plotSizes}
                  priceRange={project.priceRange}
                  badge={project.badge}
                  highlights={project.highlights}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-6">No projects match your selected filters</p>
              <Button 
                onClick={() => {
                  setTypeFilter('all');
                  setOpenSidesFilter('all');
                }}
                className="bg-gradient-to-r from-[#b26243] to-[#8d4a33] hover:from-[#8d4a33] hover:to-[#6f3627] text-white font-semibold px-8 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

