import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const featuredDishes = [
  {
    name: 'Southern Fried Chicken',
    description: 'Golden, crispy perfection',
    category: 'Meats',
    image: 'https://images.unsplash.com/photo-1740125492753-28394dac8165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aGVybiUyMGZyaWVkJTIwY2hpY2tlbnxlbnwxfHx8fDE3NjE2MTAyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'BBQ Ribs',
    description: 'Fall-off-the-bone tender',
    category: 'Meats',
    image: 'https://images.unsplash.com/photo-1614398750956-402891a7dce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYnElMjByaWJzJTIwcGxhdHRlcnxlbnwxfHx8fDE3NjE2MTAyODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Collard Greens',
    description: 'Slow-cooked with love',
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1750772194417-b940c4da1a40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VsJTIwZm9vZCUyMGNvbGxhcmQlMjBncmVlbnN8ZW58MXx8fHwxNzYxNjEwMjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Mac & Cheese',
    description: 'Creamy & golden',
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1723473620176-8d26dc6314cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWMlMjBhbmQlMjBjaGVlc2UlMjBiYWtlZHxlbnwxfHx8fDE3NjE2MTA0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Peach Cobbler',
    description: 'Warm & buttery',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1567552229523-aaa2f6b76a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjaCUyMGNvYmJsZXIlMjBkZXNzZXJ0fGVufDF8fHx8MTc2MTYxMDI4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Banana Pudding',
    description: 'Layered perfection',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1639330842151-8a92eb332b2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5hbmElMjBwdWRkaW5nJTIwZGVzc2VydHxlbnwxfHx8fDE3NjE2MTExNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function MenuPreview() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const handleViewMenu = () => {
    window.location.hash = '#menu';
  };

  return (
    <section id="menu-preview" className="py-32 relative overflow-hidden bg-white">
      {/* Abstract background patterns */}
      <motion.div 
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-5"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ac1c25" d="M39.5,-65.6C51.4,-58.2,61.4,-48.3,68.8,-36.8C76.2,-25.3,81,-12.2,81.4,1.2C81.8,14.6,77.8,28.4,70.4,40.2C63,52,52.2,61.8,39.8,68.4C27.4,75,13.7,78.4,-0.3,79C-14.3,79.6,-28.6,77.4,-41.2,71C-53.8,64.6,-64.7,54,-72.4,41.6C-80.1,29.2,-84.6,15.1,-84.8,0.8C-85,-13.5,-80.9,-28,-73.6,-40.8C-66.3,-53.6,-55.8,-64.7,-43.4,-71.9C-31,-79.1,-17.5,-82.4,-4.4,-76.4C8.7,-70.4,27.6,-73,39.5,-65.6Z" transform="translate(100 100)" />
        </svg>
      </motion.div>

      <div className="absolute bottom-20 left-10 w-32 h-32 opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#000000" d="M43.3,-73.8C55.9,-66.3,66.3,-55.2,73.4,-42.3C80.5,-29.4,84.3,-14.7,84.2,-0.1C84.1,14.5,80.1,29,72.8,41.8C65.5,54.6,55,65.7,42.3,72.8C29.6,79.9,14.8,83,0.5,82.2C-13.8,81.4,-27.6,76.7,-40.3,69.5C-53,62.3,-64.6,52.6,-72.4,40.2C-80.2,27.8,-84.2,12.6,-84.3,-2.7C-84.4,-18,-80.6,-35.4,-72.6,-48.3C-64.6,-61.2,-52.4,-69.6,-39.4,-76.9C-26.4,-84.2,-13.2,-90.4,0.6,-91.4C14.4,-92.4,30.7,-81.3,43.3,-73.8Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 relative">
          <div className="inline-block relative mb-6">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-primary/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-primary/10 rounded-full"></div>
            
            <motion.h2 
              className="relative text-5xl lg:text-6xl mb-3"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Soul Food Favorites
            </motion.h2>
          </div>
          
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto relative"
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-8 py-2 border-t border-b border-primary/30">
              A taste of what we offer
            </span>
          </motion.p>
        </div>

        {/* Featured Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredDishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full">
                  <span className="text-xs text-primary">{dish.category}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl mb-2">{dish.name}</h3>
                <p className="text-sm text-muted-foreground">{dish.description}</p>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-primary/10 rounded-tl-3xl"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              onClick={handleViewMenu}
              className="group px-10 py-6 text-lg"
            >
              <span>View Complete Menu</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          <p className="mt-4 text-sm text-muted-foreground">
            Explore our full selection of soul food classics
          </p>
        </motion.div>

        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center gap-4">
          <div className="w-16 h-1 bg-primary rounded-full"></div>
          <div className="w-8 h-1 bg-primary/60 rounded-full"></div>
          <div className="w-4 h-1 bg-primary/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
