import { useState } from 'react';
import { Plus } from 'lucide-react';
import config from '../config/hackathonConfig';

export const Themes = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleTheme = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="themes" className="scroll-mt-[100px] py-20 md:py-28 bg-lavender/40 border-b border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-plum" aria-hidden="true" />
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-plum font-semibold">
              INNOVATION TRACKS
            </p>
          </div>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold font-serif text-navy tracking-tight leading-tight mb-3">
            Five Focused Engineering Tracks
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed font-sans">
            Choose an engineering domain to build and deploy your solution during the 24-hour sprint.
          </p>
        </div>

        {/* Numbered List Layout (Architectural editorial rows) */}
        <div className="border-t border-b border-line divide-y divide-line/80">
          {config.themes.map((theme, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div key={theme.number} className="transition-colors duration-200">
                <button
                  type="button"
                  onClick={() => toggleTheme(index)}
                  aria-expanded={isExpanded}
                  className="w-full py-5 sm:py-6 px-3 sm:px-5 flex flex-col md:grid md:grid-cols-12 md:gap-6 md:items-center text-left cursor-pointer group hover:bg-white/80 transition-all duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum"
                >
                  {/* Left: 01 · Title */}
                  <div className="md:col-span-4 lg:col-span-3 shrink-0 flex items-baseline gap-2.5 mb-2 md:mb-0">
                    <span className="font-serif font-bold text-sm text-plum">
                      {theme.number}
                    </span>
                    <span className="text-plum/40 text-xs" aria-hidden="true">·</span>
                    <span className="font-serif font-bold text-base sm:text-lg text-navy group-hover:text-plum transition-colors">
                      {theme.title}
                    </span>
                  </div>

                  {/* Middle: One-line description */}
                  <div className="md:col-span-5 lg:col-span-6 text-xs sm:text-sm text-muted leading-relaxed mb-3 md:mb-0 font-sans">
                    {theme.description}
                  </div>

                  {/* Right: Plain tags with expanding action */}
                  <div className="md:col-span-3 lg:col-span-3 flex flex-wrap md:flex-nowrap items-center justify-start md:justify-end gap-2 text-xs text-muted">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {theme.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-white border border-line text-[11px] font-medium text-muted/90"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span
                      className={`ml-1.5 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-250 shrink-0 ${
                        isExpanded
                          ? 'bg-plum text-white rotate-45 shadow-[0_0_10px_rgba(138,28,124,0.35)]'
                          : 'bg-white text-plum border border-line group-hover:bg-plum/15 group-hover:border-plum group-hover:scale-105'
                      }`}
                      aria-hidden="true"
                    >
                      <Plus className="w-4 h-4 transition-transform duration-250" />
                    </span>
                  </div>
                </button>

                {/* Inline Expandable Target Focus Areas & Recommended Stacks */}
                <div
                  className={`grid transition-all duration-250 ease-out ${
                    isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-6 px-4 sm:px-6 pt-5 bg-white/95 border-t border-line/60 rounded-b-lg space-y-4">
                      {/* Problem Areas */}
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-navy mb-2.5 font-sans">
                          Challenge Prompts &amp; Target Problem Areas
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {theme.sampleAreas.map((area) => (
                            <div
                              key={area}
                              className="p-3 rounded-lg bg-lavender/30 border border-line/70 text-xs font-medium text-navy/90 flex items-start gap-2.5 shadow-2xs"
                            >
                              <span className="text-plum font-bold shrink-0">•</span>
                              <span>{area}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Recommended Tech Stacks */}
                      {theme.recommendedStacks && theme.recommendedStacks.length > 0 && (
                        <div className="pt-3 border-t border-line/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-muted font-sans mr-2">
                              Suggested Stacks:
                            </span>
                            <div className="inline-flex flex-wrap gap-1.5 mt-1 sm:mt-0">
                              {theme.recommendedStacks.map((stack) => (
                                <span
                                  key={stack}
                                  className="px-2 py-0.5 rounded bg-white border border-line text-[11px] font-mono font-medium text-navy/80"
                                >
                                  {stack}
                                </span>
                              ))}
                            </div>
                          </div>

                          <a
                            href={config.registration.unstopUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-plum hover:text-plum-dark underline shrink-0"
                          >
                            <span>Submit in this track on Unstop</span>
                            <span aria-hidden="true">↗</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Themes;
