import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1740125492753-28394dac8165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aGVybiUyMGZyaWVkJTIwY2hpY2tlbnxlbnwxfHx8fDE3NjE2MTAyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Golden fried chicken',
    size: 'large',
  },
  {
    url: 'https://images.unsplash.com/photo-1750772194417-b940c4da1a40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VsJTIwZm9vZCUyMGNvbGxhcmQlMjBncmVlbnN8ZW58MXx8fHwxNzYxNjEwMjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Collard greens',
    size: 'small',
  },
  {
    url: 'https://images.unsplash.com/photo-1614398750956-402891a7dce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYnElMjByaWJzJTIwcGxhdHRlcnxlbnwxfHx8fDE3NjE2MTAyODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'BBQ ribs',
    size: 'medium',
  },
  {
    url: 'https://images.unsplash.com/photo-1567552229523-aaa2f6b76a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjaCUyMGNvYmJsZXIlMjBkZXNzZXJ0fGVufDF8fHx8MTc2MTYxMDI4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Peach cobbler',
    size: 'small',
  },
  {
    url: 'https://images.unsplash.com/photo-1578496780896-7081cc23c111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjByZXVuaW9uJTIwYnVmZmV0fGVufDF8fHx8MTc2MTYxMDI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Family buffet spread',
    size: 'medium',
  },
  {
    url: 'https://images.unsplash.com/photo-1747406394855-1b7e6674a017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYW1lcmljYW4lMjBjaGVmJTIwY29va2luZ3xlbnwxfHx8fDE3NjE2MTAyODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Chef cooking',
    size: 'large',
  },
];

function GalleryImage({ image, index }: { image: typeof galleryImages[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div 
      ref={ref}
      className={`break-inside-avoid overflow-hidden rounded-lg group cursor-pointer ${
        image.size === 'large' ? 'mb-6' : image.size === 'medium' ? 'mb-4' : 'mb-3'
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className={`relative ${
        image.size === 'large' ? 'h-96' : image.size === 'medium' ? 'h-64' : 'h-48'
      }`}>
        <ImageWithFallback
          src={image.url}
          alt={image.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <motion.div 
          className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </div>
    </motion.div>
  );
}

export function Gallery() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="gallery" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-12">
          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Our Food
          </motion.h2>
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A taste of what we create for your special occasions
          </motion.p>
        </div>

        {/* Masonry-style layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <GalleryImage key={index} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
