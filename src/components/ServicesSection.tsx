import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import lifeCoachingImg from '@/assets/life-coaching.jpg';
import nutritionCoachingImg from '@/assets/nutrition-coaching.jpg';
import careerCoachingImg from '@/assets/career-coaching.jpg';
import relationshipHealingImg from '@/assets/relationship-healing.jpg';
import mindCoachingImg from '@/assets/mind-coaching.jpg';
import corporateCoachingImg from '@/assets/corporate-coaching.jpg';

const ServicesSection = () => {
  const services = [
    {
      title: "Life Transformation Coaching",
      description: "Break through limiting beliefs and create the life you've always dreamed of. Our comprehensive coaching helps you identify and overcome personal barriers.",
      image: lifeCoachingImg,
      features: ["Personal Growth", "Goal Achievement", "Mindset Transformation", "Life Purpose Discovery"]
    },
    {
      title: "Health & Nutrition Consulting",
      description: "Specialized support for serious health conditions including cancer recovery, diabetes management, hypertension control, and depression support with Ayurvedic principles.",
      image: nutritionCoachingImg,
      features: ["Cancer Recovery", "Diabetes Management", "BP Control", "Depression Support"]
    },
    {
      title: "Money & Career Coaching",
      description: "Unlock your financial potential and accelerate your career growth. Remove money blocks and step into abundance consciousness.",
      image: careerCoachingImg,
      features: ["Wealth Mindset", "Career Advancement", "Money Blocks Removal", "Professional Growth"]
    },
    {
      title: "Relationship Healing",
      description: "Heal and strengthen your relationships through proven therapeutic techniques and communication strategies rooted in Indian family values.",
      image: relationshipHealingImg,
      features: ["Family Harmony", "Communication Skills", "Emotional Healing", "Relationship Building"]
    },
    {
      title: "Mind Coaching & Mental Wellness",
      description: "Achieve mental clarity and emotional balance through mindfulness practices and cognitive restructuring techniques.",
      image: mindCoachingImg,
      features: ["Stress Management", "Anxiety Relief", "Mindfulness Training", "Mental Clarity"]
    },
    {
      title: "Corporate Leadership & Communication",
      description: "Enhance your leadership skills and communication abilities, including English fluency for professional success.",
      image: corporateCoachingImg,
      features: ["Leadership Development", "Public Speaking", "English Fluency", "Team Management"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-animated-dark text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your New Life Starts Here
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive coaching services designed to transform every aspect of your life. 
            Our holistic approach combines modern techniques with traditional Indian healing wisdom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="service-card bg-white/10 backdrop-blur-md border-white/20 text-white overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-energy text-sm">Key Benefits:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.map((feature, featureIndex) => (
                      <Badge 
                        key={featureIndex} 
                        variant="outline" 
                        className="text-xs border-white/30 text-white"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-energy to-vibrant rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Life?</h3>
            <p className="text-lg mb-6">
              Book a consultation today and take the first step towards your new life.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;