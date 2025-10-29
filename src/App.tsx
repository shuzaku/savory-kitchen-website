import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ChefSpotlight } from './components/ChefSpotlight';
import { Services } from './components/Services';
import { MenuPreview } from './components/MenuPreview';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MenuPage } from './pages/MenuPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the '#'
      if (hash === 'menu') {
        setCurrentPage('menu');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} />
      
      {currentPage === 'menu' ? (
        <>
          <MenuPage />
          <Footer />
        </>
      ) : (
        <>
          <Hero />
          <ChefSpotlight />
          <Services />
          <MenuPreview />
          <Gallery />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
      
      <Toaster />
    </div>
  );
}
