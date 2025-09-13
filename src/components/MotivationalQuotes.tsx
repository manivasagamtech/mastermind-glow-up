import React, { useEffect, useState } from 'react';

const MotivationalQuotes = () => {
  const [visibleQuotes, setVisibleQuotes] = useState<boolean[]>([false, false, false]);

  const quotes = [
    "Create your life that you love to live",
    "Break through limits and step into your true potential", 
    "Design a life filled with purpose, passion, and joy"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleQuotes(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll('.quote-element');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding bg-animated-gradient">
      <div className="container mx-auto text-center">
        <div className="space-y-12">
          {quotes.map((quote, index) => (
            <div 
              key={index}
              className={`quote-element transition-all duration-1000 transform ${
                visibleQuotes[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              data-index={index}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white px-4 leading-tight">
                "{quote}"
              </h2>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-md rounded-full px-8 py-4">
            <p className="text-white font-semibold text-lg">
              Your transformation journey begins with a single step
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotivationalQuotes;