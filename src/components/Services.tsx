import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const services = [
  {
    title: 'Family Reunions',
    subtitle: 'Bringing Family Together',
    description: 'Celebrate your family heritage with authentic soul food that brings everyone to the table. Perfect for reunions, anniversaries, and homecomings.',
    image: 'https://images.unsplash.com/photo-1578496780896-7081cc23c111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjByZXVuaW9uJTIwYnVmZmV0fGVufDF8fHx8MTc2MTYxMDI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'bg-primary',
  },
  {
    title: 'Church Events',
    subtitle: 'Fellowship & Food',
    description: 'From Sunday dinners to church celebrations, we provide soul food that nourishes the body and spirit for your congregation.',
    image: 'https://images.unsplash.com/photo-1614398750956-402891a7dce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYnElMjByaWJzJTIwcGxhdHRlcnxlbnwxfHx8fDE3NjE2MTAyODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'bg-black',
  },
  {
    title: 'Celebrations',
    subtitle: 'Special Moments',
    description: 'Birthdays, graduations, retirements - make your special occasions memorable with home-style soul food prepared with love.',
    image: 'https://images.unsplash.com/photo-1567552229523-aaa2f6b76a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjaCUyMGNvYmJsZXIlMjBkZXNzZXJ0fGVufDF8fHx8MTc2MTYxMDI4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'bg-primary',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={ref} className="relative">
      {/* Decorative number */}
      <motion.div 
        className="absolute -top-12 left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0 z-0 opacity-5"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 0.05, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="text-[200px] lg:text-[280px] leading-none text-primary" style={{ fontWeight: 800 }}>
          {index + 1}
        </span>
      </motion.div>

      <div className={`relative ${index % 2 === 0 ? 'lg:ml-24' : 'lg:mr-24'}`}>
        <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>
          {/* Image with artistic frame */}
          <motion.div 
            className={`lg:w-7/12 relative ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Abstract shape behind image */}
              <motion.div 
                className={`absolute inset-0 ${service.color} transform ${index % 2 === 0 ? 'translate-x-6 translate-y-6' : '-translate-x-6 translate-y-6'} -z-10 rounded-3xl`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
              
              <div className="relative h-[400px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl group">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Artistic overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40"></div>
                
                {/* Floating label */}
                <motion.div 
                  className={`absolute top-8 ${index % 2 === 0 ? 'right-8' : 'left-8'} bg-white px-6 py-3 rounded-full shadow-lg transform -rotate-3`}
                  initial={{ y: -20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  whileHover={{ rotate: 0, scale: 1.05 }}
                >
                  <span className="text-primary text-sm tracking-wide">{service.subtitle}</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content with artistic elements */}
          <motion.div 
            className={`lg:w-5/12 flex items-center ${index % 2 === 0 ? 'mt-8 lg:mt-0 lg:pl-8' : 'mt-8 lg:mt-0 lg:pr-8'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6 relative">
              {/* Decorative line */}
              <div className={`absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden lg:block ${index % 2 !== 0 ? 'lg:hidden' : ''}`}></div>
              <div className={`absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden ${index % 2 !== 0 ? 'lg:block' : ''}`}></div>
              
              <div>
                <motion.h3 
                  className="text-4xl lg:text-5xl mb-4 relative inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {service.title}
                </motion.h3>
                <motion.div 
                  className="flex items-center gap-4 mb-6"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <div className="h-px flex-1 bg-gradient-to-r from-primary to-transparent"></div>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                </motion.div>
              </div>
              
              <motion.p 
                className="text-lg text-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {service.description}
              </motion.p>

              <motion.div 
                className="pt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    onClick={scrollToContact}
                    size="lg"
                    className="group relative overflow-hidden"
                  >
                    <span className="relative z-10">Book Now</span>
                    <div className="absolute inset-0 bg-black transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Decorative dots */}
              <motion.div 
                className="flex gap-2 pt-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <motion.div 
                  className="w-3 h-3 border-2 border-primary rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                />
                <motion.div 
                  className="w-3 h-3 bg-primary rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                />
                <motion.div 
                  className="w-3 h-3 border-2 border-primary rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="services" className="py-32 relative overflow-hidden bg-white">
      {/* Abstract background shapes */}
      <motion.div 
        className="absolute top-0 left-0 w-[600px] h-[600px] opacity-5"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ac1c25" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.2,87C-23.2,86.4,-38.4,82.2,-51.8,74.2C-65.2,66.2,-76.8,54.4,-83.8,40.2C-90.8,26,-93.2,9.4,-91.4,-6.8C-89.6,-23,-83.6,-38.8,-74.2,-52.4C-64.8,-66,-52,-77.4,-37.6,-84.4C-23.2,-91.4,-7.2,-94,8.4,-91.8C24,-89.6,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Artistic header */}
        <div ref={headerRef} className="mb-20 relative">
          <motion.div 
            className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-1 bg-primary"
            initial={{ scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8 }}
          />
          <motion.h2 
            className="text-center mb-4 text-5xl lg:text-6xl relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="relative inline-block">
              What We Cater
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path 
                  d="M2 10C50 5 100 7 198 10" 
                  stroke="#ac1c25" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isHeaderInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </svg>
            </span>
          </motion.h2>
          <motion.p 
            className="text-center text-muted-foreground max-w-2xl mx-auto italic"
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Serving up soul food with southern hospitality for all your gatherings
          </motion.p>
        </div>

        {/* Services in artistic card layout */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
