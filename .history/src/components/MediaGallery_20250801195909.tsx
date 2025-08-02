import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { galleryAssets } from '@/data/galleryAssets';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MediaGallery: React.FC = () => {
  const { t } = useTranslation();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openDialog = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeDialog = () => {
    setSelectedImageIndex(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;

    let newIndex = selectedImageIndex;
    if (direction === 'next') {
      newIndex = (selectedImageIndex + 1) % galleryAssets.length;
    } else {
      newIndex = (selectedImageIndex - 1 + galleryAssets.length) % galleryAssets.length;
    }
    setSelectedImageIndex(newIndex);
  };

  const currentMedia = selectedImageIndex !== null ? galleryAssets[selectedImageIndex] : null;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
        {t('gallery_page_title')}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryAssets.map((media, index) => (
          <Card
            key={index}
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => openDialog(index)}
          >
            <CardContent className="p-0">
              {media.type === 'image' && (
                <img
                  src={media.src}
                  alt={media.alt || `Gallery Image ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              )}
              {media.type === 'video' && (
                <video
                  src={media.src}
                  controls
                  className="w-full h-48 object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={selectedImageIndex !== null} onOpenChange={closeDialog}>
        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
          {currentMedia && (
            <div className="relative flex flex-col items-center justify-center">
              {currentMedia.type === 'image' && (
                <img
                  src={currentMedia.src}
                  alt={currentMedia.alt || `Enlarged Image ${selectedImageIndex + 1}`}
                  className="max-h-[80vh] w-auto object-contain"
                />
              )}
              {currentMedia.type === 'video' && (
                <video
                  src={currentMedia.src}
                  controls
                  className="max-h-[80vh] w-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              )}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                  className="h-full rounded-none opacity-70 hover:opacity-100 bg-background/50 hover:bg-background/70"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                  className="h-full rounded-none opacity-70 hover:opacity-100 bg-background/50 hover:bg-background/70"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </div>
              <DialogHeader className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <DialogTitle className="text-lg text-center">{currentMedia.alt || `Item ${selectedImageIndex + 1}`}</DialogTitle>
                <DialogDescription className="sr-only">
                  {currentMedia.alt || `Enlarged view of item ${selectedImageIndex + 1}`}
                </DialogDescription>
              </DialogHeader>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MediaGallery;