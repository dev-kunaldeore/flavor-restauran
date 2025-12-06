import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

interface ImageLightboxProps {
  image: string | null;
  isOpen: boolean;
  onClose: () => void;
  images?: string[];
}

const ImageLightbox = ({ image, isOpen, onClose, images = [] }: ImageLightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (image && images.length > 0) {
      const index = images.indexOf(image);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [image, images]);

  const currentImage = images.length > 0 ? images[currentIndex] : image;

  const handlePrevious = () => {
    if (images.length > 0) {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  const handleNext = () => {
    if (images.length > 0) {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length]);

  if (!currentImage) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-full p-0 bg-black/95 border-none">
        <div className="relative">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            </>
          )}

          {/* Image */}
          <div className="flex items-center justify-center min-h-[60vh] p-8">
            <img
              src={currentImage}
              alt="Lightbox"
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;

