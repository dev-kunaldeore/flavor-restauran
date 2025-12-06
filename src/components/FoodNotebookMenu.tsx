import { useState, useMemo } from "react";
import { BookOpen, X, UtensilsCrossed } from "lucide-react";
import { menuItems, categories } from "@/data/menuItems";

const FoodNotebookMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Group menu items by category
  const itemsByCategory = useMemo(() => {
    const grouped: Record<string, typeof menuItems> = {};
    categories.forEach((cat) => {
      if (cat.id !== "all") {
        grouped[cat.id] = menuItems.filter((item) => item.category === cat.id);
      }
    });
    return grouped;
  }, []);

  const handleItemClick = (categoryId: string) => {
    // Scroll to menu section
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
    
    // Dispatch custom event for category change
    window.dispatchEvent(new CustomEvent("categoryChange", { detail: categoryId }));
    
    // Close the menu after a short delay
    setTimeout(() => setIsOpen(false), 300);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        {/* Main Notebook Button - Mobile: Small Circle, Desktop: Notebook Style */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative 
            /* Mobile: Small Circle */
            w-12 h-12 rounded-full
            /* Desktop: Notebook Style */
            md:w-16 md:h-20 md:rounded-lg
            bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/40 dark:to-amber-800/30 
            border-2 border-amber-400 dark:border-amber-600 
            shadow-2xl transition-all duration-300 
            ${
              isOpen || isHovered 
                ? "scale-110 shadow-amber-500/50 md:rotate-[-2deg]" 
                : "scale-100"
            }`}
          >
          {/* Notebook Paper Lines - Desktop Only */}
          <div className="hidden md:block absolute inset-0 p-2 flex flex-col gap-0.5 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="h-0.5 bg-amber-300/50 dark:bg-amber-700/30 rounded"
                style={{ 
                  marginLeft: i % 2 === 0 ? "0" : "10px",
                  width: i % 2 === 0 ? "100%" : "calc(100% - 10px)"
                }}
              />
            ))}
          </div>

          {/* Spiral Binding - Desktop Only */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-b from-amber-500 via-amber-400 to-amber-500 dark:from-amber-700 dark:via-amber-600 dark:to-amber-700 rounded-l-lg shadow-inner">
            {/* Spiral Holes */}
            <div className="absolute left-0 top-0 bottom-0 w-full flex flex-col justify-center gap-1.5 px-0.5">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-amber-700/30 dark:bg-amber-500/40 mx-auto shadow-inner"
                />
              ))}
            </div>
          </div>

          {/* Icon/Content */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            {isOpen ? (
              <X className="w-5 h-5 md:w-6 md:h-6 text-amber-800 dark:text-amber-300 transition-transform duration-300 md:rotate-90" />
            ) : (
              <div className="flex flex-col items-center gap-0.5 md:gap-1">
                <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-amber-800 dark:text-amber-300" />
                <UtensilsCrossed className="w-3 h-3 md:w-4 md:h-4 text-amber-700 dark:text-amber-400" />
              </div>
            )}
          </div>

          {/* Hover Glow Effect */}
          {(isOpen || isHovered) && (
            <div className="absolute -inset-1 bg-amber-400/30 dark:bg-amber-500/20 rounded-full md:rounded-lg blur-md animate-pulse" />
          )}

          {/* Page Flip Shadow Effect - Desktop Only */}
          {isOpen && (
            <div className="hidden md:block absolute -right-1 top-0 bottom-0 w-1 bg-amber-600/20 dark:bg-amber-500/20 rounded-r-lg" />
          )}
        </button>

        {/* Food Items Menu - Notebook Style */}
        {isOpen && (
          <div className="absolute bottom-16 md:bottom-24 right-0 w-[calc(100vw-2rem)] md:w-80 max-w-[90vw] md:max-w-none max-h-[75vh] overflow-y-auto scrollbar-hide bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/95 dark:to-amber-800/90 border-2 border-amber-400 dark:border-amber-600 rounded-lg shadow-2xl p-3 md:p-4 animate-fade-in">
            {/* Spiral Binding - Left Side */}
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-b from-amber-500 via-amber-400 to-amber-500 dark:from-amber-700 dark:via-amber-600 dark:to-amber-700 rounded-l-lg">
              <div className="absolute left-0 top-0 bottom-0 w-full flex flex-col justify-start gap-2 px-1 pt-4">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-amber-700/30 dark:bg-amber-500/40 mx-auto shadow-inner"
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="ml-4 space-y-6">
              {categories.filter(cat => cat.id !== "all").map((category) => {
                const items = itemsByCategory[category.id] || [];
                if (items.length === 0) return null;

                return (
                  <div key={category.id} className="space-y-2">
                    {/* Category Header */}
                    <h3 className="text-lg font-bold text-amber-900 dark:text-amber-200 border-b-2 border-amber-400 dark:border-amber-600 pb-1">
                      {category.name}
                    </h3>
                    
                    {/* Food Items */}
                    <div className="space-y-1.5 pl-2">
                      {items.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleItemClick(category.id)}
                          className="w-full text-left flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-amber-200/50 dark:hover:bg-amber-800/30 transition-colors group cursor-pointer"
                        >
                          <span className="text-sm font-medium text-amber-900 dark:text-amber-200 group-hover:text-amber-800 dark:group-hover:text-amber-100 transition-colors">
                            {item.name}
                          </span>
                          <span className="text-sm font-bold text-primary dark:text-amber-400 group-hover:scale-110 transition-transform">
                            ${item.price.toFixed(2)}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Notebook Lines Background */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="ml-4 h-full flex flex-col gap-1 p-4">
                {[...Array(50)].map((_, i) => (
                  <div
                    key={i}
                    className="h-0.5 bg-amber-300 dark:bg-amber-700 rounded"
                    style={{ 
                      marginLeft: i % 2 === 0 ? "0" : "20px",
                      width: i % 2 === 0 ? "calc(100% - 20px)" : "calc(100% - 40px)"
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/30 backdrop-blur-sm -z-10 animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default FoodNotebookMenu;
