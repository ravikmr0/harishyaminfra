import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

interface ProjectOverviewProps {
  project: any;
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  const highlights = [
    'Government Approved',
    'Flexible Payment Plans',
    'Modern Infrastructure',
    ' Green Spaces',
    ' 24/7 Security',
    'Community Amenities'
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-[#1a2332] mb-4 font-playfair">Project Overview</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {project.description}
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our premium residential plots are designed with meticulous attention to detail, offering the perfect blend of luxury and affordability. Each plot is strategically located to provide easy access to schools, hospitals, shopping centers, and transportation hubs.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-[#1a2332] mb-6 font-playfair">Key Highlights</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-center gap-3 p-4 bg-[#f8f9fa] rounded-lg">
              <CheckCircle className="h-6 w-6 text-[#d4af37] flex-shrink-0" />
              <span className="text-gray-700 font-medium">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#f8f9fa] p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-[#1a2332] mb-4 font-playfair">Investment Opportunity</h3>
        <p className="text-gray-700 mb-6">
          This is an excellent investment opportunity with strong appreciation potential. The location's proximity to upcoming commercial hubs and infrastructure projects makes it an ideal choice for both residential and investment purposes.
        </p>
        <Button className="bg-[#d4af37] hover:bg-[#c9a227] text-[#1a2332] font-semibold">
          Inquire Now
        </Button>
      </div>
    </div>
  );
}