import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  currentPage?: string;
}

export function Navigation({ currentPage = 'home' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateTo = (page: string, sectionId?: string) => {
    if (page === 'menu') {
      window.location.hash = 'menu';
      setIsMenuOpen(false);
    } else if (page === 'home') {
      window.location.hash = '';
      setIsMenuOpen(false);
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  const scrollToSection = (id: string) => {
    if (currentPage === 'menu' && id !== 'menu') {
      // If on menu page, go back to home first
      navigateTo('home', id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => navigateTo('home')}
            className="flex-shrink-0 hover:opacity-80 transition-opacity"
          >
            <h2 className="text-primary">Savory Kitchen DFW</h2>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => navigateTo('home')} 
              className={`transition-colors ${currentPage === 'home' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('chef')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Chef
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => navigateTo('menu')} 
              className={`transition-colors ${currentPage === 'menu' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Gallery
            </button>
            <Button onClick={() => scrollToSection('contact')}>
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => navigateTo('home')} 
              className={`block w-full text-left py-2 transition-colors ${currentPage === 'home' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('chef')} 
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Chef
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => navigateTo('menu')} 
              className={`block w-full text-left py-2 transition-colors ${currentPage === 'menu' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Gallery
            </button>
            <Button onClick={() => scrollToSection('contact')} className="w-full">
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
