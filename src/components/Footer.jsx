import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import config from '../config/hackathonConfig';

// Official Feather/Lucide specification Instagram stroke icon
const InstagramIcon = ({ className = 'w-4 h-4', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    className={className}
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// Official X (formerly Twitter) brand icon
const XIcon = ({ className = 'w-3.5 h-3.5', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Official WhatsApp brand icon
const WhatsAppIcon = ({ className = 'w-4 h-4', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM9.05 7.64C8.86 7.64 8.56 7.71 8.31 7.98C8.06 8.25 7.35 8.92 7.35 10.28C7.35 11.64 8.34 12.95 8.48 13.14C8.62 13.33 10.42 16.1 13.17 17.29C13.82 17.57 14.33 17.74 14.73 17.87C15.39 18.08 15.99 18.05 16.46 17.98C16.99 17.9 18.08 17.32 18.31 16.68C18.54 16.03 18.54 15.48 18.47 15.36C18.4 15.24 18.22 15.18 17.94 15.04C17.66 14.9 16.31 14.23 16.06 14.14C15.81 14.05 15.62 14 15.44 14.28C15.25 14.55 14.74 15.18 14.58 15.36C14.43 15.54 14.27 15.57 13.99 15.43C13.71 15.29 12.82 14.99 11.76 14.05C10.94 13.32 10.38 12.42 10.22 12.14C10.06 11.87 10.21 11.72 10.35 11.58C10.47 11.45 10.63 11.25 10.77 11.08C10.91 10.91 10.96 10.79 11.05 10.61C11.14 10.42 11.1 10.26 11.03 10.12C10.96 9.98 10.41 8.62 10.18 8.07C9.95 7.54 9.72 7.61 9.55 7.61C9.4 7.6 9.21 7.64 9.05 7.64Z" />
  </svg>
);

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, href) => {
    // If external link or full route
    if (href.startsWith('http')) return;

    if (href.startsWith('/#')) {
      const hash = href.replace('/', '');
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState(null, '', hash);
        }
      } else {
        e.preventDefault();
        navigate(href);
      }
    }
  };

  const unstopUrl = config.registration.unstopUrl;
  const nariWebsite = config.brand.nariWebsite || 'https://narinexus.com/';
  const whatsappUrl = config.socials.whatsapp || 'https://chat.whatsapp.com/DZ1uOWeWatjFYibQln1cV9';
  const instagramUrl = config.socials.instagram || 'https://www.instagram.com/nari.hackathons/';
  const twitterUrl = config.socials.twitter || 'https://x.com/narihackathons';

  return (
    <footer className="relative bg-navy-2 text-sky border-t border-line/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/10 items-start">
          {/* Col 1: Brand & Institutional Identity (7 cols) */}
          <div className="md:col-span-6 space-y-4 text-left">
            <div className="flex items-center gap-3">
              {/* NARI Logo Link to official website */}
              <a
                href={nariWebsite}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit New Age Research Initiatives (NARI) — narinexus.com"
                className="bg-white p-2.5 rounded-md inline-flex items-center border border-white/20 hover:border-plum/40 hover:shadow-[0_0_14px_rgba(138,28,124,0.25)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum"
              >
                <img
                  src={config.brand.logoUrl}
                  alt="NARI — New Age Research Initiatives"
                  width="110"
                  height="36"
                  className="h-8 w-auto object-contain transition-transform group-hover:scale-102"
                />
              </a>
              <span className="text-xs text-sky/60 font-medium">
                Presented by <strong className="text-white font-semibold">NARI</strong>
              </span>
            </div>

            <div>
              <p className="font-serif font-bold text-lg text-white tracking-tight">
                {config.brand.hackathonName} {config.brand.edition}
              </p>
              <p className="text-xs text-sky/80 mt-0.5">
                {config.brand.acronymExpansion}
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mt-2 font-sans">
                {config.brand.tagline}
              </p>
            </div>

            <p className="text-xs text-sky/70 leading-relaxed max-w-md">
              A 24-hour innovation hackathon by <a href={nariWebsite} target="_blank" rel="noopener noreferrer" className="text-sky hover:text-white underline underline-offset-2 transition-colors">New Age Research Initiatives (NARI)</a>. {config.brand.nariTagline}
            </p>
          </div>

          {/* Col 2: Navigation & Official Links (6 cols) */}
          <div className="md:col-span-6 text-left md:text-right space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-sky/90 mb-3 font-sans">
                EVENT NAVIGATION
              </p>
              <nav className="flex flex-wrap md:justify-end gap-x-5 gap-y-2.5 text-xs font-medium" aria-label="Footer Navigation">
                <a href="/#about" onClick={(e) => handleNavClick(e, '/#about')} className="text-sky hover:text-white transition-colors relative py-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-plum after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200">About</a>
                <a href="/#themes" onClick={(e) => handleNavClick(e, '/#themes')} className="text-sky hover:text-white transition-colors relative py-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-plum after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200">Themes</a>
                <a href="/#schedule" onClick={(e) => handleNavClick(e, '/#schedule')} className="text-sky hover:text-white transition-colors relative py-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-plum after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200">Schedule</a>
                <a href="/#prizes" onClick={(e) => handleNavClick(e, '/#prizes')} className="text-sky hover:text-white transition-colors relative py-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-plum after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200">Prizes</a>
                <a href="/#rules" onClick={(e) => handleNavClick(e, '/#rules')} className="text-sky hover:text-white transition-colors relative py-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-plum after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200">Rules</a>
                <Link to="/mentors" className="text-sky hover:text-white transition-colors relative py-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-plum after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200">Mentors</Link>
                <a href="/#venue" onClick={(e) => handleNavClick(e, '/#venue')} className="text-sky hover:text-white transition-colors relative py-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-plum after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200">Venue</a>
                <a href="/#community" onClick={(e) => handleNavClick(e, '/#community')} className="text-sky hover:text-white transition-colors relative py-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-plum after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200">Community</a>
                <a href="/#faq" onClick={(e) => handleNavClick(e, '/#faq')} className="text-sky hover:text-white transition-colors relative py-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-plum after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200">FAQ</a>
              </nav>
            </div>

            {/* Official External Links Strip */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-sky/90 mb-3 font-sans">
                OFFICIAL LINKS
              </p>
              <div className="flex flex-wrap md:justify-end items-center gap-3 text-xs">
                {/* Official Registration CTA */}
                <a
                  href={unstopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-plum hover:bg-plum-dark text-white font-semibold border border-plum/40 hover:border-plum glow-btn-plum transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum"
                >
                  <span>Register on Unstop</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>

                {/* Official WhatsApp Community */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join Official HACKS 2026 WhatsApp Community"
                  title="Join Official HACKS 2026 WhatsApp Community"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-500/15 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30 hover:border-emerald-500 hover:shadow-[0_0_14px_rgba(16,185,129,0.35)] hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <WhatsAppIcon className="w-4 h-4 transition-transform duration-200 group-hover:scale-105" aria-hidden="true" />
                  <span className="font-semibold">WhatsApp Community</span>
                </a>

                {/* Official Instagram with Handle Mention */}
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="HACKS 2026 on Instagram @nari.hackathons"
                  title="Follow @nari.hackathons on Instagram"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-plum text-sky hover:text-white border border-white/10 hover:border-plum hover:shadow-[0_0_14px_rgba(138,28,124,0.45)] hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum"
                >
                  <InstagramIcon className="w-4 h-4 transition-transform duration-200 group-hover:scale-105" aria-hidden="true" />
                  <span className="font-semibold">Instagram (@nari.hackathons)</span>
                </a>

                {/* Official X (formerly Twitter) of NARI */}
                <a
                  href={twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="NARI on X (formerly Twitter)"
                  title="Follow @narihackathons on X"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-sky hover:text-white border border-white/10 hover:border-plum/50 hover:shadow-[0_0_14px_rgba(138,28,124,0.35)] hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum"
                >
                  <XIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-105" aria-hidden="true" />
                  <span className="font-semibold">X (Twitter)</span>
                </a>
              </div>
            </div>

            {/* Official Domain & Transparency Note */}
            <div className="text-[11px] text-sky/60 leading-relaxed max-w-sm ml-auto space-y-1">
              <p>
                Official Website: <a href="https://thehacks.in/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold underline underline-offset-2">thehacks.in</a>
              </p>
              <p>
                Participant registrations, submissions, and verification are conducted exclusively via Unstop.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Script */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sky/70">
          <p>© 2026 {config.brand.organizationFullName} (NARI) • thehacks.in. All rights reserved.</p>
          <p className="font-script text-gold text-2xl">
            {config.brand.scriptLine}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

