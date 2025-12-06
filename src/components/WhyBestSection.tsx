import { Play } from "lucide-react";
import foodChicken from "@/assets/food-chicken.png";
import foodPizza from "@/assets/food-pizza.png";
import foodSalad from "@/assets/food-salad.png";

const WhyBestSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why We are Best Food Maker
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            We combine traditional recipes with modern techniques to create unforgettable dining experiences. 
            Our commitment to quality and freshness sets us apart.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          <div className="col-span-1 aspect-square rounded-2xl overflow-hidden group cursor-pointer">
            <img
              src={foodChicken}
              alt="Crispy fried chicken"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          <div className="col-span-1 md:col-span-2 row-span-2 rounded-2xl overflow-hidden relative group cursor-pointer">
            <img
              src={foodPizza}
              alt="Gourmet pizza"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-background/30">
              <button className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-all hover:scale-110 glow-orange">
                <Play className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground ml-1" fill="currentColor" />
              </button>
            </div>
          </div>

          <div className="col-span-1 aspect-square rounded-2xl overflow-hidden group cursor-pointer">
            <img
              src={foodSalad}
              alt="Fresh healthy salad"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="col-span-1 rounded-2xl overflow-hidden bg-card p-4 md:p-6 flex flex-col justify-center">
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
              Fresh ingredients sourced daily from local farms and premium suppliers to ensure the highest quality.
            </p>
          </div>

          <div className="col-span-1 rounded-2xl overflow-hidden bg-card p-4 md:p-6 flex flex-col justify-center">
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
              Expert chefs with years of experience crafting memorable dishes with passion and precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBestSection;
