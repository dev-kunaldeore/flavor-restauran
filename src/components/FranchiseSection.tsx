import { Button } from "./ui/button";

const FranchiseSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Start The Adventure Today And Become a Franchisee
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Join our growing family of successful franchise owners. We provide comprehensive training, 
            marketing support, and proven systems to help you succeed. With locations across the country, 
            there's never been a better time to start your journey with us.
          </p>
          <Button variant="hero" size="xl">
            Contact Us Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
