import { TrendingUp, DollarSign, PieChart, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';

interface InvestmentBenefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight: string;
}

const benefits: InvestmentBenefit[] = [
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: 'High ROI Potential',
    description: 'Consistent appreciation with strong market fundamentals',
    highlight: '15-20% Annual Growth'
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: 'Flexible Payment Plans',
    description: 'Easy EMI options with minimal down payment',
    highlight: '60% Registry, 20-30 Months EMI'
  },
  {
    icon: <PieChart className="h-8 w-8" />,
    title: 'Rental Income',
    description: 'Generate passive income from your investment',
    highlight: '₹6,000-₹10,000/month'
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: 'Prime Locations',
    description: 'Strategic locations with excellent connectivity',
    highlight: 'Near Highway & City Center'
  }
];

export default function InvestmentSection() {
  const navigate = useNavigate();

  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4 font-playfair">
            Why Invest With Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the compelling reasons to invest in Harishyam Infra's premium residential projects
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, idx) => (
            <Card key={idx} className="p-6 bg-gradient-to-br from-white to-[#f8f9fa] border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#d4af37] to-[#c9a227] text-white mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1a2332] mb-2 font-playfair">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {benefit.description}
              </p>
              <p className="text-sm font-semibold text-[#d4af37] uppercase tracking-widest">
                {benefit.highlight}
              </p>
            </Card>
          ))}
        </div>

        {/* Investment Comparison */}
        <div className="bg-gradient-to-r from-[#1a2332] to-[#2c3e50] rounded-xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 font-playfair">
            Investment Comparison
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#d4af37] pl-6">
              <p className="text-sm uppercase tracking-widest text-gray-300 mb-2 font-semibold">Initial Investment</p>
              <p className="text-3xl font-bold font-playfair">₹9.6 Lac</p>
              <p className="text-sm text-gray-400 mt-2">60% Registry Amount</p>
            </div>
            <div className="border-l-4 border-[#d4af37] pl-6">
              <p className="text-sm uppercase tracking-widest text-gray-300 mb-2 font-semibold">Monthly EMI</p>
              <p className="text-3xl font-bold font-playfair">₹30,000</p>
              <p className="text-sm text-gray-400 mt-2">20-30 Month Duration</p>
            </div>
            <div className="border-l-4 border-[#d4af37] pl-6">
              <p className="text-sm uppercase tracking-widest text-gray-300 mb-2 font-semibold">Expected Returns</p>
              <p className="text-3xl font-bold font-playfair text-[#d4af37]">₹3-5 Lac</p>
              <p className="text-sm text-gray-400 mt-2">In 3-5 Years</p>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-[#f8f9fa] rounded-lg p-8 border-l-4 border-[#d4af37]">
            <h4 className="text-xl font-bold text-[#1a2332] mb-4 font-playfair">
              Why Choose Harishyam Infra?
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] font-bold mt-1">✓</span>
                <span className="text-gray-700">20+ Years of Excellence in Real Estate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] font-bold mt-1">✓</span>
                <span className="text-gray-700">Government Registered & Transparent Dealings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] font-bold mt-1">✓</span>
                <span className="text-gray-700">Prime Locations with High Appreciation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] font-bold mt-1">✓</span>
                <span className="text-gray-700">Excellent Customer Support & After-Sales Service</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#d4af37] to-[#c9a227] rounded-lg p-8 text-white">
            <h4 className="text-xl font-bold mb-4 font-playfair">
              Ready to Invest?
            </h4>
            <p className="mb-6 text-sm leading-relaxed">
              Join hundreds of satisfied investors who have made smart investment decisions with Harishyam Infra. Our expert team is ready to guide you through every step.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="w-full bg-white text-[#d4af37] font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Investment Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}