import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Home, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectOverview from '@/components/project/ProjectOverview';
import ProjectAmenities from '@/components/project/ProjectAmenities';
import ProjectLocation from '@/components/project/ProjectLocation';
import ProjectGallery from '@/components/project/ProjectGallery';
import ProjectFloorPlans from '@/components/project/ProjectFloorPlans';

const projectData: Record<string, any> = {
  'shri-hari-vatika': {
    title: 'Shri Hari Vatika',
    subtitle: 'Exclusive Residential Plots',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    description: 'Experience luxury living with our premium residential plots designed for modern families.',
    plotSizes: '1000 - 2500 sq.ft',
    priceRange: '₹50L - ₹1.5Cr',
    location: 'Prime Location, City Center',
    totalPlots: 250,
    availablePlots: 45,
  },
  'harishyam-township': {
    title: 'Harishyam Township',
    subtitle: 'Integrated Township Development',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    description: 'A complete township with world-class amenities and infrastructure.',
    plotSizes: '1500 - 3000 sq.ft',
    priceRange: '₹75L - ₹2Cr',
    location: 'Suburban Excellence',
    totalPlots: 500,
    availablePlots: 120,
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[id || 'shri-hari-vatika'];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1a2332] mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: `url(${project.image})`
      }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <button
          onClick={() => navigate('/')}
          className="absolute top-6 left-6 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors z-10"
        >
          <ArrowLeft className="h-6 w-6 text-[#1a2332]" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-2">
            {project.title}
          </h1>
          <p className="text-xl text-gray-200">{project.subtitle}</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-[#f8f9fa] border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Plot Sizes</p>
              <p className="text-xl font-bold text-[#1a2332]">{project.plotSizes}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Price Range</p>
              <p className="text-xl font-bold text-[#d4af37]">{project.priceRange}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Available Plots</p>
              <p className="text-xl font-bold text-[#1a2332]">{project.availablePlots} / {project.totalPlots}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Location</p>
              <p className="text-xl font-bold text-[#1a2332] flex items-center gap-1">
                <MapPin className="h-5 w-5" /> {project.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="amenities">Amenities</TabsTrigger>
            <TabsTrigger value="location">Location</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="floorplans">Floor Plans</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <ProjectOverview project={project} />
          </TabsContent>

          <TabsContent value="amenities">
            <ProjectAmenities />
          </TabsContent>

          <TabsContent value="location">
            <ProjectLocation />
          </TabsContent>

          <TabsContent value="gallery">
            <ProjectGallery />
          </TabsContent>

          <TabsContent value="floorplans">
            <ProjectFloorPlans />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
