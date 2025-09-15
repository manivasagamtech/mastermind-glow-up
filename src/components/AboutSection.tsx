import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import aboutImage from '@/assets/about-coaches.jpeg';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-animated-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Meet Your Transformation Experts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dr. Deepti Verma and Ms. Shalini Chopra bring years of expertise in life transformation, 
            nutrition counseling, and holistic wellness to help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img 
              src={aboutImage} 
              alt="Dr. Deepti Verma and Ms. Shalini Chopra - Life Transformation Coaches"
              className="rounded-3xl shadow-2xl w-full max-w-md object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Dr. Deepti Verma
                </h3>
                <p className="text-muted-foreground mb-4">
                  Director & Digital Creator specializing in life transformation coaching and mind wellness. 
                  Expert in helping clients overcome mental blocks and achieve breakthrough results.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Certified Life Coach</Badge>
                  <Badge variant="secondary">Mind Coaching Specialist</Badge>
                  <Badge variant="secondary">Digital Creator</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Ms. Shalini Chopra
                </h3>
                <p className="text-muted-foreground mb-4">
                  Certified Nutrition Expert and Corporate Communication Specialist. 
                  Focuses on holistic health transformation and professional development.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Nutrition Expert</Badge>
                  <Badge variant="secondary">Corporate Communication</Badge>
                  <Badge variant="secondary">Health Specialist</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="mb-4">
                  Helping clients overcome blockages in money, health, career, and relationships 
                  through proven coaching methodologies and personalized guidance.
                </p>
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="font-semibold">
                    🌟 Specialized in health condition management including cancer recovery, 
                    diabetes management, hypertension control, and depression support
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Consultation Form */}
        <div className="mt-16 flex justify-center">
          <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
                Start Your Transformation
              </h3>
              
              <form id="consultation-form" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const message = `Hi! I'd like to book a consultation.
                
Name: ${formData.get('fullName')}
Mobile: ${formData.get('mobile')}
Email: ${formData.get('email')}
Consultation Type: ${formData.get('consultationType')}

Looking forward to hearing from you!`;
                const whatsappUrl = `https://wa.me/919811218842?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-foreground mb-1">Mobile Number</label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    required
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                    placeholder="+91 12345 67890"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="consultationType" className="block text-sm font-medium text-foreground mb-1">Type of Consultation</label>
                  <select 
                    id="consultationType"
                    name="consultationType"
                    required
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                  >
                    <option value="">Select consultation type</option>
                    <option value="Life Transformation Coaching">Life Transformation Coaching</option>
                    <option value="Diet & Nutrition Counselling">Diet & Nutrition Counselling</option>
                    <option value="Mind Coaching">Mind Coaching</option>
                    <option value="Relationship Guidance">Relationship Guidance</option>
                    <option value="Corporate Leadership">Corporate Leadership</option>
                    <option value="English Fluency">English Fluency</option>
                    <option value="Health Issues - Cancer/Diabetes/BP/Depression">Health Issues - Cancer/Diabetes/BP/Depression</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-energy hover:bg-energy/90 text-white font-bold py-3 px-6 rounded-md transition-colors"
                >
                  Book Now via WhatsApp
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;