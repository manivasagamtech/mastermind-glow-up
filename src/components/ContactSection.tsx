import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Instagram, Youtube, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hi! I'm interested in your coaching services.

Name: ${formData.name}
Email: ${formData.email}  
Phone: ${formData.phone}

Message: ${formData.message}

Looking forward to starting my transformation journey!`;

    const whatsappUrl = `https://wa.me/919811218842?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      name: "Dr. Deepti Verma",
      phone: "+91 98112 18842",
      whatsapp: "https://wa.me/919811218842",
      role: "Life Transformation Coach & Director"
    },
    {
      name: "Ms. Shalini Chopra", 
      phone: "+91 98185 70805",
      whatsapp: "https://wa.me/919818570805",
      role: "Nutrition Expert & Corporate Coach"
    }
  ];

  const socialLinks = [
    {
      platform: "Instagram - MasterMind Body Global",
      handle: "@mastermind_body_global",
      url: "https://instagram.com/mastermind_body_global",
      icon: Instagram
    },
    {
      platform: "Instagram - Dr. Deepti Verma",
      handle: "@drdeeptivermaofficial", 
      url: "https://instagram.com/drdeeptivermaofficial",
      icon: Instagram
    },
    {
      platform: "Instagram - Shalini Chopra",
      handle: "@shalini1609.chopra",
      url: "https://instagram.com/shalini1609.chopra", 
      icon: Instagram
    },
    {
      platform: "YouTube Channel",
      handle: "@MASTERMINDBODYGLOBAL",
      url: "https://youtube.com/@MASTERMINDBODYGLOBAL",
      icon: Youtube
    }
  ];

  return (
    <section id="contact" className="section-padding bg-animated-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Start Your Transformation Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your life? Get in touch with our expert coaches and begin 
            your journey towards a healthier, happier, and more successful you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h3>
              
              {/* Coach Contact Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((coach, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-foreground">{coach.name}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{coach.role}</p>
                          <p className="text-foreground font-medium">{coach.phone}</p>
                        </div>
                        <Button
                          className="bg-success hover:bg-success/90 text-white"
                          onClick={() => window.open(coach.whatsapp, '_blank')}
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Follow Us</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all duration-300 group"
                    >
                      <IconComponent className="w-5 h-5 text-primary group-hover:text-energy" />
                      <div>
                        <p className="font-medium text-sm text-foreground">{social.platform}</p>
                        <p className="text-xs text-muted-foreground">{social.handle}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="contact-name">Full Name</Label>
                  <Input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="contact-email">Email Address</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="contact-phone">Phone Number</Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="+91 12345 67890"
                  />
                </div>
                
                <div>
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Tell us about your goals and how we can help you..."
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                  size="lg"
                >
                  Send Message via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-vibrant rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Your Transformation Awaits</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Don't wait another day to start living the life you deserve. Our expert coaches 
              are ready to guide you on your journey to complete transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-black hover:bg-gray-100 font-bold px-8 py-3"
                onClick={() => window.open('https://wa.me/919811218842', '_blank')}
              >
                Book Free Consultation
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black font-bold px-8 py-3"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;