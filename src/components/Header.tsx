import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/projects?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <div className="w-10 h-10 bg-[#d4af37] rounded-lg flex items-center justify-center">
              <span className="font-bold text-[#1a2332] text-lg">HI</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-[#1a2332] font-playfair">Harishyam Infra</p>
              <p className="text-xs text-gray-600">Premium Real Estate</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => navigate(link.href)}
                className="text-gray-700 hover:text-[#d4af37] font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-xs">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-colors"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#d4af37] transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>

          {/* CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <Button className="bg-[#d4af37] hover:bg-[#c9a227] text-[#1a2332] font-semibold">
              Inquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 flex-shrink-0"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-[#1a2332]" />
            ) : (
              <Menu className="h-6 w-6 text-[#1a2332]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-3 border-t pt-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="px-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#d4af37] transition-colors"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </form>

            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  navigate(link.href);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-[#f8f9fa] rounded transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button className="w-full bg-[#d4af37] hover:bg-[#c9a227] text-[#1a2332] font-semibold">
              Inquire Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}