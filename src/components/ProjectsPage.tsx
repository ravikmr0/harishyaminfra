import React, { useState } from 'react';
import { projects, legalDocuments } from '../data/projects';
import ProjectCard from './ProjectCard';
import LegalDocumentsSection from './LegalDocumentsSection';

type FilterStatus = 'all' | 'ongoing' | 'completed' | 'upcoming';

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<FilterStatus>('all');
  const [showLegalDocs, setShowLegalDocs] = useState(false);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.status === filter);

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-amber-100 text-lg max-w-2xl">
            Explore our diverse portfolio of residential, commercial, and agricultural developments
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filter Section */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
              filter === 'all'
                ? 'bg-amber-600 text-white'
                : 'bg-white text-amber-600 border-2 border-amber-600 hover:bg-amber-50'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('ongoing')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
              filter === 'ongoing'
                ? 'bg-green-600 text-white'
                : 'bg-white text-green-600 border-2 border-green-600 hover:bg-green-50'
            }`}
          >
            Ongoing
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
              filter === 'completed'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
              filter === 'upcoming'
                ? 'bg-yellow-600 text-white'
                : 'bg-white text-yellow-600 border-2 border-yellow-600 hover:bg-yellow-50'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setShowLegalDocs(!showLegalDocs)}
            className="ml-auto px-6 py-2 rounded-lg font-medium bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-200"
          >
            {showLegalDocs ? 'Hide' : 'View'} Legal Documents
          </button>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">More Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No projects found for the selected filter.</p>
          </div>
        )}

        {/* Legal Documents Section */}
        {showLegalDocs && (
          <LegalDocumentsSection documents={legalDocuments} />
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;