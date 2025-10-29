import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1740125492753-28394dac8165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aGVybiUyMGZyaWVkJTIwY2hpY2tlbnxlbnwxfHx8fDE3NjE2MTAyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Southern fried chicken"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </motion.div>

      {/* Abstract decorative elements with rotation */}
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 opacity-10"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M41.3,-69.7C54.9,-63.4,68.3,-56.2,75.6,-45.1C82.9,-34,84.1,-19,83.8,-4.5C83.5,10,81.7,24,75.4,36.8C69.1,49.6,58.3,61.2,45.2,68.3C32.1,75.4,16.8,78,-0.4,78.7C-17.6,79.4,-35.2,78.2,-48.8,71C-62.4,63.8,-72,50.6,-77.8,36.2C-83.6,21.8,-85.6,6.2,-83.7,-8.4C-81.8,-23,-76,-36.6,-67.2,-48.4C-58.4,-60.2,-46.6,-70.2,-33.4,-76.8C-20.2,-83.4,-5.6,-86.6,6.2,-95.6C18,-104.6,27.7,-76,41.3,-69.7Z" transform="translate(100 100)" />
        </svg>
      </motion.div>

      <motion.div 
        className="absolute bottom-20 left-20 w-48 h-48 opacity-10"
        animate={{ 
          rotate: -360,
          y: [0, -20, 0]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M47.1,-78.3C61.4,-71.2,73.6,-59.2,80.9,-44.8C88.2,-30.4,90.6,-13.6,88.5,2.3C86.4,18.2,79.8,33.2,70.3,46.2C60.8,59.2,48.4,70.2,34.2,76.8C20,83.4,4,85.6,-11.6,83.9C-27.2,82.2,-42.4,76.6,-55.8,68.2C-69.2,59.8,-80.8,48.6,-86.8,35C-92.8,21.4,-93.2,5.4,-89.4,-9.2C-85.6,-23.8,-77.6,-37,-67.4,-48.8C-57.2,-60.6,-44.8,-71,-30.4,-77.8C-16,-84.6,0.4,-87.8,15.8,-86.4C31.2,-85,32.8,-85.4,47.1,-78.3Z" transform="translate(100 100)" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative top accent */}
        <motion.div 
          className="mb-8 flex justify-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="w-16 h-px bg-white/60"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <div className="w-2 h-2 bg-primary rounded-full -mt-1"></div>
          <motion.div 
            className="w-16 h-px bg-white/60"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.h1 
          className="text-white mb-8 text-4xl sm:text-6xl lg:text-7xl relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className="block mb-3 text-xl sm:text-2xl tracking-widest uppercase opacity-90" 
            style={{ letterSpacing: '0.3em' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Savory Kitchen DFW
          </motion.span>
          <span className="block relative">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Authentic Soul Food
            </motion.span>
            <motion.span 
              className="block mt-2 italic relative inline-block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Cooked with Love
              {/* Hand-drawn underline */}
              <motion.svg 
                className="absolute -bottom-4 left-0 w-full hidden sm:block" 
                height="20" 
                viewBox="0 0 400 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
              >
                <motion.path 
                  d="M5 15C50 8 150 12 200 10C250 8 350 12 395 15" 
                  stroke="#ac1c25" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
                <path d="M10 12C60 6 160 10 210 8C260 6 360 10 390 13" stroke="#ac1c25" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
              </motion.svg>
            </motion.span>
          </span>
        </motion.h1>

        <motion.p 
          className="text-white/90 mb-10 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          From Sunday dinners to family reunions, we bring the warmth of home-cooked southern soul food to your celebrations.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" onClick={() => scrollToSection('contact')} className="group relative overflow-hidden px-8">
              <span className="relative z-10">Get a Quote</span>
              <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('menu')} 
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary px-8 backdrop-blur-sm"
            >
              View Our Menu
            </Button>
          </motion.div>
        </motion.div>

        {/* Decorative bottom accent */}
        <motion.div 
          className="mt-16 flex justify-center items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="w-1 h-1 bg-white/40 rounded-full"></div>
          <div className="w-2 h-2 bg-white/60 rounded-full"></div>
          <div className="w-1 h-1 bg-white/40 rounded-full"></div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: 1, 
          y: [0, 10, 0]
        }}
        transition={{ 
          opacity: { duration: 0.8, delay: 1.6 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <span className="text-white text-xs tracking-widest uppercase opacity-70">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
}
