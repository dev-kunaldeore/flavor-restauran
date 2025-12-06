import { useState, useEffect, useRef, useMemo } from "react";
import { Sparkles, Search, X, Heart, Filter, SlidersHorizontal } from "lucide-react";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useFavorites } from "@/hooks/useFavorites";
import ProductDetailModal from "./ProductDetailModal";
import ImageLightbox from "./ImageLightbox";
import { MenuCardSkeleton, MenuListSkeleton } from "./MenuSkeleton";
import heroBurger from "@/assets/hero-burger.png";
import foodChicken from "@/assets/food-chicken.png";
import foodPizza from "@/assets/food-pizza.png";
import foodSalad from "@/assets/food-salad.png";
import foodSandwich from "@/assets/food-sandwich.png";
import foodFries from "@/assets/food-fries.png";

const categories = [
  { id: "all", name: "All" },
  { id: "bread", name: "Bread" },
  { id: "chiffon", name: "Chiffon & Rolls" },
  { id: "donut", name: "Donut" },
  { id: "pastry", name: "Pastry & Danish" },
  { id: "cakes", name: "Cakes" },
  { id: "cookies", name: "Cookies" },
];

interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  dietary?: string[];
}

const menuItems: MenuItem[] = [
  // Bread category
  { id: 1, name: "Naan Burger", price: 1.85, category: "bread", image: heroBurger, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 2, name: "Butter Chicken Taco", price: 1.15, category: "bread", image: foodChicken, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["gluten-free"] },
  { id: 3, name: "Chicken Burger", price: 2.00, category: "bread", image: foodPizza, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: [] },
  { id: 4, name: "Cheese Chicken Naan", price: 2.50, category: "bread", image: foodSalad, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 5, name: "3 Layer Burger", price: 4.99, category: "bread", image: foodSandwich, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: [] },
  { id: 6, name: "Sandwich", price: 2.80, category: "bread", image: foodFries, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian", "vegan"] },
  
  // Chiffon & Rolls category
  { id: 7, name: "Classic Chiffon Roll", price: 3.25, category: "chiffon", image: heroBurger, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 8, name: "Cinnamon Chiffon Roll", price: 3.50, category: "chiffon", image: foodChicken, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 9, name: "Chocolate Chiffon Roll", price: 3.75, category: "chiffon", image: foodPizza, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 10, name: "Vanilla Chiffon Roll", price: 3.25, category: "chiffon", image: foodSalad, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  
  // Donut category
  { id: 11, name: "Glazed Donut", price: 1.50, category: "donut", image: heroBurger, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 12, name: "Chocolate Donut", price: 1.75, category: "donut", image: foodChicken, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 13, name: "Sprinkled Donut", price: 2.00, category: "donut", image: foodPizza, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 14, name: "Jelly Filled Donut", price: 2.25, category: "donut", image: foodSalad, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 15, name: "Boston Cream Donut", price: 2.50, category: "donut", image: foodSandwich, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  
  // Pastry & Danish category
  { id: 16, name: "Apple Danish", price: 3.00, category: "pastry", image: heroBurger, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 17, name: "Cherry Danish", price: 3.25, category: "pastry", image: foodChicken, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 18, name: "Cheese Danish", price: 3.50, category: "pastry", image: foodPizza, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 19, name: "Almond Croissant", price: 4.00, category: "pastry", image: foodSalad, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 20, name: "Chocolate Pastry", price: 3.75, category: "pastry", image: foodSandwich, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  
  // Cakes category
  { id: 21, name: "Chocolate Cake", price: 12.99, category: "cakes", image: heroBurger, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 22, name: "Vanilla Cake", price: 11.99, category: "cakes", image: foodChicken, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 23, name: "Red Velvet Cake", price: 13.99, category: "cakes", image: foodPizza, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 24, name: "Strawberry Cake", price: 12.50, category: "cakes", image: foodSalad, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 25, name: "Carrot Cake", price: 11.50, category: "cakes", image: foodSandwich, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian", "gluten-free"] },
  
  // Cookies category
  { id: 26, name: "Chocolate Chip Cookie", price: 1.25, category: "cookies", image: heroBurger, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 27, name: "Oatmeal Cookie", price: 1.15, category: "cookies", image: foodChicken, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 28, name: "Sugar Cookie", price: 1.00, category: "cookies", image: foodPizza, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian", "vegan"] },
  { id: 29, name: "Peanut Butter Cookie", price: 1.35, category: "cookies", image: foodSalad, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 30, name: "Double Chocolate Cookie", price: 1.50, category: "cookies", image: foodSandwich, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
];

const dietaryOptions = ["vegetarian", "vegan", "gluten-free"];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<number[]>([0, 15]);
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const { isFavorite, toggleFavorite } = useFavorites();

  // Get min and max prices
  const priceRangeValues = useMemo(() => {
    const prices = menuItems.map(item => item.price);
    return [Math.min(...prices), Math.max(...prices)];
  }, []);

  // Filter items by all criteria
  const filteredItems = useMemo(() => {
    setIsLoading(true);
    let items = activeCategory === "all" 
      ? menuItems 
      : menuItems.filter(item => item.category === activeCategory);
    
    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      );
    }
    
    // Price range filter
    items = items.filter(item => 
      item.price >= priceRange[0] && item.price <= priceRange[1]
    );
    
    // Dietary restrictions filter
    if (selectedDietary.length > 0) {
      items = items.filter(item => {
        const itemDietary = item.dietary || [];
        return selectedDietary.some(diet => itemDietary.includes(diet));
      });
    }
    
    setTimeout(() => setIsLoading(false), 300);
    return items;
  }, [activeCategory, searchQuery, priceRange, selectedDietary]);

  const handleCategoryChange = (categoryId: string) => {
    setIsAnimating(true);
    setActiveCategory(categoryId);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const toggleDietaryFilter = (diet: string) => {
    setSelectedDietary(prev => 
      prev.includes(diet) 
        ? prev.filter(d => d !== diet)
        : [...prev, diet]
    );
  };

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
  };

  const handleImageClick = (image: string) => {
    setLightboxImage(image);
  };

  const allImages = useMemo(() => 
    Array.from(new Set(menuItems.map(item => item.image))), 
    []
  );

  return (
    <section id="menu" className="py-20 relative overflow-hidden bg-background">

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with animation */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <Sparkles className="w-8 h-8 text-[#FF9901] animate-spin-slow" />
          </div>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold menu-title text-foreground"
          >
            Our Best & Delicious Menu
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-transparent via-[#FF9901] to-transparent mx-auto animate-shimmer" />
        </div>

        {/* Search Bar & Filters */}
        <div className="max-w-4xl mx-auto mb-8 space-y-4">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 h-12 bg-card border-border text-foreground placeholder:text-muted-foreground focus:bg-card focus:border-primary rounded-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="h-12 px-4"
            >
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              Filters
            </Button>
          </div>

          {/* Advanced Filters Panel */}
          {showFilters && (
            <div className="bg-card backdrop-blur-md border border-border rounded-lg p-6 space-y-6 animate-fade-in">
              {/* Price Range */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-foreground font-medium">Price Range</label>
                  <span className="text-primary font-semibold">
                    ${priceRange[0].toFixed(2)} - ${priceRange[1].toFixed(2)}
                  </span>
                </div>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={priceRangeValues[0]}
                  max={priceRangeValues[1]}
                  step={0.1}
                  className="w-full"
                />
              </div>

              {/* Dietary Restrictions */}
              <div>
                <label className="text-foreground font-medium mb-3 block">Dietary Restrictions</label>
                <div className="flex flex-wrap gap-2">
                  {dietaryOptions.map((diet) => (
                    <Badge
                      key={diet}
                      variant={selectedDietary.includes(diet) ? "default" : "outline"}
                      className="cursor-pointer transition-all"
                      onClick={() => toggleDietaryFilter(diet)}
                    >
                      {diet}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedDietary.length > 0 || priceRange[0] !== priceRangeValues[0] || priceRange[1] !== priceRangeValues[1]) && (
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSelectedDietary([]);
                    setPriceRange(priceRangeValues);
                  }}
                  className="w-full"
                >
                  Clear All Filters
                </Button>
              )}
            </div>
          )}

          {/* Results Count */}
          {(searchQuery || selectedDietary.length > 0 || priceRange[0] !== priceRangeValues[0] || priceRange[1] !== priceRangeValues[1]) && (
            <p className="text-muted-foreground text-sm text-center">
              Found {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"}
            </p>
          )}
        </div>

        {/* Category Tabs - Mobile: Horizontal Scroll, Desktop: Centered */}
        <div className="mb-8 md:mb-12 pb-4 category-tabs border-b border-border">
          {/* Mobile: Horizontal Scrollable */}
          <div className="flex md:hidden gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
            {categories.map((category) => {
              const itemCount = category.id === "all" 
                ? menuItems.length 
                : menuItems.filter(item => item.category === category.id).length;
              
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`relative flex-shrink-0 text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full whitespace-nowrap ${
                    activeCategory === category.id
                      ? "text-foreground bg-primary/20 border-primary/50"
                      : "text-muted-foreground bg-card border-border"
                  } border`}
                >
                  <span className="flex items-center gap-2">
                    {category.name}
                    <span 
                      className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                        activeCategory === category.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {itemCount}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Desktop: Centered Layout */}
          <div className="hidden md:flex flex-wrap justify-center gap-4 sm:gap-6">
            {categories.map((category, index) => {
              const itemCount = category.id === "all" 
                ? menuItems.length 
                : menuItems.filter(item => item.category === category.id).length;
              
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`relative text-sm font-medium transition-all duration-500 pb-2 category-tab px-4 ${
                    activeCategory === category.id
                      ? "text-foreground translate-y-[-2px]"
                      : "text-muted-foreground"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {category.name}
                    <span 
                      className={`text-xs px-2 py-0.5 rounded-full transition-all duration-300 ${
                        activeCategory === category.id
                          ? "bg-primary/20 text-primary scale-110"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {itemCount}
                    </span>
                  </span>
                  {activeCategory === category.id && (
                    <>
                      <span 
                        className="absolute bottom-0 left-0 h-0.5 category-indicator"
                        style={{ backgroundColor: "#FF9901" }}
                      />
                      <span 
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full category-dot"
                        style={{ backgroundColor: "#FF9901" }}
                      />
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Grid - Mobile: List View, Desktop: Grid */}
        <div 
          ref={gridRef}
          className={`max-w-5xl mx-auto menu-grid ${isAnimating ? "fade-out" : "fade-in"}`}
          style={{
            minHeight: isAnimating ? "400px" : "auto",
            transition: "min-height 0.3s ease",
          }}
        >
          {/* Loading State */}
          {isLoading ? (
            <>
              <div className="md:hidden">
                <MenuListSkeleton />
              </div>
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <MenuCardSkeleton key={i} />
                ))}
              </div>
            </>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No items found matching your criteria.</p>
            </div>
          ) : (
            <>
              {/* Mobile: List/Compact View */}
              <div className="md:hidden space-y-4">
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                className="menu-card rounded-xl overflow-hidden group relative cursor-pointer bg-card"
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                }}
                    onClick={() => handleItemClick(item)}
                  >
                    <div className="flex gap-4 p-4">
                      {/* Image - Smaller on mobile */}
                      <div 
                        className="w-24 h-24 rounded-lg relative overflow-hidden flex-shrink-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleImageClick(item.image);
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          style={{ opacity: 0.8 }}
                        />
                        <div 
                          className="absolute inset-0"
                          style={{ 
                            background: "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 100%)"
                          }}
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(item.id);
                          }}
                          className="absolute top-1 right-1 w-7 h-7 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-all"
                        >
                          <Heart
                            className={`w-4 h-4 transition-all ${
                              isFavorite(item.id)
                                ? "fill-primary text-primary"
                                : "text-muted-foreground"
                            }`}
                          />
                        </button>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h3 
                            className="font-semibold text-base flex-1 text-foreground"
                          >
                            {item.name}
                          </h3>
                          <span 
                            className="font-bold text-lg flex-shrink-0 text-primary"
                          >
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                        <p 
                          className="text-xs line-clamp-2 text-muted-foreground"
                        >
                          {item.description}
                        </p>
                        {item.dietary && item.dietary.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {item.dietary.map((diet) => (
                              <Badge
                                key={diet}
                                variant="outline"
                                className="text-[8px] px-1.5 py-0"
                              >
                                {diet}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop: Grid View */}
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="menu-card rounded-2xl overflow-hidden group cursor-pointer relative bg-card"
                    style={{ 
                      animationDelay: `${index * 0.05}s`,
                    }}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={() => handleItemClick(item)}
                  >
                    {/* Glow effect on hover */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        boxShadow: hoveredItem === item.id ? "0 0 30px rgba(255, 153, 1, 0.4)" : "none",
                      }}
                    />
                    
                    {/* Image container with parallax effect */}
                    <div 
                      className="aspect-square relative overflow-hidden"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleImageClick(item.image);
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 cursor-zoom-in"
                        style={{ opacity: 0.7 }}
                      />
                      {/* Animated gradient overlay */}
                      <div 
                        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                        style={{ 
                          background: "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.4) 100%)"
                        }}
                      />
                      {/* Favorite Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(item.id);
                        }}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-all z-10"
                      >
                        <Heart
                          className={`w-5 h-5 transition-all ${
                            isFavorite(item.id)
                              ? "fill-primary text-primary scale-110"
                              : "text-muted-foreground"
                          }`}
                        />
                      </button>
                      {/* Floating particles effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-4 right-4 w-2 h-2 bg-[#FF9901] rounded-full animate-float" style={{ animationDelay: "0s" }} />
                        <div className="absolute top-8 left-4 w-1.5 h-1.5 bg-[#016FD0] rounded-full animate-float" style={{ animationDelay: "0.3s" }} />
                        <div className="absolute bottom-8 right-8 w-1 h-1 bg-[#FF9901] rounded-full animate-float" style={{ animationDelay: "0.6s" }} />
                      </div>
                    </div>

                    {/* Content with slide-up animation */}
                    <div className="space-y-2 p-4 relative z-10 transform transition-transform duration-300 group-hover:-translate-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 
                          className={`font-semibold text-lg transition-colors duration-300 flex-1 ${
                            hoveredItem === item.id ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {item.name}
                        </h3>
                        <span 
                          className={`font-bold text-xl price-tag transition-all duration-300 flex-shrink-0 text-primary ${
                            hoveredItem === item.id ? "scale-110" : "scale-100"
                          }`}
                        >
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-sm line-clamp-2 transition-opacity duration-300 group-hover:opacity-100 text-muted-foreground">
                        {item.description}
                      </p>
                      {item.dietary && item.dietary.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {item.dietary.map((diet) => (
                            <Badge
                              key={diet}
                              variant="outline"
                              className="text-[10px] px-1.5 py-0"
                            >
                              {diet}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Shine effect on hover */}
                    <div 
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none shine-effect ${hoveredItem === item.id ? "animate-shine" : ""}`}
                      style={{
                        background: "linear-gradient(110deg, transparent 40%, rgba(255, 255, 255, 0.1) 50%, transparent 60%)",
                      }}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Modals */}
        <ProductDetailModal
          item={selectedItem}
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          onImageClick={handleImageClick}
        />
        <ImageLightbox
          image={lightboxImage}
          isOpen={!!lightboxImage}
          onClose={() => setLightboxImage(null)}
          images={allImages}
        />
      </div>
    </section>
  );
};

export default MenuSection;
