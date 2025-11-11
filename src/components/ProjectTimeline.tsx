import { CheckCircle } from 'lucide-react';

interface TimelineItem {
  phase: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  date: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    phase: 'Phase 1',
    status: 'completed',
    date: '2022 - 2023',
    description: 'Land Acquisition & Planning'
  },
  {
    phase: 'Phase 2',
    status: 'completed',
    date: '2023 - 2024',
    description: 'Infrastructure Development'
  },
  {
    phase: 'Phase 3',
    status: 'in-progress',
    date: '2024 - 2025',
    description: 'Plot Development & Amenities'
  },
  {
    phase: 'Phase 4',
    status: 'upcoming',
    date: '2025 - 2026',
    description: 'Handover & Community Building'
  },
];

export default function ProjectTimeline() {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#d4af37] to-gray-300"></div>

      {/* Timeline Items */}
      <div className="space-y-8">
        {timeline.map((item, idx) => (
          <div key={idx} className={`flex ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            {/* Content */}
            <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${
                item.status === 'completed' ? 'border-[#d4af37]' :
                item.status === 'in-progress' ? 'border-blue-500' :
                'border-gray-300'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  {item.status === 'completed' && (
                    <CheckCircle className="h-5 w-5 text-[#d4af37]" />
                  )}
                  <h3 className="font-bold text-[#1a2332]">{item.phase}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">{item.date}</p>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>

            {/* Center Dot */}
            <div className="hidden md:flex w-0 justify-center">
              <div className={`w-4 h-4 rounded-full border-4 ${
                item.status === 'completed' ? 'bg-[#d4af37] border-white' :
                item.status === 'in-progress' ? 'bg-blue-500 border-white' :
                'bg-gray-300 border-white'
              }`}></div>
            </div>

            {/* Spacer */}
            <div className="hidden md:block w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
