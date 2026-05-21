import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ProjectCard from './ProjectCard';
import TrustSection from './TrustSection';
import ProjectConnectivity from './ProjectConnectivity';
import InvestmentSection from './InvestmentSection';
import StickyInquiryBar from './StickyInquiryBar';
import ScheduleVisitForm from './forms/ScheduleVisitForm';

const heroSlides = [
  {
    image: 'https://www.constructionworld.in/assets/uploads/img_33356_1775110924.webp',
    eyebrow: 'Infrastructure Advantage',
    title: 'Close to Noida International Airport',
    description:
      'Benefit from strong regional connectivity and long-term growth potential near one of North India\'s most important upcoming aviation and business hubs.',
  },
  {
    image: 'https://niu.edu.in/wp-content/uploads/2025/03/DJI_0014-1.webp',
    eyebrow: 'Education Hub',
    title: 'Well Connected to Noida International University',
    description:
      'A location near a prominent academic destination adds everyday convenience, supports rental demand, and strengthens the area\'s residential appeal.',
  },
  {
    image: 'https://imperiastructures.com/wp-content/uploads/2025/02/Yamuna-expressway.webp',
    eyebrow: 'Planned Development Zone',
    title: 'Strategic Presence in the Yamuna Expressway Authority Corridor',
    description:
      'Positioned within a fast-developing YEIDA region shaped by infrastructure, industrial expansion, and planned urban growth.',
  },
  {
    image: 'https://jewarpropmart.com/wp-content/uploads/2025/04/image_2023_09_26T09_54_37_469Z.png',
    eyebrow: 'Featured Township',
    title: 'Discover Shri Hari Vatika Township',
    description:
      'A thoughtfully planned plotted development designed for premium living, smart investment, and a future-ready lifestyle in a high-potential location.',
  },
];

export default function Home() {
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="bg-white">
      {/* Hero Section with Image Slider - Device-Friendly Heights */}
      <section className="relative h-[460px] sm:h-[540px] md:h-[620px] lg:h-[78vh] xl:h-[88vh] bg-cover bg-center overflow-hidden">
        {/* Image Slider */}
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: idx === currentSlide ? 1 : 0,
            }}
          >
            {/* Color Grading Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#101723]/72 via-[#182536]/54 to-[#2c200d]/38"></div>
            {/* Additional Dark Overlay */}
            <div className="absolute inset-0 bg-black/18"></div>
          </div>
        ))}

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
          <div className="animate-fade-in-up">
            <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] text-[#f3d878] mb-3 md:mb-4 font-semibold">
              {heroSlides[currentSlide].eyebrow}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 md:mb-4 font-playfair drop-shadow-lg leading-tight max-w-5xl mx-auto">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-6 md:mb-8 max-w-3xl mx-auto drop-shadow-md px-4">
              {heroSlides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <Button 
                size="lg" 
                className="bg-[#d4af37] hover:bg-[#c9a227] text-[#1a2332] font-semibold shadow-lg text-sm md:text-base"
                onClick={() => navigate('/projects')}
              >
                Explore Projects <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-slate-800 hover:bg-white/10 shadow-lg text-sm md:text-base"
                onClick={() => navigate('/contact')}
              >
                Schedule Site Visit
              </Button>
            </div>
          </div>
        </div>

        {/* Left Arrow - Responsive Sizing */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-3 md:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 transition-all z-20 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-white" />
        </button>

        {/* Right Arrow - Responsive Sizing */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-3 md:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 transition-all z-20 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 md:h-3 rounded-full transition-all ${
                idx === currentSlide ? 'bg-[#d4af37] w-6 md:w-8' : 'bg-white/50 w-2 md:w-3'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-shell bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="section-heading">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-3 md:mb-4 font-playfair">
              Our Premium Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated selection of premium residential developments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 card-grid">
            <ProjectCard 
              title="Shri Hari Vatika Phase-1"
              description="Exclusive residential plots with modern amenities"
              image="https://ideogram.ai/assets/image/lossless/response/XsAiU7ASTSCEF82qdAjgkQ"
              plotSizes="100 Gaj"
              priceRange="₹16 Lac*"
              id="shri-hari-vatika"
            />
            <ProjectCard 
              title="Harishyam Township"
              description="Integrated township with world-class facilities"
              image="https://ideogram.ai/assets/image/lossless/response/do0coOFzQNmpkYRJU1DEww"
              plotSizes="100 Gaj"
              priceRange="₹16 Lac*"
              id="harishyam-township"
            />
            <ProjectCard 
              title="Keshav Puram Township"
              description="Premium township with affordable pricing"
              image="https://ideogram.ai/assets/image/lossless/response/MJxCca_KTs22U8ZH3jfK_w"
              plotSizes="100 Gaj"
              priceRange="₹12 Lac*"
              id="keshav-puram-township"
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <TrustSection />

      {/* Investment Section */}
      <InvestmentSection />

      {/* Project Connectivity Section */}
      <ProjectConnectivity />

      {/* Schedule Visit Modal */}
      <Dialog open={showScheduleForm} onOpenChange={setShowScheduleForm}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-playfair">Schedule Your Site Visit</DialogTitle>
          </DialogHeader>
          <ScheduleVisitForm onClose={() => setShowScheduleForm(false)} />
        </DialogContent>
      </Dialog>

      {/* Sticky Inquiry Bar */}
      <StickyInquiryBar />
    </div>
  );
}
