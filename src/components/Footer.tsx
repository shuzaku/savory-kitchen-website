export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="mb-4">Savory Kitchen DFW</h3>
            <p className="text-primary-foreground/80 text-sm">
              Authentic southern soul food catering bringing families and communities together in the Dallas-Fort Worth area.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#chef" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Chef
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#menu" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Menu
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Our Specialties</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Family Reunions</li>
              <li>Church Gatherings</li>
              <li>Celebrations & Parties</li>
              <li>Special Occasions</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Contact</h4>
            <p className="text-primary-foreground/80 text-sm">
              Dallas-Fort Worth, TX<br />
              info@savorykitchendfw.com<br />
              (123) 456-7890
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} Savory Kitchen DFW. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
