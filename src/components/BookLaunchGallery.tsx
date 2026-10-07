import React, { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import launchGroupPhoto from '@/assets/launch-group-photo.jpg';
import launchUnveiling from '@/assets/launch-unveiling.jpg';
import launchSpeech from '@/assets/launch-speech.jpg';

const photos = [
  {
    src: launchGroupPhoto,
    alt: 'Dr. Deepti Verma with guests holding copies of Master Your Mind & Body at the book launch',
    caption: 'Dr. Deepti Verma with family, friends and readers at the launch'
  },
  {
    src: launchUnveiling,
    alt: 'Dr. Deepti Verma and the guests of honour unveiling Master Your Mind & Body',
    caption: 'Unveiling the book with the guests of honour'
  },
  {
    src: launchSpeech,
    alt: 'Dr. Deepti Verma speaking at the podium during the book launch',
    caption: 'Dr. Deepti Verma addressing the audience'
  }
];

const BookLaunchGallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const showPrev = () => setActiveIndex((i) => (i === null ? null : (i + photos.length - 1) % photos.length));
  const showNext = () => setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length));

  const active = activeIndex === null ? null : photos[activeIndex];

  return (
    <div className="mt-20 lg:mt-24">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-widest text-amber-700 mb-3">
          <Camera size={16} />
          Book 1 · Launch Gallery
        </div>
        <h3 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
          Moments from the Book Launch
        </h3>
        <p className="mt-3 text-stone-600 max-w-2xl mx-auto">
          Highlights from the launch of <span className="font-semibold text-stone-800">Master Your Mind &amp; Body</span>,
          celebrated with family, friends and readers.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`View photo: ${photo.caption}`}
            className={cn(
              'group relative overflow-hidden rounded-2xl bg-stone-200 shadow-lg text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400',
              index === 0 ? 'aspect-[3/2] md:aspect-auto md:col-span-2 md:row-span-2 md:h-full' : 'aspect-[3/2]'
            )}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent" />
            <span className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-stone-900 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              <Expand size={16} />
            </span>
            <p className="absolute inset-x-0 bottom-0 p-4 text-sm sm:text-base font-medium text-white drop-shadow">
              {photo.caption}
            </p>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog open={activeIndex !== null} onOpenChange={(open) => !open && setActiveIndex(null)}>
        <DialogContent className="max-w-5xl border-0 bg-stone-950 p-0 text-white sm:rounded-2xl overflow-hidden [&>button]:bg-black/60 [&>button]:text-white [&>button]:opacity-100 [&>button]:p-2 [&>button]:rounded-full">
          {active && (
            <>
              <DialogTitle className="sr-only">{active.caption}</DialogTitle>
              <img src={active.src} alt={active.alt} className="w-full max-h-[80vh] object-contain bg-black" />
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <button
                  type="button"
                  onClick={showPrev}
                  aria-label="Previous photo"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <p className="text-center text-sm sm:text-base text-stone-200">
                  {active.caption}
                  <span className="block text-xs text-stone-400 mt-1">{(activeIndex ?? 0) + 1} / {photos.length}</span>
                </p>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next photo"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookLaunchGallery;
