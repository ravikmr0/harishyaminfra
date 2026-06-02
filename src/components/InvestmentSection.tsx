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
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'High ROI Potential',
    description: 'Consistent appreciation with strong market fundamentals',
    highlight: '15-20% Annual Growth'
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: 'Flexible Payment Plans',
    description: 'Easy EMI options with minimal down payment',
    highlight: '60% Registry, 20-30 Months EMI'
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    title: 'Rental Income',
    description: 'Generate passive income from your investment',
    highlight: '₹6,000-₹10,000/month'
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Prime Locations',
    description: 'Strategic locations with excellent connectivity',
    highlight: 'Near Highway & City Center'
  }
];

export default function InvestmentSection() {
  const navigate = useNavigate();

  return (
    <section id="investment-benefits" className="section-shell bg-white" aria-labelledby="investment-heading">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <h2 id="investment-heading" className="mb-3 font-display text-3xl font-bold text-[#1a2332] md:text-4xl">
            Why Invest With Us?
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-6 text-gray-600">
            Discover compelling reasons to invest in Harishyam Infra&apos;s premium residential projects with strong returns and strategic locations
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, idx) => (
            <Card key={idx} className="border border-gray-200 bg-gradient-to-br from-white to-[#f8f9fa] p-4 transition-shadow duration-300 hover:shadow-md md:p-5">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#b26243] to-[#8d4a33] text-white">
                {benefit.icon}
              </div>
              <h3 className="mb-1.5 font-display text-base font-bold text-[#1a2332]">
                {benefit.title}
              </h3>
              <p className="mb-3 text-xs leading-5 text-gray-600">
                {benefit.description}
              </p>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#b26243]">
                {benefit.highlight}
              </p>
            </Card>
          ))}
        </div>

        {/* Investment Details */}
        <div className="mb-8 rounded-xl bg-gradient-to-r from-[#1a2332] to-[#2c3e50] p-6 text-white md:p-7">
          <h3 className="mb-6 font-display text-xl font-bold md:text-2xl">
            Investment Overview
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="border-l-4 border-[#b26243] pl-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-300">Initial Investment</p>
              <p className="font-display text-2xl font-bold md:text-3xl">₹9.6 Lac</p>
              <p className="mt-2 text-sm text-gray-400">60% Registry Amount</p>
            </div>
            <div className="border-l-4 border-[#b26243] pl-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-300">Monthly EMI</p>
              <p className="font-display text-2xl font-bold md:text-3xl">₹30,000</p>
              <p className="mt-2 text-sm text-gray-400">20-30 Month Duration</p>
            </div>
            <div className="border-l-4 border-[#b26243] pl-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-300">Expected Returns</p>
              <p className="font-display text-2xl font-bold text-[#b26243] md:text-3xl">₹3-5 Lac</p>
              <p className="mt-2 text-sm text-gray-400">In 3-5 Years</p>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border-l-4 border-[#b26243] bg-[#f8f9fa] p-5 md:p-6">
            <h3 className="mb-4 font-display text-lg font-bold text-[#1a2332] md:text-xl">
              Why Choose Harishyam Infra?
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#b26243] font-bold mt-1">âœ“</span>
                <span className="text-gray-700">20+ Years of Excellence in Real Estate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b26243] font-bold mt-1">âœ“</span>
                <span className="text-gray-700">Government Registered & Transparent Dealings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b26243] font-bold mt-1">âœ“</span>
                <span className="text-gray-700">Prime Locations with High Appreciation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b26243] font-bold mt-1">âœ“</span>
                <span className="text-gray-700">Excellent Customer Support & After-Sales Service</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-[#b26243] to-[#8d4a33] p-5 text-white md:p-6">
            <h3 className="mb-3 font-display text-lg font-bold md:text-xl">
              Ready to Invest?
            </h3>
            <p className="mb-5 text-sm leading-6">
              Join satisfied investors who made smart decisions with Harishyam Infra. Our expert team guides you through every step.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="w-full rounded-lg bg-white px-5 py-3 font-semibold text-[#b26243] transition-colors duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/30"
              aria-label="Get investment consultation"
            >
              Get Investment Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

