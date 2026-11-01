import config from '../config/hackathonConfig';

export const Prizes = () => {
  const { hiringPartner } = config.prizes;

  return (
    <section id="prizes" className="scroll-mt-[100px] py-20 md:py-28 bg-lavender/35 border-b border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-plum" aria-hidden="true" />
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-plum font-semibold">
              PRIZES &amp; CAREER ACCELERATION
            </p>
          </div>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold font-serif text-navy tracking-tight leading-tight mb-3">
            Rewards &amp; Opportunities
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed font-sans">
            Recognizing technical excellence, system craftsmanship, and breakthrough potential.
          </p>
        </div>

        {/* Single Unified Rewards Card */}
        <div className="border border-line bg-white rounded-2xl shadow-resting hover:shadow-hover transition-shadow overflow-hidden relative">
          {/* Subtle decorative gold badge in background */}
          <div className="absolute top-8 right-8 opacity-15 pointer-events-none hidden md:block" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none" className="w-24 h-24" aria-hidden="true">
              <circle cx="20" cy="20" r="18" stroke="#F6C978" strokeWidth="1" strokeDasharray="3 2" />
              <circle cx="20" cy="20" r="15.5" stroke="#F6C978" strokeWidth="1.5" />
              <path d="M20 9L22.4 15.3H29.1L23.7 19.3L25.8 25.6L20 21.7L14.2 25.6L16.3 19.3L10.9 15.3H17.6L20 9Z" fill="#F6C978" />
            </svg>
          </div>

          <div className="p-7 sm:p-10 lg:p-12">
            {/* Top Tag */}
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-plum mb-6 font-sans">
              TOTAL REWARDS &amp; CAREER PATHWAYS
            </p>

            {/* Upper Horizontal Section: Prize Pool + PPO & Internships Together */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Prize Pool Display */}
              <div className="md:col-span-5">
                <div className="text-4xl sm:text-5xl lg:text-5xl font-bold font-serif text-navy leading-none tracking-tight mb-3">
                  {config.prizes.totalPool}
                </div>
                <p className="text-sm font-bold text-navy">
                  Total Prize Pool
                </p>
                <p className="text-xs text-muted mt-1 leading-relaxed font-sans">
                  Awarded across track winners, runners-up, and special category champions.
                </p>
              </div>

              {/* Plus Divider (Horizontal visual link) */}
              <div className="md:col-span-1 flex items-center justify-start md:justify-center">
                <span className="text-2xl md:text-3xl font-light text-plum/50 font-serif">
                  +
                </span>
              </div>

              {/* PPO & Internships Display */}
              <div className="md:col-span-6">
                <div className="text-2xl sm:text-3xl font-bold font-serif text-navy leading-tight tracking-tight mb-3">
                  PPO &amp; Internships
                </div>
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Pre-Placement Offers (PPOs)
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky/30 border border-line text-xs font-semibold text-navy">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy" />
                    Paid Industry Internships
                  </span>
                </div>
                <p className="text-xs text-muted leading-relaxed font-sans">
                  Direct Pre-Placement Offers and industry internship opportunities awarded to standout squads.
                </p>
              </div>
            </div>

            {/* Optional Tier Breakdown (if announced) */}
            {config.prizes.breakdownAnnounced && config.prizes.tiers?.length > 0 && (
              <div className="mt-8 pt-6 border-t border-line divide-y divide-line text-sm">
                {config.prizes.tiers.map((t) => (
                  <div key={t.id} className="py-2.5 flex justify-between">
                    <span className="font-semibold text-navy">{t.title}</span>
                    <span className="text-muted">{t.amount}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Unified Bottom Bar / Corner */}
          <div className="px-7 py-4 sm:px-10 bg-lavender/20 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Left corner: Breakdown status */}
            <div className="flex items-center gap-2 text-xs text-muted">
              <span className="w-2 h-2 rounded-full bg-gold shrink-0" aria-hidden="true" />
              <span>Category and position breakdown will be announced shortly.</span>
            </div>

            {/* Bottom Right Corner: Subtle mention of Makunai Global */}
            {hiringPartner && (
              <div className="flex items-center gap-2.5 sm:justify-end text-xs text-muted pt-2 sm:pt-0 border-t sm:border-t-0 border-line/60">
                <span className="text-[11px] text-muted whitespace-nowrap">
                  PPO &amp; Internship Partner:
                </span>
                <a
                  href={hiringPartner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-line hover:border-plum/40 shadow-xs hover:shadow-sm transition-all group"
                  title={`${hiringPartner.name} | ${hiringPartner.headline}`}
                >
                  <img
                    src={hiringPartner.logo}
                    alt={hiringPartner.name}
                    className="h-4 sm:h-4.5 w-auto object-contain"
                  />
                  <span className="text-[11px] font-semibold text-navy group-hover:text-plum transition-colors">
                    {hiringPartner.name}
                  </span>
                  <svg className="w-3 h-3 text-muted group-hover:text-plum transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;

