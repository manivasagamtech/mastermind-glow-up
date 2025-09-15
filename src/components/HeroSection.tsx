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
      
      <div className="relative z-10 container mx-auto px-6 py-32 min-h-screen flex items-end pb-20">
        <div className="w-full text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-energy">MasterMind Body Global</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Expert Life Transformation Coaches & Certified Nutrition Consultants
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;