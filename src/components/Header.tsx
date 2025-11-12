import { useState } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Amenities', href: '/amenities' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/projects?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo & Company Name */}
          <button
            onClick={() => {
              navigate('/');
              setIsOpen(false);
            }}
            className="flex items-center gap-2 cursor-pointer flex-shrink-0 min-w-0"
          >
            <div className="w-9 sm:w-10 h-9 sm:h-10 bg-gradient-to-br from-[#d4af37] to-[#c9a227] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
              <span className="font-bold text-[#1a2332] text-sm sm:text-lg">HI</span>
            </div>
            <div className="hidden xs:block min-w-0">
              <p className="font-bold text-[#1a2332] font-playfair text-sm sm:text-base leading-tight">Harishyam</p>
              <p className="text-xs text-gray-600 leading-tight">Real Estate</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => navigate(link.href)}
                className="text-gray-700 hover:text-[#d4af37] font-medium transition-colors text-sm xl:text-base"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-xs lg:max-w-sm mx-2 lg:mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-colors text-sm"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#d4af37] transition-colors"
              >
                <Search className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </form>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block flex-shrink-0">
            <Button className="bg-[#d4af37] hover:bg-[#c9a227] text-[#1a2332] font-semibold text-sm sm:text-base px-3 sm:px-4 py-2">
              Inquire
            </Button>
          </div>

          {/* Mobile Search Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
          >
            <Search className="h-5 w-5 text-[#1a2332]" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
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
          <nav className="lg:hidden mt-3 sm:mt-4 pb-3 sm:pb-4 space-y-2 border-t pt-3 sm:pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="px-2 sm:px-4 mb-3">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-colors text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#d4af37] transition-colors"
                >
                  <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </form>

            {/* Navigation Links */}
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  navigate(link.href);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 sm:px-4 py-2 sm:py-2.5 text-gray-700 hover:bg-[#f8f9fa] hover:text-[#d4af37] rounded transition-colors text-sm sm:text-base font-medium"
              >
                {link.label}
              </button>
            ))}

            {/* Mobile CTA Button */}
            <div className="px-2 sm:px-4 pt-2">
              <Button className="w-full bg-[#d4af37] hover:bg-[#c9a227] text-[#1a2332] font-semibold text-sm sm:text-base py-2">
                Inquire Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}