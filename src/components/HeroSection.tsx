import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import logo from '@/assets/logo.jpg';
import heroBackground from '@/assets/hero-bg.jpeg';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    consultationType: ''
  });

  const consultationTypes = [
    'Life Transformation Coaching',
    'Diet & Nutrition Counselling',
    'Mind Coaching',
    'Relationship Guidance',
    'Corporate Leadership',
    'English Fluency',
    'Health Issues - Cancer/Diabetes/BP/Depression',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hi! I'd like to book a consultation.
    
Name: ${formData.fullName}
Mobile: ${formData.mobile}
Email: ${formData.email}
Consultation Type: ${formData.consultationType}

Looking forward to hearing from you!`;

    const whatsappUrl = `https://wa.me/919811218842?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen relative bg-animated-dark text-white">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat opacity-30 brightness-125"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          backgroundPosition: 'center 25%'
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6 py-32 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* Brand Logo */}
            <div className="flex justify-center lg:justify-start mb-8">
              <img 
                src={logo} 
                alt="MasterMind Body Global" 
                className="w-24 h-24 rounded-full object-cover shadow-xl"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your
              <span className="block text-energy"> Mind · Body · Life</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
              Expert Life Transformation Coaches & Certified Nutrition Consultants
            </p>
            
          </div>

          {/* Right Side - Consultation Form */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-center text-white">
                  Start Your Transformation
                </h3>
                
                <form id="consultation-form" onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="fullName" className="text-white">Full Name</Label>
                    <Input
                      id="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="mobile" className="text-white">Mobile Number</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData(prev => ({ ...prev, mobile: e.target.value }))}
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                      placeholder="+91 12345 67890"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-white">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="consultationType" className="text-white">Type of Consultation</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, consultationType: value }))}>
                      <SelectTrigger className="bg-white/20 border-white/30 text-white">
                        <SelectValue placeholder="Select consultation type" />
                      </SelectTrigger>
                      <SelectContent>
                        {consultationTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-energy hover:bg-energy/90 text-white font-bold"
                    size="lg"
                  >
                    Book Now via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;