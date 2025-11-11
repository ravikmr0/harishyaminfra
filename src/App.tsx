import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/components/home";
import ProjectDetail from "@/components/ProjectDetail";
import Projects from "@/pages/Projects";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

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
          </Routes>
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;