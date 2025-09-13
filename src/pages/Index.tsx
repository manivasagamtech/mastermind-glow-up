import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import MotivationalQuotes from '@/components/MotivationalQuotes';
import VideoTestimonials from '@/components/VideoTestimonials';
import WrittenTestimonials from '@/components/WrittenTestimonials';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <MotivationalQuotes />
        <VideoTestimonials />
        <WrittenTestimonials />
        <ContactSection />
      </main>
      
      {/* Scroll to top button and additional styles */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
