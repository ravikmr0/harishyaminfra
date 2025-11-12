import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import Home from "@/components/home";
import ProjectDetail from "@/components/ProjectDetail";
import Projects from "@/pages/Projects";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Services from "@/pages/Services";
import Amenities from "@/pages/Amenities";
import Testimonials from "@/pages/Testimonials";
import Careers from "@/pages/Careers";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsAndConditions from "@/pages/TermsAndConditions";
import BrochureDownloads from "@/pages/BrochureDownloads";
import AgentsTeam from "@/pages/AgentsTeam";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
            <Route path="/brochures" element={<BrochureDownloads />} />
            <Route path="/agents" element={<AgentsTeam />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContactButtons />
      </div>
    </Suspense>
  );
}

export default App;