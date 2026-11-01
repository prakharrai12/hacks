import config from '../config/hackathonConfig';

export const About = () => {
  return (
    <section id="about" className="scroll-mt-[100px] py-20 md:py-28 bg-white border-b border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Label, Heading, Short Narrative */}
          <div className="lg:col-span-6 text-left space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-plum" aria-hidden="true" />
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-plum font-semibold">
                ABOUT THE INITIATIVE
              </p>
            </div>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold font-serif text-navy tracking-tight leading-tight">
              A National Platform for Breakthrough Builders
            </h2>
            <div className="space-y-3.5 text-sm sm:text-base text-muted max-w-xl leading-relaxed font-sans">
              <p>
                HACKS is an intensive 24-hour national offline hackathon convened by New Age Research Initiatives (NARI). Interdisciplinary teams of two to five students assemble to architect, engineer, and deploy functional solutions addressing high-impact real-world themes.
              </p>
              <p>
                From edge AI agents and robotics to cloud computing and civic technology, squads develop functional prototypes under direct guidance from industry mentors and compete for prestigious pre-placement offers (PPOs), paid internships, and cash rewards.
              </p>
            </div>
          </div>

          {/* Right Column: Plain Quick-Facts Table (Hairline rows, beautifully framed) */}
          <div className="lg:col-span-6 text-left">
            <div className="rounded-xl border border-line bg-lavender/10 p-6 sm:p-7 shadow-xs">
              <p className="text-xs font-bold uppercase tracking-wider text-navy font-sans mb-4">
                Executive Hackathon Brief
              </p>
              <div className="divide-y divide-line/70 text-xs sm:text-sm">
                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="font-semibold text-navy shrink-0">Stage 01 (Online)</span>
                  <span className="text-muted text-right">{config.event.round1Dates} (PPT Deck)</span>
                </div>
                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="font-semibold text-navy shrink-0">Grand Finale (Offline)</span>
                  <span className="text-plum font-semibold text-right">{config.event.round2Dates} (24H Sprint)</span>
                </div>
                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="font-semibold text-navy shrink-0">Host Campus</span>
                  <span className="text-muted text-right">Delhi Technical Campus, Greater Noida</span>
                </div>
                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="font-semibold text-navy shrink-0">Team Composition</span>
                  <span className="text-muted text-right">{config.registration.minTeamSize} to {config.registration.maxTeamSize} members</span>
                </div>
                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="font-semibold text-navy shrink-0">Registration Fee</span>
                  <span className="text-muted text-right">₹{config.registration.feePerMember} per member via Unstop</span>
                </div>
                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="font-semibold text-navy shrink-0">Total Prize Pool</span>
                  <span className="font-semibold text-navy text-right">{config.prizes.totalPool}</span>
                </div>
                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="font-semibold text-navy shrink-0">Hiring Partner</span>
                  <span className="text-muted text-right">Makunai Global (PPOs &amp; Internships)</span>
                </div>
                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="font-semibold text-navy shrink-0">Target Cohorts</span>
                  <span className="text-muted text-right">Undergraduate, Postgraduate &amp; Innovators</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
