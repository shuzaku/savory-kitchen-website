import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ChefHat, Salad, Coffee, Dessert, UtensilsCrossed, Drumstick } from 'lucide-react';

const menuCategories = [
  {
    id: 'meats',
    title: 'Meats & Proteins',
    icon: Drumstick,
    image: 'https://images.unsplash.com/photo-1740125492753-28394dac8165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aGVybiUyMGZyaWVkJTIwY2hpY2tlbnxlbnwxfHx8fDE3NjE2MTAyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-primary/20 to-primary/5',
    featured: [
      {
        name: 'Southern Fried Chicken',
        description: 'Golden, crispy perfection with our secret blend',
        image: 'https://images.unsplash.com/photo-1740125492753-28394dac8165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aGVybiUyMGZyaWVkJTIwY2hpY2tlbnxlbnwxfHx8fDE3NjE2MTAyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Smothered Chicken',
        description: 'Tender chicken in rich, savory gravy',
        image: 'https://images.unsplash.com/photo-1577194509876-4bb24787a641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW90aGVyZWQlMjBjaGlja2VuJTIwc291bCUyMGZvb2R8ZW58MXx8fHwxNzYxNjExMTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'BBQ Ribs',
        description: 'Fall-off-the-bone with house-made sauce',
        image: 'https://images.unsplash.com/photo-1614398750956-402891a7dce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYnElMjByaWJzJTIwcGxhdHRlcnxlbnwxfHx8fDE3NjE2MTAyODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Fried Catfish',
        description: 'Cornmeal-crusted and perfectly seasoned',
        image: 'https://images.unsplash.com/photo-1748819762564-21fc970cfa23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlZCUyMGZpc2glMjBsZW1vbnxlbnwxfHx8fDE3NjE2MTExNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
    ],
    allItems: ['Southern Fried Chicken', 'Smothered Chicken', 'BBQ Chicken', 'Honey Glazed Chicken', 'Baked Chicken', 'BBQ Ribs (Pork)', 'Beef Ribs', 'Smothered Pork Chops', 'Fried Pork Chops', 'BBQ Pork Chops', 'Meatloaf', 'Beef Brisket', 'Pot Roast', 'Oxtails', 'Fried Catfish', 'Baked Fish', 'Salmon Croquettes', 'Turkey Wings', 'Smothered Turkey Wings', 'BBQ Turkey', 'Chitlins', 'Ham (Honey Glazed or Smoked)']
  },
  {
    id: 'sides',
    title: 'Soul Food Sides',
    icon: UtensilsCrossed,
    image: 'https://images.unsplash.com/photo-1750772194417-b940c4da1a40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VsJTIwZm9vZCUyMGNvbGxhcmQlMjBncmVlbnN8ZW58MXx8fHwxNzYxNjEwMjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-green-500/20 to-green-500/5',
    featured: [
      {
        name: 'Collard Greens',
        description: 'Slow-cooked with smoked turkey',
        image: 'https://images.unsplash.com/photo-1750772194417-b940c4da1a40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VsJTIwZm9vZCUyMGNvbGxhcmQlMjBncmVlbnN8ZW58MXx8fHwxNzYxNjEwMjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Mac & Cheese',
        description: 'Creamy, baked to golden perfection',
        image: 'https://images.unsplash.com/photo-1723473620176-8d26dc6314cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWMlMjBhbmQlMjBjaGVlc2UlMjBiYWtlZHxlbnwxfHx8fDE3NjE2MTA0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Candied Yams',
        description: 'Sweet potatoes with butter and brown sugar',
        image: 'https://images.unsplash.com/photo-1659415401946-bbee8c483e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNoZWQlMjBwb3RhdG9lcyUyMGdyYXZ5fGVufDF8fHx8MTc2MTYxMTE3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Green Beans',
        description: 'Seasoned southern-style with bacon',
        image: 'https://images.unsplash.com/photo-1448293065296-c7e2e5b76ae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGJlYW5zJTIwc291dGhlcm58ZW58MXx8fHwxNzYxNjExMTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
    ],
    allItems: ['Collard Greens', 'Turnip Greens', 'Mustard Greens', 'Green Beans', 'Cabbage', 'Black-Eyed Peas', 'Pinto Beans', 'Red Beans', 'Lima Beans', 'Candied Yams', 'Mac & Cheese', 'Cornbread Dressing', 'Rice & Gravy', 'Dirty Rice', 'Mashed Potatoes', 'Corn on the Cob', 'Fried Okra', 'Steamed Cabbage', 'Seasoned Corn', 'Squash Casserole', 'Yams & Apples', 'Cornbread', 'Dinner Rolls', 'Biscuits']
  },
  {
    id: 'salads',
    title: 'Salads & Cold Sides',
    icon: Salad,
    image: 'https://images.unsplash.com/photo-1593895648796-9139c6bee45c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3RhdG8lMjBzYWxhZCUyMGJvd2x8ZW58MXx8fHwxNzYxNjExMTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-yellow-500/20 to-yellow-500/5',
    featured: [
      {
        name: 'Potato Salad',
        description: 'Creamy southern-style classic',
        image: 'https://images.unsplash.com/photo-1593895648796-9139c6bee45c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3RhdG8lMjBzYWxhZCUyMGJvd2x8ZW58MXx8fHwxNzYxNjExMTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
    ],
    allItems: ['Potato Salad', 'Coleslaw', 'Macaroni Salad', 'Garden Salad', 'Caesar Salad', 'Pasta Salad', 'Fruit Salad', 'Broccoli Salad', 'Cucumber & Tomato Salad']
  },
  {
    id: 'desserts',
    title: 'Sweet Treats',
    icon: Dessert,
    image: 'https://images.unsplash.com/photo-1567552229523-aaa2f6b76a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjaCUyMGNvYmJsZXIlMjBkZXNzZXJ0fGVufDF8fHx8MTc2MTYxMDI4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-pink-500/20 to-pink-500/5',
    featured: [
      {
        name: 'Peach Cobbler',
        description: 'Warm with buttery, flaky crust',
        image: 'https://images.unsplash.com/photo-1567552229523-aaa2f6b76a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjaCUyMGNvYmJsZXIlMjBkZXNzZXJ0fGVufDF8fHx8MTc2MTYxMDI4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Banana Pudding',
        description: 'Layered with vanilla wafers',
        image: 'https://images.unsplash.com/photo-1639330842151-8a92eb332b2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5hbmElMjBwdWRkaW5nJTIwZGVzc2VydHxlbnwxfHx8fDE3NjE2MTExNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
    ],
    allItems: ['Peach Cobbler', 'Apple Cobbler', 'Blackberry Cobbler', 'Sweet Potato Pie', 'Pecan Pie', 'Pound Cake', 'Red Velvet Cake', 'Chocolate Cake', 'Carrot Cake', 'Banana Pudding', '7-Up Cake', 'Sock-It-To-Me Cake', 'Bread Pudding', 'Peach Pound Cake', 'Cookies (Various)']
  },
  {
    id: 'breakfast',
    title: 'Breakfast',
    icon: Coffee,
    image: 'https://images.unsplash.com/photo-1608847570180-1df280af3b59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBzYXVzYWdlJTIwZWdnc3xlbnwxfHx8fDE3NjE2MTExNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-orange-500/20 to-orange-500/5',
    featured: [
      {
        name: 'Southern Breakfast',
        description: 'Eggs, bacon, grits, and biscuits',
        image: 'https://images.unsplash.com/photo-1608847570180-1df280af3b59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBzYXVzYWdlJTIwZWdnc3xlbnwxfHx8fDE3NjE2MTExNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
    ],
    allItems: ['Scrambled Eggs', 'Cheese Eggs', 'Bacon', 'Sausage (Links or Patties)', 'Turkey Sausage', 'Grits', 'Cheese Grits', 'Hash Browns', 'Pancakes', 'French Toast', 'Biscuits & Gravy', 'Home Fries']
  },
  {
    id: 'beverages',
    title: 'Beverages',
    icon: ChefHat,
    image: 'https://images.unsplash.com/photo-1597348050326-4bd300420526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2VldCUyMHRlYSUyMGdsYXNzfGVufDF8fHx8MTc2MTYxMTE3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-blue-500/20 to-blue-500/5',
    featured: [
      {
        name: 'Sweet Tea',
        description: 'Traditional southern sweet tea',
        image: 'https://images.unsplash.com/photo-1597348050326-4bd300420526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2VldCUyMHRlYSUyMGdsYXNzfGVufDF8fHx8MTc2MTYxMTE3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
    ],
    allItems: ['Sweet Tea', 'Unsweet Tea', 'Lemonade', 'Fruit Punch', 'Coffee', 'Orange Juice', 'Cranberry Juice', 'Water']
  },
];

export function MenuPage() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const [selectedCategory, setSelectedCategory] = useState(menuCategories[0]);
  const [showAllItems, setShowAllItems] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-primary">
        <motion.div 
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" d="M39.5,-65.6C51.4,-58.2,61.4,-48.3,68.8,-36.8C76.2,-25.3,81,-12.2,81.4,1.2C81.8,14.6,77.8,28.4,70.4,40.2C63,52,52.2,61.8,39.8,68.4C27.4,75,13.7,78.4,-0.3,79C-14.3,79.6,-28.6,77.4,-41.2,71C-53.8,64.6,-64.7,54,-72.4,41.6C-80.1,29.2,-84.6,15.1,-84.8,0.8C-85,-13.5,-80.9,-28,-73.6,-40.8C-66.3,-53.6,-55.8,-64.7,-43.4,-71.9C-31,-79.1,-17.5,-82.4,-4.4,-76.4C8.7,-70.4,27.6,-73,39.5,-65.6Z" transform="translate(100 100)" />
          </svg>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.div
            ref={headerRef}
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl mb-6">Our Complete Menu</h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Authentic soul food made from scratch with love and tradition
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <div className="w-16 h-1 bg-white rounded-full"></div>
              <div className="w-8 h-1 bg-white/60 rounded-full"></div>
              <div className="w-4 h-1 bg-white/30 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Category Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {menuCategories.map((category, index) => {
              const Icon = category.icon;
              const isSelected = selectedCategory.id === category.id;
              
              return (
                <motion.button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowAllItems(false);
                  }}
                  className={`relative group overflow-hidden rounded-2xl aspect-square transition-all duration-300 ${
                    isSelected ? 'ring-4 ring-primary shadow-xl' : 'hover:shadow-lg'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ImageWithFallback
                    src={category.image}
                    alt={category.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} group-hover:opacity-90 transition-opacity ${
                    isSelected ? 'opacity-90' : 'opacity-70'
                  }`}></div>
                  
                  <div className="relative h-full flex flex-col items-center justify-center p-4 text-center">
                    <motion.div
                      animate={isSelected ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className={`w-8 h-8 mb-2 ${isSelected ? 'text-primary' : 'text-foreground'}`} />
                    </motion.div>
                    <h3 className={`text-sm lg:text-base ${isSelected ? 'text-primary' : 'text-foreground'}`}>
                      {category.title}
                    </h3>
                  </div>

                  {isSelected && (
                    <motion.div
                      className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Selected Category Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Featured Items Grid */}
              {selectedCategory.featured && (
                <div className="mb-12">
                  <h2 className="text-3xl lg:text-4xl mb-8 text-center">Featured {selectedCategory.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {selectedCategory.featured.map((item, index) => (
                      <motion.div
                        key={item.name}
                        className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -8 }}
                      >
                        <div className="relative h-48 overflow-hidden">
                          <ImageWithFallback
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                        
                        <div className="p-5">
                          <h3 className="mb-2 text-lg">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>

                        <div className="absolute top-0 right-0 w-12 h-12 bg-primary/10 rounded-bl-3xl"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* All Items Section */}
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-border/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl lg:text-3xl">Complete {selectedCategory.title} List</h3>
                  <motion.button
                    onClick={() => setShowAllItems(!showAllItems)}
                    className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {showAllItems ? 'Show Less' : `View All (${selectedCategory.allItems.length})`}
                  </motion.button>
                </div>

                <AnimatePresence>
                  {showAllItems && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4">
                        {selectedCategory.allItems.map((item, index) => (
                          <motion.div
                            key={item}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/60 transition-colors group"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.02 }}
                            whileHover={{ x: 8 }}
                          >
                            <motion.div 
                              className="w-2 h-2 bg-primary rounded-full flex-shrink-0"
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                            />
                            <span className="text-foreground group-hover:text-primary transition-colors">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom note */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-white/80 backdrop-blur-sm border-2 border-primary/30 rounded-2xl px-8 py-6 max-w-2xl shadow-lg">
              <h3 className="text-xl mb-2">
                <span className="text-primary">Custom Orders Welcome!</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                Don't see what you're looking for? We're happy to customize any dish or create something special for your event. Contact us to discuss your needs!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
