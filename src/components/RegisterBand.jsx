import config from '../config/hackathonConfig';
import RegisterButton from './RegisterButton';

export const RegisterBand = () => {
  return (
    <section className="py-20 md:py-28 bg-navy text-white text-center border-t border-navy-2/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-gold mb-3 font-semibold">
          OFFICIAL REGISTRATION OPEN
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight mb-5 text-white">
          Ready to Build the Future?
        </h2>

        {/* Segmented Facts Capsule */}
        <div className="mb-10 flex justify-center overflow-x-auto scrollbar-none py-1">
          <div className="inline-flex items-center gap-2 sm:gap-3.5 p-2 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-sky font-medium shrink-0">
            <span className="font-semibold text-white">₹{config.registration.feePerMember} / member</span>
            <span className="h-3.5 w-px bg-white/20" aria-hidden="true" />
            <span>Squads of {config.registration.minTeamSize}&ndash;{config.registration.maxTeamSize}</span>
            <span className="h-3.5 w-px bg-white/20" aria-hidden="true" />
            <span className="text-gold font-semibold">Finale: {config.event.dates}</span>
            <span className="h-3.5 w-px bg-white/20" aria-hidden="true" />
            <span>DTC Greater Noida</span>
          </div>
        </div>

        <div className="flex justify-center">
          <RegisterButton text="Register Now on Unstop" className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider" />
        </div>
      </div>
    </section>
  );
};

export default RegisterBand;
