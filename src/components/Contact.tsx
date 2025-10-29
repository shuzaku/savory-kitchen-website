import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      guestCount: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-secondary/10">
      {/* Decorative background shape */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">
            Ready to start planning your event? Contact us for a personalized quote
          </p>
        </div>

        <div className="relative">
          {/* Contact Info - Left side, elevated */}
          <div className="mb-12 md:mb-0 md:w-5/12 md:absolute md:left-0 md:top-0 md:z-20">
            <div className="bg-primary text-white p-8 rounded-2xl shadow-2xl">
              <h3 className="mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="text-white mb-1">Location</h4>
                    <p className="text-white/80 text-sm">Dallas-Fort Worth Metroplex, TX</p>
                    <p className="text-white/60 text-sm mt-1">We serve all DFW areas</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="text-white mb-1">Phone</h4>
                    <p className="text-white/80 text-sm">(214) 555-FOOD</p>
                    <p className="text-white/80 text-sm">(214) 555-3663</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="text-white mb-1">Email</h4>
                    <p className="text-white/80 text-sm">info@savorykitchendfw.com</p>
                    <p className="text-white/80 text-sm">events@savorykitchendfw.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="text-white mb-1">Business Hours</h4>
                    <p className="text-white/80 text-sm">Monday - Friday: 9am - 6pm</p>
                    <p className="text-white/80 text-sm">Saturday: 10am - 4pm</p>
                    <p className="text-white/80 text-sm">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-white/90 text-sm">
                  We recommend booking at least 4-6 weeks in advance for optimal menu customization and availability.
                </p>
              </div>
            </div>
          </div>

          {/* Form - Right side, overlapping */}
          <div className="md:w-7/12 md:ml-auto md:pl-12">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-border">
              <h3 className="mb-8">Request a Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                    className="mt-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="eventDate">Event Date</Label>
                    <Input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="guestCount">Guest Count</Label>
                    <Input
                      id="guestCount"
                      name="guestCount"
                      type="number"
                      value={formData.guestCount}
                      onChange={handleChange}
                      placeholder="50"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event..."
                    rows={5}
                    className="mt-2"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
