import { useState, useEffect } from 'react';
import config from '../config/hackathonConfig';
import RegisterButton from './RegisterButton';
import { Calendar, MapPin, Users, GraduationCap, ArrowRight } from 'lucide-react';
import { Tiles } from '@/components/ui/tiles';

// Official WhatsApp icon
const WhatsAppIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM9.05 7.64C8.86 7.64 8.56 7.71 8.31 7.98C8.06 8.25 7.35 8.92 7.35 10.28C7.35 11.64 8.34 12.95 8.48 13.14C8.62 13.33 10.42 16.1 13.17 17.29C13.82 17.57 14.33 17.74 14.73 17.87C15.39 18.08 15.99 18.05 16.46 17.98C16.99 17.9 18.08 17.32 18.31 16.68C18.54 16.03 18.54 15.48 18.47 15.36C18.4 15.24 18.22 15.18 17.94 15.04C17.66 14.9 16.31 14.23 16.06 14.14C15.81 14.05 15.62 14 15.44 14.28C15.25 14.55 14.74 15.18 14.58 15.36C14.43 15.54 14.27 15.57 13.99 15.43C13.71 15.29 12.82 14.99 11.76 14.05C10.94 13.32 10.38 12.42 10.22 12.14C10.06 11.87 10.21 11.72 10.35 11.58C10.47 11.45 10.63 11.25 10.77 11.08C10.91 10.91 10.96 10.79 11.05 10.61C11.14 10.42 11.1 10.26 11.03 10.12C10.96 9.98 10.41 8.62 10.18 8.07C9.95 7.54 9.72 7.61 9.55 7.61C9.4 7.6 9.21 7.64 9.05 7.64Z" />
  </svg>
);

// Bespoke Hackathon Prize Insignia Seal
const PrizeInsignia = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
    <circle cx="20" cy="20" r="18" stroke="#F6C978" strokeWidth="1" strokeDasharray="3 2" opacity="0.7" />
    <circle cx="20" cy="20" r="15.5" stroke="#F6C978" strokeWidth="1.5" />
    <path
      d="M20 9L22.4 15.3H29.1L23.7 19.3L25.8 25.6L20 21.7L14.2 25.6L16.3 19.3L10.9 15.3H17.6L20 9Z"
      fill="#F6C978"
    />
    <circle cx="20" cy="20" r="3.5" fill="#8A1C7C" />
  </svg>
);

