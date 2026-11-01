import config from '../config/hackathonConfig';

export const Schedule = () => {
  return (
    <section id="schedule" className="scroll-mt-[100px] py-20 md:py-28 bg-white border-b border-line relative">
      <span id="how-it-works" className="absolute -top-[100px] left-0 pointer-events-none" aria-hidden="true" />
      <span id="timeline" className="absolute -top-[100px] left-0 pointer-events-none" aria-hidden="true" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-plum" aria-hidden="true" />
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-plum font-semibold">
              SCHEDULE &amp; TIMELINE
            </p>
          </div>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold font-serif text-navy tracking-tight leading-tight mb-3">
            How The Hackathon Works
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed font-sans">
            A structured 2-stage innovation journey from online idea submission to the in-person 24-hour Grand Finale.
          </p>
        </div>

        {/* 2-Stage Highlight Dock */}
        <div className="mb-16 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_18px_-4px_rgba(0,0,0,0.06)] overflow-hidden grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200/80 text-left">
          {/* Round 1 Block */}
          <div className="p-7 sm:p-8 flex flex-col justify-between space-y-5">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-plum">
                  STAGE 01 &bull; ONLINE
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ECFDF5] border border-emerald-200 text-[#065F46] text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" aria-hidden="true" />
                  <span>Submissions Open</span>
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-navy">
                Solution Deck &amp; PPT Evaluation
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                Submit your solution deck detailing your problem statement, system architecture, innovation, and tech stack before Nov 15 (06:36 AM IST).
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-muted font-medium">Evaluation Window:</span>
              <span className="font-bold text-navy">{config.event.round1Dates}</span>
            </div>
          </div>

          {/* Round 2 Block */}
          <div className="p-7 sm:p-8 flex flex-col justify-between space-y-5 bg-gradient-to-br from-white to-lavender/25">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-plum">
                  STAGE 02 &bull; OFFLINE GRAND FINALE
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-lavender border border-plum/30 text-plum text-xs font-semibold">
                  Top 100 Finalist Squads
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-navy">
                24-Hour Non-Stop Prototype Sprint
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                Shortlisted finalist squads assemble on-campus at Delhi Technical Campus (DTC), Greater Noida to build working prototypes.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-muted font-medium">Grand Finale Dates:</span>
              <span className="font-bold text-plum">{config.event.round2Dates}</span>
            </div>
          </div>
        </div>

        {/* Vertical Timeline with Tailored Milestone Indicators */}
        <div className="relative border-l border-line ml-4 sm:ml-5 pl-8 sm:pl-12 space-y-11 sm:space-y-14">
          {config.schedule.map((item) => (
            <div key={item.step} className="relative group">
              {/* Bespoke Milestone Badge centered on timeline hairline */}
              <div
                className="absolute -left-[45px] sm:-left-[61px] top-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-plum/60 text-plum font-sans font-bold text-xs flex items-center justify-center shadow-resting group-hover:border-plum group-hover:bg-plum group-hover:text-white transition-all duration-200"
                aria-hidden="true"
              >
                0{item.step}
              </div>

              {/* Step Content */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <h3 className="font-serif font-bold text-base sm:text-lg text-navy group-hover:text-plum transition-colors">
                    {item.title}
                  </h3>
                  {item.badge && (
                    <span className="hidden sm:inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-lavender text-plum">
                      {item.badge}
                    </span>
                  )}
                </div>
                {item.date && (
                  <span className="text-xs font-semibold text-plum bg-white border border-plum/30 px-2.5 py-0.5 rounded-md shrink-0 shadow-2xs">
                    {item.date}
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-muted mt-1.5 leading-relaxed max-w-lg font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
