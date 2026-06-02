import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import InvestmentSection from "./InvestmentSection";
import ProjectConnectivity from "./ProjectConnectivity";
import ProjectShowcaseSlider from "./ProjectShowcaseSlider";
import StickyInquiryBar from "./StickyInquiryBar";
import ScheduleVisitForm from "./forms/ScheduleVisitForm";
import { slugify } from "@/lib/utils";

const heroSlides = [
  {
    image: "https://www.constructionworld.in/assets/uploads/img_33356_1775110924.webp",
    eyebrow: "Infrastructure Advantage",
    title: "Close to Noida International Airport",
    description:
      "Benefit from strong regional connectivity and long-term growth potential near one of North India's most important upcoming aviation and business hubs.",
  },
  {
    image: "https://niu.edu.in/wp-content/uploads/2025/03/DJI_0014-1.webp",
    eyebrow: "Education Hub",
    title: "Well Connected to Noida International University",
    description:
      "A location near a prominent academic destination adds everyday convenience, supports rental demand, and strengthens the area's residential appeal.",
  },
  {
    image: "https://imperiastructures.com/wp-content/uploads/2025/02/Yamuna-expressway.webp",
    eyebrow: "Planned Development Zone",
    title: "Strategic Presence in the Yamuna Expressway Authority Corridor",
    description:
      "Positioned within a fast-developing YEIDA region shaped by infrastructure, industrial expansion, and planned urban growth.",
  },
  {
    image: "https://jewarpropmart.com/wp-content/uploads/2025/04/image_2023_09_26T09_54_37_469Z.png",
    eyebrow: "Featured Township",
    title: "Discover Shri Hari Vatika Township",
    description:
      "A thoughtfully planned plotted development designed for premium living, smart investment, and a future-ready lifestyle in a high-potential location.",
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
      <section id="site-hero" className="relative h-[460px] overflow-hidden bg-cover bg-center sm:h-[540px] md:h-[620px] lg:h-[78vh] xl:h-[88vh]">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-1000"
            id={slugify(slide.title)}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: idx === currentSlide ? 1 : 0,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#101723]/72 via-[#182536]/54 to-[#2c200d]/38" />
            <div className="absolute inset-0 bg-black/18" />
          </div>
        ))}

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <div className="animate-fade-in-up">
            <p className="type-ui-label mb-3 text-[#e7c7a6] sm:text-sm md:mb-4 md:text-base">
              {heroSlides[currentSlide].eyebrow}
            </p>
            <h1 className="type-hero mx-auto mb-3 max-w-5xl text-white drop-shadow-lg md:mb-4">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="type-body-lg mx-auto mb-6 max-w-3xl px-4 text-gray-100 drop-shadow-md md:mb-8">
              {heroSlides[currentSlide].description}
            </p>
            <div className="flex flex-col justify-center gap-3 px-4 sm:flex-row md:gap-4">
              <Button
                size="lg"
                className="bg-[#b26243] text-sm font-semibold text-white shadow-lg hover:bg-[#8d4a33] md:text-base"
                onClick={() => navigate("/projects")}
              >
                Explore Projects <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-slate-800 shadow-lg hover:bg-white/10 md:text-base"
                onClick={() => setShowScheduleForm(true)}
              >
                Schedule Site Visit
              </Button>
            </div>
          </div>
        </div>

        <button
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/30 p-1.5 backdrop-blur-sm transition-all hover:bg-white/50 sm:left-3 sm:p-2 md:left-4 md:p-2.5 lg:left-6 lg:p-3"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5 text-white sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
        </button>

        <button
          aria-label="Next slide"
          className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/30 p-1.5 backdrop-blur-sm transition-all hover:bg-white/50 sm:right-3 sm:p-2 md:right-4 md:p-2.5 lg:right-6 lg:p-3"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5 text-white sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
        </button>

        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-6 md:bottom-8">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all md:h-3 ${
                idx === currentSlide ? "w-6 bg-[#b26243] md:w-8" : "w-2 bg-white/50 md:w-3"
              }`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </section>

      <ProjectShowcaseSlider />
      <InvestmentSection />
      <ProjectConnectivity />

        <Dialog open={showScheduleForm} onOpenChange={setShowScheduleForm}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Schedule Your Site Visit</DialogTitle>
            </DialogHeader>
            <ScheduleVisitForm onClose={() => setShowScheduleForm(false)} />
          </DialogContent>
      </Dialog>

      <StickyInquiryBar />
    </div>
  );
}
