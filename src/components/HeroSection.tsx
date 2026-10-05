import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import logo from '@/assets/logo.jpg';
import { Award, ArrowRight } from 'lucide-react';
import heroPortrait from '@/assets/hero-portrait.jpeg';
import heroLandscape from '@/assets/hero-landscape.jpg';

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
    <section id="home" className="min-h-[100svh] relative overflow-hidden bg-slate-950 text-white">
      {/* Background Image: portrait photo for upright screens, landscape photo for wide screens */}
      <picture>
        <source media="(orientation: landscape)" srcSet={heroLandscape} />
        <img
          src={heroPortrait}
          alt="Dr. Deepti Verma by the sea at sunset"
          className="absolute inset-0 w-full h-full object-cover object-[35%_center] landscape:object-[30%_35%]"
        />
      </picture>

      {/* Legibility overlays: darken the bottom on portrait, the left side on landscape */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/30 landscape:hidden" />
      <div className="absolute inset-y-0 left-0 w-2/3 hidden landscape:block bg-gradient-to-r from-slate-950/75 via-slate-950/30 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-14 min-h-[100svh] flex items-end landscape:items-center">
        <div className="w-full text-center landscape:text-left landscape:max-w-[44%]">
          <a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-slate-950/50 backdrop-blur-sm px-4 py-2 mb-6 text-sm font-medium text-amber-100 whitespace-nowrap hover:bg-slate-950/70 transition-colors"
          >
            <Award size={16} className="text-amber-300 shrink-0" />
            <span>
              <span className="font-semibold text-amber-200">Amazon Bestseller</span>
              <span className="hidden sm:inline"> · Master Your Mind & Body</span>
            </span>
            <ArrowRight size={14} className="text-amber-300 shrink-0 transition-transform group-hover:translate-x-1" />
          </a>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-5 leading-tight">
            <span className="block text-energy">MasterMind Body Global</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto landscape:mx-0">
            Expert Life Transformation Coaches & Certified Nutrition Consultants
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;