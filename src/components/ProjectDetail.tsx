import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectOverview from '@/components/project/ProjectOverview';
import ProjectAmenities from '@/components/project/ProjectAmenities';
import ProjectLocation from '@/components/project/ProjectLocation';
import ProjectGallery from '@/components/project/ProjectGallery';
import { projectMap } from '@/data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectMap[id ?? 'shri-hari-vatika'];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#1a2332] mb-4 font-playfair">Project Not Found</h1>
          <Button onClick={() => navigate('/projects')}>Back to Projects</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div
        id="project-hero"
        className="relative h-96 md:h-[500px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${project.heroImage || project.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#b26243] opacity-10 rounded-full blur-3xl" />

        <button
          onClick={() => navigate('/projects')}
          className="absolute top-6 left-6 bg-white/90 hover:bg-white rounded-full p-2.5 hover:shadow-lg transition-all z-10 backdrop-blur-sm"
        >
          <ArrowLeft className="h-6 w-6 text-[#1a2332]" />
        </button>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 md:p-10">
          <span className="inline-flex rounded-full bg-white/14 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
            {project.badge}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white font-playfair mb-3 mt-4 tracking-tight">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-100 font-light">{project.subtitle}</p>
        </div>
      </div>

      <div id="project-overview" className="bg-gradient-to-b from-[#f8f9fa] to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-12">
          <div className="grid md:grid-cols-4 gap-4 md:gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-[#b26243]/30 hover:shadow-lg transition-all">
              <p className="text-xs uppercase tracking-widest text-gray-600 mb-2 font-bold">Plot Size</p>
              <p className="text-3xl font-bold text-[#1a2332] font-playfair">{project.plotSizes}</p>
            </div>
            <div className="bg-gradient-to-br from-[#fffaf0] to-[#fef5e7] p-6 rounded-xl border border-[#e8d5b7] hover:shadow-lg transition-all">
              <p className="text-xs uppercase tracking-widest text-[#8b6f47] mb-2 font-bold">Premium Rate</p>
              <p className="text-3xl font-bold text-[#b26243] font-playfair">{project.ratePerGaj}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-[#b26243]/30 hover:shadow-lg transition-all">
              <p className="text-xs uppercase tracking-widest text-gray-600 mb-2 font-bold">Available Plots</p>
              <p className="text-3xl font-bold text-[#1a2332] font-playfair">
                {project.availablePlots} <span className="text-lg text-gray-500">/ {project.totalPlots}</span>
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-[#b26243]/30 hover:shadow-lg transition-all">
              <p className="text-xs uppercase tracking-widest text-gray-600 mb-2 font-bold">Location</p>
              <p className="text-lg font-bold text-[#1a2332] flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#b26243]" /> {project.location}
              </p>
            </div>
          </div>

          <div className="p-7 md:p-8 bg-gradient-to-br from-white to-[#fffaf0] rounded-2xl border-2 border-[#b26243] shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-[#1a2332] mb-6 font-playfair">Payment Plan</h3>
            <div className="grid md:grid-cols-4 gap-5">
              <div className="text-center p-5 bg-white rounded-xl border border-gray-100 hover:border-[#b26243] transition-all">
                <p className="text-xs uppercase tracking-widest text-gray-600 mb-2 font-bold">Registry</p>
                <p className="text-3xl font-bold text-[#b26243] font-playfair">{project.paymentPlan.registry}</p>
              </div>
              <div className="text-center p-5 bg-white rounded-xl border border-gray-100 hover:border-[#b26243] transition-all">
                <p className="text-xs uppercase tracking-widest text-gray-600 mb-2 font-bold">EMI Period</p>
                <p className="text-3xl font-bold text-[#1a2332] font-playfair">{project.paymentPlan.emiPeriod}</p>
              </div>
              <div className="text-center p-5 bg-white rounded-xl border border-gray-100 hover:border-[#b26243] transition-all">
                <p className="text-xs uppercase tracking-widest text-gray-600 mb-2 font-bold">Monthly EMI</p>
                <p className="text-3xl font-bold text-[#1a2332] font-playfair">{project.paymentPlan.emiAmount}</p>
              </div>
              <div className="text-center p-5 bg-gradient-to-br from-[#d4edda] to-[#c3e6cb] rounded-xl border border-[#28a745] hover:shadow-lg transition-all">
                <p className="text-xs uppercase tracking-widest text-green-700 mb-2 font-bold">Rental Income</p>
                <p className="text-3xl font-bold text-green-700 font-playfair">{project.paymentPlan.rentalIncome}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="project-details" className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-gradient-to-r from-[#f8f9fa] to-white p-1 border border-gray-200 rounded-xl">
            <TabsTrigger value="overview" className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#b26243] data-[state=active]:to-[#8d4a33] data-[state=active]:text-white data-[state=active]:shadow-lg transition-all">Overview</TabsTrigger>
            <TabsTrigger value="amenities" className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#b26243] data-[state=active]:to-[#8d4a33] data-[state=active]:text-white data-[state=active]:shadow-lg transition-all">Amenities</TabsTrigger>
            <TabsTrigger value="location" className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#b26243] data-[state=active]:to-[#8d4a33] data-[state=active]:text-white data-[state=active]:shadow-lg transition-all">Location</TabsTrigger>
            <TabsTrigger value="gallery" className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#b26243] data-[state=active]:to-[#8d4a33] data-[state=active]:text-white data-[state=active]:shadow-lg transition-all">Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <ProjectOverview project={project} />
          </TabsContent>

          <TabsContent value="amenities" className="mt-6">
            <ProjectAmenities />
          </TabsContent>

          <TabsContent value="location" className="mt-6">
            <ProjectLocation />
          </TabsContent>

          <TabsContent value="gallery" className="mt-6">
            <ProjectGallery />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
