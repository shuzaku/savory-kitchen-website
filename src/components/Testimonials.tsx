import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Patricia Williams',
    role: 'Family Reunion Organizer',
    content: 'Chef Maria catered our family reunion and it was like having Sunday dinner at Big Mama\'s house! The fried chicken was crispy perfection and those collard greens had everyone asking for the recipe. Best soul food we\'ve had outside of home cooking.',
    rating: 5,
  },
  {
    name: 'Reverend James Thompson',
    role: 'Mount Zion Baptist Church',
    content: 'We\'ve been using Savory Kitchen for our church events for over two years. The food is always hot, fresh, and reminds us of the meals our elders used to make. Maria treats us like family and the portions are generous!',
    rating: 5,
  },
  {
    name: 'Angela Davis',
    role: 'Birthday Celebration',
    content: 'I wanted authentic soul food for my 50th birthday party and Maria delivered! The mac and cheese was the creamiest I\'ve ever had, and the peach cobbler was gone in minutes. Everyone is still talking about how good the food was.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">What Folks Are Saying</h2>
          <p className="text-muted-foreground">
            Hear from families we've had the honor to serve
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-secondary/30 p-8 rounded-xl border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-6 text-foreground leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="mb-1">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
