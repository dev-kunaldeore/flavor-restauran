import { useState } from "react";
import { Button } from "./ui/button";

const tabs = [
  { id: "faq", name: "FAQs" },
  { id: "contact", name: "Contact" },
];

const faqs = [
  {
    question: "What are your opening hours?",
    answer: "We're open Monday to Sunday, 10 AM to 11 PM. Kitchen closes 30 minutes before closing time.",
  },
  {
    question: "Do you offer delivery?",
    answer: "Yes! We partner with major delivery platforms and also offer direct delivery within a 10-mile radius.",
  },
  {
    question: "Can I make a reservation?",
    answer: "Absolutely! You can reserve a table through our website or by calling us directly.",
  },
  {
    question: "Do you cater for events?",
    answer: "Yes, we offer catering services for all types of events. Contact us for custom menus and pricing.",
  },
];

const SupportSection = () => {
  const [activeTab, setActiveTab] = useState("faq");

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            For more Support
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "hero" : "secondary"}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </Button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto">
          {activeTab === "faq" && (
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 hover-glow"
                >
                  <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "contact" && (
            <div className="bg-card rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-foreground text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-foreground text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-foreground text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <Button variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
