import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Mail, ChevronRight, ArrowLeft } from 'lucide-react';
import logo from '@/assets/logo.jpg';

interface ConnectLink {
  label: string;
  description: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  chipClass: string;
  external: boolean;
}

interface ConnectSection {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  links: ConnectLink[];
}

const sections: ConnectSection[] = [
  {
    title: 'Watch on YouTube',
    icon: Youtube,
    links: [
      {
        label: 'Magics & Miracles by Dr. Deepti Verma',
        description: 'Daily inspiration, nutrition, wellness, mindset and life-transformation sessions.',
        url: 'https://www.youtube.com/channel/UCd1VFOvw1plSBnRFckr2uKg',
        icon: Youtube,
        chipClass: 'bg-[#FF0000]',
        external: true,
      },
      {
        label: 'Mastermind Body Global',
        description: "Explore MMBG's programs, workshops, wellness initiatives and transformational content.",
        url: 'https://youtube.com/@MASTERMINDBODYGLOBAL',
        icon: Youtube,
        chipClass: 'bg-[#FF0000]',
        external: true,
      },
    ],
  },
  {
    title: 'Follow on Instagram',
    icon: Instagram,
    links: [
      {
        label: '@mastermind_body_global',
        description: 'Official Mastermind Body Global updates, programs and wellness content.',
        url: 'https://instagram.com/mastermind_body_global',
        icon: Instagram,
        chipClass: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]',
        external: true,
      },
      {
        label: '@magics_and_miracle_',
        description: 'Magics, miracles, inspiration and transformational content by Dr. Deepti Verma.',
        url: 'https://www.instagram.com/magics_and_miracle_/',
        icon: Instagram,
        chipClass: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]',
        external: true,
      },
      {
        label: '@drdeeptivermaofficial',
        description: 'Connect with Dr. Deepti Verma and follow her latest work and updates.',
        url: 'https://instagram.com/drdeeptivermaofficial',
        icon: Instagram,
        chipClass: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]',
        external: true,
      },
    ],
  },
  {
    title: 'Get in Touch',
    icon: Mail,
    links: [
      {
        label: 'deept.verma@mmbg.world',
        description: 'For enquiries, collaborations, consultations, workshops and professional opportunities.',
        url: 'mailto:deept.verma@mmbg.world',
        icon: Mail,
        chipClass: 'bg-gradient-to-tr from-primary to-vibrant',
        external: false,
      },
    ],
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
    document.title = 'Connect with Dr. Deepti Verma | MasterMind Body Global';
    window.scrollTo(0, 0);
  }, []);

  let delay = 350;
  const nextDelay = () => {
    delay += 100;
    return delay;
  };

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
        <div className="text-center mt-6 mb-8">
          <div className="connect-logo relative mx-auto w-28 h-28 mb-6">
            <div className="connect-glow absolute inset-0 rounded-full" />
            <img
              src={logo}
              alt="MasterMind Body Global Logo"
              className="relative w-28 h-28 rounded-full object-cover border-2 border-white/30"
            />
          </div>
          <h1 className="connect-item opacity-0 text-3xl md:text-4xl font-bold text-white mb-3" style={{ animationDelay: '150ms' }}>
            Connect with Dr. Deepti Verma
          </h1>
          <p className="connect-item opacity-0 text-white/70" style={{ animationDelay: '250ms' }}>
            Follow, watch and connect with Dr. Deepti Verma across her official platforms.
          </p>
        </div>

        {/* Sections */}
        {sections.map((section) => {
          const SectionIcon = section.icon;
          return (
            <div key={section.title}>
              <div className="connect-item opacity-0 flex items-center gap-2 mt-8 mb-4" style={{ animationDelay: `${nextDelay()}ms` }}>
                <SectionIcon className="w-5 h-5 text-energy" />
                <h2 className="text-sm font-bold tracking-widest uppercase text-white/80">{section.title}</h2>
              </div>
              <div className="space-y-4">
                {section.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <TiltCard key={link.url} delay={nextDelay()}>
                      <a
                        href={link.url}
                        {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="group flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 hover:border-white/30 transition-colors duration-300 shadow-lg"
                      >
                        <span className={`flex items-center justify-center w-12 h-12 rounded-xl shrink-0 shadow-md ${link.chipClass}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="block font-semibold text-white break-words">{link.label}</span>
                          <span className="block text-sm text-white/60">{link.description}</span>
                        </span>
                        <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                      </a>
                    </TiltCard>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Footer */}
        <div className="connect-item opacity-0 text-center mt-12 pb-6" style={{ animationDelay: `${nextDelay()}ms` }}>
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} MasterMind Body Global
          </p>
        </div>
      </div>
    </div>
  );
};

export default Connect;
