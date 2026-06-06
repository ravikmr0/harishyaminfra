import { useState } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function Projects() {
  const [typeFilter, setTypeFilter] = useState('all');
  const [openSidesFilter, setOpenSidesFilter] = useState('all');

  const filteredProjects = projects.filter(project => {
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
                <ProjectCard key={project.id} project={project} />
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

