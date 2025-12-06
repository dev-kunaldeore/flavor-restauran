import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg1 from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";

const heroImages = [heroBg1, heroBg2, heroBg3];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Images with enhanced crossfade */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${image})`,
            opacity: currentImage === index ? 1 : 0,
            transform: currentImage === index ? "scale(1)" : "scale(1.1)",
          }}
        />
      ))}
      
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/50 to-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      
      {/* Animated decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-orb-1 opacity-50" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-orb-2 opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Content with enhanced animations */}
          <div className="text-left">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6 transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Fresh & Delicious Daily</span>
            </div>

            {/* Main Heading with word-by-word animation */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-tight mb-6">
              <span
                className={`inline-block transition-all duration-700 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.1s" }}
              >
                Welcome!
              </span>
              <br />
              <span
                className={`inline-block transition-all duration-700 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.2s" }}
              >
                We Made
              </span>{" "}
              <span
                className={`inline-block text-gradient-orange transition-all duration-700 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.3s" }}
              >
                Delicious
              </span>
              <br />
              <span
                className={`inline-block transition-all duration-700 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.4s" }}
              >
                Food for You
              </span>
            </h1>

            {/* Description */}
            <p
              className={`text-muted-foreground text-base sm:text-lg max-w-lg mb-10 leading-relaxed transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0.5s" }}
            >
              Experience culinary excellence with our handcrafted dishes made from the finest ingredients. 
              Every bite tells a story of passion and tradition.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0.6s" }}
            >
              <Button 
                variant="light" 
                size="xl" 
                className="rounded-full group hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Order Online
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="heroOutline" 
                size="xl" 
                className="rounded-full group hover:bg-primary/10 transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Video
              </Button>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-foreground/10 transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0.7s" }}
            >
              <div>
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Menu Items</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Image indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`relative rounded-full transition-all duration-500 group ${
              currentImage === index ? "w-12" : "w-2"
            } h-2 bg-foreground/30 hover:bg-foreground/50`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {currentImage === index && (
              <span className="absolute inset-0 rounded-full bg-primary animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
