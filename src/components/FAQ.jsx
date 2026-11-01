import { useState } from 'react';
import { Plus } from 'lucide-react';
import config from '../config/hackathonConfig';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-[100px] py-20 md:py-28 bg-white border-b border-line">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-plum" aria-hidden="true" />
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-plum font-semibold">
              FREQUENTLY ASKED QUESTIONS
            </p>
          </div>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold font-serif text-navy tracking-tight leading-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed font-sans">
            Direct answers regarding registration deadlines, deck submission, eligibility, and on-campus finale logistics.
          </p>
        </div>

        {/* Accordion with Smooth CSS Grid Height/Opacity Transition */}
        <div className="space-y-3.5">
          {config.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const faqId = `faq-item-${index}`;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={faq.question}
                className={`rounded-xl border transition-all duration-200 ${
                  isOpen
                    ? 'border-plum/40 bg-lavender/25 shadow-xs'
                    : 'border-line/80 hover:border-plum/30 hover:bg-lavender/15 hover:shadow-[0_0_12px_-2px_rgba(138,28,124,0.12)]'
                }`}
              >
                <button
                  type="button"
                  id={faqId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4.5 px-4 sm:px-6 flex items-center justify-between gap-4 text-left cursor-pointer group rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum active:scale-[0.99]"
                >
                  <span
                    className={`font-serif font-bold text-base sm:text-lg transition-colors duration-200 ${
                      isOpen ? 'text-plum' : 'text-navy group-hover:text-plum'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-250 ${
                      isOpen
                        ? 'bg-plum text-white rotate-45 shadow-[0_0_10px_rgba(138,28,124,0.4)]'
                        : 'bg-lavender text-plum group-hover:bg-plum/15 group-hover:scale-105'
                    }`}
                    aria-hidden="true"
                  >
                    <Plus className="w-4 h-4 transition-transform duration-250" />
                  </span>
                </button>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={faqId}
                  className={`grid transition-all duration-250 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-5 pt-1 px-4 sm:px-6 pr-6 text-xs sm:text-sm text-muted leading-relaxed font-sans">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional contact mailto if contactEmail is set */}
        {config.brand.contactEmail && (
          <div className="mt-10 text-center text-xs text-muted font-sans">
            Have more questions?{' '}
            <a
              href={`mailto:${config.brand.contactEmail}`}
              className="font-semibold text-plum hover:text-plum-dark underline"
            >
              Contact the organizing committee
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