export const Hero = () => {
  const [displayPrize, setDisplayPrize] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return '₹1,00,000+';
    }
    return '₹0+';
  });

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Single count-up on initial load
    const end = 100000;
    const duration = 1200;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentVal = Math.round(end * (1 - Math.pow(1 - progress, 3)));
      setDisplayPrize(`₹${currentVal.toLocaleString('en-IN')}+`);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setDisplayPrize('₹1,00,000+');
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, []);

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-b from-lavender/35 via-lavender/10 to-[#F8F9FD] border-b border-line overflow-hidden">
      {/* Subtle Architectural Blueprint Grid */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-12 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_35%,black_30%,transparent_85%)] [-webkit-mask-image:radial-gradient(ellipse_80%_70%_at_50%_35%,black_30%,transparent_85%)]"
        aria-hidden="true"
      >
        <div className="w-full h-full flex items-center justify-center">
          <Tiles
            rows={18}
            cols={10}
            tileSize="xl"
            tileClassName="border-line/25"
          />
        </div>
      </div>

      {/* Subtle gold sunrise glow band at the bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gold/15 to-transparent pointer-events-none z-[1]"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top Floating Segmented Status Dock */}
        <div className="w-full flex justify-center mb-8 sm:mb-10 overflow-x-auto scrollbar-none py-1">
          <div className="inline-flex items-center gap-1.5 sm:gap-2.5 p-1.5 sm:p-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_2px_18px_-4px_rgba(0,0,0,0.06)] shrink-0">
            {/* Segment 1: ROUND 1 OPEN */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#ECFDF5] border border-emerald-200/70 text-[#065F46] font-bold text-[11px] uppercase tracking-wider font-sans select-none shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" aria-hidden="true" />
              <span>ROUND 1 OPEN</span>
            </div>

            {/* Divider 1 */}
            <div className="h-5 w-px bg-slate-200 shrink-0" aria-hidden="true" />

            {/* Segment 2: Finale Nov 21 – 22, 2026 */}
            <div className="flex items-center gap-2 px-2 sm:px-3 text-left shrink-0">
              <Calendar className="w-4 h-4 text-navy shrink-0" strokeWidth={1.75} aria-hidden="true" />
              <div className="flex flex-col">
                <span className="text-[10px] text-muted font-medium leading-none">Finale</span>
                <span className="text-xs font-bold text-navy leading-tight mt-0.5 whitespace-nowrap">
                  {config.event.dates}
                </span>
              </div>
            </div>

            {/* Divider 2 */}
            <div className="h-5 w-px bg-slate-200 shrink-0" aria-hidden="true" />

            {/* Segment 3: DTC Greater Noida */}
            <div className="flex items-center gap-1.5 px-2 sm:px-3 text-left shrink-0">
              <MapPin className="w-4 h-4 text-muted shrink-0" strokeWidth={1.75} aria-hidden="true" />
              <span className="text-xs font-semibold text-navy whitespace-nowrap">
                DTC Greater Noida
              </span>
            </div>

            {/* Divider 3 */}
            <div className="h-5 w-px bg-slate-200 shrink-0" aria-hidden="true" />

            {/* Segment 4: WhatsApp Community Link */}
            <a
              href={config.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#ECFDF5] hover:bg-[#D1FAE5] border border-emerald-200/70 text-[#047857] hover:text-[#065F46] transition-all duration-150 text-xs font-semibold whitespace-nowrap group shrink-0"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#10B981]" />
              <span>WhatsApp Community</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#047857] group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Divider 4 */}
            <div className="h-5 w-px bg-slate-200 shrink-0" aria-hidden="true" />

            {/* Segment 5: @nari.hackathons Instagram Link */}
            <a
              href={config.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5F3FF] hover:bg-[#EDE9FE] border border-purple-200/70 text-[#7C3AED] hover:text-[#6D28D9] transition-all duration-150 text-xs font-medium whitespace-nowrap shrink-0"
            >
              <span className="w-4 h-4 rounded-full bg-purple-100 border border-purple-200 text-[#7C3AED] flex items-center justify-center text-[10px] font-bold">
                @
              </span>
              <span>{config.socials.instagramHandle || '@nari.hackathons'}</span>
            </a>
          </div>
        </div>

        {/* Center Official HACKS 2026 Logo (Refined, Not Bloated) */}
        <div className="mb-8 flex flex-col items-center">
          <h1 className="sr-only">
            {config.brand.hackathonName} {config.brand.edition} | {config.brand.acronymExpansion} | Powered by {config.brand.organizationFullName}
          </h1>
          <img
            src="/hacks-logo-transparent.png"
            alt="HACKS 2026 — Hub for Advanced Creativity, Knowledge & Solutions — Powered by NARI"
            width="1024"
            height="417"
            className="w-full max-w-[280px] sm:max-w-[380px] md:max-w-[440px] h-auto object-contain mx-auto transition-transform hover:scale-[1.01]"
            loading="eager"
          />
          <p className="font-script text-xl sm:text-2xl text-plum mt-3 tracking-wide">
            {config.brand.scriptLine}
          </p>
        </div>

        {/* Prize Pool Display (Prestigious, Classy & Proportioned) */}
        <div className="max-w-xl mx-auto py-3 px-4 mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-plum mb-2 font-sans">
            TOTAL PRIZE POOL
          </p>
          <div className="flex items-center justify-center gap-3">
            <PrizeInsignia className="hidden sm:inline-block w-8 h-8 shrink-0 opacity-80" />
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-navy leading-none tracking-tight">
              {displayPrize}
            </div>
            <PrizeInsignia className="hidden sm:inline-block w-8 h-8 shrink-0 opacity-80" />
          </div>
          <p className="text-xs sm:text-sm text-muted mt-2.5">
            {config.prizes.subline}
          </p>
        </div>

        {/* Short Narrative Description */}
        <p className="text-sm sm:text-base text-muted max-w-lg mx-auto leading-relaxed mb-10">
          {config.brand.heroDescription}
        </p>

        {/* Symmetrical Balanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-16 w-full max-w-md mx-auto sm:max-w-none">
          <RegisterButton className="w-full sm:w-auto px-7 py-3 text-xs font-semibold uppercase tracking-wider" />
          <a
            href="#themes"
            className="w-full sm:w-auto px-7 py-3 rounded-full text-xs font-bold tracking-wider uppercase text-navy hover:text-plum bg-white hover:bg-lavender/50 border border-line hover:border-plum/40 shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 inline-flex items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum"
          >
            <span>Explore Themes</span>
            <span aria-hidden="true" className="transition-transform duration-250 ease-out group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Facts Dock (Segmented Capsule Aesthetic matching the Top Status Dock) */}
        <div className="pt-2 flex justify-center">
          <div className="w-full max-w-4xl p-2 sm:p-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_2px_18px_-4px_rgba(0,0,0,0.06)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80 text-left">
            {/* Calendar */}
            <div className="flex items-center gap-3 p-3 sm:px-4">
              <div className="w-8 h-8 rounded-full bg-lavender/40 flex items-center justify-center text-plum shrink-0">
                <Calendar className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold text-navy leading-tight">{config.event.dates}</p>
                <p className="text-[11px] text-muted leading-tight mt-0.5">24H Offline Grand Finale</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 p-3 sm:px-4">
              <div className="w-8 h-8 rounded-full bg-lavender/40 flex items-center justify-center text-plum shrink-0">
                <MapPin className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold text-navy leading-tight">DTC Greater Noida</p>
                <p className="text-[11px] text-muted leading-tight mt-0.5">Knowledge Park III, UP</p>
              </div>
            </div>

            {/* Team Size */}
            <div className="flex items-center gap-3 p-3 sm:px-4">
              <div className="w-8 h-8 rounded-full bg-lavender/40 flex items-center justify-center text-plum shrink-0">
                <Users className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold text-navy leading-tight">
                  {config.registration.minTeamSize} to {config.registration.maxTeamSize} Members
                </p>
                <p className="text-[11px] text-muted leading-tight mt-0.5">Cross-college squads</p>
              </div>
            </div>

            {/* Eligibility */}
            <div className="flex items-center gap-3 p-3 sm:px-4">
              <div className="w-8 h-8 rounded-full bg-lavender/40 flex items-center justify-center text-plum shrink-0">
                <GraduationCap className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold text-navy leading-tight">UG, PG &amp; Innovators</p>
                <p className="text-[11px] text-muted leading-tight mt-0.5">Top 100 squads to finale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
