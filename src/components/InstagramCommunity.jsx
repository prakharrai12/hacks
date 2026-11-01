import config from '../config/hackathonConfig';
import { ExternalLink, ArrowRight } from 'lucide-react';

const InstagramIcon = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsAppIcon = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM9.05 7.64C8.86 7.64 8.56 7.71 8.31 7.98C8.06 8.25 7.35 8.92 7.35 10.28C7.35 11.64 8.34 12.95 8.48 13.14C8.62 13.33 10.42 16.1 13.17 17.29C13.82 17.57 14.33 17.74 14.73 17.87C15.39 18.08 15.99 18.05 16.46 17.98C16.99 17.9 18.08 17.32 18.31 16.68C18.54 16.03 18.54 15.48 18.47 15.36C18.4 15.24 18.22 15.18 17.94 15.04C17.66 14.9 16.31 14.23 16.06 14.14C15.81 14.05 15.62 14 15.44 14.28C15.25 14.55 14.74 15.18 14.58 15.36C14.43 15.54 14.27 15.57 13.99 15.43C13.71 15.29 12.82 14.99 11.76 14.05C10.94 13.32 10.38 12.42 10.22 12.14C10.06 11.87 10.21 11.72 10.35 11.58C10.47 11.45 10.63 11.25 10.77 11.08C10.91 10.91 10.96 10.79 11.05 10.61C11.14 10.42 11.1 10.26 11.03 10.12C10.96 9.98 10.41 8.62 10.18 8.07C9.95 7.54 9.72 7.61 9.55 7.61C9.4 7.6 9.21 7.64 9.05 7.64Z" />
  </svg>
);

export const InstagramCommunity = () => {
  const instagramUrl = config.socials.instagram;
  const whatsappUrl = config.socials.whatsapp;
  const handle = config.socials.instagramHandle || '@nari.hackathons';

  return (
    <section id="community" className="scroll-mt-[100px] py-20 md:py-28 bg-white border-b border-line text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-plum" aria-hidden="true" />
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-plum font-semibold">
              OFFICIAL COMMUNITY &bull; CHANNELS
            </p>
          </div>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold font-serif text-navy tracking-tight leading-tight mb-3">
            Builder Channels &amp; Dispatches
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed font-sans">
            Stay connected directly with organizers and fellow participants through our official WhatsApp Community and Instagram broadcast channel.
          </p>
        </div>

        {/* Dual High-End Architectural Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-12">
          {/* Channel 1: WhatsApp Community */}
          <div className="rounded-2xl border border-line bg-gradient-to-b from-white to-[#F9FCFA] p-7 sm:p-9 flex flex-col justify-between space-y-6 hover:border-emerald-600/40 transition-colors shadow-xs">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  BUILDER DISPATCH &bull; WHATSAPP
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                  Active
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-navy">
                Official WhatsApp Community
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                Direct squad matchmaking, inter-college team coordination, Round 1 PPT guidance, and real-time organizer assistance for the Grand Finale at Delhi Technical Campus.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full px-5 py-3 rounded-lg bg-[#0F766E] hover:bg-[#115E59] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-150 group shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <span className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4" />
                <span>Join Official WhatsApp Community</span>
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Channel 2: Instagram Broadcast */}
          <div className="rounded-2xl border border-line bg-gradient-to-b from-white to-[#FAF8FC] p-7 sm:p-9 flex flex-col justify-between space-y-6 hover:border-plum/40 transition-colors shadow-xs">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-plum font-semibold bg-lavender px-2.5 py-1 rounded border border-plum/20">
                  OFFICIAL BROADCAST &bull; INSTAGRAM
                </span>
                <span className="text-xs text-plum font-mono font-medium">
                  {handle}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-navy">
                {handle} on Instagram
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                Follow our official channel for the Top 100 Shortlist drop, mentor spotlights, problem area insights, and live 24-hour on-campus Grand Finale reels and coverage.
              </p>
            </div>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full px-5 py-3 rounded-lg bg-navy hover:bg-navy-2 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-150 group shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum"
            >
              <span className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4" />
                <span>Follow {handle}</span>
              </span>
              <ExternalLink className="w-4 h-4 text-sky/70 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Editorial Feature Dossier (Clean, Refined Typographic Points) */}
        <div className="border border-line rounded-xl bg-lavender/15 p-6 sm:p-7 divide-y sm:divide-y-0 sm:divide-x divide-line grid grid-cols-1 sm:grid-cols-3 text-left">
          <div className="sm:pr-6 pb-4 sm:pb-0 space-y-1.5">
            <div className="text-[11px] font-mono font-semibold text-plum">
              01 &bull; SQUAD FORMATION
            </div>
            <p className="text-xs text-muted leading-relaxed font-sans">
              Connect with fellow hardware hackers, ML engineers, and UI/UX designers looking for teammates inside the WhatsApp group.
            </p>
          </div>

          <div className="sm:px-6 py-4 sm:py-0 space-y-1.5">
            <div className="text-[11px] font-mono font-semibold text-plum">
              02 &bull; TOP 100 SHORTLIST
            </div>
            <p className="text-xs text-muted leading-relaxed font-sans">
              The qualifying finalist squads advancing to the 24-hour offline build will be announced simultaneously across both official channels.
            </p>
          </div>

          <div className="sm:pl-6 pt-4 sm:pt-0 space-y-1.5">
            <div className="text-[11px] font-mono font-semibold text-plum">
              03 &bull; ORGANIZER SUPPORT
            </div>
            <p className="text-xs text-muted leading-relaxed font-sans">
              Direct communication line with NARI coordinators for Unstop registration assistance, deck questions, and DTC campus arrival queries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramCommunity;
