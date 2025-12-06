import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Blogger",
    content: "The best burgers I've ever had! The quality and taste are consistently amazing. My go-to spot for a great meal.",
    rating: 5,
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Regular Customer",
    content: "Incredible service and even better food. The staff always goes above and beyond to make every visit special.",
    rating: 5,
    avatar: "MC",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Food Critic",
    content: "A culinary gem! The attention to detail in every dish is remarkable. Highly recommended for food lovers.",
    rating: 5,
    avatar: "ED",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Local Resident",
    content: "My family's favorite restaurant. The kids love it, and we appreciate the fresh, quality ingredients.",
    rating: 5,
    avatar: "JW",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Tourist",
    content: "Stumbled upon this place during our trip - absolutely worth it! The flavors are unforgettable.",
    rating: 5,
    avatar: "LT",
  },
  {
    id: 6,
    name: "Robert Brown",
    role: "Business Owner",
    content: "Perfect for business lunches. Great atmosphere, excellent food, and impeccable service every time.",
    rating: 5,
    avatar: "RB",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Are Saying
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real reviews from our valued customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-6 relative group hover-glow"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
