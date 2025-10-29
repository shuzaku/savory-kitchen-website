import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, BookOpen, Users2, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const credentials = [
  { icon: Heart, title: 'Family Legacy', description: '4 Generations of Soul Food Cooking' },
  { icon: BookOpen, title: 'Authentic', description: 'Traditional Southern Recipes' },
  { icon: Users2, title: 'Experience', description: '25+ Years Serving the Community' },
  { icon: Award, title: 'Award Winning', description: 'Best Soul Food in DFW 2023' },
];

export function ChefSpotlight() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="chef" className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative circles with animation */}
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-10 left-20 w-80 h-80 bg-white/5 rounded-full"
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, -30, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image section - left side with floating quote */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Main image */}
              <motion.div 
                className="relative h-[500px] lg:h-[650px] rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-2"
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1747406394855-1b7e6674a017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYW1lcmljYW4lMjBjaGVmJTIwY29va2luZ3xlbnwxfHx8fDE3NjE2MTAyODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Chef Maria Rodriguez"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating quote card */}
              <motion.div 
                className="absolute -bottom-8 -left-8 lg:-right-12 lg:left-auto bg-white text-primary p-6 rounded-xl shadow-2xl max-w-xs transform -rotate-3 border-4 border-white"
                initial={{ opacity: 0, y: 20, rotate: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: -3 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
              >
                <p className="mb-2 italic">"Every dish is made with the same love my grandmother put into her cooking."</p>
                <p className="text-sm opacity-75">- Chef Maria Rodriguez</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content section - right side */}
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="inline-block bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-sm">Meet the Heart of Our Kitchen</p>
            </motion.div>
            
            <motion.h2 
              className="mb-3 text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Chef Maria Rodriguez
            </motion.h2>
            
            <motion.h3 
              className="mb-8 text-xl opacity-90"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.9 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Head Chef & Owner
            </motion.h3>
            
            <motion.p 
              className="mb-4 text-white/90 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Born and raised in Dallas, Chef Maria learned to cook at her grandmother's side, mastering recipes that have been passed down through four generations. Her passion for authentic soul food comes from a deep love of family, community, and the rich culinary traditions of the South.
            </motion.p>
            
            <motion.p 
              className="mb-10 text-white/90 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Chef Maria believes that great soul food isn't just about following a recipe—it's about putting love into every pot and making everyone who eats feel like family. From her kitchen to your table, she brings the warmth and comfort of home.
            </motion.p>

            {/* Credentials grid - staggered */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {credentials.map((credential, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-start gap-3 ${index % 2 === 0 ? 'transform translate-y-4' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: index % 2 === 0 ? 16 : 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: index % 2 === 0 ? 12 : -4 }}
                >
                  <motion.div 
                    className="bg-white/10 p-3 rounded-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <credential.icon className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h4 className="mb-1">{credential.title}</h4>
                    <p className="text-sm text-white/80">{credential.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Signature dishes */}
            <motion.div 
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h4 className="mb-4">Grandma's Special Recipes</h4>
              <ul className="space-y-3 text-white/90">
                {[
                  'Secret Recipe Fried Chicken',
                  'Slow-Cooked Collard Greens with Ham Hocks',
                  'Southern Peach Cobbler with Bourbon Vanilla Sauce'
                ].map((dish, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                  >
                    <motion.span 
                      className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                    <span>{dish}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
