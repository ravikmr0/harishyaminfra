import { useState } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';

const allProjects = [
  {
    id: 'shri-hari-vatika',
    title: 'Shri Hari Vatika Phase-1',
    description: 'Exclusive residential plots with modern amenities and flexible payment plans',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    plotSizes: '100 Gaj',
    priceRange: '₹16 Lac*',
    ratePerGaj: '16 Lac / 100 Gaj',
    registryAmount: '60%',
    emiDetails: '40% in 20 Months',
    monthlyEmi: '₹30,000',
    rentalIncome: '₹10,000/month',
    status: 'Active',
    type: 'Residential',
    openSides: '2-side'
  },
  {
    id: 'harishyam-township',
    title: 'Harishyam Township',
    description: 'Integrated township with world-class facilities and attractive payment options',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    plotSizes: '100 Gaj',
    priceRange: '₹16 Lac*',
    ratePerGaj: '16 Lac / 100 Gaj',
    registryAmount: '60%',
    emiDetails: '40% in 20 Months',
    monthlyEmi: '₹30,000',
    rentalIncome: '₹10,000/month',
    status: 'Active',
    type: 'Residential',
    openSides: '3-side'
  },
  {
    id: 'keshav-puram-township',
    title: 'Keshav Puram Township',
    description: 'Premium township development with affordable pricing and easy payment plans',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80',
    plotSizes: '100 Gaj',
    priceRange: '₹12 Lac*',
    ratePerGaj: '12 Lac / 100 Gaj',
    registryAmount: '60%',
    emiDetails: '40% in 30 Months',
    monthlyEmi: '₹16,000',
    rentalIncome: '₹6,000/month',
    status: 'Active',
    type: 'Residential',
    openSides: '1-side'
  },
  {
    id: 'commercial-plaza',
    title: 'Premium Commercial Plaza',
    description: 'Prime commercial spaces with high footfall and excellent ROI',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    plotSizes: '150 Gaj',
    priceRange: '₹25 Lac*',
    ratePerGaj: '25 Lac / 150 Gaj',
    registryAmount: '60%',
    emiDetails: '40% in 24 Months',
    monthlyEmi: '₹42,000',
    rentalIncome: '₹18,000/month',
    status: 'Active',
    type: 'Commercial',
    openSides: '2-side'
  },
  {
    id: 'green-valley-residency',
    title: 'Green Valley Residency',
    description: 'Eco-friendly residential plots surrounded by lush greenery',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80',
    plotSizes: '120 Gaj',
    priceRange: '₹18 Lac*',
    ratePerGaj: '18 Lac / 120 Gaj',
    registryAmount: '60%',
    emiDetails: '40% in 24 Months',
    monthlyEmi: '₹30,000',
    rentalIncome: '₹12,000/month',
    status: 'Active',
    type: 'Residential',
    openSides: '3-side'
  },
  {
    id: 'sunrise-commercial-hub',
    title: 'Sunrise Commercial Hub',
    description: 'Strategic commercial location with modern infrastructure',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    plotSizes: '200 Gaj',
    priceRange: '₹35 Lac*',
    ratePerGaj: '35 Lac / 200 Gaj',
    registryAmount: '60%',
    emiDetails: '40% in 18 Months',
    monthlyEmi: '₹78,000',
    rentalIncome: '₹25,000/month',
    status: 'Active',
    type: 'Commercial',
    openSides: '3-side'
  },
  {
    id: 'royal-enclave',
    title: 'Royal Enclave',
    description: 'Luxury residential plots with premium amenities',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80',
    plotSizes: '150 Gaj',
    priceRange: '₹22 Lac*',
    ratePerGaj: '22 Lac / 150 Gaj',
    registryAmount: '60%',
    emiDetails: '40% in 20 Months',
    monthlyEmi: '₹44,000',
    rentalIncome: '₹15,000/month',
    status: 'Active',
    type: 'Residential',
    openSides: '1-side'
  },
  {
    id: 'metro-business-park',
    title: 'Metro Business Park',
    description: 'Commercial plots near metro station with high visibility',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    plotSizes: '180 Gaj',
    priceRange: '₹30 Lac*',
    ratePerGaj: '30 Lac / 180 Gaj',
    registryAmount: '60%',
    emiDetails: '40% in 24 Months',
    monthlyEmi: '₹50,000',
    rentalIncome: '₹20,000/month',
    status: 'Active',
    type: 'Commercial',
    openSides: '1-side'
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
      <section className="bg-gradient-to-r from-[#1a2332] to-[#2d3e50] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Our Projects</h1>
          <p className="text-xl text-gray-300">Explore our premium residential and commercial developments</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-[#f8f9fa] border-b">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Property Type Filter */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Filter className="h-5 w-5 text-gray-600" />
              <h3 className="font-semibold text-[#1a2332]">Property Type</h3>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={() => setTypeFilter('all')}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                  typeFilter === 'all'
                    ? 'bg-[#d4af37] text-[#1a2332] shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-[#d4af37]'
                }`}
              >
                All Types
              </button>
              <button
                onClick={() => setTypeFilter('Residential')}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                  typeFilter === 'Residential'
                    ? 'bg-[#d4af37] text-[#1a2332] shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-[#d4af37]'
                }`}
              >
                Residential
              </button>
              <button
                onClick={() => setTypeFilter('Commercial')}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                  typeFilter === 'Commercial'
                    ? 'bg-[#d4af37] text-[#1a2332] shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-[#d4af37]'
                }`}
              >
                Commercial
              </button>
            </div>
          </div>

          {/* Open Sides Filter */}
          <div>
            <h3 className="font-semibold text-[#1a2332] mb-3">Plot Configuration</h3>
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={() => setOpenSidesFilter('all')}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                  openSidesFilter === 'all'
                    ? 'bg-[#d4af37] text-[#1a2332] shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-[#d4af37]'
                }`}
              >
                All Configurations
              </button>
              <button
                onClick={() => setOpenSidesFilter('1-side')}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                  openSidesFilter === '1-side'
                    ? 'bg-[#d4af37] text-[#1a2332] shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-[#d4af37]'
                }`}
              >
                1 Side Open
              </button>
              <button
                onClick={() => setOpenSidesFilter('2-side')}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                  openSidesFilter === '2-side'
                    ? 'bg-[#d4af37] text-[#1a2332] shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-[#d4af37]'
                }`}
              >
                2 Side Open
              </button>
              <button
                onClick={() => setOpenSidesFilter('3-side')}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                  openSidesFilter === '3-side'
                    ? 'bg-[#d4af37] text-[#1a2332] shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-[#d4af37]'
                }`}
              >
                3 Side Open
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-600">
            Showing <span className="font-semibold text-[#1a2332]">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  plotSizes={project.plotSizes}
                  priceRange={project.priceRange}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No projects match your filters</p>
              <Button 
                onClick={() => {
                  setTypeFilter('all');
                  setOpenSidesFilter('all');
                }}
                className="mt-4 bg-[#d4af37] hover:bg-[#c4a137] text-[#1a2332]"
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