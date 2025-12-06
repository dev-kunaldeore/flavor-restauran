import { X, Heart } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { useFavorites } from "@/hooks/useFavorites";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

interface ProductDetailModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  onImageClick?: (image: string) => void;
}

const ProductDetailModal = ({ item, isOpen, onClose, onImageClick }: ProductDetailModalProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{item.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          {/* Image */}
          <div className="relative group">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 md:h-80 object-cover rounded-lg cursor-pointer transition-transform duration-300 group-hover:scale-105"
              onClick={() => onImageClick?.(item.image)}
            />
            <button
              onClick={() => toggleFavorite(item.id)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-all"
            >
              <Heart
                className={`w-5 h-5 transition-all ${
                  isFavorite(item.id)
                    ? "fill-primary text-primary"
                    : "text-muted-foreground"
                }`}
              />
            </button>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Category</h3>
              <p className="text-foreground capitalize">{item.category}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Description</h3>
              <p className="text-foreground leading-relaxed">{item.description}</p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div>
                <p className="text-sm text-muted-foreground">Price</p>
                <p className="text-3xl font-bold text-primary">${item.price.toFixed(2)}</p>
              </div>
              <Button variant="hero" size="lg">
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;

