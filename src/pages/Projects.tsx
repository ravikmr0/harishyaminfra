import { useState } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';

const allProjects = [
  {
    id: 'shri-hari-vatika',
    title: 'Shri Hari Vatika',
    description: 'Exclusive residential plots with modern amenities',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    plotSizes: '1000 - 2500 sq.ft',
    priceRange: '₹50L - ₹1.5Cr',
    status: 'Active'
  },
  {
    id: 'harishyam-township',
    title: 'Harishyam Township',
    description: 'Integrated township with world-class facilities',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    plotSizes: '1500 - 3000 sq.ft',
    priceRange: '₹75L - ₹2Cr',
    status: 'Active'
  },
  {
    id: 'upcoming-project',
    title: 'Upcoming Project',
    description: 'New premium development coming soon',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80',
    plotSizes: '2000 - 3500 sq.ft',
    priceRange: 'Coming Soon',
    status: 'Upcoming'
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.status.toLowerCase() === filter);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a2332] to-[#2d3e50] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">Our Projects</h1>
          <p className="text-xl text-gray-300">Explore our premium residential developments</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-[#f8f9fa] border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 flex-wrap">
            <Filter className="h-5 w-5 text-gray-600" />
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === 'all'
                  ? 'bg-[#d4af37] text-[#1a2332]'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-[#d4af37]'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === 'active'
                  ? 'bg-[#d4af37] text-[#1a2332]'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-[#d4af37]'
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === 'upcoming'
                  ? 'bg-[#d4af37] text-[#1a2332]'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-[#d4af37]'
              }`}
            >
              Upcoming
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
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
        </div>
      </section>
    </div>
  );
}
