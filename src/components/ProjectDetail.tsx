import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Home, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectOverview from '@/components/project/ProjectOverview';
import ProjectAmenities from '@/components/project/ProjectAmenities';
import ProjectLocation from '@/components/project/ProjectLocation';
import ProjectGallery from '@/components/project/ProjectGallery';

const projectData: Record<string, any> = {
  'shri-hari-vatika': {
    title: 'Shri Hari Vatika Phase-1',
    subtitle: 'Exclusive Residential Plots',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    description: 'Experience luxury living with our premium residential plots designed for modern families.',
    plotSizes: '100 Gaj',
    priceRange: '₹16 Lac*',
    ratePerGaj: '₹16 Lac / 100 Gaj',
    location: 'Prime Location, City Center',
    totalPlots: 250,
    availablePlots: 45,
    paymentPlan: {
      registry: '60%',
      emiPeriod: '20 Months',
      emiAmount: '₹30,000',
      rentalIncome: '₹10,000/month'
    }
  },
  'harishyam-township': {
    title: 'Harishyam Township',
    subtitle: 'Integrated Township Development',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    description: 'A complete township with world-class amenities and infrastructure.',
    plotSizes: '100 Gaj',
    priceRange: '₹16 Lac*',
    ratePerGaj: '₹16 Lac / 100 Gaj',
    location: 'Suburban Excellence',
    totalPlots: 500,
    availablePlots: 120,
    paymentPlan: {
      registry: '60%',
      emiPeriod: '20 Months',
      emiAmount: '₹30,000',
      rentalIncome: '₹10,000/month'
    }
  },
  'keshav-puram-township': {
    title: 'Keshav Puram Township',
    subtitle: 'Premium Affordable Living',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
    description: 'Premium township development with affordable pricing and easy payment plans.',
    plotSizes: '100 Gaj',
    priceRange: '₹12 Lac*',
    ratePerGaj: '₹12 Lac / 100 Gaj',
    location: 'Emerging Locality',
    totalPlots: 350,
    availablePlots: 180,
    paymentPlan: {
      registry: '60%',
      emiPeriod: '30 Months',
      emiAmount: '₹16,000',
      rentalIncome: '₹6,000/month'
    }
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
          <h1 className="text-3xl font-bold text-[#1a2332] mb-4 font-playfair">Project Not Found</h1>
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
          <h1 className="text-5xl md:text-6xl font-bold text-white font-playfair mb-2">
            {project.title}
          </h1>
          <p className="text-lg text-gray-100 font-light">{project.subtitle}</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-[#f8f9fa] border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-600 mb-2 font-semibold">Plot Size</p>
              <p className="text-2xl font-bold text-[#1a2332] font-playfair">{project.plotSizes}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-600 mb-2 font-semibold">Rate</p>
              <p className="text-2xl font-bold text-[#d4af37] font-playfair">{project.ratePerGaj}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-600 mb-2 font-semibold">Available Plots</p>
              <p className="text-2xl font-bold text-[#1a2332] font-playfair">{project.availablePlots} / {project.totalPlots}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-600 mb-2 font-semibold">Location</p>
              <p className="text-lg font-bold text-[#1a2332] flex items-center gap-1">
                <MapPin className="h-5 w-5" /> {project.location}
              </p>
            </div>
          </div>

          {/* Payment Plan Highlight */}
          {project.paymentPlan && (
            <div className="mt-6 p-6 bg-white rounded-lg border-2 border-[#d4af37]">
              <h3 className="text-lg font-bold text-[#1a2332] mb-4 font-playfair">Payment Plan</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-xs uppercase tracking-widest text-gray-600 mb-2 font-semibold">Registry</p>
                  <p className="text-2xl font-bold text-[#d4af37] font-playfair">{project.paymentPlan.registry}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs uppercase tracking-widest text-gray-600 mb-2 font-semibold">EMI Period</p>
                  <p className="text-2xl font-bold text-[#1a2332] font-playfair">{project.paymentPlan.emiPeriod}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs uppercase tracking-widest text-gray-600 mb-2 font-semibold">Monthly EMI</p>
                  <p className="text-2xl font-bold text-[#1a2332] font-playfair">{project.paymentPlan.emiAmount}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs uppercase tracking-widest text-gray-600 mb-2 font-semibold">Rental Income</p>
                  <p className="text-2xl font-bold text-green-600 font-playfair">{project.paymentPlan.rentalIncome}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="amenities">Amenities</TabsTrigger>
            <TabsTrigger value="location">Location</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
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
        </Tabs>
      </div>
    </div>
  );
}