import { useEffect } from 'react';
import config from '../config/hackathonConfig';
import RegisterBand from '../components/RegisterBand';

export const MentorsPage = () => {
  useEffect(() => {
    document.title = 'Mentors | HACKS 2026';
  }, []);

  const mentorList = config.mentors.list || [];
  const hasMentors = mentorList.length > 0;
  const contactEmail = config.mentors.contactEmail?.trim();

  return (
    <div className="pt-24 text-navy">
      {/* 1. Header */}
      <section className="py-16 md:py-24 bg-lavender/35 border-b border-line text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-plum mb-3 font-sans">
            INDUSTRY ADVISORS &amp; JUDGES
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-navy tracking-tight mb-4">
            Meet Your Mentors
          </h1>
          <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed font-sans">
            Direct guidance and technical architectural reviews from engineers and researchers building production technologies at leading organisations.
          </p>
        </div>
      </section>

      {/* 2. Organisations Strip (Plain text serif caps, NO company logos) */}
      <section className="py-12 bg-white border-b border-line text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-4 font-sans">
            Mentors will be invited from organisations such as
          </p>
          <div className="font-serif text-base sm:text-lg font-bold text-navy flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {config.mentors.invitedOrganisations.map((org, index) => (
              <span key={org} className="inline-flex items-center">
                <span>{org}</span>
                {index < config.mentors.invitedOrganisations.length - 1 && (
                  <span className="ml-3 text-plum" aria-hidden="true">·</span>
                )}
              </span>
            ))}
            <span className="text-plum" aria-hidden="true">·</span>
            <span className="font-sans font-normal text-sm text-muted">
              and other leading engineering and research organisations
            </span>
          </div>
          <p className="text-xs text-muted mt-4 font-sans">
            The official mentor lineup will be published ahead of the hackathon.
          </p>
        </div>
      </section>

      {/* 3. Mentor Grid */}
      <section className="py-20 md:py-28 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {!hasMentors ? (
            /* 6 Placeholder Cards in 3-column grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="p-6 rounded-lg border border-line bg-lavender/20 flex flex-col items-center text-center hover:border-sky transition-colors"
                >
                  {/* Soft lavender silhouette avatar */}
                  <div className="w-20 h-20 rounded-full bg-lavender flex items-center justify-center text-sky mb-4">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <h3 className="font-serif font-bold text-base text-navy">
                    Mentor to be announced
                  </h3>
                  <p className="text-xs text-muted mt-1">
                    Organisation to be announced
                  </p>
                  <span className="mt-4 inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white border border-line text-plum">
                    Coming soon
                  </span>
                </div>
              ))}
            </div>
          ) : (
            /* Real Cards when populated */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentorList.map((mentor) => (
                <div
                  key={mentor.name}
                  className="p-6 rounded-lg border border-line bg-white hover:border-plum transition-all text-left"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={mentor.photo || '/nari-logo.png'}
                      alt={mentor.name}
                      width="64"
                      height="64"
                      className="w-16 h-16 rounded-full object-cover bg-lavender"
                    />
                    <div>
                      <h3 className="font-serif font-bold text-base text-navy">
                        {mentor.name}
                      </h3>
                      <p className="text-xs text-muted">{mentor.role}</p>
                      <p className="text-xs font-semibold text-navy mt-0.5">{mentor.organisation}</p>
                    </div>
                  </div>
                  {mentor.expertise?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-line">
                      {mentor.expertise.slice(0, 3).map((exp) => (
                        <span key={exp} className="px-2 py-0.5 rounded-full text-[11px] bg-lavender text-navy">
                          {exp}
                        </span>
                      ))}
                    </div>
                  )}
                  {mentor.linkedin && (
                    <a
                      href={mentor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-xs font-semibold text-plum hover:underline"
                    >
                      LinkedIn ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. What Mentors Do (Editorial columns) */}
      <section className="py-16 md:py-24 bg-lavender/30 border-b border-line text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-navy mb-8">
            What Mentors Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="border-t border-line/80 pt-4 space-y-1.5">
              <p className="font-serif font-bold text-sm text-navy">Early Idea Review</p>
              <p className="text-xs text-muted leading-relaxed font-sans">
                Review your idea early to refine technical feasibility, architecture, and scope.
              </p>
            </div>
            <div className="border-t border-line/80 pt-4 space-y-1.5">
              <p className="font-serif font-bold text-sm text-navy">24-Hour Build Support</p>
              <p className="text-xs text-muted leading-relaxed font-sans">
                Check in on your build during the 24 hours to help overcome critical blockers.
              </p>
            </div>
            <div className="border-t border-line/80 pt-4 space-y-1.5">
              <p className="font-serif font-bold text-sm text-navy">Pre-Pitch Feedback</p>
              <p className="text-xs text-muted leading-relaxed font-sans">
                Give targeted feedback before the final presentation to sharpen your live demo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Become a Mentor (Shown only if contactEmail is set) */}
      {contactEmail && (
        <section className="py-8 bg-white border-b border-line text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-sm text-muted">
              Interested in mentoring student squads?{' '}
              <a
                href={`mailto:${contactEmail}?subject=Mentoring%20at%20NARI%20HACKS%202026`}
                className="font-semibold text-plum hover:text-plum-dark underline"
              >
                Become a mentor
              </a>
            </p>
          </div>
        </section>
      )}

      {/* 6. RegisterBand */}
      <RegisterBand />
    </div>
  );
};

export default MentorsPage;
