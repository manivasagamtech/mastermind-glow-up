import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Linkedin, MessageCircle, Globe, ChevronRight, ArrowLeft } from 'lucide-react';
import logo from '@/assets/logo.jpg';

interface ConnectLink {
  label: string;
  sublabel: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  chipClass: string;
}

const connectLinks: ConnectLink[] = [
  {
    label: 'MasterMind Body Global',
    sublabel: 'Instagram · @mastermind_body_global',
    url: 'https://instagram.com/mastermind_body_global',
    icon: Instagram,
    chipClass: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]',
  },
  {
    label: 'Dr. Deepti Verma',
    sublabel: 'Instagram · @drdeeptivermaofficial',
    url: 'https://instagram.com/drdeeptivermaofficial',
    icon: Instagram,
    chipClass: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]',
  },
  {
    label: 'Ms. Poonam Modi',
    sublabel: 'Instagram · @poonammodi06',
    url: 'https://www.instagram.com/poonammodi06/',
    icon: Instagram,
    chipClass: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]',
  },
  {
    label: 'YouTube Channel',
    sublabel: 'YouTube · @MASTERMINDBODYGLOBAL',
    url: 'https://youtube.com/@MASTERMINDBODYGLOBAL',
    icon: Youtube,
    chipClass: 'bg-[#FF0000]',
  },
  {
    label: 'Dr. Deepti Verma',
    sublabel: 'LinkedIn',
    url: 'https://www.linkedin.com/in/deepti-verma-950991370/',
    icon: Linkedin,
    chipClass: 'bg-[#0A66C2]',
  },
  {
    label: 'Dr. Deepti Verma',
    sublabel: 'WhatsApp · +91 98112 18842',
    url: 'https://wa.me/919811218842',
    icon: MessageCircle,
    chipClass: 'bg-[#25D366]',
  },
  {
    label: 'Ms. Poonam Modi',
    sublabel: 'WhatsApp · +91 99908 97076',
    url: 'https://wa.me/919990897076',
    icon: MessageCircle,
    chipClass: 'bg-[#25D366]',
  },
];

/** Card with a subtle 3D tilt that follows the cursor (desktop) and press feedback (mobile). */
const TiltCard = ({ children, delay }: { children: React.ReactNode; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${(-py * 10).toFixed(2)}deg) rotateY(${(px * 12).toFixed(2)}deg) translateZ(10px)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)';
  };

  return (
    <div className="connect-item opacity-0" style={{ animationDelay: `${delay}ms` }}>
      <div ref={ref} onMouseMove={handleMove} onMouseLeave={reset} className="tilt-card">
        {children}
      </div>
    </div>
  );
};

const Connect = () => {
  useEffect(() => {
    document.title = 'Connect With Us | MasterMind Body Global';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-animated-dark relative overflow-hidden">
      {/* Floating gradient orbs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="connect-orb absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="connect-orb absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full bg-vibrant/25 blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="connect-orb absolute -bottom-32 left-1/4 w-96 h-96 rounded-full bg-energy/20 blur-3xl" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-10 max-w-lg">
        {/* Back to website */}
        <div className="connect-item opacity-0" style={{ animationDelay: '0ms' }}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to website
          </Link>
        </div>

        {/* Logo + heading */}
        <div className="text-center mt-6 mb-10">
          <div className="connect-logo relative mx-auto w-28 h-28 mb-6">
            <div className="connect-glow absolute inset-0 rounded-full" />
            <img
              src={logo}
              alt="MasterMind Body Global Logo"
              className="relative w-28 h-28 rounded-full object-cover border-2 border-white/30"
            />
          </div>
          <h1 className="connect-item opacity-0 text-3xl md:text-4xl font-bold text-white mb-3" style={{ animationDelay: '150ms' }}>
            MasterMind Body Global
          </h1>
          <p className="connect-item opacity-0 text-lg bg-gradient-to-r from-energy via-vibrant to-primary-glow bg-clip-text text-transparent font-semibold mb-2" style={{ animationDelay: '250ms' }}>
            Transform Your Mind • Body • Life
          </p>
          <p className="connect-item opacity-0 text-white/60 text-sm" style={{ animationDelay: '350ms' }}>
            Follow us and connect on your favourite platform
          </p>
        </div>

        {/* Social link cards */}
        <div className="space-y-4">
          {connectLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <TiltCard key={`${link.sublabel}-${index}`} delay={450 + index * 100}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 hover:border-white/30 transition-colors duration-300 shadow-lg"
                >
                  <span className={`flex items-center justify-center w-12 h-12 rounded-xl shrink-0 shadow-md ${link.chipClass}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-semibold text-white truncate">{link.label}</span>
                    <span className="block text-sm text-white/60 truncate">{link.sublabel}</span>
                  </span>
                  <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                </a>
              </TiltCard>
            );
          })}

          {/* Website card (internal link) */}
          <TiltCard delay={450 + connectLinks.length * 100}>
            <Link
              to="/"
              className="group flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 hover:border-white/30 transition-colors duration-300 shadow-lg"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0 shadow-md bg-gradient-to-tr from-primary to-vibrant">
                <Globe className="w-6 h-6 text-white" />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block font-semibold text-white truncate">Visit Our Website</span>
                <span className="block text-sm text-white/60 truncate">mmbg.world</span>
              </span>
              <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 shrink-0" />
            </Link>
          </TiltCard>
        </div>

        {/* Footer */}
        <div className="connect-item opacity-0 text-center mt-12 pb-6" style={{ animationDelay: `${550 + connectLinks.length * 100}ms` }}>
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} MasterMind Body Global
          </p>
          <p className="text-white/40 text-xs mt-1">
            Life Transformation Coaching • Nutrition • Wellness
          </p>
        </div>
      </div>
    </div>
  );
};

export default Connect;
