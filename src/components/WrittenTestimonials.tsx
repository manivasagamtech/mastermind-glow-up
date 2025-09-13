import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const WrittenTestimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      background: "Cancer Survivor & Mother",
      story: "After my cancer diagnosis, I was lost and scared. Dr. Deepti's holistic approach not only helped me through my treatment but transformed my entire perspective on life. The nutrition guidance and emotional support were life-changing.",
      results: "Complete recovery, improved family relationships, new life purpose",
      rating: 5,
      category: "Health Transformation"
    },
    {
      name: "Rajesh Kumar",
      background: "Corporate Executive",
      story: "I was stuck in my career for years, earning the same salary with no growth. Ms. Shalini's career coaching and leadership training completely transformed my professional trajectory. I now lead a team of 50+ people.",
      results: "300% salary increase, leadership promotion, improved confidence",
      rating: 5,
      category: "Career Growth"
    },
    {
      name: "Anita Patel",
      background: "Homemaker & Diabetes Patient",
      story: "Managing diabetes while taking care of my family was overwhelming. The nutrition counseling and mind coaching helped me regain control of my health and find balance in my relationships.",
      results: "HbA1c from 9.2 to 6.1, weight loss of 15kg, harmony at home",
      rating: 5,
      category: "Health & Relationships"
    },
    {
      name: "Vikram Singh",
      background: "Business Owner",
      story: "My business was failing and my marriage was falling apart. The life transformation coaching helped me identify my limiting beliefs about money and relationships. Today, my business has tripled and my wife and I are closer than ever.",
      results: "Business revenue increased 300%, marriage saved, mental peace",
      rating: 5,
      category: "Business & Relationships"
    },
    {
      name: "Meera Jain",
      background: "Working Mother",
      story: "Depression after my second child made life unbearable. The mind coaching sessions and nutritional support helped me overcome depression naturally without medication. I'm now the happiest I've ever been.",
      results: "Overcame depression, improved energy, better mother-child bond",
      rating: 5,
      category: "Mental Health"
    },
    {
      name: "Arjun Verma",
      background: "IT Professional",
      story: "Despite having a good job, I felt empty and purposeless. The life coaching helped me discover my true passion and transition into a career I love. The English fluency training boosted my international opportunities.",
      results: "Career change to passion, international opportunities, life satisfaction",
      rating: 5,
      category: "Life Purpose"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index}
        className={`w-4 h-4 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-animated-dark text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Success Stories & Client Testimonials
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Read inspiring stories from our clients who have transformed their lives 
            through our coaching programs. These are real people with real results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Category Badge */}
                <div className="inline-block bg-energy/20 text-energy px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {testimonial.category}
                </div>

                {/* Story */}
                <blockquote className="text-gray-300 mb-4 italic leading-relaxed">
                  "{testimonial.story}"
                </blockquote>

                {/* Results */}
                <div className="mb-4">
                  <h4 className="font-semibold text-success mb-2">Results Achieved:</h4>
                  <p className="text-sm text-gray-300">{testimonial.results}</p>
                </div>

                {/* Client Info */}
                <div className="border-t border-white/20 pt-4">
                  <h3 className="font-bold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.background}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-success to-primary rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-lg mb-6">
              Join hundreds of satisfied clients who have transformed their lives with our expert guidance.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Start Your Journey Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WrittenTestimonials;