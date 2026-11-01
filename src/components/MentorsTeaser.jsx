import { Link } from 'react-router-dom';

export const MentorsTeaser = () => {
  return (
    <section className="py-14 sm:py-16 bg-white border-b border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-lavender/25 border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-wider text-plum">
              <span>Industry Mentorship</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-navy">
              Learn directly from engineering leaders &amp; researchers
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
              Mentors from leading technology and research organisations guide squads during design and 24-hour execution. Official lineup announced shortly.
            </p>
          </div>
          <Link
            to="/mentors"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-plum border border-plum/40 hover:border-plum hover:bg-plum hover:text-white shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum"
          >
            <span>Meet the mentors</span>
            <span aria-hidden="true" className="transition-transform duration-250 ease-out group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MentorsTeaser;
