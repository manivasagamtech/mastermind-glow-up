import React from 'react';
import { Award, BookOpen, Brain, PenLine, Star, ArrowUpRight } from 'lucide-react';
import bookImage from '@/assets/book-launch.jpeg';

const AMAZON_URL = 'https://www.amazon.in/Master-Your-Mind-Body-Create/dp/9371648147';

const BookSection = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: 'Fourteen chapters, one clear path',
      description: 'The beliefs behind your health, money, relationships and career, unpacked one at a time.'
    },
    {
      icon: Brain,
      title: 'A complete practice toolkit',
      description: "Affirmations (555, 3-6-9, 333), visualisation, mirror work, Ho'oponopono and surrender, each explained through neuroscience."
    },
    {
      icon: PenLine,
      title: 'Insight you can act on',
      description: 'Every chapter closes with a hands-on assignment, grounded in real stories from Dr. Deepti’s coaching practice.'
    }
  ];

  return (
    <section id="book" className="section-padding relative overflow-hidden bg-gradient-to-b from-amber-50 via-stone-50 to-white">
      {/* Soft gold glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-amber-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -left-24 h-[28rem] w-[28rem] rounded-full bg-amber-100/60 blur-3xl" />

      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-10 items-center">
          {/* Heading */}
          <div className="text-center lg:text-left lg:col-start-2 lg:row-start-1 lg:self-end">
            <div className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-4 py-2 mb-6 text-xs sm:text-sm font-semibold uppercase tracking-widest text-amber-200">
              <Award size={16} className="text-amber-300" />
              Amazon Bestseller
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-stone-900">
              Master Your Mind <span className="italic font-normal text-amber-700">&amp; Body</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base font-semibold uppercase tracking-[0.25em] text-amber-700">
              Create the Life You Love
            </p>
            <p className="mt-4 text-lg text-stone-600">
              The bestselling book by <span className="font-semibold text-stone-900">Dr. Deepti Verma</span>
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:col-start-1 lg:row-start-1 lg:row-span-2">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-3 rounded-[2rem] border border-amber-300/60" />
              <img
                src={bookImage}
                alt="Dr. Deepti Verma holding her book Master Your Mind & Body at the book launch"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:-right-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-xl border border-amber-100 whitespace-nowrap">
                <span className="text-3xl font-bold text-stone-900">5.0</span>
                <div>
                  <div className="flex gap-0.5 text-amber-500" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xs font-medium text-stone-500">Reader rating on Amazon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-start-2 lg:row-start-2 lg:self-start pt-6 lg:pt-0">
            <p className="text-lg text-stone-700 leading-relaxed">
              You already know what to do. So why do the same results keep coming back? Drawing on three decades
              in clinical nutrition, wellness and life coaching, Dr. Deepti Verma shows how your subconscious mind
              quietly shapes everything you can see in your life, and how to start working with it instead of
              against it.
            </p>

            <blockquote className="mt-6 border-l-4 border-amber-500 pl-5">
              <p className="font-serif text-xl italic text-stone-800">
                “Nothing in this book is magic… What I am offering instead is mechanics.”
              </p>
              <footer className="mt-2 text-sm font-medium text-stone-500">Dr. Deepti Verma</footer>
            </blockquote>

            <ul className="mt-8 space-y-5">
              {highlights.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                    <item.icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-stone-900">{item.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-stone-900 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-amber-600 hover:shadow-xl hover:scale-105"
              >
                Buy Now on Amazon
                <ArrowUpRight size={20} />
              </a>
              <p className="text-sm text-stone-500">Paperback · 160 pages · Adhyyan Books</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
