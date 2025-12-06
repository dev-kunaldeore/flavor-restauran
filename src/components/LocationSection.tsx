import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";

const LocationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const infoItems = [
    {
      icon: MapPin,
      title: "Main Location",
      description: "123 Food Street, Culinary District, NY 10001",
      delay: "0.1s",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "+1 (555) 123-4567",
      delay: "0.2s",
    },
    {
      icon: Mail,
      title: "Email",
      description: "hello@flavorrestaurant.com",
      delay: "0.3s",
    },
    {
      icon: Clock,
      title: "Hours",
      description: "Mon - Sun: 10:00 AM - 11:00 PM",
      delay: "0.4s",
    },
  ];

  return (
    <section ref={sectionRef} id="location" className="py-20 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Info */}
          <div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Our Restaurants.
              <br />
              Where to Find Us?
            </h2>
            <p
              className={`text-muted-foreground mb-8 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Visit us at any of our convenient locations. We can't wait to serve you our delicious food!
            </p>

            <div className="space-y-4 mb-8">
              {infoItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-4 transition-all duration-700 hover:translate-x-2 group ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-8"
                    }`}
                    style={{
                      transitionDelay: isVisible ? item.delay : "0s",
                    }}
                  >
                    <Icon className="w-5 h-5 text-primary mt-1 flex-shrink-0 transition-all duration-300 group-hover:scale-125 group-hover:text-primary/80" />
                    <div>
                      <p className="text-foreground font-medium transition-colors duration-300 group-hover:text-primary">
                        {item.title}
                      </p>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className={`transition-all duration-700 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Button variant="hero" size="lg" className="hover:scale-105 transition-transform duration-300">
                Get Directions
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div
            className={`aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden bg-secondary transition-all duration-700 delay-300 shadow-lg hover:shadow-xl ${
              isVisible
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-12 scale-95"
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280069076!2d-74.1444878!3d40.6976701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1635959481452!5m2!1sen!2s"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
              allowFullScreen
              loading="lazy"
              title="Restaurant location map"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
