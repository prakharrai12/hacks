import { useState } from 'react';
import config from '../config/hackathonConfig';
import { ExternalLink, Navigation, Copy, Check, MessageSquare, Compass, Shield, Wifi, Coffee, Cpu } from 'lucide-react';

export const Venue = () => {
  const [copied, setCopied] = useState(false);
  const fullAddress = config.event.venueAddress || 'Plot No. 28/1, Knowledge Park III, Greater Noida, Uttar Pradesh 201306';
  const mapUrl = config.event.mapUrl || 'https://www.google.com/maps/search/?api=1&query=Delhi+Technical+Campus+Knowledge+Park+III+Greater+Noida';
  const embedUrl = config.event.mapEmbedUrl || 'https://maps.google.com/maps?q=Delhi+Technical+Campus+Knowledge+Park+III+Greater+Noida+201306&t=&z=15&ie=UTF8&iwloc=&output=embed';

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="venue" className="scroll-mt-[100px] py-20 md:py-28 bg-[#FBFBFE] border-b border-line text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Kicker & Header */}
        <div className="mb-12 max-w-2xl">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-plum" aria-hidden="true" />
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-plum font-semibold">
              OFFLINE FINALE VENUE &bull; DELHI-NCR
            </p>
          </div>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold font-serif text-navy tracking-tight leading-tight mb-3">
            Delhi Technical Campus (DTC)
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed font-sans">
            The 24-hour offline Grand Finale convenes on-campus at Delhi Technical Campus in Greater Noida. The premier institute provides high-capacity computing labs, prototyping spaces, and 24/7 facilities required for non-stop national innovation.
          </p>
        </div>

        {/* 2-Column Spacious Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Campus Information & Transit Itinerary (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Campus Identity Card */}
            <div className="rounded-xl bg-white border border-line p-6 sm:p-7 shadow-xs">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-lavender/60 border border-line text-[10px] font-mono font-semibold uppercase tracking-wider text-plum">
                  Official Host Institution
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-navy tracking-tight">
                  Delhi Technical Campus
                </h3>
                <p className="text-sm font-medium text-navy/90 leading-snug">
                  Plot No. 28/1, Knowledge Park III, Greater Noida, Uttar Pradesh 201306
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  Affiliated to Guru Gobind Singh Indraprastha University (GGSIPU), New Delhi &bull; Approved by AICTE
                </p>

                {/* Action Buttons */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-navy hover:bg-navy-2 text-white text-xs font-semibold tracking-wide uppercase transition-all duration-150 shadow-xs hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum"
                  >
                    <Navigation className="w-3.5 h-3.5 text-gold" />
                    <span>Navigate on Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-sky/70" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-md bg-white hover:bg-lavender/40 text-navy border border-line text-xs font-semibold tracking-wide transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Address Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-muted" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Transit Specifications */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-navy font-sans px-1">
                Transit &amp; Accessibility
              </p>

              {/* Transit 1: Metro */}
              <div className="p-4 sm:p-5 rounded-lg bg-white border border-line space-y-1.5 shadow-2xs hover:border-plum/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-plum font-semibold">
                    01 &bull; METRO RAIL NETWORK
                  </span>
                  <span className="text-xs font-medium text-navy/70">~1.5 km (3 min e-rickshaw)</span>
                </div>
                <h4 className="text-sm font-bold font-serif text-navy">
                  Aqua Line Metro &bull; Knowledge Park II
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  Knowledge Park II Metro Station is 1.5 km from the campus gate. Seamless interchange connects from Delhi Metro Blue Line (Sector 52 to Sector 51). Pari Chowk Station is 3 km away.
                </p>
              </div>

              {/* Transit 2: Highway Corridor */}
              <div className="p-4 sm:p-5 rounded-lg bg-white border border-line space-y-1.5 shadow-2xs hover:border-plum/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-plum font-semibold">
                    02 &bull; EXPRESSWAY ARTERY
                  </span>
                  <span className="text-xs font-medium text-navy/70">Direct Exit &bull; Free Parking</span>
                </div>
                <h4 className="text-sm font-bold font-serif text-navy">
                  Noida-Greater Noida Highway
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  Direct exit from the 6-lane Noida-Greater Noida Expressway into Knowledge Park III. ~45 minutes signal-free drive from Central Delhi and Noida Sector 18 with secured campus parking.
                </p>
              </div>

              {/* Transit 3: Air & Rail Links */}
              <div className="p-4 sm:p-5 rounded-lg bg-white border border-line space-y-1.5 shadow-2xs hover:border-plum/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-plum font-semibold">
                    03 &bull; AIR &amp; RAIL TERMINALS
                  </span>
                  <span className="text-xs font-medium text-navy/70">Delhi Metro &amp; Cabs</span>
                </div>
                <h4 className="text-sm font-bold font-serif text-navy">
                  IGI Airport (DEL) &amp; Railway Stations
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  Direct metro from IGI Airport via Airport Express to Blue/Aqua line network. Continuous cabs (Uber, Ola) operate to DTC from New Delhi (NDLS), Anand Vihar (ANVT), and Nizamuddin (NZM).
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Elevated Interactive Map & GPS Telemetry (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4 lg:sticky lg:top-28">
            <div className="rounded-xl bg-white border border-line shadow-xs overflow-hidden">
              {/* Map Title Bar */}
              <div className="px-4 py-3 bg-white border-b border-line flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                  <span className="font-semibold text-navy">Live Campus Map Preview</span>
                </div>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-plum hover:text-plum-dark text-[11px] font-semibold flex items-center gap-1"
                >
                  <span>Open Fullscreen</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Interactive Iframe Frame */}
              <div className="relative bg-navy-2 w-full">
                <iframe
                  src={embedUrl}
                  width="100%"
                  height="340"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Delhi Technical Campus Greater Noida Location Map"
                  className="w-full h-72 sm:h-80 lg:h-[350px] opacity-95 hover:opacity-100 transition-opacity"
                />
              </div>

              {/* GPS Telemetry Bar */}
              <div className="p-3 bg-navy text-sky text-[11px] font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-navy-2">
                <div className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>28.4651&deg; N, 77.4912&deg; E &bull; KP-III</span>
                </div>
                <a
                  href={config.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-white underline underline-offset-2 flex items-center gap-1 transition-colors text-[11px]"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>WhatsApp Arrival Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 24-Hour Engineering Infrastructure Specifications */}
        <div className="space-y-5 pt-8 border-t border-line">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 className="text-base sm:text-lg font-bold font-serif text-navy">
              Campus Engineering &amp; Hacker Infrastructure
            </h3>
            <span className="text-xs text-muted font-mono">
              Complimentary on-site facilities provided for all 100 shortlisted squads
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-lg bg-white border border-line text-left space-y-2 hover:border-plum/40 transition-colors shadow-2xs">
              <div className="flex items-center gap-2 text-plum">
                <Wifi className="w-4 h-4" />
                <span className="text-xs font-bold text-navy uppercase tracking-wider font-sans">
                  Dual-Line Power &amp; Wi-Fi
                </span>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Generator-backed uninterrupted power supply with dedicated squad extension banks and high-throughput campus Wi-Fi.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white border border-line text-left space-y-2 hover:border-plum/40 transition-colors shadow-2xs">
              <div className="flex items-center gap-2 text-plum">
                <Cpu className="w-4 h-4" />
                <span className="text-xs font-bold text-navy uppercase tracking-wider font-sans">
                  Hardware Workbenches
                </span>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Designated prototyping lab desks with multimeters, testing equipment, and power supplies for robotics &amp; IoT squads.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white border border-line text-left space-y-2 hover:border-plum/40 transition-colors shadow-2xs">
              <div className="flex items-center gap-2 text-plum">
                <Coffee className="w-4 h-4" />
                <span className="text-xs font-bold text-navy uppercase tracking-wider font-sans">
                  24/7 Meals &amp; Coffee Bar
                </span>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Continuous on-campus meals, midnight refreshments, tea, hot coffee, and hydration counters provided throughout the 24 hours.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white border border-line text-left space-y-2 hover:border-plum/40 transition-colors shadow-2xs">
              <div className="flex items-center gap-2 text-plum">
                <Shield className="w-4 h-4" />
                <span className="text-xs font-bold text-navy uppercase tracking-wider font-sans">
                  Rest Areas &amp; Security
                </span>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Gender-segregated quiet resting zones, 24/7 institutional security personnel, and an on-call medical first-aid desk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
