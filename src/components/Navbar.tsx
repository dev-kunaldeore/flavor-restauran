import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const navRef = useRef<HTMLElement>(null);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Our Menu", href: "#menu" },
    { name: "Services", href: "#services" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active link based on scroll position
      const sections = navLinks.map((link) => {
        if (link.href === "#") return { href: link.href, element: document.body };
        const element = document.querySelector(link.href);
        return { href: link.href, element };
      });

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveLink(section.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-background/80 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with animation */}
          <a
            href="#"
            className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
              <span className="text-primary-foreground font-bold text-lg md:text-xl">F</span>
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-0 group-hover:opacity-100" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-foreground hidden sm:block bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              Flavor
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => {
              const isActive = activeLink === link.href || (link.href === "#" && activeLink === "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full animate-fade-in" />
                  )}
                  {/* Hover effect */}
                  <span className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            {/* Call Us Button */}
            <Button
              variant="hero"
              size="sm"
              className="ml-2 group hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              onClick={() => window.location.href = "tel:+15551234567"}
            >
              <Phone className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
              Call Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:bg-primary/10 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                }`}
              />
              <X
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                }`}
              />
            </div>
          </Button>
        </div>

        {/* Mobile Navigation with slide animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-border/50">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => {
                const isActive = activeLink === link.href || (link.href === "#" && activeLink === "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "text-foreground bg-primary/10 font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                      opacity: isOpen ? 1 : 0,
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="flex items-center justify-between">
                      {link.name}
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      )}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-3 pt-4 mt-4 border-t border-border/50">
              <ThemeToggle />
              <Button 
                variant="hero" 
                className="flex-1"
                onClick={() => window.location.href = "tel:+15551234567"}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
