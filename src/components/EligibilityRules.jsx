import config from '../config/hackathonConfig';

export const EligibilityRules = () => {
  const rulebookPdfUrl = config.registration.rulebookPdfUrl?.trim();

  return (
    <section id="rules" className="scroll-mt-[100px] py-20 md:py-28 bg-lavender/30 border-b border-line relative">
      <span id="eligibility" className="absolute -top-[100px] left-0 pointer-events-none" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-plum" aria-hidden="true" />
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-plum font-semibold">
              ELIGIBILITY &amp; GUIDELINES
            </p>
          </div>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold font-serif text-navy tracking-tight leading-tight mb-3">
            Participation &amp; Rules
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed font-sans">
            Clear guidelines for all participating squads, builders, and innovators nationwide.
          </p>
        </div>

        {/* Editorial Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Column 1: Eligible Cohorts (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <h3 className="text-lg font-bold font-serif text-navy mb-2">
                Eligible Cohorts
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4 font-sans">
                Open to students and young builders from any accredited institution nationwide.
              </p>
            </div>

            <div className="space-y-3">
              {config.eligibility.map((item, idx) => (
                <div
                  key={item}
                  className="p-4 sm:p-4.5 rounded-xl bg-white border border-line flex items-start gap-3.5 transition-colors hover:border-plum/40 shadow-2xs"
                >
                  <span className="w-6 h-6 rounded-full bg-lavender text-plum font-sans font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-navy leading-snug font-sans">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Collaboration note */}
            <div className="p-4 rounded-xl bg-lavender/60 border border-line text-xs font-sans">
              <span className="font-semibold text-navy">Inter-college collaboration: </span>
              <span className="text-muted leading-relaxed">
                Squads may include members from different colleges, disciplines, or academic years.
              </span>
            </div>
          </div>

          {/* Column 2: Key Regulations (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-line p-6 sm:p-9 rounded-2xl shadow-xs">
            <h3 className="text-lg sm:text-xl font-bold font-serif text-navy mb-5">
              Key Regulations
            </h3>

            {/* Procedural numbered rules with hairline dividers */}
            <div className="divide-y divide-line/70">
              {config.rules.map((rule, idx) => (
                <div key={rule} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                  <span className="font-serif font-bold text-sm text-plum shrink-0 mt-0.5 w-6">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                    {rule}
                  </p>
                </div>
              ))}
            </div>

            {/* Rulebook footer */}
            <div className="mt-8 pt-5 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="text-muted">Detailed technical code of conduct applies on-site at DTC.</span>
              {rulebookPdfUrl ? (
                <a
                  href={rulebookPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-plum hover:text-plum-dark underline shrink-0"
                >
                  Download Rulebook (PDF) ↗
                </a>
              ) : (
                <span className="text-muted/80 italic">Full rulebook released prior to event.</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilityRules;
