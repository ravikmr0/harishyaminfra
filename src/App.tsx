import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import Home from "@/components/home";
import ProjectDetail from "@/components/ProjectDetail";
import Projects from "@/pages/Projects";
import ShriHariVatika from "@/pages/ShriHariVatika";
import ShriHariVatikaPhase2 from "@/pages/ShriHariVatikaPhase2";
import ShriHariVatikaPhase3 from "@/pages/ShriHariVatikaPhase3";
import HariShyamTownship from "@/pages/HariShyamTownship";
import MeroVrindavanDham from "@/pages/MeroVrindavanDham";
import AgriculturalLand from "@/pages/AgriculturalLand";
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
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="site-page flex min-h-screen flex-col">
        <ScrollToTop />
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            {/* Specific project routes - must come before generic route */}
            <Route path="/project/shri-hari-vatika" element={<ShriHariVatika />} />
            <Route path="/project/shri-hari-vatika-phase-2" element={<ShriHariVatikaPhase2 />} />
            <Route path="/project/shri-hari-vatika-phase-3" element={<ShriHariVatikaPhase3 />} />
            <Route path="/project/hari-shyam-township" element={<HariShyamTownship />} />
            <Route path="/project/mero-vrindavan-dham" element={<MeroVrindavanDham />} />
            <Route path="/project/agricultural-land" element={<AgriculturalLand />} />
            {/* Generic project route for fallback */}
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
