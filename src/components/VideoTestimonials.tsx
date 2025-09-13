import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoTestimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const videos = [
    {
      id: "L5mV0Prh9TY",
      title: "Life Transformation Success Story",
      description: "Amazing transformation journey"
    },
    {
      id: "HNSUrh3-3UI", 
      title: "Health Recovery Testimonial",
      description: "Overcoming health challenges"
    },
    {
      id: "v9dGJMfW4vI",
      title: "Career Breakthrough Story",
      description: "Professional growth success"
    },
    {
      id: "F-6rvBP9jO4",
      title: "Relationship Healing Journey",
      description: "Family harmony restoration"
    },
    {
      id: "mLlLlyx0Btg",
      title: "Mind Coaching Results",
      description: "Mental wellness achievement"
    },
    {
      id: "vOiPZINJiyg",
      title: "Nutrition Transformation",
      description: "Health and vitality improvement"
    },
    {
      id: "mjqTHmT7FRU",
      title: "Corporate Success Story",
      description: "Leadership development"
    },
    {
      id: "3uRnoOhFaLY",
      title: "Complete Life Makeover", 
      description: "Holistic transformation"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Width of one video container plus gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="transformations" className="section-padding bg-animated-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Real Transformations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch life transformation videos from our clients who have experienced 
            breakthrough results in health, relationships, career, and personal growth.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline" 
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Video Container */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-12 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videos.map((video, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="video-container">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to become our next success story?
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Transformation
          </Button>
        </div>
      </div>

    </section>
  );
};

export default VideoTestimonials;