export const AnnouncementBar = () => {
  return (
    <div
      role="region"
      aria-label="Event Announcements"
      className="fixed top-0 left-0 right-0 z-50 h-9 bg-navy text-white text-[11px] sm:text-xs tracking-wider uppercase border-b border-navy-2/60 overflow-hidden ticker-mask flex items-center select-none"
    >
      <div className="ticker-track">
        {/* Primary Ticker Group */}
        <div className="flex items-center shrink-0">
          {[1, 2].map((cycle) => (
            <div key={cycle} className="flex items-center shrink-0">
              <span className="font-semibold text-white/95">₹1,00,000+ PRIZE POOL</span>
              <span className="mx-4 sm:mx-6 text-plum" aria-hidden="true">•</span>
              <span className="font-medium text-white/90">ROUND 1 ONLINE REGISTRATION OPEN</span>
              <span className="mx-4 sm:mx-6 text-plum" aria-hidden="true">•</span>
              <a
                href="https://chat.whatsapp.com/DZ1uOWeWatjFYibQln1cV9"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-300 hover:text-white underline underline-offset-2"
              >
                JOIN OFFICIAL WHATSAPP COMMUNITY
              </a>
              <span className="mx-4 sm:mx-6 text-plum" aria-hidden="true">•</span>
              <span className="font-medium text-white/90">24-HOUR OFFLINE FINALE: NOV 21 – 22, 2026</span>
              <span className="mx-4 sm:mx-6 text-plum" aria-hidden="true">•</span>
              <span className="font-medium text-white/90">DELHI TECHNICAL CAMPUS (DTC), GREATER NOIDA</span>
              <span className="mx-4 sm:mx-6 text-plum" aria-hidden="true">•</span>
              <a
                href="https://www.instagram.com/nari.hackathons/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gold hover:text-white underline underline-offset-2"
              >
                FOLLOW @NARI.HACKATHONS ON INSTAGRAM
              </a>
              <span className="mx-4 sm:mx-6 text-plum" aria-hidden="true">•</span>
              <span className="font-medium text-white/90">PPO &amp; INTERNSHIP PATHWAYS</span>
              <span className="mx-4 sm:mx-6 text-plum" aria-hidden="true">•</span>
            </div>
          ))}
        </div>

        {/* Seamless Duplicate Group for Infinite Loop */}
        <div className="flex items-center shrink-0" aria-hidden="true">
          {[1, 2].map((cycle) => (
            <div key={`dup-${cycle}`} className="flex items-center shrink-0">
              <span className="font-semibold text-white/95">₹1,00,000+ PRIZE POOL</span>
              <span className="mx-4 sm:mx-6 text-plum" aria-hidden="true">•</span>
              <span className="font-medium text-white/90">ROUND 1 ONLINE REGISTRATION OPEN</span>
              <span className="mx-4 sm:mx-6 text-plum" aria-hidden="true">•</span>
              <span className="font-semibold text-emerald-300">
                JOIN OFFICIAL WHATSAPP COMMUNITY
              </span>
              <span className="mx-4 sm:mx-6 text-plum" aria-hidden="true">•</span>
              <span className="font-medium text-white/90">24-HOUR OFFLINE FINALE: NOV 21 – 22, 2026</span>
              <span className="mx-4 sm:mx-6 text-plum" aria-hidden="true">•</span>
              <span className="font-medium text-white/90">DELHI TECHNICAL CAMPUS (DTC), GREATER NOIDA</span>
              <span className="mx-4 sm:mx-6 text-plum" aria-hidden="true">•</span>
              <span className="font-semibold text-gold">FOLLOW @NARI.HACKATHONS ON INSTAGRAM</span>
              <span className="mx-4 sm:mx-6 text-plum" aria-hidden="true">•</span>
              <span className="font-medium text-white/90">PPO &amp; INTERNSHIP PATHWAYS</span>
              <span className="mx-4 sm:mx-6 text-plum" aria-hidden="true">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;

